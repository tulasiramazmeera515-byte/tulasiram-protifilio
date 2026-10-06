import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            03
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        {/* Clean typographic completed projects rows matching reference */}
        <div className="space-y-0">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group block border-b border-border py-10 first:border-t hover:pl-4 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Clean text content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </div>

                  <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-mono mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key features as clean text with bullet dot */}
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground/80 font-mono block mb-2">
                      Key Features:
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      {project.features.map((feat) => (
                        <span key={feat} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies list */}
                  <div className="flex flex-wrap gap-2.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-mono bg-card px-2.5 py-1 rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                    >
                      <Github size={13} />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <ExternalLink size={13} />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
