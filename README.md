# Hamza Shabbeer - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a sleek dark mode design, smooth animations, and interactive elements.

## 🌟 Features

- **Modern Design**: Clean and professional interface with dark mode support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Interactive Elements**: Dynamic particle effects and hover animations
- **Dark Mode**: Built-in dark mode with system preference detection
- **Contact Form**: Integrated EmailJS for easy contact functionality
- **Performance Optimized**: Built with Next.js for optimal performance
- **Type Safe**: Written in TypeScript for better development experience

## 🛠️ Built With

- [Next.js 13](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [EmailJS](https://www.emailjs.com/) - Email Service
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/hamzashabbeer/my-portfolio.git
```

2. Navigate to the project directory
```bash
cd portfolio
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   └── navbar.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── projects.tsx
│   │   │   └── contact.tsx
│   │   └── ui/
│   └── styles/
├── public/
└── package.json
```

## 🎨 Features

- **Hero Section**: Dynamic particle animation and spotlight effect
- **About Section**: Professional introduction with skills overview
- **Skills Section**: Visual representation of technical skills
- **Projects Section**: Showcase of recent projects with live demos
- **Contact Section**: EmailJS integrated contact form
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **Theme Switching**: Dark mode support with smooth transitions

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Laptops
- Desktop screens

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚀 Deployment

The site is deployed on Netlify. Any push to the main branch will trigger an automatic deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Hamza Shabbeer - [hamzashabbeer@gmail.com](mailto:hamzashabbeer@gmail.com)

Project Link: [https://github.com/hamzashabbeer/my-portfolio](https://github.com/hamzashabbeer/my-portfolio)
