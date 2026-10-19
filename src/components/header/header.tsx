"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MagnetButton } from "../animations/magnet-button/magnet-button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-3.5 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-neutral-100 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-neutral-950 capitalize hover:text-[#b4861c] transition-colors whitespace-nowrap"
        >
          OdeEvents
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm capitalize tracking-[0.15em] font-medium text-neutral-600">
          <Link
            href="/portfolio"
            className={`transition-colors hover:text-neutral-950 ${
              pathname.startsWith("/portfolio")
                ? "text-[#b4861c] font-semibold"
                : ""
            }`}
          >
            Portfolio
          </Link>
          <button
            type="button"
            onClick={() => handleNavClick("portfolio-section")}
            className="hover:text-neutral-950 transition-colors cursor-pointer"
          >
            Categories
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("services-section")}
            className="hover:text-neutral-950 transition-colors cursor-pointer"
          >
            Our Craft
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("metrics-section")}
            className="hover:text-neutral-950 transition-colors cursor-pointer"
          >
            Impact
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("testimonials-section")}
            className="hover:text-neutral-950 transition-colors cursor-pointer"
          >
            Press & Patrons
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <MagnetButton
            onClick={() => handleNavClick("inquiry-section")}
            className="hidden sm:inline-flex px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Initiate Intake
          </MagnetButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-950 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 text-sm capitalize tracking-widest text-neutral-700 shadow-xl">
          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-left py-2 hover:text-neutral-950 font-medium"
          >
            Portfolio
          </Link>
          <button
            type="button"
            onClick={() => handleNavClick("portfolio-section")}
            className="block w-full text-left py-2 hover:text-neutral-950 font-medium cursor-pointer"
          >
            Category
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("services-section")}
            className="block w-full text-left py-2 hover:text-neutral-950 font-medium cursor-pointer"
          >
            Our Craft
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("metrics-section")}
            className="block w-full text-left py-2 hover:text-neutral-950 font-medium cursor-pointer"
          >
            Impact
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("inquiry-section")}
            className="block w-full text-left py-2 text-[#b4861c] font-semibold cursor-pointer"
          >
            Initiate Intake
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
