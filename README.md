# Dr. Kabongo Salumu Medical Practice Website

A professional medical practice website for Dr. Kabongo Salumu, featuring comprehensive healthcare services information, practice details, and contact information.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with perfect alignment and typography
- **Professional Layout**: Clean, medical-focused design with black and white theme
- **Font Customization**: Built-in font customizer with multiple Google Fonts options
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic markup

## 🏥 Pages

- **Home**: Hero section with practice overview and key information
- **About**: Detailed information about Dr. Salumu's background and philosophy
- **Services**: Comprehensive list of medical services offered
- **Contact**: Contact forms, office hours, and location information

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/dr-kabongo-salumu-practice.git
cd dr-kabongo-salumu-practice
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### API Configuration

The website includes an AI chat feature powered by Google's Gemini API. To enable this feature:

1. **Get a Gemini API Key**:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the API key

2. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```bash
   # Gemini API Configuration
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Restart the Development Server**:
   ```bash
   npm run dev
   ```

**Note**: The `.env.local` file is already included in `.gitignore` to keep your API key secure. Never commit API keys to version control.

### Building for Production

\`\`\`bash
npm run build
\`\`\`

### Static Export for GitHub Pages

\`\`\`bash
npm run export
\`\`\`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom fluid typography
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Roboto, Poppins, and more)
- **Deployment**: GitHub Pages with GitHub Actions

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Fluid typography that scales with screen size
- Left-aligned content on mobile for better readability
- Touch-friendly navigation and buttons
- Optimized images and performance

## 🎨 Customization

### Font Customization
The website includes a built-in font customizer accessible via the floating button. Users can:
- Choose from 17 different Google Fonts
- Separate heading and body font selection
- Real-time preview of changes
- Automatic saving of preferences

### Color Scheme
The website uses a professional black and white color scheme with:
- Black primary color (#000000)
- White background (#FFFFFF)
- Gray accents for secondary content
- High contrast for accessibility

## 📞 Contact Information

**Dr. Kabongo Salumu**
- **Primary Location**: 20 Pine Avenue, Kempton Park, 1619, Gauteng, South Africa
- **Phone**: 011 970 1590
- **Emergency**: +27 11 922 1172
- **Alternative Location**: 14 Central Avenue, Kempton Park Central

## 🏥 Services Offered

- Acute Care Management
- Chronic Disease Management
- Preventive Care and Screenings
- Minor Surgical Procedures
- Family Medicine
- Emergency Care (Casualty Unit)
- Women's Health Services
- Men's Health Services
- Pediatric Care
- Sports Medicine
- Travel Medicine

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support, email info@drkabongosalumu.co.za or contact Dr. Salumu's office directly.

## 🔄 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions. Every push to the main branch triggers a new deployment.

**Live Site**: [https://yourusername.github.io/dr-kabongo-salumu-practice/](https://yourusername.github.io/dr-kabongo-salumu-practice/)

---

© 2024 Dr. Kabongo Salumu General Practice. All rights reserved.
\`\`\`

\`\`\`gitignore file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
Thumbs.db
