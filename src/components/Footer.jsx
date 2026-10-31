import React from 'react';
import { profileData } from '../data/profileData';
import { ShieldCheck, ExternalLink, Download } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div className="crest-icon" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>AG</div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: '700', color: '#FFF' }}>
                {profileData.name}
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#94A3B8', maxWidth: '420px', lineHeight: '1.6' }}>
              Targeting Investment Banking, Private Equity, and M&amp;A / Valuation Analyst opportunities. Prepared with institutional rigor, triple-statement tie-outs, and Wall Street modeling standards.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#FFF', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Quick Navigation
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem' }}>
              <li><a href="#models" style={{ color: '#94A3B8', textDecoration: 'none' }}>Underwritten Models (6)</a></li>
              <li><a href="#sandbox" style={{ color: '#94A3B8', textDecoration: 'none' }}>LBO &amp; Valuation Simulator</a></li>
              <li><a href="#methodology" style={{ color: '#94A3B8', textDecoration: 'none' }}>Modeling Methodology</a></li>
              <li><a href="#profile" style={{ color: '#94A3B8', textDecoration: 'none' }}>Candidate Profile &amp; CV</a></li>
            </ul>
          </div>

          <div>
            <h5 style={{ color: '#FFF', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Direct Verification
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem' }}>
              <a
                href="https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--emerald-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Master AES LBO Spreadsheet</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/1XYt4_8lUHFFoRVV0Ui3mdQkX0jxMf_eX/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--emerald-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Master Infosys DCF Spreadsheet</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={profileData.resumePdfUrl}
                download
                style={{ color: 'var(--gold-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}
              >
                <span>Download Finance CV (.pdf)</span>
                <Download size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-disclaimer">
          <strong>BASIS OF PREPARATION &amp; INSTITUTIONAL DISCLAIMER:</strong> The financial models, LBO schedules, discounted cash flow valuations, and trading multiples presented across this portfolio website were independently constructed by Angshurpita Ganguly from publicly available SEC Form 10-K filings, annual reports, investor presentations, and market benchmarks for job application and financial modeling evaluation purposes. They do not constitute formal investment advice, tax counseling, fairness opinions, or solicitations to buy or sell securities. All checks across sources and uses, debt schedules, and balance sheets are verified to PASS.
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Angshurpita Ganguly • Investment Banking Portfolio • Ready for Vercel Deployment
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--emerald-light)' }}>
            <ShieldCheck size={14} />
            <span>All 6 Models Formulaically Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
