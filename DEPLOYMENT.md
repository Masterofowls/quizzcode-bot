# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**

### 2. Push Your Code

Once you push your code to the `main` branch, the deployment will start automatically:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Access Your Site

After the GitHub Action completes (usually 2-3 minutes), your site will be available at:

```
https://[your-username].github.io/spark-template/
```

Replace `[your-username]` with your GitHub username.

## How It Works

- The `.github/workflows/deploy.yml` workflow runs automatically on every push to `main`
- It builds the project using `npm run build`
- The built files are uploaded and deployed to GitHub Pages
- The `base` path in `vite.config.ts` is automatically configured for GitHub Pages

## Manual Deployment

You can also trigger a deployment manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add DNS records as instructed by GitHub
4. Update the `base` in `vite.config.ts` to `'/'`

## Troubleshooting

### Build Fails
- Check the **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Test the build locally with `npm run build`

### 404 on Page Load
- Make sure GitHub Pages is enabled in Settings
- Verify the `base` path matches your repository name
- Check that the workflow completed successfully

### Changes Not Showing
- Clear your browser cache
- Wait a few minutes for CDN propagation
- Check the latest workflow run completed successfully

## Important Notes

⚠️ **Security Warning**: This is a client-side only deployment. Do not include:
- API keys or tokens in the code
- Server-side logic (use separate backend services)
- Sensitive configuration data

✅ **What Works**: 
- React single-page applications
- Client-side routing
- Static assets
- GitHub user authentication (via spark.user())
- Local storage and IndexedDB

❌ **What Doesn't Work**:
- Server-side rendering
- Backend APIs
- Telegram Bot server logic
- Database connections
- Environment variables at runtime
