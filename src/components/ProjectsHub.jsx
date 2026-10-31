import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Download, Eye, LayoutGrid, TableProperties, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProjectsHub = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'LBO') return p.category.includes('LBO');
    if (filter === 'DCF') return p.category.includes('DCF');
    if (filter === 'COMPS') return p.category.includes('Trading Comps');
    if (filter === 'OPERATING') return p.category.includes('3-Statement');
    return true;
  });

  return (
    <section className="projects-section" id="models">
      <div className="section-container">
        <div className="section-header">
          <div>
            <div className="section-tag">
              <ShieldCheck size={14} />
              <span>Institutional Transaction Ledger</span>
            </div>
            <h2 className="section-title">Underwritten Financial Models (6)</h2>
            <p className="section-desc">
              All 6 financial models are accessible via direct Google Sheets links for live formula audit and downloadable as raw Excel (.xlsx) workbooks.
            </p>
          </div>

          <div className="controls-bar" style={{ marginBottom: 0 }}>
            <div className="filter-tabs">
              <button
                className={`filter-btn ${filter === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilter('ALL')}
                id="filter-btn-all"
              >
                All Models ({projectsData.length})
              </button>
              <button
                className={`filter-btn ${filter === 'LBO' ? 'active' : ''}`}
                onClick={() => setFilter('LBO')}
                id="filter-btn-lbo"
              >
                LBO &amp; Buyouts (2)
              </button>
              <button
                className={`filter-btn ${filter === 'DCF' ? 'active' : ''}`}
                onClick={() => setFilter('DCF')}
                id="filter-btn-dcf"
              >
                DCF &amp; Intrinsic (2)
              </button>
              <button
                className={`filter-btn ${filter === 'COMPS' ? 'active' : ''}`}
                onClick={() => setFilter('COMPS')}
                id="filter-btn-comps"
              >
                Trading Comps (1)
              </button>
              <button
                className={`filter-btn ${filter === 'OPERATING' ? 'active' : ''}`}
                onClick={() => setFilter('OPERATING')}
                id="filter-btn-operating"
              >
                3-Statement &amp; Debt (1)
              </button>
            </div>

            <div className="view-mode-toggle">
              <button
                className={`view-toggle-btn ${viewMode === 'cards' ? 'active' : ''}`}
                onClick={() => setViewMode('cards')}
                id="view-toggle-cards"
                title="Tombstone Cards View"
              >
                <LayoutGrid size={14} />
                <span>Cards</span>
              </button>
              <button
                className={`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
                id="view-toggle-table"
                title="League Table View"
              >
                <TableProperties size={14} />
                <span>League Table</span>
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="projects-grid" id="models-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card" id={`project-card-${project.projectNumber}`}>
                <div className="card-top">
                  <div className="card-meta-row">
                    <span className="deal-number-badge">PROJECT #{project.projectNumber}</span>
                    <span
                      className={`deal-category-badge ${
                        project.category.includes('LBO')
                          ? 'lbo'
                          : project.category.includes('DCF')
                          ? 'dcf'
                          : project.category.includes('Comps')
                          ? 'comps'
                          : 'operating'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-ticker-tag">
                    {project.ticker} • {project.sector}
                  </div>

                  <p className="project-thesis">{project.thesis}</p>

                  <div className="card-metrics-strip">
                    <div className="strip-item">
                      <span className="strip-label">Primary Metric / Return</span>
                      <span
                        className={`strip-val ${
                          project.summaryMetrics.tone === 'positive'
                            ? 'emerald'
                            : project.summaryMetrics.tone === 'gold'
                            ? 'gold'
                            : project.summaryMetrics.tone === 'negative'
                            ? 'rose'
                            : ''
                        }`}
                      >
                        {project.summaryMetrics.headline}
                      </span>
                    </div>

                    <div className="strip-item">
                      <span className="strip-label">Transaction Assessment</span>
                      <span className="strip-val" style={{ fontSize: '0.92rem', color: '#CBD5E1' }}>
                        {project.summaryMetrics.badge}
                      </span>
                    </div>

                    <div className="strip-item">
                      <span className="strip-label">Sector / Benchmark</span>
                      <span className="strip-val" style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                        {project.company}
                      </span>
                    </div>

                    <div className="strip-item">
                      <span className="strip-label">Integrity Status</span>
                      <span className="status-badge pass" style={{ marginTop: '4px', width: 'fit-content' }}>
                        <CheckCircle2 size={12} />
                        <span>CHECKS PASS</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-actions-footer">
                  <div className="card-link-buttons">
                    <a
                      href={project.sheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link-btn sheet"
                      id={`card-sheet-btn-${project.projectNumber}`}
                    >
                      <ExternalLink size={13} />
                      <span>Verify in Google Sheets ↗</span>
                    </a>
                    <a
                      href={project.downloadUrl}
                      download
                      className="card-link-btn excel"
                      id={`card-download-btn-${project.projectNumber}`}
                    >
                      <Download size={13} />
                      <span>Excel (.xlsx)</span>
                    </a>
                  </div>

                  <button
                    className="inspect-btn"
                    onClick={() => onSelectProject(project)}
                    id={`card-inspect-btn-${project.projectNumber}`}
                  >
                    <Eye size={14} />
                    <span>Inspect Model &amp; Diligence Memo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="table-view-container" id="league-table-view">
            <table className="league-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Company &amp; Ticker</th>
                  <th>Model Methodology</th>
                  <th>Sector</th>
                  <th>Key Metric / Output</th>
                  <th>Audit Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((p) => (
                  <tr key={p.id} id={`league-row-${p.projectNumber}`}>
                    <td className="num" style={{ fontWeight: '700' }}>#{p.projectNumber}</td>
                    <td>
                      <div style={{ fontWeight: '600', color: '#FFF' }}>{p.company}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--gold-primary)' }}>
                        {p.ticker}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`deal-category-badge ${
                          p.category.includes('LBO') ? 'lbo' : p.category.includes('DCF') ? 'dcf' : 'comps'
                        }`}
                      >
                        {p.category}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{p.sector}</td>
                    <td>
                      <div style={{ fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--gold-light)' }}>
                        {p.summaryMetrics.headline}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {p.summaryMetrics.badge}
                      </div>
                    </td>
                    <td>
                      <span className="status-badge pass">
                        <CheckCircle2 size={12} />
                        <span>100% PASS</span>
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px' }}>
                        <a
                          href={p.sheetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-emerald btn-sm"
                          title="Open Google Sheet"
                        >
                          <ExternalLink size={12} />
                          <span>Verify</span>
                        </a>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => onSelectProject(p)}
                          title="Inspect Details"
                        >
                          <Eye size={12} />
                          <span>Memo</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
