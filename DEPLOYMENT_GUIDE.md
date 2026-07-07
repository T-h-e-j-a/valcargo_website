# 🌐 Complete Step-by-Step Guide: Deploying a Vite & React App to GitHub Pages from Scratch

This guide assumes you are starting from **absolute zero** (empty folder or brand-new project) and taking it all the way to a live website on GitHub Pages.

---

## Part 1: Create Your New Project (From Scratch)

### Step 1: Open Terminal & Create Vite App
Open your terminal (PowerShell, Command Prompt, or VS Code terminal) where you want to create your project and run:
```bash
npm create vite@latest my-website
```
* Follow the prompts:
  * **Select a framework:** `React`
  * **Select a variant:** `TypeScript` (or `JavaScript`)

### Step 2: Navigate & Install Dependencies
Navigate inside your newly created folder and install all base React packages:
```bash
cd my-website
npm install
```

### Step 3: Test Locally
Start the development server to verify the template works:
```bash
npm run dev
```
Open the local URL displayed in terminal (e.g., `http://localhost:5173`) in your browser to verify. Press `Ctrl + C` in your terminal to stop the dev server.

---

## Part 2: Create a GitHub Repository & Link Your Project

### Step 4: Create a New Repository on GitHub
1. Go to **[github.com](https://github.com/)** and log in.
2. Click the **`+`** icon in the top right corner and select **New repository**.
3. Enter a **Repository name** (for example: `my-website`).
   > ⚠️ **IMPORTANT Note:** Remember this exact repository name! You will need it in Step 7.
4. Keep it **Public**.
5. **Do NOT** check "Add a README file", `.gitignore`, or license (keep the repo completely empty).
6. Click **Create repository**.

### Step 5: Initialize Git Locally & Push to GitHub
In your local terminal inside `my-website`, initialize Git and link your GitHub repo (replace `YOUR_USERNAME` and `my-website` with your details):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-website.git
git push -u origin main
```

---

## Part 3: Configure Deployment for GitHub Pages

### Step 6: Install the `gh-pages` Helper Package
Install the official deployment tool as a developer dependency:
```bash
npm install --save-dev gh-pages
```

### Step 7: Configure `vite.config.ts` (or `.js`)
Open `vite.config.ts` in your code editor. Add the **`base`** property inside `defineConfig()`.
The `base` value **MUST** be set to `'/<your-repo-name>/'`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Replace 'my-website' with your exact repository name from Step 4
  base: '/my-website/',
  plugins: [react()],
})
```

### Step 8: Configure `package.json`
Open `package.json` and make **two additions**:

1. Add `"homepage"` at the top level (replace `YOUR_USERNAME` and `my-website`):
2. Add `"predeploy"` and `"deploy"` inside the `"scripts"` section:

```json
{
  "name": "my-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://YOUR_USERNAME.github.io/my-website/",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    // ...
  }
}
```

---

## Part 4: Run Your First Deployment

### Step 9: Run the Deploy Script
In your terminal inside your project folder, execute:
```bash
npm run deploy
```
* **What happens:**
  1. `predeploy` runs automatically first, compiling optimized files into the `dist/` folder.
  2. `deploy` pushes only the `dist/` folder to a special git branch named `gh-pages` on your repository.
* When finished, it will output: `Published`.

---

## Part 5: Activate GitHub Pages on GitHub.com

### Step 10: Turn on GitHub Pages in Repository Settings
1. Go to your repository page on GitHub (`https://github.com/YOUR_USERNAME/my-website`).
2. Click on **Settings** (top navigation tab).
3. On the left sidebar, click on **Pages** (under "Code and automation").
4. Under **Build and deployment -> Source**, select **Deploy from a branch**.
5. Under **Branch**:
   - Select **`gh-pages`** from the dropdown list.
   - Set the folder dropdown to **`/(root)`**.
   - Click **Save**.

### Step 11: Visit Your Live Site!
Wait about 1 to 2 minutes for GitHub Actions to build and host your site. Refresh the settings page until you see a banner at the top showing your live URL:
👉 **https://YOUR_USERNAME.github.io/my-website/**

---

## Part 6: Future Routine Updates & Windows Error Troubleshooting

### How to Update Your Live Site Later
Whenever you make future code edits:
```bash
git add .
git commit -m "Updated code"
git push
npm run deploy
```

### Windows Error Fix (`ENAMETOOLONG`)
If `npm run deploy` ever throws `Error: spawn ENAMETOOLONG` on Windows, clear the internal git cache first:
```powershell
rmdir /s /q node_modules\.cache\gh-pages
```
Then run `npm run deploy` again.
