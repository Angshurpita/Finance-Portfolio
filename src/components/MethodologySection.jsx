import React from 'react';
import { Cpu, ShieldCheck, Workflow, GitBranch, Database, FileCheck } from 'lucide-react';

export const MethodologySection = () => {
  const standards = [
    {
      icon: <Workflow size={20} />,
      title: "Dynamic Scenario Architecture",
      desc: "All forecast drivers are orchestrated via centralized scenario switches (Base / Best / Worst). Changing a single input cell dynamically cascades through operating models, debt schedules, returns waterfalls, and sensitivity tables with zero circular references."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Three-Statement Equilibrium",
      desc: "Strict adherence to double-entry mechanics. Every year-end balance sheet ties out automatically ($0.00 difference). Integrated cash flow reconciles net income, working capital changes, capex, and debt amortizations to closing cash."
    },
    {
      icon: <GitBranch size={20} />,
      title: "Multi-Tranche Debt Waterfalls & Sweeps",
      desc: "Sizing and modeling senior secured credit facilities, term loans, high-yield notes, and revolving lines of credit. Models calculate mandatory amortizations, cash sweeps, interest rate floors, and parent net leverage covenants."
    },
    {
      icon: <Cpu size={20} />,
      title: "HLBV Tax-Equity & Project Finance",
      desc: "Advanced institutional structuring separating parent recourse debt from asset-level non-recourse project loans. Accurately factors partnership tax-equity contributions and noncontrolling interest earnings under HLBV conventions."
    },
    {
      icon: <Database size={20} />,
      title: "DCF & Relative Valuation Triangulation",
      desc: "Unlevered Free Cash Flow (UFCF) projections discounted via rigorous CAPM-derived WACC. Terminal values are modeled via Gordon Growth and cross-checked against peer trading multiples (EV/EBITDA, P/E, EV/Sales) to isolate valuation dislocations."
    },
    {
      icon: <FileCheck size={20} />,
      title: "SEC Form 10-K & Source Documentation",
      desc: "Every historical baseline input is footnoted and reconciled against official audited filings (Form 10-K Item 7 MD&A, Item 8 Financial Statements, Debt and Segment Disclosures). Zero speculative or untraced historical figures."
    }
  ];

  return (
    <section className="apple-section" id="methodology">
      <div className="apple-container">
        <div className="apple-section-header">
          <div>
            <div className="apple-section-eyebrow">
              <Cpu size={14} />
              <span>UNDERWRITING INTEGRITY</span>
            </div>
            <h2 className="apple-section-title">Financial Modeling Standards</h2>
            <p className="apple-section-desc">
              Constructed in accordance with Wall Street investment banking guidelines and FAST financial modeling standards for transaction execution, private equity underwriting, and fairness opinions.
            </p>
          </div>
        </div>

        <div className="apple-grid-3col">
          {standards.map((std, idx) => (
            <div key={idx} className="apple-method-card">
              <div className="apple-method-icon-wrap">{std.icon}</div>
              <h3 className="apple-method-title">{std.title}</h3>
              <p className="apple-method-desc">{std.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
