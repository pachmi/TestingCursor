# 🌿 Branch Workflow Practice Guide

Quick reference for working with `dev` and `main` branches.

## Quick Start - Practice Right Now!

### 1. Check Your Current Status
```bash
# See what branch you're on
git branch

# See if you have any uncommitted changes
git status
```

### 2. Create and Switch to `dev` Branch
```bash
# Create a new branch called 'dev' and switch to it
git checkout -b dev
```

**What happened?** You just created a copy of your code on a new branch called `dev`. Now you can make changes without affecting `main`!

### 3. Make a Small Change
Try editing a file (like `index.html`) - add a comment or change some text. Then:

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "Practice: Made changes on dev branch"
```

### 4. Push to `dev` Branch
```bash
# Push to dev (not main!)
git push -u origin dev
```

**Important**: Notice we're pushing to `dev`, not `main`. This keeps your main branch safe!

### 5. Switch Back to `main` to See the Difference
```bash
# Go back to main branch
git checkout main

# Notice: Your changes aren't here! They're safe on dev.
```

### 6. Switch Back to `dev` to Continue Working
```bash
# Go back to dev to continue working
git checkout dev
```

## Common Commands Cheat Sheet

```bash
# Create new branch
git checkout -b dev

# Switch branches
git checkout dev          # Switch to dev
git checkout main         # Switch to main

# See all branches
git branch

# See which branch you're on (look for the *)
git branch

# Push to dev branch
git push origin dev

# Push to main branch
git push origin main

# Merge dev into main (when ready)
git checkout main
git merge dev
git push origin main
```

## Visual Workflow

```
main branch (protected) ────────────────┐
                                        │
dev branch (where you work) ────────────┼───→ Make changes
                                        │     Commit changes
                                        │     Push to dev
                                        │
                                        │     Test everything
                                        │
                                        │     When ready:
                                        └───→ Merge dev → main
```

## Why This Matters

- ✅ **`main` stays stable** - Your live/production code doesn't break
- ✅ **Safe experimentation** - Try new things on `dev` without worry
- ✅ **Team collaboration** - Multiple people can work on `dev` simultaneously
- ✅ **Easy rollback** - If something breaks on `dev`, `main` is still safe

## Practice Exercise

1. Create `dev` branch
2. Add a new section to `index.html` (maybe a "Practice" section)
3. Commit and push to `dev`
4. Switch to `main` - notice your changes aren't there
5. Switch back to `dev` - your changes are back!
6. When you're happy, merge `dev` into `main`

This is exactly what professional developers do every day! 🚀
