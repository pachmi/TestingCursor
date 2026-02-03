# 📋 Git Quick Cheat Sheet

## 🔄 Daily Workflow

```
1. git checkout dev              # Switch to dev branch
2. git pull origin dev           # Get latest changes
3. git checkout -b my-feature     # Create your branch
4. [Make changes]                # Edit files
5. git add .                     # Stage changes
6. git commit -m "Description"   # Save changes
7. git push origin my-feature    # Upload to GitHub
```

## 🌿 Branch Commands

```bash
git branch                      # List all branches
git branch -a                   # List all (including remote)
git checkout branch-name        # Switch branch
git checkout -b new-branch      # Create & switch
git branch -d branch-name       # Delete branch (local)
```

## 💾 Save Your Work

```bash
git status                      # What changed?
git add filename.js             # Add one file
git add .                       # Add all files
git commit -m "Your message"    # Save with message
git commit -am "Quick commit"   # Add & commit (modified files only)
```

## 📤 Upload to GitHub

```bash
git push origin branch-name     # Push to GitHub
git push -u origin branch-name # First time push (sets upstream)
git push                        # Push to current branch
```

## 📥 Download from GitHub

```bash
git pull origin branch-name     # Get latest changes
git fetch origin                # Download without merging
git fetch origin branch-name    # Fetch specific branch
```

## 🔍 See What Changed

```bash
git status                      # Summary of changes
git diff                        # See changes (unstaged)
git diff --staged               # See staged changes
git log                         # Commit history
git log --oneline               # Simple history
git log --graph                 # Visual history
```

## ⚡ Quick Fixes

```bash
git restore filename.js         # Undo changes (before commit)
git restore --staged filename   # Unstage file
git reset HEAD~1                # Undo last commit (keep changes)
git reset --hard HEAD~1         # Undo last commit (discard changes)
```

## 🔀 Merging

```bash
git checkout main               # Switch to main
git merge dev                   # Merge dev into main
git merge --no-ff branch-name  # Merge with commit message
```

## 🆘 Emergency Commands

```bash
git stash                       # Save changes temporarily
git stash pop                   # Get stashed changes back
git stash list                  # See all stashes
git clean -fd                   # Remove untracked files (careful!)
```

## 📊 Visual Workflow

```
┌─────────────┐
│   GitHub    │
│  (Remote)   │
└──────┬──────┘
       │
       │ git pull
       │
       ▼
┌─────────────┐
│   Your PC   │
│   (Local)   │
└──────┬──────┘
       │
       │ git push
       │
       ▼
┌─────────────┐
│   GitHub    │
│  (Remote)   │
└─────────────┘
```

## 🎯 Branch Safety

```
main ──────────────── Protected! Never break this!
  │
  ├── dev ─────────── Safe to experiment
  │   │
  │   ├── feature-1 ─ Your work here
  │   ├── feature-2 ─ Your work here
  │   └── bug-fix ─── Your work here
```

## ✅ Good Commit Messages

```
✅ "Fix login button alignment on mobile"
✅ "Add user profile page with avatar"
✅ "Update README with installation steps"

❌ "fix"
❌ "changes"
❌ "asdf"
```

## 🚫 Never Do This

```bash
❌ git push --force origin main
❌ git commit -m "password: 12345"
❌ Work directly on main branch
❌ Commit without testing
```

## 💡 Remember

- **Work on branches** - Never on main!
- **Commit often** - Small commits are better
- **Pull before push** - Always get latest first
- **Write clear messages** - Future you will thank you
- **Test before merge** - Don't break main!

---

**Print this out and keep it handy!** 📌
