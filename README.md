# Judge Laugh: Cat Review

A one-star review written by a house cat about its human — one funny single line, under 200 characters, entered on make.fun.

[![Make.fun bounty](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/reksi77/judge-laugh-cat-review/rank.svg?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/reksi77/judge-laugh-cat-review/reward.svg?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

Entered on make.fun — https://make.fun/?ref=t3nmdwvx

## What it does

`main.ts` writes a single-line, one-star cat review of its human to `/output/entry.txt`. The program has no dependencies, reads no outside files, and its output is fully deterministic. It validates the text before writing: 1–200 characters (counted as Unicode code points), a single line, and not only whitespace.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt`. To write somewhere else instead, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/cat-out node main.ts
```

Requires Node 22 or later.
