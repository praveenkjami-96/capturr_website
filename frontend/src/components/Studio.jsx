import React from "react";

function Studio() {
  const tools = ["Trim", "Split", "Audio", "Text", "Effects"];
  const tags = ["Templates", "Captions", "BGM", "Export"];

  return (
    <section id="studio" className="section section-soft">
      <div className="container studio-layout">
        <div className="studio-copy">
          <span className="eyebrow">Capturr Studio</span>
          <h2>A creator workflow built for reels, shorts, and premium edits</h2>
          <p>
            Capturr Studio gives creators a sleek editing system for short-form
            content. Trim clips, add captions, layer music, apply templates, and
            export faster without jumping between multiple tools.
          </p>

          <div className="studio-tags">
            {tags.map((tag) => (
              <span className="studio-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="studio-shell glass-panel">
          <div className="studio-topbar">
            <div className="studio-top-left">
              <span className="studio-dot red" />
              <span className="studio-dot amber" />
              <span className="studio-dot green" />
            </div>
            <div className="studio-title">Capturr Studio</div>
          </div>

          <div className="studio-workspace">
            <div className="studio-preview glass-card">
              <div className="preview-video">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Studio preview"
                  className="studio-preview-real-image"
                />
                <div className="preview-overlay">
                  <span className="preview-chip">Reel edit</span>
                  <span className="preview-chip muted">00:21</span>
                </div>
                <div className="preview-play">▶</div>
              </div>

              <div className="tool-row">
                {tools.map((tool) => (
                  <button className="tool-button" key={tool} type="button">
                    {tool}
                  </button>
                ))}
              </div>
            </div>

            <div className="studio-side glass-card">
              <h3>Quick actions</h3>
              <div className="quick-actions">
                <span className="quick-pill">Auto captions</span>
                <span className="quick-pill">Viral template</span>
                <span className="quick-pill">Beat sync</span>
                <span className="quick-pill">Color polish</span>
                <span className="quick-pill">Reel export</span>
                <span className="quick-pill">Shorts crop</span>
              </div>

              <div className="studio-side-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Creative editing workflow"
                  className="studio-side-image"
                />
              </div>
            </div>
          </div>

          <div className="timeline glass-card">
            <div className="timeline-header">
              <span>Timeline</span>
              <span>1080 × 1920 • 30 FPS</span>
            </div>

            <div className="timeline-ruler">
              <span>00:00</span>
              <span>00:05</span>
              <span>00:10</span>
              <span>00:15</span>
              <span>00:20</span>
            </div>

            <div className="timeline-tracks">
              <div className="track">
                <span className="track-label">Video</span>
                <div className="track-bar bar-video">
                  <div className="track-segment segment-a" />
                  <div className="track-segment segment-b" />
                  <div className="playhead" />
                </div>
              </div>

              <div className="track">
                <span className="track-label">Audio</span>
                <div className="track-bar bar-audio">
                  <div className="wave wave-1" />
                  <div className="wave wave-2" />
                  <div className="wave wave-3" />
                </div>
              </div>

              <div className="track">
                <span className="track-label">Text</span>
                <div className="track-bar bar-text">
                  <div className="text-block" />
                  <div className="text-block short" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Studio;