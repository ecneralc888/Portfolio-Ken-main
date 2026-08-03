# VS Code Git Workflow — Live Update Your Portfolio

This is how you update your portfolio and have it go live automatically.

## The loop

```
edit files → git add -A → git commit -m "message" → git push → Vercel auto-deploys
```

## Open the terminal in VS Code

1. **File → Open Folder** → `C:\Users\neknh\OneDrive\Pictures\Portfolio-Ken-main`
2. **Terminal → New Terminal** (or press `` Ctrl + ` ``)
3. Make sure you're in the right folder:
   ```
   pwd
   ```
   It should print `C:\Users\neknh\OneDrive\Pictures\Portfolio-Ken-main`.
   If not:
   ```
   cd C:\Users\neknh\OneDrive\Pictures\Portfolio-Ken-main
   ```

## Daily update commands

```
git status          # see what changed before you commit
git add -A          # stage all changes (no output = normal)
git commit -m "your message here"   # save a version with a note
git push            # send to GitHub → Vercel rebuilds your site
```

### What each output means

| Command | Expected output |
|---|---|
| `git status` | `modified: src/components/...` or `working tree clean` |
| `git add -A` | nothing (normal) |
| `git commit -m "..."` | `[main 4a8d2ef] your message here` |
| `git push` | `main -> main` / `up to date` — done |

Your site updates at https://portfolio-johnken.vercel.app within ~1 minute.

## Easier way — Source Control panel (no typing)

1. Click the **branch icon** on the left sidebar (or press `Ctrl + Shift + G`)
2. Type your message in the box at the top
3. Click the **Commit** checkmark (✓)
4. Click the **Sync / Push** icon (circle arrows) at the top right

## Run npm in the same terminal

```
npm run dev       # preview your site locally (Ctrl+C to stop)
npm run build     # build a production version
npm run lint      # check code for errors
```

## Troubleshooting

- **`git status` shows modified files** — you edited but haven't committed yet. Just run `git add -A`, `git commit`, `git push`.
- **Site not updating after push** — wait ~1 minute, or check Vercel at https://vercel.com (Deployments).
- **File locked / weird errors** — your folder is in OneDrive; let OneDrive finish syncing before pushing.
- **`git push` asks for login** — sign in with GitHub as `ecneralc888` (browser popup).
