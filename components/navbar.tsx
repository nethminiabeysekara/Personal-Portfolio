"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  // { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="#" className="text-xl font-bold">
            <span className="text-primary">Dev</span>Portfolio
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="ml-4 flex items-center space-x-2">
              <ThemeToggle />
              <a href="/myCV.pdf" download className="rounded-full">
                <Button size="sm" className="rounded-full">
                  Resume
                </Button>
              </a>
            </div>
          </nav>

          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-4 py-2 space-y-1 bg-background/95 backdrop-blur-md border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <a href="/cv.pdf" download className="w-full">
                <Button size="sm" className="w-full rounded-full">
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
