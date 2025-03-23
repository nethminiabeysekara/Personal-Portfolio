"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Real-State Website",
    description:
      "A full-stack e-commerce solution with product management, cart functionality, and payment integration.",
    image: "/image1.jpg",
    tags: ["React JS", "Bootstrap"],
    // demoLink: "#",
    githubLink: "https://github.com/nethminiabeysekara/rent-up-real-state-",
    category: "Web Development",
    detailLink: "https://rentup-realstate.netlify.app/",
  },
  {
    title: "Automated Testing Framework",
    description:
      "A comprehensive testing framework for web applications with detailed reporting and CI/CD integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: [
      "Cypress",
      "JavaScript",
      "GitHub Actions",
      "Reporting",
      "E2E Testing",
    ],
    // demoLink: "#",
    githubLink: "#",
    category: "QA Testing",
    detailLink: "/projects/automated-testing-framework",
  },
  {
    title: "A Q U A T I C ",
    description:
      "A responsive e-commerce website built with modern web technologies and animations to sell equipments need for underwater activities.",
    image: "/image5.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animation"],
    // demoLink: "#",
    githubLink: "https://github.com/nethminiabeysekara/Aquatic",
    category: "Web Development",
    detailLink: "https://dreamy-jelly-487f43.netlify.app/",
  },
  {
    title: "Online Ticketing System",
    description:
      "A ticketing system where both buyers and sellers can interact.",
    image: "/image2.png",
    tags: ["React", "Spring Boot", "Java"],
    demoLink: "#",
    githubLink: "https://github.com/nethminiabeysekara/Ticketing_system",
    category: "Web Development",
    detailLink: "/projects/ticketing-system",
  },
  {
    title: "Quiz App",
    description:
      "An interactive web application built with React and Next.js that allows users to test their knowledge through a series of multiple-choice questions.",
    image: "/image2.jpg",
    tags: ["Typescript", "React", "Next JS", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "https://github.com/nethminiabeysekara/Quiz-app",
    category: "Web Development",
    detailLink: "/projects/quiz-app",
  },
  {
    title: "Test Case Management Tool",
    description:
      "A tool for creating, organizing, and executing test cases with detailed reporting.",
    image: "/placeholder.svg?height=400&width=600",
    tags: [
      "Vue.js",
      "Express",
      "PostgreSQL",
      "PDF Generation",
      "Data Visualization",
    ],
    demoLink: "#",
    githubLink: "#",
    category: "QA Testing",
    detailLink: "/projects/test-case-management",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A selection of my recent work showcasing my skills in web
            development and quality assurance.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["All", "Web Development", "QA Testing"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-background/20 backdrop-blur-sm"
                      asChild
                    ></Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-background/20 backdrop-blur-sm"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn mt-2 p-0"
                    asChild
                  >
                    <Link href={project.detailLink}>
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
