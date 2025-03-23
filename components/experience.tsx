"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Lead developer for client projects, focusing on React-based web applications. Implemented CI/CD pipelines and mentored junior developers.",
    responsibilities: [
      "Developed and maintained multiple client websites and web applications",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with design and QA teams to deliver high-quality products",
      "Conducted code reviews and provided technical guidance to team members",
    ],
    skills: ["React", "Node.js", "AWS", "CI/CD", "Team Leadership"],
  },
  {
    title: "QA Engineer",
    company: "Quality First Software",
    period: "2019 - 2021",
    description:
      "Responsible for ensuring software quality through comprehensive testing strategies. Created and executed test plans for web and mobile applications.",
    responsibilities: [
      "Designed and implemented automated test frameworks using Cypress and Selenium",
      "Created detailed test plans and test cases for web and mobile applications",
      "Performed regression testing, functional testing, and UI testing",
      "Collaborated with developers to resolve bugs and improve product quality",
    ],
    skills: ["Cypress", "Selenium", "JIRA", "Test Planning", "Bug Tracking"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2017 - 2019",
    description:
      "Developed responsive websites and web applications for various clients. Focused on creating engaging user interfaces and optimizing performance.",
    responsibilities: [
      "Built responsive websites using HTML, CSS, and JavaScript",
      "Implemented designs from Figma and Adobe XD mockups",
      "Optimized website performance and loading times",
      "Ensured cross-browser compatibility and accessibility compliance",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in web development and quality assurance.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-muted"></div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 pb-8 md:pb-0">
                  <div className="w-full max-w-md">
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Briefcase className="h-5 w-5 text-primary mr-2" />
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                        </div>
                        <div className="mb-4">
                          <p className="font-medium">{exp.company}</p>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                        <div className="space-y-2 mb-4">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <div key={respIndex} className="flex items-start">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                              <p className="text-sm text-muted-foreground">{resp}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

