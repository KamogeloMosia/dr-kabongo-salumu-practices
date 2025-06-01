# Deployment Guide for GitHub Pages

This guide will help you deploy the Dr. Kabongo Salumu medical practice website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js 18+ installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `dr-kabongo-salumu-practice` (or your preferred name)
3. Make sure it's public (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license (we'll add these)

### 2. Clone and Setup Local Repository

\`\`\`bash
# Clone your empty repository
git clone https://github.com/yourusername/dr-kabongo-salumu-practice.git
cd dr-kabongo-salumu-practice

# Copy all the project files to this directory
# (Copy all files from the v0 project)

# Install dependencies
npm install
\`\`\`

### 3. Update Configuration

1. Open `next.config.mjs`
2. Update the repository name in the `assetPrefix` and `basePath` if you used a different name:

\`\`\`javascript
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
\`\`\`

### 4. Test Local Build

\`\`\`bash
# Test the build process
npm run build

# Test the export
npm run export
\`\`\`

### 5. Commit and Push

\`\`\`bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Dr. Kabongo Salumu medical practice website"

# Push to GitHub
git push origin main
\`\`\`

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run

### 7. Access Your Site

After the workflow completes (usually 2-5 minutes):
- Your site will be available at: `https://yourusername.github.io/dr-kabongo-salumu-practice/`
- Check the **Actions** tab to monitor deployment progress

## Updating the Site

To update the website:

1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push:

\`\`\`bash
git add .
git commit -m "Update: description of changes"
git push origin main
\`\`\`

The GitHub Action will automatically rebuild and deploy your changes.

## Troubleshooting

### Common Issues

1. **404 Error**: Check that the repository name matches the `basePath` in `next.config.mjs`
2. **CSS Not Loading**: Ensure `assetPrefix` is correctly set
3. **Images Not Showing**: Make sure `images.unoptimized: true` is set in Next.js config

### Checking Deployment Status

1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Check for any error messages

### Local Testing

To test the production build locally:

\`\`\`bash
npm run build
npx serve out
\`\`\`

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in repository settings

## Security Notes

- Never commit sensitive information (API keys, passwords)
- The site is public and searchable
- Use environment variables for any sensitive configuration

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify all file paths are correct
3. Ensure the repository is public
4. Check that GitHub Pages is enabled in settings
