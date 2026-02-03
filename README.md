# Learn Cursor - Educational Website

A beginner-friendly website about Cursor, the AI-powered code editor. This project helps you learn about Cursor while practicing web development and Git/GitHub workflows.

## 🌟 Features

- **Modern Design**: Beautiful dark theme with smooth animations
- **Educational Content**: Learn about Cursor's features and capabilities
- **Interactive Demo**: Try out AI suggestions in a simulated code editor
- **Responsive**: Works great on desktop, tablet, and mobile devices
- **Beginner-Friendly**: Clear explanations and step-by-step guides

## 📁 Project Structure

```
Test Site/
├── index.html      # Main HTML file
├── styles.css      # All styling and design
├── script.js       # Interactive features and animations
└── README.md       # This file!
```

## 🚀 Getting Started

### View Locally

1. **Open in Browser**: Simply double-click `index.html` to open it in your default browser

2. **Or Use a Local Server** (recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` in your browser

### Edit the Website

Open the project in Cursor (or any code editor) and start editing:
- `index.html` - Change content, add sections, modify structure
- `styles.css` - Customize colors, fonts, layouts
- `script.js` - Add new interactive features

## 📤 Pushing to GitHub

Follow these steps to push your website to GitHub:

### Step 1: Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and sign up (it's free!)

### Step 2: Create a New Repository on GitHub
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name it (e.g., "learn-cursor-website")
4. Choose Public or Private
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Initialize Git in Your Project
Open Terminal (Mac) or Command Prompt (Windows) in your project folder:

```bash
# Navigate to your project folder
cd "/Users/alyssabustos/Documents/Test Site"

# Initialize Git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Cursor learning website"
```

### Step 4: Connect to GitHub and Push
Copy the repository URL from GitHub (it looks like: `https://github.com/yourusername/learn-cursor-website.git`)

```bash
# Add GitHub as remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

You'll be asked to authenticate - follow the prompts!

## 🌿 Working with Branches (Professional Workflow)

**Why use branches?** Your boss is right! Using a `dev` branch protects your `main` branch from breaking. Here's how to practice this workflow:

### Understanding Branches
- **`main` branch**: Your production/live code (keep it safe!)
- **`dev` branch**: Where you develop and test new features
- **Workflow**: Make changes on `dev` → Test → Merge to `main` when ready

### Step 1: Create a `dev` Branch
```bash
# Create and switch to a new branch called 'dev'
git checkout -b dev

# Or if you're already on main, create dev from main:
git branch dev
git checkout dev
```

### Step 2: Make Changes and Commit on `dev`
```bash
# Make your changes to files (edit, add, delete)
# Then stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature: [describe what you did]"
```

### Step 3: Push to `dev` Branch
```bash
# Push your dev branch to GitHub
git push -u origin dev
```

**Note**: This pushes to `dev`, NOT `main` - so your main branch stays safe!

### Step 4: Switch Between Branches
```bash
# See all your branches
git branch

# Switch to dev branch
git checkout dev

# Switch back to main branch
git checkout main

# See which branch you're currently on (it will have an asterisk *)
```

### Step 5: Merge `dev` into `main` (When Ready)
Once you've tested your changes on `dev` and everything works:

```bash
# Switch to main branch
git checkout main

# Merge dev into main
git merge dev

# Push the updated main branch
git push origin main
```

### Daily Workflow Example
```bash
# 1. Start your day - switch to dev
git checkout dev

# 2. Make changes, test them
# ... edit files ...

# 3. Commit your work
git add .
git commit -m "Add new section to homepage"

# 4. Push to dev (safe, won't break main!)
git push origin dev

# 5. When ready, merge to main
git checkout main
git merge dev
git push origin main
```

### Pro Tips
- **Always work on `dev`** for new features
- **Only merge to `main`** when code is tested and ready
- **Use descriptive commit messages**: "Fix button styling" is better than "changes"
- **Pull before you push**: `git pull origin dev` to get latest changes

### Step 5: Enable GitHub Pages (Optional)
To make your website live on the internet:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be live at: `https://yourusername.github.io/repo-name/`

## 🎓 Learning Resources

### Git Basics
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Learning Lab](https://lab.github.com/)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/) - Great reference for HTML, CSS, and JavaScript
- [freeCodeCamp](https://www.freecodecamp.org/) - Free coding tutorials

### Cursor
- [Cursor Official Website](https://cursor.sh)
- [Cursor Documentation](https://docs.cursor.com)

## 💡 Tips for Beginners

1. **Start Small**: Make small changes and see what happens
2. **Use Cursor's AI**: Ask Cursor to explain code you don't understand
3. **Experiment**: Try changing colors, text, or adding new sections
4. **Commit Often**: Make small commits as you work - it's like saving your progress
5. **Read Error Messages**: They usually tell you what's wrong!

## 🛠️ Customization Ideas

Want to make this website your own? Try:

- Change the color scheme in `styles.css` (look for `:root` variables)
- Add your own sections to `index.html`
- Create new interactive features in `script.js`
- Add images or icons
- Create a blog section
- Add a contact form

## 📝 Notes

- This website uses plain HTML, CSS, and JavaScript - no build tools required!
- All fonts are loaded from Google Fonts
- The design is fully responsive and works on all devices
- Feel free to modify and experiment!

## 🤝 Contributing

This is a learning project! Feel free to:
- Fork it
- Make changes
- Learn from it
- Share it with others

## 📄 License

This project is open source and available for learning purposes.

---

**Happy Coding! 🚀**

Made with ❤️ to help beginners learn Cursor and web development.
