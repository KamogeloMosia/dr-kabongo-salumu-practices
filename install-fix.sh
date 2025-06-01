#!/bin/bash

echo "🔧 Fixing dependency conflicts..."

# Remove existing node_modules and lock file
echo "📦 Cleaning existing installations..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Clear npm cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Install with compatible versions
echo "⬇️ Installing compatible dependencies..."
npm install

# Verify installation
echo "✅ Verifying installation..."
npm list date-fns react-day-picker

echo "🎉 Dependency conflict resolved!"
echo "You can now run: npm run dev"
