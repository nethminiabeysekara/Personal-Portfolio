"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  TestTube,
  Bug,
  Workflow,
  Layers,
  Smartphone,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="h-6 w-6 text-primary" />,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend Development",
    icon: <Database className="h-6 w-6 text-primary" />,
    items: ["Node.js", "PHP", "Python", "RESTful APIs"],
  },

  {
    category: "QA Tools",
    icon: <Bug className="h-6 w-6 text-primary" />,
    items: ["Selenium", "Postman", "TestNG"],
  },
  {
    category: "Development Workflow",
    icon: <Workflow className="h-6 w-6 text-primary" />,
    items: ["Git", "CI/CD", "Agile/Scrum", "JIRA", "Clickup"],
  },
  {
    category: "Design & UI/UX",
    icon: <Layers className="h-6 w-6 text-primary" />,
    items: ["Figma"],
  },

  {
    category: "Version Control",
    icon: <GitBranch className="h-6 w-6 text-primary" />,
    items: ["Git", "GitHub", "Bitbucket"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills in web development and
            quality assurance that I've honed over the years.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="font-semibold ml-2">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
