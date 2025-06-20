# GitHub Pages Deployment Guide

## Overview
This guide explains how to deploy the Dr. Kabongo Salumu medical practice website to GitHub Pages.

## Prerequisites
- GitHub account
- Repository with the website code
- Node.js 18+ installed locally (for testing)

## Configuration

### 1. Repository Setup
1. Create a new repository on GitHub named `dr-kabongo-salumu-practices`
2. Clone the repository locally
3. Push your code to the `main` branch

### 2. GitHub Pages Settings
1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. This will use the workflow file in `.github/workflows/deploy.yml`

## Build Commands

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build:static
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
1. Builds the Next.js application
2. Exports static files
3. Deploys to GitHub Pages

### Triggering Deployment
- **Automatic**: Every push to the `main` branch
- **Manual**: Go to **Actions** tab and run the workflow manually

## File Structure After Build

```
out/
├── .nojekyll
├── index.html
├── about/
├── services/
├── contact/
├── blog/
├── faq/
├── _next/
├── images/
└── sitemap.xml
```

## Configuration Files

### Next.js Config (`next.config.mjs`)
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages
- `basePath` - Sets the base path for GitHub Pages
- `assetPrefix` - Sets asset prefix for GitHub Pages

### Package.json Scripts
- `build:static` - Builds the application for static hosting
- `deploy` - Builds and creates .nojekyll file

## URL Structure

### Development
- Local: `http://localhost:3000`
- Production: `https://www.drsalumu.xyz`

### GitHub Pages
- URL: `https://yourusername.github.io/dr-kabongo-salumu-practices`
- Replace `yourusername` with your actual GitHub username

## SEO Configuration

### Sitemap
- **Development**: `https://www.drsalumu.xyz/sitemap.xml`
- **GitHub Pages**: `https://yourusername.github.io/dr-kabongo-salumu-practices/sitemap.xml`

### Robots.txt
- **Development**: `https://www.drsalumu.xyz/robots.txt`
- **GitHub Pages**: `https://yourusername.github.io/dr-kabongo-salumu-practices/robots.txt`

## Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - Solution: GitHub Pages handles this automatically with the Next.js configuration

2. **Assets Not Loading**
   - Check that `basePath` and `assetPrefix` are set correctly
   - Ensure images are in the `public` folder

3. **Build Failures**
   - Check GitHub Actions logs
   - Ensure all dependencies are installed
   - Verify Node.js version (18+)

4. **SEO Issues**
   - Update URLs in sitemap and robots.txt
   - Check structured data URLs
   - Verify meta tags

### Debugging Steps

1. **Check Build Output**
   ```bash
   npm run build:static
   ls out/
   ```

2. **Test Locally**
   ```bash
   npx serve out/
   ```

3. **Check GitHub Actions**
   - Go to **Actions** tab
   - Check workflow logs for errors

## Custom Domain Setup

### Option 1: Custom Domain
1. Add a `CNAME` file to the `public` folder:
   ```
   www.drsalumu.xyz
   ```
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

### Option 2: GitHub Pages Subdomain
- Use the default GitHub Pages URL
- Update all configuration files accordingly

## Performance Optimization

### Build Optimization
- Images are unoptimized for static export
- Consider using Next.js Image optimization for production
- Enable compression on your hosting provider

### Caching
- Static files are cached by GitHub Pages
- Update cache headers if needed
- Use versioned assets for cache busting

## Security

### Security Headers
- Configured in `next.config.mjs`
- Includes XSS protection, content type options
- Frame options and referrer policy

### HTTPS
- GitHub Pages provides HTTPS automatically
- No additional configuration needed

## Monitoring

### Analytics
- Set up Google Analytics
- Monitor Core Web Vitals
- Track page performance

### SEO Monitoring
- Google Search Console
- Bing Webmaster Tools
- Monitor search rankings

## Maintenance

### Regular Tasks
1. Update dependencies monthly
2. Check for security vulnerabilities
3. Monitor build performance
4. Update content regularly

### Content Updates
- Push changes to `main` branch
- GitHub Actions will automatically deploy
- Monitor deployment status

## Support

For deployment issues:
1. Check GitHub Actions logs
2. Review this documentation
3. Check Next.js static export documentation
4. Contact repository maintainer

## Resources

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Static Site Deployment](https://nextjs.org/docs/app/building-your-application/deploying) 