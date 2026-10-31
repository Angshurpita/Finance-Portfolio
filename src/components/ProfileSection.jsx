import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { GraduationCap, Award, Mail, Phone, MapPin, Download, Check, Copy, FileText } from 'lucide-react';

export const ProfileSection = ({ onOpenCv }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="apple-section" id="profile">
      <div className="apple-container">
        <div className="apple-profile-card">
          <div className="apple-profile-grid">
            {/* Bio Column */}
            <div className="apple-profile-bio-col">
              <div className="apple-section-eyebrow">
                <GraduationCap size={14} />
                <span>CANDIDATE BACKGROUND</span>
              </div>
              <h3 className="apple-profile-name">{profileData.name}</h3>
              <div className="apple-profile-role">{profileData.title}</div>
              <p className="apple-profile-bio">{profileData.bio}</p>

              <div className="apple-contact-list">
                <div className="apple-contact-item">
                  <MapPin size={15} className="accent-blue" />
                  <span>{profileData.location}</span>
                </div>
                <div className="apple-contact-item">
                  <Phone size={15} className="accent-blue" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="apple-contact-item">
                  <Mail size={15} className="accent-blue" />
                  <span>{profileData.email}</span>
                </div>
              </div>

              <div className="apple-profile-actions">
                <button
                  type="button"
                  onClick={onOpenCv}
                  className="apple-btn-primary"
                  id="profile-view-cv-btn"
                  style={{ cursor: 'pointer' }}
                >
                  <FileText size={15} />
                  <span>View CV (.pdf)</span>
                </button>
                <a
                  href={profileData.resumePdfUrl}
                  download="Angshurpita_Ganguly_Finance_CV.pdf"
                  className="apple-btn-secondary"
                  id="profile-download-cv-btn"
                >
                  <Download size={15} />
                  <span>Download</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="apple-btn-secondary"
                  id="profile-copy-email-btn"
                >
                  {copiedEmail ? <Check size={14} className="accent-green" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Credentials Column */}
            <div className="apple-profile-cred-col">
              <div className="apple-memo-heading" style={{ marginBottom: '14px' }}>
                ACADEMIC EXCELLENCE &amp; PROFESSIONAL CREDENTIALS
              </div>

              {/* Education Box */}
              <div className="apple-cred-card" style={{ borderLeft: '2px solid #2997FF', marginBottom: '14px' }}>
                <div className="apple-cred-icon-wrap">
                  <GraduationCap size={20} />
                </div>
                <div className="apple-cred-content">
                  <div className="apple-cred-title">{profileData.education.institution}</div>
                  <div className="apple-cred-sub">{profileData.education.degree}</div>
                  <div className="apple-cred-grade">
                    {profileData.education.grade}
                  </div>
                  <div className="apple-cred-meta">
                    {profileData.education.period} • {profileData.education.location}
                  </div>
                </div>
              </div>

              {/* Credentials List */}
              <div className="apple-cred-list">
                {profileData.credentials.map((cred, idx) => (
                  <div key={idx} className="apple-cred-card">
                    <div className="apple-cred-icon-wrap">
                      <Award size={18} />
                    </div>
                    <div className="apple-cred-content">
                      <div className="apple-cred-title">{cred.title}</div>
                      <div className="apple-cred-sub">{cred.issuer} • {cred.year}</div>
                      <div className="apple-cred-desc">{cred.desc}</div>
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
