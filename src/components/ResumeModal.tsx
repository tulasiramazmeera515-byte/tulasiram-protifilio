import React from 'react';
import { X, Download, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { personalInfo, skillsData, projectsData, certificationsData, educationData } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-background/90 backdrop-blur-md">
      <div className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg border border-border text-foreground">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground leading-tight">
                {personalInfo.name} — Resume
              </h3>
              <p className="text-xs text-muted-foreground">{personalInfo.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resume}
              download="Azmeera_Tulasiram_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <Download size={12} />
              <span>PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
              aria-label="Close resume viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Clean Resume View */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-foreground text-sm leading-relaxed bg-card">
          
          {/* Header */}
          <div className="border-b border-border pb-5">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{personalInfo.name}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">{personalInfo.role}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Summary</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Education</h4>
            <div className="bg-background p-4 rounded-xl border border-border">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-foreground text-sm">{educationData.degree}</span>
                <span className="text-xs text-muted-foreground font-mono">{educationData.status}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{educationData.institution}</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Technical Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-background rounded-xl border border-border">
                <span className="font-medium text-foreground block mb-1">Programming:</span>
                <span className="text-muted-foreground">{skillsData.programming.items.join(', ')}</span>
              </div>
              <div className="p-3 bg-background rounded-xl border border-border">
                <span className="font-medium text-foreground block mb-1">Frontend:</span>
                <span className="text-muted-foreground">{skillsData.frontend.items.join(', ')}</span>
              </div>
              <div className="p-3 bg-background rounded-xl border border-border">
                <span className="font-medium text-foreground block mb-1">Backend & Database:</span>
                <span className="text-muted-foreground">{[...skillsData.backend.items, ...skillsData.database.items].join(', ')}</span>
              </div>
              <div className="p-3 bg-background rounded-xl border border-border">
                <span className="font-medium text-foreground block mb-1">AI / ML & Tools:</span>
                <span className="text-muted-foreground">{[...skillsData.aiMl.items, ...skillsData.tools.items].join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Key Projects</h4>
            <div className="space-y-3">
              {projectsData.filter(p => !p.isUpcoming).map(project => (
                <div key={project.id} className="p-4 bg-background rounded-xl border border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground text-sm">{project.title}</span>
                    <span className="text-[11px] text-muted-foreground font-mono">{project.subtitle}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
                  <p className="text-[11px] text-muted-foreground/80 font-mono mt-2">
                    {project.technologies.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Certifications</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {certificationsData.map(c => (
                <li key={c.id} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-foreground shrink-0" />
                  <span><strong>{c.title}</strong> — {c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-border bg-background/80 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Recruiter-ready PDF available</span>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resume}
              download="Azmeera_Tulasiram_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <span>Download PDF</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
