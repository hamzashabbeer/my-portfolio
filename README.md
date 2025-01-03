# Hamza Shabbeer - Portfolio Website

A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and experience as a Full Stack Developer.

## 🌟 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Theme switcher with system preference detection
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive UI**: Dynamic animations and transitions using Framer Motion
- **Contact Form**: Integrated with EmailJS for easy communication
- **Performance Optimized**: Built with Next.js for optimal performance
- **Type Safe**: Written in TypeScript for better development experience

## 🛠️ Built With

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/hamzashabbeer/my-portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
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
│   │       └── scroll-to-top.tsx
│   └── theme-provider.tsx
├── public/
├── package.json
└── README.md
```

## 🎨 Features & Sections

- **Navbar**: Responsive navigation with smooth scrolling
- **Hero**: Dynamic introduction with animated particles
- **About**: Professional background and expertise
- **Skills**: Technical skills with progress indicators
- **Projects**: Showcase of recent projects with links
- **Contact**: Contact form integrated with EmailJS

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add your credentials to `.env.local`

### Theme Configuration
- Default dark theme with light mode option
- System preference detection
- Persistent theme storage

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Deployment

The site is deployed on Netlify. For deployment:

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables in Netlify dashboard

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- Email: hamzashabbeer@gmail.com
- LinkedIn: [Hamza Shabbeer](https://linkedin.com/in/hamza-shabbeer)
- GitHub: [@hamzashabbeer](https://github.com/hamzashabbeer)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
