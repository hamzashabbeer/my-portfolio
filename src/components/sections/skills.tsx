"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiFigma } from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: FaReact, proficiency: 90 },
      { name: "Next.js", icon: SiNextdotjs, proficiency: 85 },
      { name: "TypeScript", icon: SiTypescript, proficiency: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 90 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: FaNodeJs, proficiency: 85 },
      { name: "Express.js", icon: SiExpress, proficiency: 85 },
      { name: "MongoDB", icon: SiMongodb, proficiency: 80 },
      { name: "SQL", icon: FaDatabase, proficiency: 75 },
    ],
  },
  {
    category: "Design & Tools",
    items: [
      { name: "Figma", icon: SiFigma, proficiency: 85 },
      { name: "UI/UX Design", icon: SiNextdotjs, proficiency: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 space-y-6"
              >
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5" />
                        <span>{skill.name}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 