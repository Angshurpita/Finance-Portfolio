import React from 'react';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { FileText, ChevronRight, FileSpreadsheet, ArrowUpRight } from 'lucide-react';

export const HeroSection = ({ onSelectProject, onOpenCv }) => {
  return (
    <section className="apple-hero-section" id="hero">
      <div className="apple-glow-backdrop"></div>
      <div className="apple-container">
        <div className="apple-eyebrow-badge">
          <span className="apple-eyebrow-dot"></span>
          <span>INVESTMENT BANKING &amp; PRIVATE EQUITY PORTFOLIO</span>
        </div>

        <div className="apple-hero-grid">
          <div className="apple-hero-left">
            <h1 className="apple-hero-headline">
              Financial Underwriting. <br />
              <span className="apple-gradient-text">Engineered with Precision.</span>
            </h1>

            <p className="apple-hero-lead">
              Institutional-grade valuation and transaction models spanning mega-cap sponsor buyouts, multi-tranche debt waterfalls, 3-statement operating schedules, and intrinsic DCF underwriting. Built to Tier-1 investment bank and private equity standards.
            </p>

            <div className="apple-hero-actions">
              <a href="#models" className="apple-btn-primary" id="hero-cta-explore">
                <span>View Models Ledger ({projectsData.length})</span>
                <ChevronRight size={15} />
              </a>
              <button
                type="button"
                onClick={onOpenCv}
                className="apple-btn-secondary"
                id="hero-cta-resume"
                style={{ cursor: 'pointer' }}
              >
                <FileText size={15} />
                <span>View CV (.pdf)</span>
              </button>
              <a
                href="https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-tertiary"
                id="hero-cta-sheet-verify"
              >
                <FileSpreadsheet size={15} />
                <span>Verify Google Sheets</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Apple 3D Frosted Glass Metric Strip */}
            <div className="apple-stats-glass-grid">
              {profileData.stats.map((s, idx) => (
                <div key={idx} className="apple-stat-card">
                  <span className="apple-stat-num">{s.value}</span>
                  <span className="apple-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="apple-hero-right">
            {/* 3D Liquid Glass Deal Ledger Showcase */}
            <div className="apple-glass-window" id="hero-models-terminal">
              <div className="apple-window-header">
                <div className="apple-window-controls">
                  <span className="apple-dot red"></span>
                  <span className="apple-dot yellow"></span>
                  <span className="apple-dot green"></span>
                </div>
                <div className="apple-window-title">UNDERWRITTEN DEALS • VERIFIED DIRECTORY</div>
                <div className="apple-badge-live">PASS 100%</div>
              </div>

              <div className="apple-window-body">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="apple-deal-row"
                    id={`hero-deal-item-${project.projectNumber}`}
                    onClick={() => onSelectProject(project)}
                  >
                    <div className="apple-deal-cell-main">
                      <div className="apple-deal-title-line">
                        <span className="apple-deal-tag">#{String(project.projectNumber).padStart(2, '0')}</span>
                        <span className="apple-deal-name">{project.company}</span>
                        <span className="apple-deal-ticker-badge">{project.ticker.split(' / ')[0]}</span>
                      </div>
                      <div className="apple-deal-subtitle">{project.subtitle}</div>
                    </div>
                    <div className="apple-deal-cell-badge">
                      <div className="apple-deal-metric-stack">
                        <span className="apple-deal-headline">{project.summaryMetrics.headline}</span>
                        <span className={`apple-metric-pill tone-${project.summaryMetrics.tone || 'neutral'}`}>
                          {project.summaryMetrics.tone === 'negative' && '▼ '}
                          {project.summaryMetrics.tone === 'positive' && '▲ '}
                          {project.summaryMetrics.badge}
                        </span>
                      </div>
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
