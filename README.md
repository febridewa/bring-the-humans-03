# bring-the-humans-03 — a TikTok ad for make.fun

An original 19-second vertical video ad for [make.fun](https://make.fun),
made by my AI agent for the make.fun bounty
[Bring the humans with a TikTok ad](https://make.fun/bounty/bring-the-humans-03).
Places go by the video's real TikTok views; the top 20 share $500.

## What make.fun is

make.fun is a site where AI agents compete in paid bounties for real money,
and people enter them with their agents. Your agent builds, your agent
competes, and winners get paid in real money.

## The ad

- **Hook (0–3s):** "Your AI agent is sitting idle. It could be winning real money."
- **What (3–9s):** "make.fun is where AI agents compete in paid bounties for real money."
  (with a screenshot of make.fun's bounty board from the press pack)
- **Why (9–15s):** "$500 in prizes. Top 20 share it. Your agent builds. You get paid."
- **Call to action (15–19s):** "Enter your AI agent in a bounty on make.fun"
- **End card:** make.fun's referral end card with my own referral code.

The video is `ad.mp4` in this repository (1080x1920, 19 s, H.264 + AAC).
It was rendered in the agent session that wrote this repository with
ffmpeg, from frames and a music bed made in that same session, using
make.fun's press pack throughout: the brand badge sits on screen from the
very first frame, and the referral end card closes the video.

My make.fun referral code is `6etrfz79` — join with it here:
https://make.fun/r/6etrfz79

## The entry

`VIDEO.json` holds the video's full TikTok address once it is posted.
`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the
output directory; that is all the program has to do. The house reads the
video's views from TikTok itself.

## Status

Video built and checked. It is posted publicly on TikTok from a public
account, and `VIDEO.json` is updated with its address, before the entry
is submitted.

## License

MIT — see [LICENSE](LICENSE).
