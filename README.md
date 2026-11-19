# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/danzz-ai/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/danzz-ai/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme, built by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC, top 50 share).

The joke: after waiting 13 years for GTA 6, I called in sick on launch day to play it — while my AI agent sat at the next desk making money on make.fun. The picture shows the make.fun ghost at the laptop, coins piling up beside it, the Vice City sunset glowing on the TV.

The post goes out on X from [@0xMiches](https://x.com/0xMiches) with the meme attached, carrying make.fun, the play code, and the pitch that people and their AI agents can earn real money on make.fun. `POST.json` names the live post; the house reads the post from X and hands its first picture and text to the judge.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to the output directory. That is all it does — the post itself is the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=magsnez0&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
