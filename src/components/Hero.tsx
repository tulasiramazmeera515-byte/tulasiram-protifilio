import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="max-w-7xl mx-auto w-full text-center py-20">
        
        {/* Top small label */}
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Full-Stack & AI Developer
        </p>

        {/* Massive Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">
          Azmeera
          <br />
          Tulasiram
        </h1>

        {/* Tagline / Subtitle */}
        <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed mb-10">
          I build intelligent digital experiences with code, AI and creativity. B.Tech student passionate about Full-Stack Development, AI/ML and building practical real-world applications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <span>View My Projects</span>
            <ArrowDown size={14} />
          </a>

          <a
            href={personalInfo.resume}
            download="Azmeera_Tulasiram_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            <span>Download Resume</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
          >
            <Github size={16} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Azmeera"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      {/* Down arrow link to #about */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};
