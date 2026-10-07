import React from 'react';
import { personalInfo } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left Column: Number, Title & Permanent Profile Photo */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              01
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              About
            </h2>

            {/* Permanent Profile Photo Frame matching reference w-56 h-72 rounded-2xl */}
            <div className="w-56 h-72 rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes(`${import.meta.env.BASE_URL}profile.jpg`)) {
                    target.src = `${import.meta.env.BASE_URL}profile.jpg`;
                  }
                }}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Bio Prose matching reference style */}
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey Hi! I am Azmeera, a{' '}
              <span className="text-foreground font-medium">
                Full-Stack & AI Developer
              </span>{' '}
              who enjoys turning ideas into practical digital products. I work across frontend development, backend APIs, databases and AI/ML technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a B.Tech student at St. Mary's Group of Institutions, Hyderabad. I continuously improve my skills by building projects, experimenting with new frameworks, and learning modern technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am eager to learn, grow, and contribute to real-world software projects. My focus is on writing clean, scalable code, engineering responsive user experiences, and exploring practical artificial intelligence applications.
            </p>

            {/* Focus status tags matching reference */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted-foreground font-mono">
              <span className="px-3 py-1.5 rounded-full border border-border bg-card">
                B.Tech Student
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-card">
                Full-Stack Developer
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-card">
                AI / ML Enthusiast
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
