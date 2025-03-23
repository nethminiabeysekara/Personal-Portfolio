"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary mb-4">
              <Code className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Web Developer</span>
              <span className="mx-2 text-primary/50">|</span>
              <CheckSquare className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">QA Tester</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafting Digital Experiences
            <br />
            <span className="text-primary">Testing for Excellence</span>
          </motion.h1>

          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build robust web applications and ensure they meet the highest
            quality standards through comprehensive testing.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="rounded-full">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
