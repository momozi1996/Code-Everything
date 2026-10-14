---
id: new-c65affeae594
title: "瓶中果冻海盗船、海面与猫"
model: "Claude Sonnet 5.5"
author: "Paruchh @theparuchh"
source: "https://x.com/theparuchh/status/2110063756336038090"
contentLicense: CC-BY-NC-4.0
prompt_status: thread
---

# 瓶中果冻海盗船、海面与猫

```
BOTTLED

Build one self-contained HTML file, bottled.html: a pirate ship in a bottle on a captain's desk, where the ship and the sea inside are made of jelly. Original design only: no real brands, logos, flags, characters or text from real products or films. Open it and check it runs before you finish.

THREE.JS ONLY
- All rendering goes through Three.js: import exactly three@0.180.0 from a CDN with an import map and use WebGLRenderer
- Only Three.js and its official addons (three/addons: OrbitControls, EffectComposer, bloom, depth of field, RoomEnvironment and so on). No other libraries
- No raw WebGL or WebGPU code: no getContext, no direct gl calls. Custom shaders only through Three.js materials (ShaderMaterial or onBeforeCompile)
- All physics and motion are your own plain JavaScript. No physics libraries, no external models or textures, all geometry and materials procedural

FIRST STEP, BEFORE ANYTHING ELSE
Run a shell command that creates a unique run ID and the current time, and saves both to run-log.txt next to your HTML. Print the run ID once in your reply. You will need it at the end to find your own session log.
After every major step (bottle, sea, ship, room, each toy, demo), read your session log and append the running token totals and the current time to run-log.txt. If your context gets compacted, these checkpoints keep the earlier usage.

The picture matters most. It should look like a high-end product shot of a handmade collectible.

THE BOTTLE
- A large hand-blown bottle lying on its side in a carved dark-wood cradle. Clear glass with a faint sea-green tint, slightly wavy, with tiny trapped air bubbles, a thick rounded bottom that bends the light, and a long neck closed with a worn cork
- Two soft rectangular studio highlights along the curve and a thin bright rim where the glass turns away
- Through the glass everything looks slightly magnified and bent at the edges, like a real lens

THE SEA (jelly)
- The lower third of the bottle is a sea of deep turquoise jelly, darker at the bottom, glowing where light passes through. Wave crests are caught mid-roll and tipped with white whipped-meringue foam
- Tiny suspended air bubbles and a few small jelly fish silhouettes drift inside the sea
- At one end, a small rock island with a candy-striped jelly lighthouse whose lamp turns slowly and throws a soft beam through the glass and across the desk

THE SHIP (jelly pirates)
- A stout three-masted pirate galleon. Hull of glossy ruby-red jelly with gold-caramel trim, a high carved stern with a row of tiny round windows glowing warm, and a curled jelly octopus as the figurehead
- Sails are thin translucent sugar sheets in saffron yellow, glowing when the light is behind them. The main sail carries the crew's own emblem: a grinning cat skull over two crossed fishbones. The same emblem flies on a small flag at the top of the main mast
- Rigging of thin dark licorice lines, rope ladders, a crow's nest, six little licorice cannons along each side, a treasure chest on deck spilling gold sugar coins
- Three tiny jelly pirates: a round captain in a wide hat at the wheel, a lookout in the crow's nest with a spyglass who turns his head now and then, and a deckhand with a mop
- The masts are hinged at the base, like on a real ship in a bottle, and thin rigging threads run forward to the neck

THE ROOM
- A captain's desk at dusk, calm and clean: dark polished wood, a soft contact shadow under the cradle, a brass compass and a rolled-up blank chart out of focus at the edges
- Warm key light from a window on the left fading to deep evening blue, cool fill from the right, a rim light that outlines the bottle. A few warm bokeh lights far behind
- The bottle is centered and fills about 80% of the frame width. It must read well in a 16:9 crop and a square crop. The background stays soft so the bottle pops

TOYS (small pill buttons at the bottom, minimal UI, keys 1 to 4, R to reset)
1. Build. How does a ship get in there? The ship slides out backward through the neck with its masts folded flat. Then it runs forward: long tweezers push the folded ship through the neck, it settles on the sea, a hand pulls the threads at the neck, the masts swing up one by one and the sails unfold. The threads are snipped and the cork goes back in
2. Storm. A giant soft grey cat paw bats the bottle from the side. The bottle rocks in its cradle, the jelly sea sloshes in slow heavy wobbling waves, the ship pitches and rolls, the pirates hold on, and a small cotton-candy cloud near the top flickers with tiny lightning. Then it all calms down. You can also rock it by hand: drag on the bottle. Drag elsewhere to orbit
3. Step Aboard. The camera flies in through the neck past the cork and lands on the deck at the height of a tiny pirate. Sails tower overhead, the lighthouse beam sweeps across the deck, the glass curves above like a sky. Outside, huge and blurry through the glass, a giant cat eye comes close and blinks. Pressing Storm from here: the paw bats the bottle and the whole world tilts. Drag to look around, WASD to walk the deck. The button becomes Step Out
4. Fire! (outside only). The giant cat comes back and the pirates fire a broadside at it. Jelly cannonballs smack into the glass, a crack spreads from the impact, and the glass shatters into curved shards. The cat paw jerks away. The whole jelly sea flops out onto the desk in one wobbling slab with the ship still riding on top, and a few jelly blobs fly at the camera, stick to the lens and slowly slide down. The slab slides to the edge of the desk and stops just in time. The captain raises his hat to the camera

PHYSICS (real but light)
- Jelly sea: a height-field wave equation, heavier and slower than water, plus a slosh mode that follows the bottle's tilt. Settles in a few seconds
- Ship: floats on the height field. Pitch and roll come from buoyancy at several hull points, with a righting force so it always comes back upright
- Bottle: rocks in its cradle like a damped pendulum when hit
- Masts: hinges whose angle follows the thread tension during Build
- Fire!: cannonballs fly on real ballistic arcs and bounce, the glass cracks from the impact point and then shatters into simple rigid shards, the jelly slab is a soft body that squashes on impact and jiggles to rest
- 60 fps on a normal laptop

IDLE AND DEMO
- On load: dusk, calm sea, the lighthouse beam turning, a slow auto-orbit around the bottle. This alone should work as a clean 20-second beauty shot
- Press D for a fixed demo with a fixed random seed, so every run is identical. Buttons light up as they are pressed so the viewer sees what happens:
  0s slow orbit
  5s Build: out through the neck, then back in, the masts rise
  16s Storm: the paw bats the bottle
  24s Step Aboard: land on the deck, look up at the sails
  29s the giant cat eye blinks outside the glass
  33s Storm from the deck: the world tilts
  38s Step Out
  42s Fire!: broadside at the cat, the glass shatters
  46s to 54s slow push-in: the slab stops at the desk edge, the captain raises his hat

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

Also in your final reply, a short report: what is real physics, what is faked, key numbers (wave grid size, objects, settle time, file size, Three.js version and renderer).
```
