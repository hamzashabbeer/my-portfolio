"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight, BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "hamzashabbeer@gmail.com",
    href: "mailto:hamzashabbeer@gmail.com",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Pakistan",
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: "+92 123 4567890",
    href: "tel:+921234567890",
  },
];

const socialLinks = [
  {
    icon: BsGithub,
    href: "https://github.com/hamzashabbeer",
    label: "GitHub",
  },
  {
    icon: BsLinkedin,
    href: "https://linkedin.com/in/hamza-shabbeer",
    label: "LinkedIn",
  },
  {
    icon: BsEnvelope,
    href: "mailto:hamzashabbeer@gmail.com",
    label: "Email",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
          {/* Cool Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-1 w-24 mx-auto mt-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
            <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="absolute -bottom-[2px] right-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-md animate-pulse" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                      <info.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-medium text-white hover:text-purple-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
                  <div className="absolute inset-[1px] rounded-xl bg-black/50 backdrop-blur-sm group-hover:bg-black/30 transition-colors" />
                  <link.icon className="w-5 h-5 text-white/80 group-hover:text-white relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-8 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
              
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500"
                        placeholder="Your name"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity pointer-events-none" />
                    </motion.div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="group relative"
                    >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500"
                        placeholder="Your email"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity pointer-events-none" />
                    </motion.div>
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="group relative"
                    >
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
                        placeholder="Your message"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity pointer-events-none" />
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite]" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
                    <div className="absolute inset-[1px] bg-black rounded-xl backdrop-blur-xl" />
                    <span className="relative text-white font-medium">
                      {isSubmitting ? (
                        "Sending..."
                      ) : isSuccess ? (
                        "Message Sent!"
                      ) : (
                        <>
                          Send Message
                          <BsArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 