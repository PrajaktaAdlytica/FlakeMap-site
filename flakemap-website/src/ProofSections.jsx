import React, { useState } from "react";
import { Button, Eyebrow } from "./components";

export function DemoStats() {
  const [fault, setFault] = useState("timeout");
  const met = { normal: 8, timeout: 6, delay: 7 }[fault];
  return (
    <section id="replay-results" className="section proof-section">
      <div className="container">
        <div className="proof-heading">
          <div>
            <Eyebrow>Reliability, with the denominator</Eyebrow>
            <h2>
              A closer look.
              <br />
              <em>A clearer result.</em>
            </h2>
          </div>
          <div>
            <p>
              Compare one workflow across the same eight seeds. Change the
              condition to see exactly where the candidate diverges.
            </p>
            <div className="proof-switch" aria-label="Demo results condition">
              {[
                ["normal", "Normal"],
                ["timeout", "Timeout"],
                ["delay", "Delay"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  aria-pressed={fault === value}
                  onClick={() => setFault(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="proof-stats" aria-live="polite">
          <article>
            <span>Baseline v0.8</span>
            <strong>
              8<small>/8</small>
            </strong>
            <p>Runs meet the task criterion</p>
            <div className="stat-ticks">
              {Array.from({ length: 8 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
          </article>
          <article>
            <span>Candidate v0.9</span>
            <strong>
              {met}
              <small>/8</small>
            </strong>
            <p>Runs meet the task criterion</p>
            <div className="stat-ticks">
              {Array.from({ length: 8 }, (_, i) => (
                <i
                  key={i}
                  className={
                    (fault === "timeout" && (i === 3 || i === 7)) ||
                    (fault === "delay" && i === 7)
                      ? "failed"
                      : ""
                  }
                />
              ))}
            </div>
          </article>
          <article>
            <span>Failure signature</span>
            <strong>
              {8 - met}
              <small>/8</small>
            </strong>
            <p>Runs create a duplicate draft</p>
            <span className="stat-outcome">
              {met === 8
                ? "Exactly-one-draft criterion met"
                : "Retry + late original response"}
            </span>
          </article>
        </div>
        <div className="proof-footnote">
          <span>DEMO — SYNTHETIC DATA · Seeds 101–108 · {fault} condition</span>
          <span>Illustrative fixture results; not production performance.</span>
        </div>
      </div>
    </section>
  );
}

export function CustomerStories() {
  return (
    <section id="customer-stories" className="section customer-stories">
      <div className="container customer-story-layout">
        <div>
          <Eyebrow>Customer stories / An open invitation</Eyebrow>
          <h2>
            The next story
            <br />
            starts with
            <br />
            <em>your workflow.</em>
          </h2>
          <p>
            Bring a release question worth answering. Document the failing
            transition, compare the existing gate, and decide what the evidence
            changes.
          </p>
          <Button to="/request-demo">Build a replay study with us</Button>
          <small>
            Customer stories will appear here with participant approval.
          </small>
        </div>
        <div className="story-invitation">
          <img
            src="/brand/illustrations/evidence-archive.webp"
            width="700"
            height="450"
            alt="Glass evidence folios arranged for a shared workflow review"
            loading="lazy"
          />
          <div className="story-readout">
            <span className="eyebrow">THE SHARED READOUT</span>
            <h3>
              A story you can
              <br />
              trace back to evidence.
            </h3>
            <dl>
              <div>
                <dt>01 / Before</dt>
                <dd>The workflow and its current release gate</dd>
              </div>
              <div>
                <dt>02 / Finding</dt>
                <dd>The exact transition and task artifact</dd>
              </div>
              <div>
                <dt>03 / Decision</dt>
                <dd>An owner and an agreed next step</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
