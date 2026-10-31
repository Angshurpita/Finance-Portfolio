import React, { useState } from 'react';
import { X, ExternalLink, Download, ShieldCheck, CheckCircle2, AlertTriangle, FileSpreadsheet, Layers, BarChart2, Table } from 'lucide-react';

export const DealModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('memo');

  if (!project) return null;

  return (
    <div className="modal-overlay" id="deal-modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Sticky Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <div className="modal-badge-row">
              <span className="deal-number-badge">PROJECT {project.projectNumber}</span>
              <span className="deal-category-badge lbo">{project.category}</span>
              <span className="status-badge pass">
                <CheckCircle2 size={12} />
                <span>INTEGRITY PASS</span>
              </span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">
              {project.ticker} • {project.sector} • As of {project.valuationDate}
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} id="modal-close-button">
            <X size={18} />
          </button>
        </div>

        {/* Verification Banner with Direct Links */}
        <div className="modal-verification-banner">
          <div className="verification-text">
            <ShieldCheck size={18} className="text-emerald" />
            <span>
              <strong>Verified Master Model:</strong> Fully formulaic spreadsheet underwritten by Angshurpita Ganguly.
            </span>
          </div>
          <div className="verification-actions">
            <a
              href={project.sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald btn-sm"
              id="modal-verify-sheet-btn"
            >
              <ExternalLink size={14} />
              <span>Open in Google Sheets ↗</span>
            </a>
            <a
              href={project.downloadUrl}
              download
              className="btn btn-secondary btn-sm"
              id="modal-download-xlsx-btn"
            >
              <Download size={14} />
              <span>Download Excel (.xlsx)</span>
            </a>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-nav-tabs">
          <button
            className={`modal-tab-btn ${activeTab === 'memo' ? 'active' : ''}`}
            onClick={() => setActiveTab('memo')}
            id="modal-tab-memo"
          >
            Executive Underwriting Memo
          </button>
          {project.financialTable && (
            <button
              className={`modal-tab-btn ${activeTab === 'financials' ? 'active' : ''}`}
              onClick={() => setActiveTab('financials')}
              id="modal-tab-financials"
            >
              Financial Projections
            </button>
          )}
          {(project.sourcesAndUses || project.valuationBridge || project.debtStructure || project.peerTable) && (
            <button
              className={`modal-tab-btn ${activeTab === 'structure' ? 'active' : ''}`}
              onClick={() => setActiveTab('structure')}
              id="modal-tab-structure"
            >
              {project.sourcesAndUses ? 'Sources & Uses / Capital Structure' : 'Valuation Methodology & Bridge'}
            </button>
          )}
          {project.sensitivityGrid && (
            <button
              className={`modal-tab-btn ${activeTab === 'sensitivity' ? 'active' : ''}`}
              onClick={() => setActiveTab('sensitivity')}
              id="modal-tab-sensitivity"
            >
              2D Sensitivity Matrix
            </button>
          )}
          <button
            className={`modal-tab-btn ${activeTab === 'audit' ? 'active' : ''}`}
            onClick={() => setActiveTab('audit')}
            id="modal-tab-audit"
          >
            Model Integrity &amp; Checks (PASS)
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {/* TAB 1: EXECUTIVE MEMO */}
          {activeTab === 'memo' && (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ color: 'var(--gold-light)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  CORE INVESTMENT THESIS &amp; UNDERWRITING FRAMEWORK
                </h4>
                <p style={{ fontSize: '0.96rem', color: '#E2E8F0', lineHeight: '1.7' }}>
                  {project.thesis}
                </p>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  SENIOR REVIEW MEMORANDUM &amp; KEY DIAGNOSTICS
                </h4>
                <div className="memo-list">
                  {project.executiveSummary.map((point, idx) => (
                    <div key={idx} className="memo-item">
                      <span className="memo-bullet">◆</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Stats Grid */}
              <div className="card-metrics-strip" style={{ gridTemplateColumns: 'repeat(4, 1fr)', padding: '18px' }}>
                {Object.entries(project.summaryMetrics).map(([key, val], idx) => {
                  if (key === 'tone' || key === 'badge') return null;
                  return (
                    <div key={idx} className="strip-item">
                      <span className="strip-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="strip-val gold">{val}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: FINANCIAL PROJECTIONS */}
          {activeTab === 'financials' && project.financialTable && (
            <div>
              <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                INTEGRATED MULTI-YEAR PROJECTIONS SCHEDULE
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                All figures dynamically linked to scenario manager.
              </p>
              <div className="fin-table-container">
                <table className="fin-table">
                  <thead>
                    <tr>
                      {project.financialTable.headers.map((h, idx) => (
                        <th key={idx}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.financialTable.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={cIdx > 0 ? 'num' : ''}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SOURCES & USES / VALUATION STRUCTURE */}
          {activeTab === 'structure' && (
            <div>
              {/* If Sources & Uses is present */}
              {project.sourcesAndUses && (
                <div>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                    TRANSACTION CAPITALIZATION &amp; FUNDING WATERFALL
                  </h4>
                  <div className="su-grid">
                    <div className="su-panel">
                      <div className="su-title">SOURCES OF FUNDS ($M)</div>
                      <table className="fin-table">
                        <tbody>
                          {project.sourcesAndUses.sources.map((s, idx) => (
                            <tr key={idx} style={s.isTotal ? { fontWeight: '700', borderTop: '2px solid var(--border-light)' } : s.highlight ? { color: 'var(--gold-light)' } : {}}>
                              <td>{s.item}</td>
                              <td className="num">{s.amount}</td>
                              <td className="num" style={{ color: 'var(--text-muted)' }}>{s.pct}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="su-panel">
                      <div className="su-title">USES OF FUNDS ($M)</div>
                      <table className="fin-table">
                        <tbody>
                          {project.sourcesAndUses.uses.map((u, idx) => (
                            <tr key={idx} style={u.isTotal ? { fontWeight: '700', borderTop: '2px solid var(--border-light)' } : {}}>
                              <td>{u.item}</td>
                              <td className="num">{u.amount}</td>
                              <td className="num" style={{ color: 'var(--text-muted)' }}>{u.pct}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* If Returns Bridge is present */}
              {project.returnsBridge && (
                <div style={{ marginTop: '28px' }}>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                    SPONSOR RETURNS &amp; EXIT WATERFALL
                  </h4>
                  <div className="fin-table-container">
                    <table className="fin-table">
                      <tbody>
                        {project.returnsBridge.map((item, idx) => (
                          <tr key={idx} style={item.highlight ? { background: 'rgba(212, 175, 55, 0.1)', fontWeight: '700', color: 'var(--gold-light)' } : {}}>
                            <td>{item.step}</td>
                            <td className="num">{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If Valuation Bridge is present */}
              {project.valuationBridge && (
                <div>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                    ENTERPRISE VALUE TO EQUITY VALUE BRIDGE
                  </h4>
                  <div className="fin-table-container">
                    <table className="fin-table">
                      <tbody>
                        {project.valuationBridge.map((item, idx) => (
                          <tr key={idx} style={item.highlight ? { background: 'rgba(212, 175, 55, 0.15)', fontWeight: '700', color: 'var(--gold-light)' } : {}}>
                            <td>{item.step}</td>
                            <td className="num">{item.value}</td>
                            {item.pct && <td className="num" style={{ color: 'var(--text-muted)' }}>{item.pct}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If Debt Schedule is present */}
              {project.debtSchedule && (
                <div style={{ marginTop: '28px' }}>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                    DEBT AMORTIZATION SCHEDULE &amp; CASH SWEEP PAYDOWN
                  </h4>
                  <div className="fin-table-container">
                    <table className="fin-table">
                      <thead>
                        <tr>
                          {project.debtSchedule.headers.map((h, idx) => (
                            <th key={idx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {project.debtSchedule.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={cIdx > 0 ? 'num' : ''}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If Peer Comps Table is present */}
              {project.peerTable && (
                <div>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                    PUBLIC COMPARABLE COMPANIES BENCHMARK MATRIX
                  </h4>
                  <div className="fin-table-container">
                    <table className="fin-table">
                      <thead>
                        <tr>
                          {project.peerTable.headers.map((h, idx) => (
                            <th key={idx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {project.peerTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={rIdx === 0 ? { background: 'rgba(212, 175, 55, 0.08)', fontWeight: '600' } : {}}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={cIdx > 1 ? 'num' : ''}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: SENSITIVITY MATRIX */}
          {activeTab === 'sensitivity' && project.sensitivityGrid && (
            <div>
              <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                {project.sensitivityGrid.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Columns: {project.sensitivityGrid.colHeader} | Rows: {project.sensitivityGrid.rowHeader}
              </p>

              <div className="fin-table-container">
                <table className="heatmap-table">
                  <thead>
                    <tr>
                      <th style={{ background: 'var(--bg-secondary)' }}>
                        {project.sensitivityGrid.rowHeader} \ {project.sensitivityGrid.colHeader}
                      </th>
                      {project.sensitivityGrid.cols.map((col, idx) => (
                        <th key={idx}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.sensitivityGrid.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td style={{ fontWeight: '700', background: 'var(--bg-tertiary)', textAlign: 'left' }}>
                          {row.label}
                        </td>
                        {row.values.map((val, cIdx) => {
                          const isBase = row.isBase && cIdx === 2; // Midpoint base case
                          return (
                            <td key={cIdx} className={`heatmap-cell ${isBase ? 'base-case' : ''}`}>
                              {val} {isBase && <span style={{ fontSize: '0.68rem', display: 'block', color: 'var(--gold-light)' }}>(Base)</span>}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {project.sensitivityGrid.note && (
                <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderLeft: '3px solid var(--gold-primary)', fontSize: '0.82rem', color: '#94A3B8' }}>
                  <strong>Sensitivity Insight:</strong> {project.sensitivityGrid.note}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: INTEGRITY CHECKS & SOURCES */}
          {activeTab === 'audit' && (
            <div>
              <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                MODEL AUDIT INTEGRITY &amp; DISCLOSURE RECONCILIATION
              </h4>
              <div className="fin-table-container">
                <table className="fin-table">
                  <thead>
                    <tr>
                      <th>Integrity Check Description</th>
                      <th>Tolerance / Threshold</th>
                      <th>Audit Result Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.auditChecks.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.check}</td>
                        <td className="num">{item.result}</td>
                        <td>
                          <span className="status-badge pass">
                            <CheckCircle2 size={12} />
                            <span>{item.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <h5 style={{ color: '#E2E8F0', fontSize: '0.86rem', marginBottom: '8px' }}>
                  Auditing Standard &amp; Verification Procedures:
                </h5>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  This financial model strictly enforces double-entry balance sheet equilibrium, zero formulaic hardcoding in downstream schedules, and dynamic scenario selectors. Every historical data point is referenced directly from SEC Form 10-K filings, annual investor presentations, and audited financial statements.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
