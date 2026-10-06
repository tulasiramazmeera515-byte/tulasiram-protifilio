import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 section-padding">
        {/* Brand */}
        <a
          href="#"
          className="text-sm font-medium tracking-wide text-foreground hover:opacity-80 transition-opacity"
        >
          Azmeera's Portfolio
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resume}
              download="Azmeera_Tulasiram_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <span>Resume</span>
              <ArrowUpRight size={12} />
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 transition-all duration-300">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-border flex items-center gap-3">
              <a
                href={personalInfo.resume}
                download="Azmeera_Tulasiram_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={14} />
              </a>
              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="px-4 py-2.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
                >
                  View
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
