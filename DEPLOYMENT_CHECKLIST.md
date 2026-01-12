# 🚀 GitHub Pages Deployment Checklist

Your CodeQuizz app is **ready to deploy**! All configuration files have been created. Follow these steps to deploy your app to GitHub Pages.

## ✅ What's Already Configured

- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Vite build configuration for GitHub Pages (`vite.config.ts`)
- ✅ Custom 404 error page (`404.html`)
- ✅ Build scripts in `package.json`
- ✅ Deployment documentation (`DEPLOYMENT.md`)

## 📋 Deployment Steps

### Step 1: Push Your Code to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - CodeQuizz app ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top navigation)
3. Click on **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 3: Update the Base Path (Important!)

Before deploying, update the `base` path in `vite.config.ts` to match your repository name:

```typescript
// If your repo is named "codequizz"
base: process.env.GITHUB_PAGES ? '/codequizz/' : '/',

// If your repo is named "spark-template" (current)
base: process.env.GITHUB_PAGES ? '/spark-template/' : '/',
```

### Step 4: Trigger Deployment

The deployment will start automatically when you push to the `main` branch:

```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push origin main
```

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Wait for it to complete (usually 2-3 minutes)
4. The workflow will show a green checkmark when done

### Step 6: Access Your Site

Your site will be available at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example:
- If username is `johnsmith` and repo is `codequizz`:
  - URL: `https://johnsmith.github.io/codequizz/`

## 🔧 Troubleshooting

### Build Fails in GitHub Actions

**Check these common issues:**

1. **Missing dependencies**: Make sure all packages are in `package.json`
2. **TypeScript errors**: Run `npm run build` locally to catch errors
3. **Node version**: The workflow uses Node 20 (check compatibility)

**How to debug:**
- Go to **Actions** tab
- Click on the failed workflow run
- Expand the "Build" step to see error logs

### 404 Error When Accessing the Site

**Possible causes:**

1. **Wrong base path**: Make sure `base` in `vite.config.ts` matches your repo name
2. **GitHub Pages not enabled**: Double-check Settings → Pages
3. **Workflow not completed**: Check Actions tab for completion status
4. **Cache issues**: Wait 5-10 minutes for CDN propagation

**Fix:**
```bash
# Update vite.config.ts with correct base path
# Then commit and push
git add vite.config.ts
git commit -m "Fix base path"
git push origin main
```

### Changes Not Showing Up

1. **Clear browser cache**: Hard refresh with `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Wait for CDN**: Can take 5-10 minutes for changes to propagate
3. **Check workflow**: Verify the latest workflow run completed successfully

### Custom 404 Page Not Working

The 404 page (`404.html`) should work automatically on GitHub Pages. If it doesn't:

1. Make sure the file exists in the root directory (not in `dist/`)
2. The build process should copy it automatically
3. Try accessing a non-existent page to test: `https://your-site.github.io/non-existent`

## 🎯 Post-Deployment Testing

After deployment, test these features:

- [ ] Home page loads correctly
- [ ] GitHub sign-in works
- [ ] Can start and complete quizzes
- [ ] Progress is saved and persists
- [ ] Difficulty filters work
- [ ] Topic sorting works
- [ ] 404 page shows for invalid URLs
- [ ] Mobile responsive design works
- [ ] All animations and transitions work

## 🔒 Important Security Notes

⚠️ **Do NOT commit sensitive data:**
- API keys
- Secrets or tokens
- Private configuration
- Database credentials

The Spark runtime handles authentication securely through GitHub's infrastructure.

## 📱 Sharing Your App

Once deployed, you can share your app with:

1. **Direct link**: Share the GitHub Pages URL
2. **QR code**: Generate a QR code pointing to your URL
3. **Social media**: Share on Twitter, LinkedIn, etc.
4. **README badge**: Add a deployment status badge to your README

Example badge:
```markdown
![Deploy Status](https://github.com/YOUR-USERNAME/YOUR-REPO/actions/workflows/deploy.yml/badge.svg)
```

## 🔄 Updating Your Deployed App

To deploy updates:

1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
4. The deployment happens automatically
5. Wait 2-3 minutes for changes to go live

## 🌐 Custom Domain (Optional)

Want to use your own domain instead of `github.io`?

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Go to Settings → Pages on GitHub
3. Enter your domain under "Custom domain"
4. Configure DNS records as instructed
5. Update `vite.config.ts`:
   ```typescript
   base: '/' // Change from '/repo-name/' to '/'
   ```

## 📞 Need Help?

- **GitHub Pages docs**: https://docs.github.com/pages
- **Vite deployment guide**: https://vite.dev/guide/static-deploy.html
- **GitHub Actions docs**: https://docs.github.com/actions

## 🎉 You're Ready!

Your CodeQuizz app is fully configured for deployment. Just follow the steps above and your app will be live on GitHub Pages!

Good luck! 🚀
