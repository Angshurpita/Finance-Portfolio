import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { GraduationCap, Award, Briefcase, Mail, Phone, MapPin, Download, Check, Copy } from 'lucide-react';

export const ProfileSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="profile-section" id="profile">
      <div className="section-container">
        <div className="profile-card-main">
          <div className="profile-inner-grid">
            {/* Left Column: Bio & Core Info */}
            <div className="profile-bio-col">
              <div className="section-tag">
                <GraduationCap size={14} />
                <span>Candidate Background</span>
              </div>
              <h3>{profileData.name}</h3>
              <p className="role-subtitle">{profileData.title}</p>
              <p className="bio-text">{profileData.bio}</p>

              {/* Contact Information & Action */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94A3B8', fontSize: '0.86rem' }}>
                  <MapPin size={15} color="var(--gold-primary)" />
                  <span>{profileData.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94A3B8', fontSize: '0.86rem' }}>
                  <Phone size={15} color="var(--gold-primary)" />
                  <span>{profileData.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94A3B8', fontSize: '0.86rem' }}>
                  <Mail size={15} color="var(--gold-primary)" />
                  <span>{profileData.email}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={profileData.resumePdfUrl}
                  download="Angshurpita_Ganguly_Finance_CV.pdf"
                  className="btn btn-primary"
                  id="profile-download-cv-btn"
                >
                  <Download size={15} />
                  <span>Download Finance CV (.pdf)</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  id="profile-copy-email-btn"
                >
                  {copiedEmail ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Education & Credentials */}
            <div className="profile-cred-col">
              <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                ACADEMIC EXCELLENCE &amp; PROFESSIONAL PREPARATION
              </h4>

              {/* Education Box */}
              <div className="credential-item" style={{ borderLeft: '3px solid var(--gold-primary)', marginBottom: '16px' }}>
                <div className="cred-icon-box">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="cred-title">{profileData.education.institution}</div>
                  <div className="cred-issuer">{profileData.education.degree}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: '700', color: 'var(--emerald-light)', margin: '4px 0' }}>
                    {profileData.education.grade}
                  </div>
                  <div className="cred-desc">
                    {profileData.education.period} • {profileData.education.location}
                  </div>
                </div>
              </div>

              {/* Credentials List */}
              <div className="credentials-list">
                {profileData.credentials.map((cred, idx) => (
                  <div key={idx} className="credential-item">
                    <div className="cred-icon-box">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="cred-title">{cred.title}</div>
                      <div className="cred-issuer">{cred.issuer} • {cred.year}</div>
                      <div className="cred-desc">{cred.desc}</div>
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
