#!/bin/bash

echo "🏥 Dr. Kabongo Salumu Medical Practice - GitHub Pages Deployment"
echo "================================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script in the project directory."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git branch -M main
fi

# Check if remote is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please set your GitHub repository URL:"
    echo "git remote add origin https://github.com/yourusername/dr-kabongo-salumu-practice.git"
    echo ""
    echo "Replace 'yourusername' with your actual GitHub username"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed. Trying with legacy peer deps..."
    npm install --legacy-peer-deps
fi

echo "🔨 Testing build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check for errors above."
    exit 1
fi

echo "✅ Build successful!"

echo "📤 Committing and pushing to GitHub..."
git add .
git commit -m "Deploy: Dr. Kabongo Salumu medical practice website

- Professional medical practice website
- Mobile-responsive design
- Font customization system
- Contact forms and practice information
- Ready for GitHub Pages"

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Your website has been pushed to GitHub!"
    echo ""
    echo "Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Click Settings → Pages"
    echo "3. Select 'GitHub Actions' as source"
    echo "4. Wait for deployment (2-5 minutes)"
    echo "5. Visit: https://yourusername.github.io/dr-kabongo-salumu-practice/"
    echo ""
    echo "🔗 Monitor deployment: https://github.com/yourusername/dr-kabongo-salumu-practice/actions"
else
    echo "❌ Push failed. Please check your GitHub repository URL and permissions."
fi
