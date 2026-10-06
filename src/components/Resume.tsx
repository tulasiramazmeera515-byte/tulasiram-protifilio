import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="section-padding section-spacing scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left Column */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              06
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Resume
            </h2>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore my education, skills, projects and certifications.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Download a recruiter-ready copy of my resume, or inspect the comprehensive overview of my technical profile online.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <span>View Resume</span>
                <ArrowUpRight size={14} />
              </button>

              <a
                href={personalInfo.resume}
                download="Azmeera_Tulasiram_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-300"
              >
                <span>Download Resume</span>
                <Download size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
