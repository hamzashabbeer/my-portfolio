"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating impactful digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&auto=format&fit=crop"
                alt="About Hamza Shabbeer"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Full Stack Developer & UI/UX Designer</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a Full Stack Developer with a strong foundation in both front-end and back-end development. 
                  Currently pursuing my Bachelor's in Computer Science at FAST NUCES, I combine academic excellence 
                  with practical experience in web development.
                </p>
                <p>
                  My expertise spans across modern web technologies including React, Next.js, Node.js, and various 
                  databases. I'm particularly passionate about creating intuitive user interfaces and optimizing 
                  application performance.
                </p>
                <p>
                  Beyond coding, I have a keen interest in UI/UX design and believe in creating applications that 
                  not only function flawlessly but also provide an exceptional user experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-muted-foreground">FAST NUCES</p>
                  <p className="text-sm text-muted-foreground">BS Computer Science</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                  <p className="text-sm text-muted-foreground">2+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 