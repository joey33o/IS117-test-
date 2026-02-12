# Quick Start Guide

## 1️⃣ Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site live.

---

## 2️⃣ Customize Your Portfolio

Replace these placeholders in each component:

### Navbar & Hero
- **File:** `src/components/Navbar.tsx` & `src/components/Hero.tsx`
- Replace: "Your Name" → Your actual name
- Replace: "Computer Science | AI/ML" → Your major | specialization
- Update social media links (GitHub, LinkedIn, Twitter)

### Projects Section
- **File:** `src/components/ProofOfWork.tsx`
- Update the `projects` array with your real projects
- Add descriptions, technologies, and links

### About Section
- **File:** `src/components/About.tsx`
- Update bio paragraph
- Customize skills list

### Contact Section
- **File:** `src/components/Contact.tsx`
- Replace email address
- Update social links
- Customize footer

---

## 3️⃣ Build & Deploy

### Option A: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option B: GitHub Pages
```bash
npm run build
npm run export
# Push to GitHub and enable Pages
```

### Option C: Self-hosted
```bash
npm run build
npm run start
```

---

## 4️⃣ Enhancements

- ✏️ Add your profile photo to `public/` folder
- 🎨 Customize colors in `tailwind.config.js`
- 📊 Add Vercel Analytics for visitor insights
- 🔗 Connect actual project links
- 📧 Setup contact form (FormSubmit, Formbricks, etc.)

---

## 📁 Key Files to Edit

```
src/components/
├── Hero.tsx          ← Main landing content
├── ProofOfWork.tsx   ← Your projects
├── About.tsx         ← Your bio & skills
└── Contact.tsx       ← Contact info
```

---

## 🚀 Performance Features Already Included

- ✅ Dark/Light mode toggle
- ✅ Responsive design (mobile-first)
- ✅ Gradient animations
- ✅ Smooth scrolling
- ✅ Modern, clean UI
- ✅ Fast load times
- ✅ SEO optimized

---

## 🎯 Next Steps

1. **Customize all text content** to be about YOU
2. **Add project images** to `public/` folder
3. **Update social links** with your profiles
4. **Test on mobile** using `npm run dev`
5. **Deploy to Vercel** or GitHub Pages
6. **Share your portfolio!** 🎉

---

**Need help?** Check [PORTFOLIO_README.md](PORTFOLIO_README.md) for detailed docs.
