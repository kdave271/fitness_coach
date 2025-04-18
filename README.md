# Deepak Tiwari - Fitness Coach Website

A professional website for Deepak Tiwari, a certified fitness coach, built with Next.js v15, React, and Tailwind CSS.

## Features

- Modern, responsive design
- Four main sections: Home, About, Services, and Contact
- Integrated social media links
- Contact form for client inquiries
- Service pricing tiers
- Testimonials showcase
- Mobile-friendly navigation

## Tech Stack

- Next.js v15
- React
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd deepak-tiwari-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add any required environment variables:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navigation.tsx
└── public/
    └── images/
        ├── hero-image.jpg
        ├── about-deepak.jpg
        └── testimonials/
            ├── testimonial-1.jpg
            ├── testimonial-2.jpg
            └── testimonial-3.jpg
```

## Development

- The website uses Tailwind CSS for styling
- Components are built using React and TypeScript
- The navigation is responsive and works on all device sizes
- Images should be optimized before adding to the public directory

## Deployment

The website can be deployed to any platform that supports Next.js applications, such as:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 