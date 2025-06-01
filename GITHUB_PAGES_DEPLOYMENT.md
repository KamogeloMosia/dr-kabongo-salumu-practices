# 🚀 GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Repository name**: `dr-kabongo-salumu-practice`
   - **Description**: "Professional medical practice website for Dr. Kabongo Salumu"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

## Step 2: Download and Setup Project Files

1. **Download all project files** from v0 using the "Download Code" button
2. **Extract** the files to a local folder
3. **Open terminal/command prompt** in that folder

## Step 3: Initialize Git Repository

\`\`\`bash
# Initialize git repository
git init

# Add GitHub repository as remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/dr-kabongo-salumu-practice.git

# Set main branch
git branch -M main
\`\`\`

## Step 4: Install Dependencies and Test

\`\`\`bash
# Install dependencies with fixed versions
npm install

# Test the build process
npm run build

# Verify everything works
npm run dev
\`\`\`

Visit `http://localhost:3000` to verify the site works locally.

## Step 5: Commit and Push to GitHub

\`\`\`bash
# Add all files
git add .

# Commit with descriptive message
git commit -m "Initial commit: Dr. Kabongo Salumu medical practice website

- Professional medical practice website
- Mobile-responsive design with fluid typography
- Font customization system
- Contact forms and practice information
- Optimized for GitHub Pages deployment"

# Push to GitHub
git push -u origin main
\`\`\`

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top of repository)
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select **"GitHub Actions"**
5. The page will refresh and show GitHub Actions is selected

## Step 7: Monitor Deployment

1. Go to **"Actions"** tab in your repository
2. You'll see a workflow called **"Deploy to GitHub Pages"** running
3. Click on it to see progress
4. Wait for both "build" and "deploy" jobs to complete (usually 2-5 minutes)

## Step 8: Access Your Live Website

Once deployment completes:
- **Your website URL**: `https://yourusername.github.io/dr-kabongo-salumu-practice/`
- Replace `yourusername` with your actual GitHub username

## 🎉 Success Checklist

- [ ] Repository created on GitHub
- [ ] Files downloaded and extracted locally
- [ ] Dependencies installed successfully (`npm install`)
- [ ] Local build works (`npm run build`)
- [ ] Files committed and pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Deployment workflow completed successfully
- [ ] Website accessible at GitHub Pages URL

## 🔧 Troubleshooting

### Common Issues and Solutions

**1. Build Fails in GitHub Actions**
- Check the Actions tab for error details
- Ensure all files were committed and pushed
- Verify package.json has correct dependencies

**2. 404 Error When Accessing Site**
- Wait 5-10 minutes after deployment
- Check that repository name matches the URL path
- Verify GitHub Pages is enabled in Settings

**3. CSS/Images Not Loading**
- The `next.config.mjs` is configured for GitHub Pages
- Clear browser cache and try again
- Check browser developer tools for 404 errors

**4. Dependency Installation Fails**
- Run: `rm -rf node_modules package-lock.json`
- Then: `npm install --legacy-peer-deps`

### Checking Deployment Status

\`\`\`bash
# Check if your site is live
curl -I https://yourusername.github.io/dr-kabongo-salumu-practice/
\`\`\`

Should return `200 OK` when successful.

## 📱 Testing Your Live Site

Once deployed, test these features:
- [ ] Homepage loads correctly
- [ ] Navigation works on desktop and mobile
- [ ] About page displays doctor information
- [ ] Services page shows all medical services
- [ ] Contact page has working forms
- [ ] Font customizer works
- [ ] Mobile responsiveness
- [ ] WhatsApp contact links work

## 🔄 Making Updates

To update your website:

1. **Make changes locally**
2. **Test changes**: `npm run dev`
3. **Commit and push**:
   \`\`\`bash
   git add .
   git commit -m "Update: description of your changes"
   git push origin main
   \`\`\`
4. **GitHub Actions will automatically redeploy**

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `www.drkabongosalumu.com`):

1. **Add CNAME file**:
   \`\`\`bash
   echo "www.drkabongosalumu.com" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   \`\`\`

2. **Configure DNS** with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`

3. **Enable in GitHub Settings**:
   - Go to Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## 📊 Analytics (Optional)

To add Google Analytics:

1. **Get tracking ID** from Google Analytics
2. **Add to `app/layout.tsx`**:
   \`\`\`tsx
   // Add Google Analytics script tags
   \`\`\`

## 🔒 Security Notes

- Repository is public (required for free GitHub Pages)
- Don't commit sensitive information
- Use environment variables for any API keys
- The medical information is for display only

## 📞 Support

If you need help:
1. Check GitHub Actions logs for specific errors
2. Review this deployment guide
3. Check GitHub Pages documentation
4. Ensure all prerequisites are met

---

**Next Steps After Deployment:**
1. Share the live URL with Dr. Salumu
2. Test all functionality on the live site
3. Consider adding Google Analytics
4. Plan for regular content updates
5. Monitor site performance

Your professional medical practice website is now live! 🎉
