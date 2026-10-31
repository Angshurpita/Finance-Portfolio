import React from 'react';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { ShieldCheck, Download, ChevronRight, FileSpreadsheet, ExternalLink } from 'lucide-react';

export const HeroSection = ({ onSelectProject }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-badge-wrap">
          <ShieldCheck size={14} className="text-gold" />
          <span>Institutional Financial Modeling • M&A / LBO / DCF</span>
        </div>

        <div className="hero-grid">
          <div className="hero-left-col">
            <h1 className="hero-title">
              Investment Banking &amp; Private Equity <span className="gold">Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              Comprehensive valuation and transaction modeling spanning mega-cap take-privates, multi-tranche debt waterfalls, 3-statement operating schedules, and intrinsic DCF underwriting. Built to Tier-1 investment bank and private equity standards.
            </p>

            <div className="hero-cta-group">
              <a href="#models" className="btn btn-primary" id="hero-cta-explore">
                <span>Explore Deal Ledger (6)</span>
                <ChevronRight size={16} />
              </a>
              <a
                href={profileData.resumePdfUrl}
                download="Angshurpita_Ganguly_Finance_CV.pdf"
                className="btn btn-secondary"
                id="hero-cta-resume"
              >
                <Download size={16} />
                <span>Download Finance CV (.pdf)</span>
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald"
                id="hero-cta-sheet-verify"
              >
                <FileSpreadsheet size={16} />
                <span>Verify Live Google Sheets ↗</span>
              </a>
            </div>

            <div className="hero-stats-row">
              {profileData.stats.map((s, idx) => (
                <div key={idx} className="hero-stat-card">
                  <span className={`stat-value ${idx === 0 || idx === 1 ? 'gold' : idx === 2 ? 'emerald' : ''}`}>
                    {s.value}
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right-col">
            <div className="hero-terminal-card" id="hero-models-terminal">
              <div className="terminal-header">
                <div className="terminal-title">
                  <span className="pulse-dot"></span>
                  <span>UNDERWRITTEN TRANSACTIONS • VERIFIED LEDGER</span>
                </div>
                <div className="terminal-leds">
                  <div className="led green"></div>
                  <div className="led amber"></div>
                  <div className="led green"></div>
                </div>
              </div>

              <div className="terminal-deal-list">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="terminal-deal-item"
                    id={`hero-deal-item-${project.projectNumber}`}
                    onClick={() => onSelectProject(project)}
                  >
                    <div className="terminal-deal-info">
                      <span className="terminal-deal-ticker">
                        {project.ticker} • {project.company}
                      </span>
                      <span className="terminal-deal-desc">{project.subtitle}</span>
                    </div>
                    <div
                      className={`terminal-deal-badge ${
                        project.category.includes('LBO')
                          ? 'gold'
                          : project.category.includes('DCF')
                          ? 'blue'
                          : 'emerald'
                      }`}
                    >
                      {project.summaryMetrics.badge || project.summaryMetrics.headline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
