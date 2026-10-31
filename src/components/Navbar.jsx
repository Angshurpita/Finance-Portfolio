import React from 'react';
import { profileData } from '../data/profileData';
import { FileText, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Navbar = ({ onOpenResume, onScrollToSection }) => {
  return (
    <header className="main-nav" id="main-navigation">
      <div className="nav-container">
        <a href="#hero" className="brand-crest" id="nav-brand-crest">
          <div className="crest-icon">AG</div>
          <div className="brand-info">
            <span className="brand-name">{profileData.name}</span>
            <span className="brand-role">Investment Banking & PE Candidate</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#models" className="nav-link" id="nav-link-models">
                Financial Models (6)
              </a>
            </li>
            <li>
              <a href="#sandbox" className="nav-link" id="nav-link-sandbox">
                Valuation Simulator
              </a>
            </li>
            <li>
              <a href="#methodology" className="nav-link" id="nav-link-methodology">
                Modeling Standards
              </a>
            </li>
            <li>
              <a href="#profile" className="nav-link" id="nav-link-profile">
                Candidate Profile
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={profileData.resumePdfUrl}
            download="Angshurpita_Ganguly_Finance_CV.pdf"
            className="btn btn-secondary btn-sm"
            id="nav-download-resume-btn"
          >
            <FileText size={14} />
            <span>Finance CV</span>
          </a>
          <a
            href="#models"
            className="btn btn-primary btn-sm"
            id="nav-verify-spreadsheets-btn"
          >
            <CheckCircle2 size={14} />
            <span>Verify Models (6)</span>
          </a>
        </div>
      </div>
    </header>
  );
};
