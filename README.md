# ReelsOnGo - Premium Content Service Website

A stunning, cinematic React.js website for **ReelsOnGo** - The World's First Quick Content Service.

## Features

- **Premium Black & Red Design** - Luxurious color palette inspired by CRED
- **Smooth Animations** - Framer Motion powered transitions and parallax effects
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **WhatsApp Integration** - Contact form sends enquiries via WhatsApp
- **Slick Slider Testimonials** - Auto-playing carousel with 6 testimonials
- **Interactive FAQ** - Accordion-style questions with smooth expand/collapse
- **Modern Navigation** - Smooth scroll to sections with mobile menu
- **Floating WhatsApp Button** - Always accessible contact option

## Tech Stack

- React.js 18
- TypeScript
- Vite
- Framer Motion
- React Slick Carousel
- Lucide React Icons
- Pure CSS (no Tailwind/Bootstrap)
- Poppins Font

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx/.css
│   ├── Hero.jsx/.css
│   ├── LatestCreations.jsx/.css
│   ├── WhyReelsOnGo.jsx/.css
│   ├── Pricing.jsx/.css
│   ├── Testimonials.jsx/.css
│   ├── Services.jsx/.css
│   ├── Contact.jsx/.css
│   ├── FAQ.jsx/.css
│   ├── Footer.jsx/.css
│   └── WhatsAppButton.jsx/.css
├── App.tsx
├── App.css
└── main.tsx
```

## Sections

1. **Hero** - Fullscreen intro with animated stats
2. **Latest Creations** - Instagram reels showcase
3. **Why ReelsOnGo** - 4 key features with icons
4. **Pricing** - 3 pricing tiers with "Most Popular" badge
5. **Testimonials** - Auto-playing slider with 6 reviews
6. **Services** - 6 service cards with hover effects
7. **Contact** - WhatsApp integration form
8. **FAQ** - 6 accordion-style questions
9. **Footer** - 4-column layout with social links

## WhatsApp Integration

Contact form sends structured messages to: **+91 7416167851**

Format:
```
New ReelsOnGo Enquiry
Name: [User Name]
Mobile: [Phone Number]
Event Type: [Event Type]
Event Date: [Date]
Event Location: [Location]
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
--primary-red: #ff0000;
--bg-black: #000;
--card-bg: #111;
```

### WhatsApp Number
Update in:
- `src/components/Contact.jsx` (line with `wa.me/`)
- `src/components/WhatsAppButton.jsx`
- `src/components/Hero.jsx` (Become a Creator button)

### Instagram Link
Update in `src/components/LatestCreations.jsx`

## Performance

- Lazy loaded images
- Optimized animations
- Smooth scroll behavior
- Responsive images from Pexels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Built with precision for a premium, luxurious user experience.
