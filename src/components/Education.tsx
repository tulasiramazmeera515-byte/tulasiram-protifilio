import React from 'react';
import { educationData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding section-spacing scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left Column */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              04
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Education
            </h2>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-12">
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-2">
                {educationData.status}
              </p>
              <h3 className="text-lg font-semibold mb-1 text-foreground">
                {educationData.degree} — Undergraduate Degree
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {educationData.institution}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Focused on core computer science foundations, full-stack software development principles, relational databases, data structures, and practical artificial intelligence / machine learning applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
