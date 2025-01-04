# Hamza Shabbeer - Portfolio Website

A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. Features a sleek dark/light theme, smooth animations, and a clean design.

## 🌟 Features

- **Modern Design**: Clean and professional interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Dynamic theme switching with system preference support
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Contact Form**: Integrated with EmailJS for easy communication
- **Performance Optimized**: Built with Next.js 13 for optimal performance
- **Type Safe**: Written in TypeScript for better development experience

## 🛠️ Built With

- [Next.js 13](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service integration
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

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

## 📋 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── ui/            # UI components
│   └── styles/             # Global styles
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 📱 Features by Section

### 🏠 Hero Section
- Dynamic particle animations
- Responsive hero image
- Social media links
- Call-to-action buttons

### 👤 About Section
- Professional introduction
- Skills overview
- Animated content reveal

### 💻 Skills Section
- Technical skills display
- Progress bars
- Categorized skills presentation

### 🎯 Projects Section
- Featured projects showcase
- Project details and links
- Technology tags
- Live demo links

### 📬 Contact Section
- Contact form with EmailJS integration
- Form validation
- Success/error states
- Social media links

## 🎨 Customization

The website can be easily customized by modifying:
- `globals.css` - Theme colors and global styles
- `tailwind.config.ts` - Tailwind configuration
- Component files - Individual section content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Hamza Shabbeer - [LinkedIn](https://linkedin.com/in/hamza-shabbeer) - hamzashabbeer@gmail.com

Project Link: [https://github.com/hamzashabbeer/my-portfolio](https://github.com/hamzashabbeer/my-portfolio)
