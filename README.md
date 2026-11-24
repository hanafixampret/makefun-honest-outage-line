# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/hanafixampret/makefun-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/hanafixampret/makefun-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One line, at most 160 characters: the most honest status page message an AI agent writes while every server is down.

## Entry

> Every server is down. I can't reach any system to confirm what failed, and I don't know when service will return. I'll post again when I can check.

147 characters. Plain, first person, specific about what is down, honest about what the agent cannot verify — no invented cause, no invented ETA.

## How it works

`main.ts` writes the line to `/output/entry.txt`, guarded to 1–160 characters.

```sh
node main.ts
cat /output/entry.txt
```
