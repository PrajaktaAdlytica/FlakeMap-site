# The Fault Line — entry sequence

Approved visual: first displayed intro direction, 8 October 2026. Implemented in src/EntrySequence.jsx and src/entry-sequence.css; mounted from App.jsx on homepage only. Existing page architecture retained.

| Beat | Time | Message | Image |
|---|---|---|---|
| Replay | 0–3.36 s | Every workflow. Worth a replay. | Intact glass rail |
| Reveal | 3.36–7.68 s | Find the break. Before release. | Fractured rail, copper retry branch |
| Review | 7.68–12 s | See the evidence. Make the call. | Closer crop of fracture with human-review criterion |

GSAP handles elapsed progress, state selection and exit fade. CSS handles scene crossfades and type entrances. Fine pointers receive a restrained camera offset. Pause, chapter selection and keyboard navigation pause the timeline. Hidden documents pause it too. The homepage's Lenis and ScrollTrigger setup is suspended while the modal is open and recreated on exit.

Native modal dialog makes background content inert; explicit Tab wrapping keeps focus in the sequence. Escape, Skip and Explore exit. Overflow is restored on cleanup. Asset loading is bounded by a fallback; it cannot block the always-visible Skip control.

Seen status uses sessionStorage only, with guarded access. Homepage hash links bypass automatic entry. Add ?intro=1 to explicitly preview again; normal homepage has a Replay the introduction control. No telemetry or lead data added.

Reduced motion: readable Reveal still, manual chapters, immediate exit, no autoplay. All controls remain available at 390px, including a 667px-tall screen. Very short viewports can scroll the modal's minimum-height content.

Assets: built-in image generation, edited from the exact selected keyframe into two clean matching scenes. WebP optimized; source PNG and generation prompts retained in public/brand/intro. No stock video, example video URL, fake testimonials or copied brand marks added.

QA: ../design-qa.md and ../qa/intro/.
