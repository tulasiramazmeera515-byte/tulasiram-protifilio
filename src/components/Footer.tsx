import React from 'react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="section-padding py-10 text-center">
      <div className="section-divider mb-10" />
      <p className="text-xs tracking-widest uppercase text-muted-foreground">
        © 2026 {personalInfo.name} — Built with passion
      </p>
    </footer>
  );
};
