---
id: new-660d2fdb371a
title: "雪景球里的果冻村庄"
model: "Claude Haiku 5.5"
author: "Paruchh @theparuchh"
source: "https://x.com/theparuchh/status/2110007656656314644"
contentLicense: CC-BY-NC-4.0
prompt_status: thread
---

# 雪景球里的果冻村庄

```
SHAKE WELL

Build one self-contained HTML file, shake-well.html: a glass snow globe on a table with a tiny winter village inside, made of jelly. Original design only: no real brands, logos, characters or text from real products. Open it and check it runs before you finish.

THREE.JS ONLY
- All rendering goes through Three.js: import exactly three@0.180.0 from a CDN with an import map and use WebGLRenderer
- Only Three.js and its official addons (three/addons: OrbitControls, EffectComposer, bloom, depth of field, RoomEnvironment and so on). No other libraries
- No raw WebGL or WebGPU code: no getContext, no direct gl calls. Custom shaders only through Three.js materials (ShaderMaterial or onBeforeCompile)
- All physics and motion are your own plain JavaScript. No physics libraries, no external models or textures, all geometry and materials procedural

FIRST STEP, BEFORE ANYTHING ELSE
Run a shell command that creates a unique run ID and the current time, and saves both to run-log.txt next to your HTML. Print the run ID once in your reply. You will need it at the end to find your own session log.
After every major step (globe, village, room, each toy, demo), read your session log and append the running token totals and the current time to run-log.txt. If your context gets compacted, these checkpoints keep the earlier usage.

The picture matters most. It should look like a high-end product shot of a handmade collectible.

THE GLOBE
- A large glass sphere on a turned dark-walnut base with a thin brushed-brass ring. The glass is perfectly clear and thick at the edges, with two soft rectangular studio highlights and a thin bright rim where it curves away
- The globe is filled with clear liquid. The village looks slightly magnified through it, like a real lens, and bends at the edges
- A small air bubble is trapped at the very top and always slides to the highest point when the globe tilts
- About 6000 white flakes float inside, plus a few hundred tiny gold glitter specks that flash when they turn to the light

THE VILLAGE (all jelly)
- A small snowy hill fills the bottom of the globe. Every building, tree and figure is glossy translucent jelly, like gummy candy: raspberry, tangerine, lemon, mint, blueberry, grape. Light passes through and glows softly inside them, with sharp wet highlights and a few tiny frozen air bubbles in each piece
- 8 to 10 small houses with steep roofs, round windows and chimneys around a little square. In the center: a clock tower with a bell and a round clock face
- A frozen pond of pale blue jelly ice with three tiny skaters gliding in slow loops. A creek with an arched bridge. A snowman. A ring of dark-green jelly pines with white snow tips
- A tiny jelly train (engine plus three cars, round headlight) runs on a loop track around the village, forever
- Snow on roofs and ground is soft matte white, like powdered sugar, contrasting with the glossy jelly

THE ROOM
- Calm and clean, studio-like. A warm wooden tabletop, a soft contact shadow under the base, a dark dusty-blue backdrop with a few out-of-focus warm bokeh lights far behind
- Warm key light from the upper left, cool fill from the right, a rim light that outlines the glass
- The globe is centered and fills about 70% of the frame height. It must read well in a square crop and in a portrait 9:16 crop. The background stays soft so the globe pops

TOYS (small pill buttons at the bottom, minimal UI, keys 1 to 5)
1. Shake. The globe jolts and tilts, the snow explodes into a swirling blizzard, the jelly houses wobble a beat late (tall ones more), then everything settles. You can also shake it by hand: drag on the globe, a harder drag gives a stronger shake. Drag elsewhere to orbit
2. Night. The room fades to deep blue. Windows, path lanterns, the clock face and the train headlight turn on and glow warm through the jelly. The globe becomes a lantern and throws a soft warm pool of light onto the table under it
3. Step Inside. The camera dives into the globe, passes through the glass with a short refraction ripple and lands in the village square at the height of a tiny villager. Snow falls around you, jelly houses tower overhead, the train rolls past. Look up: the curved glass dome and, beyond it, the giant warped room. Drag to look around, WASD to walk around the square. Pressing Shake from inside: a giant soft grey cat paw taps the glass from outside, blurry and enormous, and the whole world lurches. The button becomes Step Out
4. Drop (outside only). The globe lifts off its base a hand's height and falls onto the table. The glass shatters into curved shards, the liquid bursts out in a splash toward the camera, and a few drops land on the lens and slowly run down the screen. The jelly houses bounce out, wobble and stay intact. Snow spills across the table. The tiny train keeps chugging in circles on the table. The bell rings once
5. Reset

PHYSICS (real but light)
- Snow: each flake sinks at its own slow terminal speed and is carried by the liquid. The liquid lags behind the glass when the globe moves, so a shake creates a swirl that decays over time. Flakes that land rest on roofs and ground and get lifted again by the next shake. Full settle in about 15 to 20 seconds
- Jelly: every object is a damped spring (lean plus squash and stretch) driven by the globe's acceleration. Taller and softer means bigger wobble. Settles in about 2 seconds
- Drop: real gravity for the fall, simple rigid shards, liquid as particles, jelly squashes and bounces on impact
- 60 fps on a normal laptop

IDLE AND DEMO
- On load: daytime, snow settled, a slow auto-orbit around the globe. This alone should work as a clean 20-second beauty shot
- Press D for a fixed demo with a fixed random seed, so every run is identical. Buttons light up as they are pressed so the viewer sees what happens:
  0s slow orbit
  5s Shake
  12s Night
  18s Step Inside, look around the square, the train passes
  26s look up at the dome and the giant room
  29s the cat paw taps the glass
  36s Step Out
  40s Drop
  44s to 52s slow push-in on the wreck, drops running down the lens

LAST STEP: REAL TIME AND API COST
Do this as the very last step, right before your final reply. Use real numbers from your own session log, do not estimate.

1. Find your session log on disk: the file that contains your run ID
- Claude (Claude Code, Cowork): a .jsonl file under ~/.claude/projects/. Sub-agent logs, if any, may sit in a subfolder with the same name; include them
- Codex: rollout .jsonl files under ~/.codex/sessions/
2. Time: from the first to the last timestamp in the log. If the log has no timestamps, use run-log.txt start time to now
3. Tokens
- Claude logs: every API response has message.usage with input_tokens, cache_creation_input_tokens (split into 5-minute and 1-hour in cache_creation when present), cache_read_input_tokens and output_tokens. The same response is repeated on several lines, one per content block, so count each message id only once
- Codex logs: take the last cumulative token_count totals. Cached input is usually included inside input, and reasoning tokens are billed as output: do not count anything twice
4. Price every request with the table below. For a model not in the table, use your vendor's official pricing page and give the URL

PRICES, USD per million tokens (Claude API, http://platform.claude.com/docs/en/about-claude/pricing, checked 12 Oct 2026)
model | input | cache write 5m | cache write 1h | cache read | output
Opus 5.5 | 4 | 5 | 8 | 0.20 | 20
Sonnet 5.5 | 2 | 2.50 | 4 | 0.10 | 10
Haiku 5.5, prompt up to 100k | 0.10 | 0.125 | 0.20 | 0.01 | 0.50
Haiku 5.5, prompt over 100k | 0.50 | 0.625 | 1 | 0.05 | 2.50
- Haiku's tier is decided per request: prompt size = input + cache write + cache read tokens of that request
- If usage shows speed "fast" (Opus only): $8 input, $40 output. If inference_geo is "us": multiply everything by 1.1

5. If the log was compacted and earlier usage is missing, take it from the checkpoints in run-log.txt and add it to what remains in the log, without counting anything twice
6. Save cost-report.txt next to the HTML and paste it in your final reply:
MODEL: exact model name from the log
TIME: Xh Ym (start and end timestamps)
API REQUESTS: number of unique responses
TOKENS: input / cache write 5m / cache write 1h / cache read / output
COST: dollars per category and TOTAL
SOURCE: path to the log file, plus run-log.txt if checkpoints were used
If you could not find the log, mark every number ESTIMATE and explain how you got it. Note that this final reply itself is not in the log yet.

Also in your final reply, a short report: what is real physics, what is faked, key numbers (flakes, objects, settle time, file size, Three.js version and renderer).
```
