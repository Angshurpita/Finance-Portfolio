import React from 'react';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = ({ onOpenCv }) => {
  return (
    <footer className="apple-footer" id="footer">
      <div className="apple-container">
        <div className="apple-footer-top">
          <div className="apple-footer-brand-col">
            <div className="apple-footer-monogram-row">
              <div className="apple-monogram" style={{ width: '28px', height: '28px', fontSize: '0.82rem' }}>AG</div>
              <span className="apple-footer-brand-name">{profileData.name}</span>
            </div>
            <p className="apple-footer-brand-desc">
              Targeting Investment Banking, Private Equity, and M&amp;A / Valuation Analyst opportunities. Prepared with institutional rigor, triple-statement tie-outs, and Wall Street modeling standards.
            </p>
          </div>

          <div className="apple-footer-links-col">
            <div className="apple-footer-heading">Navigation</div>
            <ul className="apple-footer-list">
              <li><a href="#models">Financial Models ({projectsData.length})</a></li>
              <li><a href="#methodology">Modeling Standards</a></li>
              <li><a href="#profile">Candidate Profile</a></li>
            </ul>
          </div>

          <div className="apple-footer-links-col">
            <div className="apple-footer-heading">Live Verification</div>
            <ul className="apple-footer-list">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-inline-link"
                >
                  <span>AES Corp LBO Sheet</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1XYt4_8lUHFFoRVV0Ui3mdQkX0jxMf_eX/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-inline-link"
                >
                  <span>Infosys DCF Sheet</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1IUe0UQRZvAz-o12iACFCWCSIvDbdC8V1/edit?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-inline-link"
                >
                  <span>PFC &amp; REC Merger Sheet</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCv}
                  className="apple-inline-link"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: 'inherit' }}
                >
                  <span>Angshurpita Ganguly CV (.pdf)</span>
                  <ArrowUpRight size={12} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="apple-footer-disclaimer">
          <strong>BASIS OF PREPARATION &amp; INSTITUTIONAL DISCLAIMER:</strong> The financial models, LBO schedules, discounted cash flow valuations, and trading multiples presented across this portfolio website were independently constructed by Angshurpita Ganguly from publicly available SEC Form 10-K filings, annual reports, investor presentations, and market benchmarks for job application and financial modeling evaluation purposes. They do not constitute formal investment advice, tax counseling, fairness opinions, or solicitations to buy or sell securities. All checks across sources and uses, debt schedules, and balance sheets are verified to PASS.
        </div>

        <div className="apple-footer-bottom">
          <div>
            © {CURRENT_YEAR} Angshurpita Ganguly • Investment Banking Portfolio • Ready for Vercel Deployment
          </div>
          <div className="apple-status-pass">
            <ShieldCheck size={14} />
            <span>All {projectsData.length} Models Formulaically Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
