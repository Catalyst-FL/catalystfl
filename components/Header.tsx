"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Prison Ministry", href: "/prison-ministry" },
  { name: "Productions", href: "/productions" },
  { name: "Praise & Worship", href: "/worship" },
  { name: "International Outreach", href: "/outreach-international" },
  { name: "National Outreach", href: "/outreach-national" },
  { name: "News", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrolled(scrollTop > 20);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div
            className={`flex w-full items-center justify-between transition-all duration-300 ${
              scrolled ? "py-2" : "py-4"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <div
                  className={`relative transition-all duration-300 ${
                    scrolled
                      ? "w-14 h-14 sm:w-16 sm:h-16"
                      : "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                  }`}
                >
                  <Image
                    src="/images/not_forgotten_circle.png"
                    alt="Catalyst Ministries Florida - Prison Ministry and Gospel Outreach"
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                    priority
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary-400/0 group-hover:bg-primary-400/10 rounded-full blur-xl transition-all duration-300" />
                </div>
                {/* Optional text logo */}
                <div
                  className={`ml-3 hidden lg:block transition-all duration-300 ${
                    scrolled ? "opacity-0 w-0 ml-0" : "opacity-100"
                  }`}
                >
                  <div className="text-lg font-bold text-gray-900 leading-tight">
                    Catalyst Ministries
                  </div>
                  <div className="text-xs text-primary-600 font-semibold">
                    Igniting Change Since 2003
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="ml-10 hidden lg:flex items-center space-x-1">
              {navigation.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                      active
                        ? "text-primary-700 bg-primary-50"
                        : "text-gray-700 hover:text-primary-700 hover:bg-primary-50/50"
                    }`}
                  >
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                    {/* Active indicator dot */}
                    {active && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary-600 rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3 ml-4">
              <Link
                href="https://www.powr.io/checkout_screen?unique_label=3aa1bc03_1745869827"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group btn-shine"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Donate
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                Get Involved
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Donate Button */}
            <div className="lg:hidden flex items-center gap-2 mr-2">
              <Link
                href="https://www.powr.io/checkout_screen?unique_label=3aa1bc03_1745869827"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold shadow-md active:scale-95 transition-all duration-300"
              >
                Donate
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-primary-50 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open menu</span>
                {/* Animated hamburger icon */}
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-1.5"
                        : "-translate-y-1"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100 my-1"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "translate-y-1"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile navigation with slide animation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-1">
              {navigation.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 transform ${
                      active
                        ? "bg-primary-600 text-white shadow-md scale-105"
                        : "text-gray-900 hover:bg-primary-50 hover:translate-x-2"
                    }`}
                    style={{
                      transitionDelay: mobileMenuOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
              {/* Mobile CTAs */}
              <div className="pt-4 px-4 space-y-3">
                <Link
                  href="https://www.powr.io/checkout_screen?unique_label=3aa1bc03_1745869827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Donate Now
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Involved
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
