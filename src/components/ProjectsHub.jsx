import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Download, ArrowUpRight, LayoutGrid, TableProperties, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
    <section className="apple-section" id="models">
      <div className="apple-container">
        <div className="apple-section-header">
          <div>
            <div className="apple-section-eyebrow">
              <ShieldCheck size={14} />
              <span>TRANSACTION DIRECTORY</span>
            </div>
            <h2 className="apple-section-title">Underwritten Financial Models (6)</h2>
            <p className="apple-section-desc">
              All six financial models are accessible via direct Google Sheets links for real-time formula verification and downloadable as standalone Excel workbooks.
            </p>
          </div>

          <div className="apple-controls-bar">
            <div className="apple-filter-tabs">
              <button
                className={`apple-filter-pill ${filter === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilter('ALL')}
                id="filter-btn-all"
              >
                All Models ({projectsData.length})
              </button>
              <button
                className={`apple-filter-pill ${filter === 'LBO' ? 'active' : ''}`}
                onClick={() => setFilter('LBO')}
                id="filter-btn-lbo"
              >
                LBO &amp; Buyouts (2)
              </button>
              <button
                className={`apple-filter-pill ${filter === 'DCF' ? 'active' : ''}`}
                onClick={() => setFilter('DCF')}
                id="filter-btn-dcf"
              >
                DCF &amp; Intrinsic (2)
              </button>
              <button
                className={`apple-filter-pill ${filter === 'COMPS' ? 'active' : ''}`}
                onClick={() => setFilter('COMPS')}
                id="filter-btn-comps"
              >
                Trading Comps (1)
              </button>
              <button
                className={`apple-filter-pill ${filter === 'OPERATING' ? 'active' : ''}`}
                onClick={() => setFilter('OPERATING')}
                id="filter-btn-operating"
              >
                3-Statement Operating (1)
              </button>
            </div>

            <div className="apple-view-toggle">
              <button
                className={`apple-view-btn ${viewMode === 'cards' ? 'active' : ''}`}
                onClick={() => setViewMode('cards')}
                id="view-toggle-cards"
                title="3D Liquid Glass Cards View"
              >
                <LayoutGrid size={14} />
                <span>Cards</span>
              </button>
              <button
                className={`apple-view-btn ${viewMode === 'table' ? 'active' : ''}`}
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
          <div className="apple-cards-grid" id="models-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="apple-card-3d" id={`project-card-${project.projectNumber}`}>
                <div className="apple-card-inner">
                  {/* Top Bar */}
                  <div className="apple-card-top-bar">
                    <span className="apple-card-num-tag">DEAL #{project.projectNumber}</span>
                    <span className="apple-card-category-tag">{project.category}</span>
                  </div>

                  {/* Header */}
                  <h3 className="apple-card-title">{project.title}</h3>
                  <div className="apple-card-ticker-row">
                    <span className="apple-card-ticker">{project.ticker}</span>
                    <span className="apple-card-sector">• {project.sector}</span>
                  </div>

                  {/* Thesis */}
                  <p className="apple-card-thesis">{project.thesis}</p>

                  {/* Key Metrics Glass Panel */}
                  <div className="apple-card-metrics-glass">
                    <div className="apple-metric-tile">
                      <span className="apple-tile-label">Primary Return / Metric</span>
                      <span
                        className={`apple-tile-val ${
                          project.summaryMetrics.tone === 'positive'
                            ? 'accent-green'
                            : project.summaryMetrics.tone === 'negative'
                            ? 'accent-red'
                            : 'accent-blue'
                        }`}
                      >
                        {project.summaryMetrics.headline}
                      </span>
                    </div>

                    <div className="apple-metric-tile">
                      <span className="apple-tile-label">Assessment</span>
                      <span className="apple-tile-val" style={{ fontSize: '0.88rem', color: '#E5E5EA' }}>
                        {project.summaryMetrics.badge}
                      </span>
                    </div>

                    <div className="apple-metric-tile">
                      <span className="apple-tile-label">Target Asset</span>
                      <span className="apple-tile-val" style={{ fontSize: '0.82rem', color: '#86868B' }}>
                        {project.company}
                      </span>
                    </div>

                    <div className="apple-metric-tile">
                      <span className="apple-tile-label">Integrity Status</span>
                      <div className="apple-status-pass" style={{ marginTop: '2px' }}>
                        <CheckCircle2 size={12} />
                        <span>CHECKS PASS</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="apple-card-footer">
                    <div className="apple-card-links-row">
                      <a
                        href={project.sheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-pill-btn apple-pill-sheet"
                        id={`card-sheet-btn-${project.projectNumber}`}
                      >
                        <span>Verify in Sheets</span>
                        <ArrowUpRight size={13} />
                      </a>
                      <a
                        href={project.downloadUrl}
                        download
                        className="apple-pill-btn apple-pill-excel"
                        id={`card-download-btn-${project.projectNumber}`}
                      >
                        <Download size={13} />
                        <span>Excel (.xlsx)</span>
                      </a>
                    </div>

                    <button
                      className="apple-pill-btn apple-pill-inspect"
                      onClick={() => onSelectProject(project)}
                      id={`card-inspect-btn-${project.projectNumber}`}
                    >
                      <span>Inspect Model &amp; Diligence Memo</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="apple-table-glass-wrap" id="league-table-view">
            <table className="apple-league-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Company &amp; Ticker</th>
                  <th>Methodology</th>
                  <th>Sector</th>
                  <th>Key Metric / Output</th>
                  <th>Audit Check</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((p) => (
                  <tr key={p.id} id={`league-row-${p.projectNumber}`}>
                    <td className="num">#{p.projectNumber}</td>
                    <td>
                      <div style={{ fontWeight: '600', color: '#F5F5F7' }}>{p.company}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#86868B' }}>
                        {p.ticker}
                      </div>
                    </td>
                    <td>
                      <span className="apple-table-category-tag">{p.category}</span>
                    </td>
                    <td style={{ color: '#86868B' }}>{p.sector}</td>
                    <td>
                      <div style={{ fontWeight: '600', color: '#2997FF', fontFamily: 'var(--font-mono)' }}>
                        {p.summaryMetrics.headline}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#86868B' }}>
                        {p.summaryMetrics.badge}
                      </div>
                    </td>
                    <td>
                      <span className="apple-status-pass">
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
                          className="apple-btn-secondary apple-btn-xs"
                          title="Open Google Sheet"
                        >
                          <span>Sheets</span>
                          <ArrowUpRight size={12} />
                        </a>
                        <button
                          className="apple-btn-primary apple-btn-xs"
                          onClick={() => onSelectProject(p)}
                          title="Inspect Details"
                        >
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
