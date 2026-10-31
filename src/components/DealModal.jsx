import React, { useState } from 'react';
import { X, ExternalLink, Download, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const DealModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('memo');

  if (!project) return null;

  return (
    <div className="apple-modal-overlay" id="deal-modal-overlay" onClick={onClose}>
      <div className="apple-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Header */}
        <div className="apple-modal-header">
          <div className="apple-modal-title-col">
            <div className="apple-modal-eyebrow-row">
              <span className="apple-card-num-tag">PROJECT #{project.projectNumber}</span>
              <span className="apple-card-category-tag">{project.category}</span>
              <div className="apple-status-pass">
                <CheckCircle2 size={12} />
                <span>INTEGRITY PASS</span>
              </div>
            </div>
            <h2 className="apple-modal-title">{project.title}</h2>
            <div className="apple-modal-meta">
              {project.ticker} • {project.sector} • Valuation Date: {project.valuationDate}
            </div>
          </div>

          <button className="apple-modal-close" onClick={onClose} id="modal-close-button">
            <X size={16} />
          </button>
        </div>

        {/* Verification Action Bar */}
        <div className="apple-modal-verify-bar">
          <div className="apple-verify-note">
            <ShieldCheck size={16} className="accent-green" />
            <span>
              <strong>Verified Master Model:</strong> Audited formulaic spreadsheet prepared by Angshurpita Ganguly.
            </span>
          </div>

          <div className="apple-verify-buttons">
            <a
              href={project.sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary apple-btn-sm"
              id="modal-verify-sheet-btn"
            >
              <span>Open in Google Sheets</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href={project.downloadUrl}
              download
              className="apple-btn-primary apple-btn-sm"
              id="modal-download-xlsx-btn"
            >
              <Download size={13} />
              <span>Download Excel (.xlsx)</span>
            </a>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="apple-modal-tabs">
          <button
            className={`apple-modal-tab-pill ${activeTab === 'memo' ? 'active' : ''}`}
            onClick={() => setActiveTab('memo')}
            id="modal-tab-memo"
          >
            Executive Memo
          </button>
          {project.financialTable && (
            <button
              className={`apple-modal-tab-pill ${activeTab === 'financials' ? 'active' : ''}`}
              onClick={() => setActiveTab('financials')}
              id="modal-tab-financials"
            >
              Financial Projections
            </button>
          )}
          {(project.sourcesAndUses || project.valuationBridge || project.debtStructure || project.peerTable) && (
            <button
              className={`apple-modal-tab-pill ${activeTab === 'structure' ? 'active' : ''}`}
              onClick={() => setActiveTab('structure')}
              id="modal-tab-structure"
            >
              {project.sourcesAndUses ? 'Sources & Uses / Capital Structure' : 'Valuation Methodology'}
            </button>
          )}
          {project.sensitivityGrid && (
            <button
              className={`apple-modal-tab-pill ${activeTab === 'sensitivity' ? 'active' : ''}`}
              onClick={() => setActiveTab('sensitivity')}
              id="modal-tab-sensitivity"
            >
              2D Sensitivity Matrix
            </button>
          )}
          <button
            className={`apple-modal-tab-pill ${activeTab === 'audit' ? 'active' : ''}`}
            onClick={() => setActiveTab('audit')}
            id="modal-tab-audit"
          >
            Integrity Checks (PASS)
          </button>
        </div>

        {/* Modal Body */}
        <div className="apple-modal-body">
          {/* TAB 1: EXECUTIVE MEMO */}
          {activeTab === 'memo' && (
            <div>
              <div className="apple-memo-block">
                <div className="apple-memo-heading">UNDERWRITING THESIS &amp; FRAMEWORK</div>
                <p className="apple-memo-lead">{project.thesis}</p>
              </div>

              <div className="apple-memo-block">
                <div className="apple-memo-heading">SENIOR REVIEW MEMORANDUM &amp; INSIGHTS</div>
                <div className="apple-memo-list">
                  {project.executiveSummary.map((item, idx) => (
                    <div key={idx} className="apple-memo-item">
                      <span className="apple-memo-bullet">▪</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics Quick Panel */}
              <div className="apple-memo-metrics-grid">
                {Object.entries(project.summaryMetrics).map(([key, val], idx) => {
                  if (key === 'tone' || key === 'badge') return null;
                  return (
                    <div key={idx} className="apple-memo-metric-item">
                      <span className="apple-memo-metric-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="apple-memo-metric-val">{val}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: FINANCIAL PROJECTIONS */}
          {activeTab === 'financials' && project.financialTable && (
            <div>
              <div className="apple-memo-heading">MULTI-YEAR FORECAST SCHEDULE</div>
              <div className="apple-table-glass-wrap" style={{ marginTop: '12px' }}>
                <table className="apple-league-table">
                  <thead>
                    <tr>
                      {project.financialTable.headers.map((h, idx) => (
                        <th key={idx} style={idx > 0 ? { textAlign: 'right' } : {}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.financialTable.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={cIdx > 0 ? 'num' : ''} style={cIdx > 0 ? { textAlign: 'right' } : {}}>
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

          {/* TAB 3: CAPITAL STRUCTURE / VALUATION */}
          {activeTab === 'structure' && (
            <div>
              {project.sourcesAndUses && (
                <div>
                  <div className="apple-memo-heading">TRANSACTION SOURCES &amp; USES ($M)</div>
                  <div className="apple-su-grid" style={{ marginTop: '12px' }}>
                    <div className="apple-su-card">
                      <div className="apple-su-title">SOURCES OF FUNDS</div>
                      <table className="apple-league-table">
                        <tbody>
                          {project.sourcesAndUses.sources.map((s, idx) => (
                            <tr key={idx} style={s.isTotal ? { fontWeight: '700', borderTop: '1px solid rgba(255,255,255,0.2)' } : s.highlight ? { color: '#2997FF' } : {}}>
                              <td>{s.item}</td>
                              <td className="num" style={{ textAlign: 'right' }}>{s.amount}</td>
                              <td className="num" style={{ textAlign: 'right', color: '#86868B' }}>{s.pct}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="apple-su-card">
                      <div className="apple-su-title">USES OF FUNDS</div>
                      <table className="apple-league-table">
                        <tbody>
                          {project.sourcesAndUses.uses.map((u, idx) => (
                            <tr key={idx} style={u.isTotal ? { fontWeight: '700', borderTop: '1px solid rgba(255,255,255,0.2)' } : {}}>
                              <td>{u.item}</td>
                              <td className="num" style={{ textAlign: 'right' }}>{u.amount}</td>
                              <td className="num" style={{ textAlign: 'right', color: '#86868B' }}>{u.pct}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {project.returnsBridge && (
                <div style={{ marginTop: '28px' }}>
                  <div className="apple-memo-heading">SPONSOR RETURNS WATERFALL</div>
                  <div className="apple-table-glass-wrap" style={{ marginTop: '12px' }}>
                    <table className="apple-league-table">
                      <tbody>
                        {project.returnsBridge.map((item, idx) => (
                          <tr key={idx} style={item.highlight ? { background: 'rgba(41, 151, 255, 0.1)', fontWeight: '700', color: '#2997FF' } : {}}>
                            <td>{item.step}</td>
                            <td className="num" style={{ textAlign: 'right' }}>{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {project.valuationBridge && (
                <div>
                  <div className="apple-memo-heading">ENTERPRISE VALUE TO EQUITY VALUE BRIDGE</div>
                  <div className="apple-table-glass-wrap" style={{ marginTop: '12px' }}>
                    <table className="apple-league-table">
                      <tbody>
                        {project.valuationBridge.map((item, idx) => (
                          <tr key={idx} style={item.highlight ? { background: 'rgba(41, 151, 255, 0.1)', fontWeight: '700', color: '#2997FF' } : {}}>
                            <td>{item.step}</td>
                            <td className="num" style={{ textAlign: 'right' }}>{item.value}</td>
                            {item.pct && <td className="num" style={{ textAlign: 'right', color: '#86868B' }}>{item.pct}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {project.debtSchedule && (
                <div style={{ marginTop: '28px' }}>
                  <div className="apple-memo-heading">DEBT AMORTIZATION &amp; CASH SWEEP SCHEDULE</div>
                  <div className="apple-table-glass-wrap" style={{ marginTop: '12px' }}>
                    <table className="apple-league-table">
                      <thead>
                        <tr>
                          {project.debtSchedule.headers.map((h, idx) => (
                            <th key={idx} style={idx > 0 ? { textAlign: 'right' } : {}}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {project.debtSchedule.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={cIdx > 0 ? 'num' : ''} style={cIdx > 0 ? { textAlign: 'right' } : {}}>
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

              {project.peerTable && (
                <div>
                  <div className="apple-memo-heading">PEER TRADING COMPARABLES MATRIX</div>
                  <div className="apple-table-glass-wrap" style={{ marginTop: '12px' }}>
                    <table className="apple-league-table">
                      <thead>
                        <tr>
                          {project.peerTable.headers.map((h, idx) => (
                            <th key={idx} style={idx > 1 ? { textAlign: 'right' } : {}}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {project.peerTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={rIdx === 0 ? { background: 'rgba(41, 151, 255, 0.08)', fontWeight: '600' } : {}}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={cIdx > 1 ? 'num' : ''} style={cIdx > 1 ? { textAlign: 'right' } : {}}>
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
              <div className="apple-memo-heading">{project.sensitivityGrid.title}</div>
              <p style={{ fontSize: '0.82rem', color: '#86868B', marginBottom: '14px' }}>
                X-Axis: {project.sensitivityGrid.colHeader} • Y-Axis: {project.sensitivityGrid.rowHeader}
              </p>

              <div className="apple-table-glass-wrap">
                <table className="apple-league-table" style={{ textAlign: 'center' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left' }}>
                        {project.sensitivityGrid.rowHeader} \ {project.sensitivityGrid.colHeader}
                      </th>
                      {project.sensitivityGrid.cols.map((col, idx) => (
                        <th key={idx} style={{ textAlign: 'center' }}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.sensitivityGrid.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td style={{ fontWeight: '600', textAlign: 'left', color: '#F5F5F7' }}>
                          {row.label}
                        </td>
                        {row.values.map((val, cIdx) => {
                          const isBase = row.isBase && cIdx === 2;
                          return (
                            <td
                              key={cIdx}
                              className="num"
                              style={isBase ? { background: 'rgba(41, 151, 255, 0.2)', color: '#2997FF', fontWeight: '700', borderRadius: '4px' } : {}}
                            >
                              {val} {isBase && <span style={{ fontSize: '0.68rem', display: 'block', color: '#86868B' }}>(Base)</span>}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {project.sensitivityGrid.note && (
                <div className="apple-callout-box" style={{ marginTop: '16px' }}>
                  <strong>Diagnostic Note:</strong> {project.sensitivityGrid.note}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: INTEGRITY CHECKS & SOURCES */}
          {activeTab === 'audit' && (
            <div>
              <div className="apple-memo-heading">AUDITED FINANCIAL MODEL CHECKS</div>
              <div className="apple-table-glass-wrap" style={{ marginTop: '12px' }}>
                <table className="apple-league-table">
                  <thead>
                    <tr>
                      <th>Check Description</th>
                      <th style={{ textAlign: 'right' }}>Threshold / Tolerance</th>
                      <th style={{ textAlign: 'right' }}>Audit Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.auditChecks.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.check}</td>
                        <td className="num" style={{ textAlign: 'right' }}>{item.result}</td>
                        <td style={{ textAlign: 'right' }}>
                          <span className="apple-status-pass">
                            <CheckCircle2 size={12} />
                            <span>{item.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="apple-callout-box" style={{ marginTop: '20px' }}>
                <strong>Institutional Underwriting Standard:</strong> Every balance sheet, cash sweep schedule, and valuation bridge in this project ties out mathematically to 0.00 delta across all projection periods. Baseline historical figures are transcribed without bias from audited SEC Form 10-K and annual report disclosures.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
