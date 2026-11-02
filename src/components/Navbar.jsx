import React from 'react';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { FileText, CheckCircle } from 'lucide-react';

export const Navbar = ({ onOpenCv }) => {
  return (
    <header className="apple-nav" id="main-navigation">
      <div className="apple-nav-container">
        <a href="#hero" className="apple-brand-link" id="nav-brand-crest">
          <div className="apple-monogram">AG</div>
          <div className="apple-brand-text">
            <span className="apple-candidate-name">{profileData.name}</span>
            <span className="apple-candidate-division">Financial Analysis &amp; Valuation</span>
          </div>
        </a>

        <nav className="apple-nav-menu">
          <ul className="apple-nav-list">
            <li>
              <a href="#models" className="apple-nav-item" id="nav-link-models">
                Financial Models ({projectsData.length})
              </a>
            </li>
            <li>
              <a href="#methodology" className="apple-nav-item" id="nav-link-methodology">
                Modeling Standards
              </a>
            </li>
            <li>
              <a href="#profile" className="apple-nav-item" id="nav-link-profile">
                Background &amp; Credentials
              </a>
            </li>
          </ul>
        </nav>

        <div className="apple-nav-actions">
          <button
            type="button"
            onClick={onOpenCv}
            className="apple-btn-secondary apple-btn-sm"
            id="nav-download-resume-btn"
            style={{ cursor: 'pointer' }}
          >
            <FileText size={13} />
            <span>View CV (.pdf)</span>
          </button>
          <a
            href="#models"
            className="apple-btn-primary apple-btn-sm"
            id="nav-verify-spreadsheets-btn"
          >
            <CheckCircle size={13} />
            <span>Verify Models ({projectsData.length})</span>
          </a>
        </div>
      </div>
    </header>
  );
};
