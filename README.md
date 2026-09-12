# GeoQuiz

GeoQuiz is a self-contained geography game built for solo play and same-challenge play across two devices. Players receive progressively more revealing clues, guess the location, and see the answer on an offline world map.

## What changed

- Deterministic challenge codes: the same code always produces the same route and rules.
- Create and Join flows for playing the same challenge on separate devices.
- Region, location category, difficulty, round count, timer, answer style, and attempt settings.
- Free-text answers with aliases, accent handling, and conservative typo tolerance.
- Deterministic four-option multiple choice.
- A finite round loop, scoring, answer reveal, map marker, and shareable result summary.
- 80 unique locations after deduplicating and expanding the original bank.
- Responsive layouts and reduced-motion support.
- No accounts, backend, API calls, libraries, fonts, images, or map-tile requests.

## Run it

Download `index.html` and open it in a modern browser. All HTML, CSS, JavaScript, location data, and map geometry are embedded in that one file.

To play together, one player creates a challenge and sends the generated `GQ2-…` code to the other player. Both players start independently and compare their result summaries at the end.

## Challenge compatibility

Challenge codes are versioned. A code contains the deterministic seed and compact indexes for the selected rules. It does not contain clues or answers. Both devices therefore need the same GeoQuiz version and location bank.

## Map data

The embedded 1:110m land geometry is derived from [Natural Earth](https://www.naturalearthdata.com/), whose map data is in the public domain. Answer markers use the stored latitude and longitude through an equirectangular projection.
