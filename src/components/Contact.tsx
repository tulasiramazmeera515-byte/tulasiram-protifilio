import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Trigger direct mailto with subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Azmeera,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="section-padding section-spacing scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left Column: Number, Title & Social Links */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              07
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Contact
            </h2>

            <div className="space-y-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Github size={16} />
                <span>github.com/tulasiramazmeera515-byte</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Linkedin size={16} />
                <span>linkedin.com/in/tulasiram-azmeera-86948b378</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean border-b Contact Form matching reference */}
          <form onSubmit={handleSubmit} className="md:col-span-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors text-sm"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors resize-none text-sm"
            />

            {sent && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground py-1">
                <CheckCircle2 size={14} className="text-foreground" />
                <span>Opening email client with your message...</span>
              </div>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <span>Send Message</span>
              <ArrowUpRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
