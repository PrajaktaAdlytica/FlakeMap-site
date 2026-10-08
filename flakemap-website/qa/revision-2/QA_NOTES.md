# Revision 2 — requested visual and motion refinements

- Replaced staggered hero steps with three equal grid controls. Measured at 775px: all top positions 684px, widths 221px, heights 90px. At 390px: all top positions 665.5px, widths approximately 111.33px, heights 94px.
- Removed the requested concept/research labels from page copy, navigation, footer, metadata, diagram captions, and mock report wording. Synthetic demo labels remain. The 24-route mobile audit found no occurrences of the requested removed phrases in rendered body text.
- Added distinct visual heroes for Platform, Solutions, Pricing, Resources, and Company. Verified platform node selection, ownership selection, study-week selection, and company principle selection. The resources cover links to its article.
- Added interactive demo stats: normal candidate 8/8 and duplicates 0/8; timeout 6/8 and 2/8; delay 7/8 and 1/8. Baseline remains 8/8. Verified all three states in the browser.
- Added the customer-story invitation chosen by the user. No attributed endorsement or invented customer is included.
- Replaced one-time reveals with repeatable directional entrances and reverse-scroll re-entry. Browser inspection observed opacity/transform progression on both downward entry and upward re-entry on desktop and mobile.
- Fixed two issues discovered during the refinement: downstream reveal measurements now follow creation of the homepage pin spacing; the media condition initializes reveals on tablet/mobile as well as desktop.
- Reduced-motion toggle after scrolling reports zero hidden compositions and zero pin spacers. Callback animations are context-owned and cleaned up.
- Audited all 24 routes at 390 × 844: no page overflow, no broken loaded images, and all five requested visual heroes present. At 775 × 804 the platform has four initialized reveals, no pinning, and no overflow. Desktop review/captures use 1440 × 1000.
- Production build and the 26-HTML route/asset integrity check passed. Existing React Router bundler warnings remain; no new browser console errors were returned.

Files in this folder are genuine browser captures from the local production preview at `http://127.0.0.1:4322`. Filename suffixes identify viewport width; desktop height is 1000, mobile 390 height is 844, tablet 775 height is 804. The baseline screenshots in the parent `screenshots` folder predate this revision. Current source and `dist` contain the updated design.

Current client payload: main JavaScript approximately 107.95 KB gzip, motion 49.33 KB gzip, site CSS 13.55 KB gzip. No Lighthouse or hosted performance score is claimed.
