import React from 'react';
import { skillsData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const skillCategories = [
    { title: skillsData.programming.category, skills: skillsData.programming.items },
    { title: skillsData.frontend.category, skills: skillsData.frontend.items },
    { title: skillsData.backend.category, skills: skillsData.backend.items },
    { title: skillsData.database.category, skills: skillsData.database.items },
    { title: skillsData.aiMl.category, skills: skillsData.aiMl.items },
    { title: skillsData.tools.category, skills: skillsData.tools.items },
  ];

  return (
    <section id="skills" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            02
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills
          </h2>
        </div>

        {/* Exact Architectural hairline grid from reference */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-background p-8 hover:bg-card transition-colors duration-300 group"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300 font-medium">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
