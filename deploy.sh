#!/bin/bash

# Exit on error
set -e

# Build the site with custom domain settings
echo "Building the site with custom domain settings..."
CUSTOM_DOMAIN=true npm run build

# Add necessary files for GitHub Pages
echo "Adding necessary files for GitHub Pages..."
touch dist/.nojekyll
echo "trikonantara.com" > dist/CNAME

# Check if built files exist
if [ ! -f dist/index.html ]; then
  echo "Error: dist/index.html not found. Build failed."
  exit 1
fi

# Display the contents of the dist directory
echo "Contents of dist directory:"
ls -la dist/
ls -la dist/assets/ 2>/dev/null || echo "No assets directory found"

# Remove large image files to prevent GitHub push errors
echo "Removing large image files to prevent GitHub push errors..."
mkdir -p ../temp_backup
if [ -d "dist/lovable-uploads" ]; then
  cp -r dist/lovable-uploads ../temp_backup/
  rm -rf dist/lovable-uploads/*
  # Keep only a README explaining where the images went
  echo "Large image files have been removed from this repository to prevent GitHub Pages deployment issues. Please refer to the main repository for image files." > dist/lovable-uploads/README.md
fi

# Exclude the og-image.png if it's large
if [ -f "dist/og-image.png" ] && [ $(stat -f%z "dist/og-image.png") -gt 1000000 ]; then
  cp dist/og-image.png ../temp_backup/
  rm dist/og-image.png
fi

# Create a temporary git repo in the dist folder
echo "Creating temporary git repo in dist folder..."
cd dist
git init
git add -A
git config --local user.email "deploy@example.com"
git config --local user.name "GitHub Pages Deploy"
git commit -m "Deploy to GitHub Pages (excluding large images)"

# Force push to the gh-pages branch
echo "Pushing to gh-pages branch..."
git push -f https://github.com/Hazenbox/Tk.git HEAD:gh-pages

# Clean up
echo "Cleaning up..."
rm -rf .git

echo "Deployment complete! Your site should be available at https://trikonantara.com"
echo "If your site is still not showing correctly, please check the GitHub Pages settings and DNS configuration." 