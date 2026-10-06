import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { certificationsData, CertificationItem } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="section-padding section-spacing scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left Column */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              05
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certifications
            </h2>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-10">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="border-b border-border pb-8 last:border-b-0">
                <p className="text-xs font-mono text-muted-foreground mb-2">
                  {cert.category}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors self-start sm:self-auto"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Issued by {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <h4 className="text-lg font-bold text-foreground">{selectedCert.title}</h4>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1 mb-4">
              {selectedCert.issuer} • {selectedCert.category}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Official certification demonstrating foundational proficiency in {selectedCert.title.toLowerCase()}, issued by {selectedCert.issuer}.
            </p>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  <span>Issuer</span>
                  <ArrowUpRight size={12} />
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
