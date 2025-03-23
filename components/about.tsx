"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-xl">
                <img src="/me.jpg" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-mono text-sm">1+ Years Experience</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              About Me
            </h2>

            <p className="text-muted-foreground mb-6">
              I'm a passionate web developer and QA Tester experienced in
              full-stack web development and QA testing, with a strong
              foundation in Agile methodologies. Proficient in designing and
              developing user-centric digital solutions and ensuring software
              reliability through automated testing and debugging. Dedicated to
              continuous learning, problem-solving, and staying up-to-date with
              emerging technologies to build scalable and efficient applications
            </p>

            <p className="text-muted-foreground mb-6">
              With expertise in front-end and back-end technologies, I build
              responsive, user-friendly websites and applications. My QA
              background ensures that every project I deliver is thoroughly
              tested, bug-free, and provides an optimal user experience.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Name</span>
                <span className="font-medium">Gayathri Abeyesekara</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Email</span>
                <span className="font-medium">sayatnethmini@gmail.com</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Location</span>
                <span className="font-medium">
                  355/A,1st Lane,Boralasgamuwe
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">
                  Availability
                </span>
                <span className="font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
