import React from 'react';
import { profileData } from '../data/profileData';
import { X, Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CvModal = ({ onClose }) => {
  return (
    <div className="apple-modal-overlay" id="cv-modal-overlay" onClick={onClose}>
      <div
        className="apple-modal-card"
        style={{ maxWidth: '960px', height: '92vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="apple-modal-header" style={{ padding: '18px 24px' }}>
          <div className="apple-modal-title-col">
            <div className="apple-modal-eyebrow-row">
              <span className="apple-card-category-tag">OFFICIAL CV</span>
              <div className="apple-status-pass">
                <CheckCircle2 size={12} />
                <span>UPDATED &amp; VERIFIED</span>
              </div>
            </div>
            <h2 className="apple-modal-title" style={{ fontSize: '1.25rem', marginTop: '2px' }}>
              {profileData.name} — Curriculum Vitae
            </h2>
            <div className="apple-modal-meta">
              {profileData.location} • {profileData.phone} • {profileData.email}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={profileData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary apple-btn-sm"
              id="cv-modal-newtab-btn"
            >
              <span>Open in New Tab</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href={profileData.resumePdfUrl}
              download="Angshurpita_Ganguly_Finance_CV.pdf"
              className="apple-btn-primary apple-btn-sm"
              id="cv-modal-download-btn"
            >
              <Download size={13} />
              <span>Download (.pdf)</span>
            </a>
            <button
              className="apple-modal-close"
              onClick={onClose}
              id="cv-modal-close-button"
              aria-label="Close CV Modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Document Body */}
        <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#525659' }}>
          <iframe
            src={`${profileData.resumePdfUrl}#view=FitH`}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            title={`${profileData.name} CV Viewer`}
          />
        </div>
      </div>
    </div>
  );
};
