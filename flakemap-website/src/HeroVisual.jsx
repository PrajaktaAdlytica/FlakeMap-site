import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./components";

const stages = [
  [
    "Approved fixture",
    "trace",
    "Start with the source and its sharing boundary.",
  ],
  ["Seeded replay", "seed", "Keep the version, condition, and seed together."],
  [
    "Fault condition",
    "fault",
    "Inspect the transition after a tool interruption.",
  ],
  ["Task criterion", "gate", "Compare the artifact with the expected result."],
  ["Human review", "review", "Carry the evidence into the release decision."],
];
export default function HeroVisual({ type }) {
  const [active, setActive] = useState(0);
  if (type === "platform")
    return (
      <div className="hero-visual platform-map">
        <div className="visual-heading">
          <span>THE EVIDENCE CHAIN</span>
          <span>01 → 05</span>
        </div>
        <div className="map-route">
          {stages.map(([name, icon], i) => (
            <button
              key={name}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              className="map-node"
            >
              <span className="map-index">0{i + 1}</span>
              <Icon name={icon} />
              <b>{name}</b>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div className="visual-caption" aria-live="polite">
          <span className="status-dot" />
          {stages[active][2]}
        </div>
      </div>
    );
  if (type === "solutions") {
    const roles = [
      [
        "Engineering",
        "Own the criterion",
        "Exactly one draft per order.",
        "01",
      ],
      [
        "Evaluation / QA",
        "Inspect the evidence",
        "Same seed. Same fault. Compare both artifacts.",
        "02",
      ],
      [
        "Leadership",
        "Own the decision",
        "Set the study budget and the next release decision.",
        "03",
      ],
    ];
    return (
      <div className="hero-visual ownership-map">
        <div className="visual-heading">
          <span>ONE WORKFLOW. SHARED CONTEXT.</span>
          <span>PO-204</span>
        </div>
        <div className="ownership-orbit">
          <div className="ownership-ring" />
          <div className="ownership-center">
            <Icon name="branch" size={28} />
            <strong>
              Release
              <br />
              decision
            </strong>
          </div>
          {roles.map(([name, , , num], i) => (
            <button
              className={`owner-node owner-${i}`}
              key={name}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
            >
              <span>{num}</span>
              <b>{name}</b>
            </button>
          ))}
        </div>
        <div className="owner-readout" aria-live="polite">
          <span>{roles[active][1]}</span>
          <p>{roles[active][2]}</p>
        </div>
      </div>
    );
  }
  if (type === "pricing") {
    const weeks = [
      [
        "Scope",
        "One workflow. One task criterion.",
        "Agree on the fixture, owner, and success condition.",
      ],
      [
        "Replay",
        "Hold the conditions steady.",
        "Compare the baseline and candidate on the same seeds.",
      ],
      [
        "Review",
        "Follow each failed transition.",
        "Link the artifact pair to a human-reviewed criterion.",
      ],
      [
        "Readout",
        "Make the next decision explicit.",
        "Compare findings with the existing release gate.",
      ],
    ];
    return (
      <div className="hero-visual study-blueprint">
        <div className="visual-heading">
          <span>THE FOUR-WEEK STUDY</span>
          <span>PROPOSED SCOPE</span>
        </div>
        <div className="study-plan">
          <span className="plan-number">0{active + 1}</span>
          <div>
            <span className="eyebrow">
              WEEK {active + 1} / {weeks[active][0]}
            </span>
            <h3>{weeks[active][1]}</h3>
            <p>{weeks[active][2]}</p>
          </div>
        </div>
        <div className="week-selector" aria-label="Study week">
          {weeks.map(([name], i) => (
            <button
              key={name}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              {name}
            </button>
          ))}
        </div>
        <div className="visual-caption">
          One shared readout. A concrete next step.
        </div>
      </div>
    );
  }
  if (type === "resources")
    return (
      <div className="hero-visual editorial-hero">
        <div className="visual-heading">
          <span>FROM THE FIELD GUIDE</span>
          <span>NOTE 01</span>
        </div>
        <Link
          to="/resources/the-artifact-is-the-test"
          className="featured-note"
        >
          <img
            src="/brand/illustrations/seed-lattice.webp"
            alt="Original glass test lanes representing repeated workflow paths"
            width="700"
            height="450"
          />
          <div>
            <span className="eyebrow">Evaluation / 4 min read</span>
            <h3>
              The artifact
              <br />
              is the test.
            </h3>
            <span className="note-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        </Link>
        <div className="visual-caption">
          <Icon name="evidence" />
          Practical notes for the next release review.
        </div>
      </div>
    );
  const principles = [
    ["Artifact", "Make the outcome visible."],
    ["Condition", "Show what changed."],
    ["Reviewer", "Keep the decision accountable."],
  ];
  return (
    <div className="hero-visual company-evidence">
      <div className="visual-heading">
        <span>THE FLAKEMAP APPROACH</span>
        <span>EVIDENCE FIRST</span>
      </div>
      <div className="evidence-scene">
        <img
          src="/brand/illustrations/evidence-archive.webp"
          alt="Translucent evidence folios linked by a continuous glass route"
          width="700"
          height="450"
        />
        <div className="principle-note" aria-live="polite">
          <span>
            0{active + 1} / {principles[active][0]}
          </span>
          <h3>{principles[active][1]}</h3>
        </div>
      </div>
      <div className="principle-selector" aria-label="Evidence principles">
        {principles.map(([name], i) => (
          <button
            key={name}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {name}
            <span>↗</span>
          </button>
        ))}
      </div>
    </div>
  );
}
