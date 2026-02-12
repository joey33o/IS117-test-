# NJIT Portfolio - Home Base

A high-performance, minimalist personal portfolio website template for NJIT students.

## Features

✨ **Modern Design**
- Clean, minimalist aesthetic with gradient accents
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions

🌓 **Dark Mode Support**
- Toggle between light and dark themes
- Persistent theme preference (localStorage)
- System preference detection

⚡ **Performance Optimized**
- Built with Next.js 14+ (App Router)
- Tailwind CSS for lightweight styling
- Fast static generation

📱 **SEO Friendly**
- Meta tags optimization
- Clean semantic HTML
- Open Graph support ready

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Deployment:** Vercel or GitHub Pages ready

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global Tailwind styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with theme toggle
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── ProofOfWork.tsx      # Project showcase
│   │   ├── About.tsx           # About section with skills
│   │   ├── Contact.tsx         # Contact CTA section
│   │   └── ThemeProvider.tsx    # Dark mode context
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to `http://localhost:3000`

## Customization

### Update Your Information

1. **Navbar** - Edit `src/components/Navbar.tsx`
   - Replace "Your Name" with your name
   - Update social links

2. **Hero Section** - Edit `src/components/Hero.tsx`
   - Update name, major, and value proposition
   - Customize social links

3. **Projects** - Edit `src/components/ProofOfWork.tsx`
   - Add your actual projects
   - Update tags and descriptions
   - Add project links

4. **About** - Edit `src/components/About.tsx`
   - Write your bio
   - Update skills list

5. **Contact** - Edit `src/components/Contact.tsx`
   - Update email
   - Add your actual social links
   - Customize footer

### Color Scheme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark background
      secondary: '#1e293b',    // Light dark background
    },
  },
}
```

### Fonts

To change fonts, add to `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui'],
    },
  },
}
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Build the project:
```bash
npm run build
npm run export
```

2. Push to GitHub and enable Pages in settings

### Environment Variables

Create `.env.local` for any sensitive data:
```
NEXT_PUBLIC_CONTACT_EMAIL=your.email@njit.edu
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linter
```

## Performance Tips

- 🖼️ Compress images before adding them
- 📦 Keep dependencies minimal
- ⚡ Use Next.js Image component for images
- 🔗 Add rel="noopener noreferrer" to external links

## SEO Optimization

Edit `src/app/layout.tsx` metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | NJIT Portfolio',
  description: 'Your value proposition',
  // Add more metadata...
}
```

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest  
- Safari: Latest
- Mobile: iOS Safari 12+, Chrome Android

## Tips for Success

1. **Profile Photo** - Add a professional headshot
2. **Project Links** - Link to live demos and GitHub repos
3. **Case Studies** - Write brief descriptions of your projects
4. **Regular Updates** - Keep projects and skills current
5. **Analytics** - Add Vercel Analytics for insights

## License

MIT - Feel free to use this for your portfolio

## Support

For issues or improvements, check Next.js and Tailwind documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Ready to make it yours?** Start customizing the components above! 🚀
