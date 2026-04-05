import os
from datetime import datetime

from flask import Flask, jsonify, request
from flask_cors import CORS
from psycopg2 import connect
from psycopg2.extras import RealDictCursor


app = Flask(__name__)
CORS(app)


DATABASE_URL = os.getenv("DATABASE_URL")


def get_db_connection():
    if not DATABASE_URL:
        raise ValueError("DATABASE_URL is not set")
    return connect(DATABASE_URL, cursor_factory=RealDictCursor)


def validate_required_fields(payload, required_fields):
    missing_fields = [field for field in required_fields if not payload.get(field)]
    return missing_fields


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


@app.route("/customers", methods=["POST"])
def create_customer_booking():
    payload = request.get_json(silent=True) or {}

    required_fields = [
        "full_name",
        "email",
        "phone",
        "event_type",
        "location",
        "event_date",
    ]
    missing_fields = validate_required_fields(payload, required_fields)

    if missing_fields:
        return (
            jsonify(
                {
                    "message": "Missing required fields",
                    "missing_fields": missing_fields,
                }
            ),
            400,
        )

    try:
        datetime.strptime(payload["event_date"], "%Y-%m-%d")
    except ValueError:
        return jsonify({"message": "event_date must be in YYYY-MM-DD format"}), 400

    insert_query = """
        INSERT INTO customer_bookings
        (
            full_name,
            email,
            phone,
            event_type,
            location,
            event_date,
            notes
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        RETURNING id, full_name, email, event_type, location, event_date, created_at
    """

    values = (
        payload.get("full_name"),
        payload.get("email"),
        payload.get("phone"),
        payload.get("event_type"),
        payload.get("location"),
        payload.get("event_date"),
        payload.get("notes"),
    )

    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(insert_query, values)
        created_record = cursor.fetchone()
        connection.commit()

        return (
            jsonify(
                {
                    "message": "Customer booking created successfully",
                    "data": created_record,
                }
            ),
            201,
        )
    except Exception as error:
        if connection:
            connection.rollback()
        return jsonify({"message": "Failed to create customer booking", "error": str(error)}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()


@app.route("/creators", methods=["POST"])
def create_creator_application():
    payload = request.get_json(silent=True) or {}

    required_fields = [
        "full_name",
        "email",
        "phone",
        "city",
        "specialty",
        "experience_years",
    ]
    missing_fields = validate_required_fields(payload, required_fields)

    if missing_fields:
        return (
            jsonify(
                {
                    "message": "Missing required fields",
                    "missing_fields": missing_fields,
                }
            ),
            400,
        )

    try:
        experience_years = int(payload["experience_years"])
    except (ValueError, TypeError):
        return jsonify({"message": "experience_years must be a valid integer"}), 400

    insert_query = """
        INSERT INTO creator_applications
        (
            full_name,
            email,
            phone,
            city,
            specialty,
            instagram_url,
            portfolio_url,
            experience_years,
            equipment
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING id, full_name, email, city, specialty, experience_years, created_at
    """

    values = (
        payload.get("full_name"),
        payload.get("email"),
        payload.get("phone"),
        payload.get("city"),
        payload.get("specialty"),
        payload.get("instagram_url"),
        payload.get("portfolio_url"),
        experience_years,
        payload.get("equipment"),
    )

    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(insert_query, values)
        created_record = cursor.fetchone()
        connection.commit()

        return (
            jsonify(
                {
                    "message": "Creator application created successfully",
                    "data": created_record,
                }
            ),
            201,
        )
    except Exception as error:
        if connection:
            connection.rollback()
        return jsonify({"message": "Failed to create creator application", "error": str(error)}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()


@app.route("/customers", methods=["GET"])
def get_customer_bookings():
    query = """
        SELECT
            id,
            full_name,
            email,
            phone,
            event_type,
            location,
            event_date,
            notes,
            created_at
        FROM customer_bookings
        ORDER BY created_at DESC
    """

    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(query)
        records = cursor.fetchall()
        return jsonify({"data": records}), 200
    except Exception as error:
        return jsonify({"message": "Failed to fetch customer bookings", "error": str(error)}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()


@app.route("/creators", methods=["GET"])
def get_creator_applications():
    query = """
        SELECT
            id,
            full_name,
            email,
            phone,
            city,
            specialty,
            instagram_url,
            portfolio_url,
            experience_years,
            equipment,
            created_at
        FROM creator_applications
        ORDER BY created_at DESC
    """

    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(query)
        records = cursor.fetchall()
        return jsonify({"data": records}), 200
    except Exception as error:
        return jsonify({"message": "Failed to fetch creator applications", "error": str(error)}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8011, debug=True)