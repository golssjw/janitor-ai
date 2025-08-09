# SenatorBNB Website - Full Project

This is the complete SenatorBNB website project with neon rain effect and robot BNB Binance Smart Chain theme.

## Features
- ✨ Neon rain background animation
- 🤖 Robot BNB Binance Smart Chain theme
- 🎨 Advanced animations and visual effects
- 📱 Responsive design for all devices
- 🔗 Working social media links (@SenatorBNB Twitter & @SenatorBNB_Announcements Telegram)
- ⚡ Built with React, Vite, Tailwind CSS, and Framer Motion

## Project Structure
```
janitor-ai-website/
├── src/
│   ├── components/ui/     # Shadcn/ui components
│   ├── assets/           # Images and assets
│   ├── App.jsx          # Main application component with neon rain effect
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── index.html          # HTML template
```

## Installation & Setup

1. **Extract the project files**
   ```bash
   unzip senator-bnb-website-src.zip
   cd janitor-ai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   pnpm build
   # or
   yarn build
   ```

## Deployment Options

### 1. Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### 2. Netlify
1. Drag and drop the `dist` folder to Netlify
2. Or connect GitHub repository

### 3. GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. Use the provided workflow file

### 4. Other Hosting Providers
- Upload the contents of the `dist` folder to your web hosting provider
- Ensure the hosting supports single-page applications (SPA)

## Key Components

### Neon Rain Effect
The neon rain effect is implemented in the `NeonRain` component within `App.jsx`:
- 50 animated rain drops with varying speeds and colors
- Yellow and blue neon colors matching the BNB theme
- Continuous animation with proper z-indexing

### Social Media Links
- Twitter: https://twitter.com/SenatorBNB
- Telegram: https://t.me/SenatorBNB_Announcements

## Customization

### Colors
The color scheme is defined in `tailwind.config.js` and uses:
- Primary: Yellow/Orange gradients (#F59E0B, #F97316)
- Secondary: Blue/Purple gradients (#3B82F6, #8B5CF6)
- Background: Dark slate gradients

### Images
Replace images in `src/assets/` with your own:
- `robot-bnb.jpg` - Main robot image
- `crypto-robot.jpg` - Roadmap phase 1 background
- `crypto-robot-2.jpg` - Roadmap phase 2 background
- `captain-bnb.jpg` - Additional asset

### Content
Edit the content in `App.jsx`:
- Hero section text
- Feature descriptions
- Roadmap items
- Footer information

## Dependencies
- React 19.1.0
- Vite 6.3.5
- Tailwind CSS 3.4.17
- Framer Motion 12.0.0
- Lucide React 0.468.0
- Shadcn/ui components

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance
- Optimized animations with Framer Motion
- Lazy loading for images
- Minified production build
- Responsive images

## License
This project is for SenatorBNB use only.

