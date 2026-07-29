# LevelUp-Kit — a reusable gamification engine (XP, levels, tiers, streaks)

A small React + Tailwind demo built to practice a **gamification feature** —
XP points, level progression, profile tiers (Silver / Gold / Platinum /
Diamond), and a daily streak — before adding the same feature to a larger
open-source contribution project.

The math game (addition, subtraction, multiplication, division across 4
levels) is not the point of this repo. It exists only to *trigger* the
gamification logic — the real focus is the XP/level/tier/streak system
itself, which is written to be reusable in any project.

## Features

- **XP system** — earn points for correct answers
- **Level progression** — XP automatically converts into a level
- **Tier badges** — levels are grouped into Silver, Gold, Platinum, and
  Diamond tiers
- **Daily streak** — tracks consecutive days played, using `localStorage`
  (no login/auth required)
- **4 math levels** — addition, subtraction, multiplication, division

## Tech stack

- React (functional components + `useState`/`useEffect`)
- Tailwind CSS
- `localStorage` for persistence (no backend)

## How the gamification logic works

### XP → Level → Tier

```
xp = 250
level = floor(xp / 100) + 1        → 3
tier = based on level ranges       → Silver (levels 1-5)
```

Levels 1–5 = Silver, 6–10 = Gold, 11–15 = Platinum, 16+ = Diamond. Tier is
never stored — it's always *derived* from the current level.

### Streak (no authentication needed)

Since there's no login, the streak is tracked per-browser using
`localStorage`. On every app load, today's date is compared against the
last played date (both stored as plain `YYYY-MM-DD` strings, not
timestamps):

| Last played | Result |
|---|---|
| Today | Streak stays the same |
| Yesterday | Streak +1 |
| Anything older / first visit | Streak resets to 1 |

**Limitation:** because this uses `localStorage`, the streak is tied to
the browser/device, not to a user account. Switching devices or clearing
browser data resets it. A production version would need a backend + login
to persist streaks across devices.

### State flow (props down, callbacks up)

`App.jsx` is the single source of truth for `xp`, `level`, `streak`. It
passes that data down to display-only components (`ProfileBadge`,
`XPBar`, `StreakCounter`) as props. `MathGame` never touches this state
directly — it only calls an `onCorrectAnswer()` callback that `App.jsx`
gave it as a prop. This keeps game logic and gamification logic fully
separate.

## Project structure

```
src/
└── App.jsx     — utils (xp/level/tier/streak math), all components,
                   and the main App that holds state
```

Currently everything lives in one file (`App.jsx`) for simplicity while
practicing. In a larger project, split it into:

```
src/
├── App.jsx
├── components/
│   ├── MathGame.jsx
│   ├── ProfileBadge.jsx
│   ├── XPBar.jsx
│   └── StreakCounter.jsx
├── utils/
│   ├── xpUtils.js
│   └── streakUtils.js
```

## Setup

```bash
npm install
npm run dev
```

(Requires a React + Tailwind project scaffold, e.g. via Vite.)
