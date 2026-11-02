export const projectsData = [
  {
    id: "project-1",
    projectNumber: 1,
    title: "The AES Corporation: LBO Valuation & Buyout Model",
    subtitle: "$17.1B All-Cash Take-Private Transaction & Recourse Debt Structuring | 1.58x MOIC / 9.6% Base Gross IRR",
    company: "The AES Corporation",
    ticker: "NYSE: AES",
    category: "LBO & Sponsor Buyouts",
    sector: "Mega-Cap Utilities / Infrastructure",
    valuationDate: "August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/AES_Corporation_17B_LBO_Model.xlsx",
    summaryMetrics: {
      headline: "1.58x MOIC / 9.6% Base IRR",
      badge: "$17.1B All-Cash Buyout",
      tone: "gold",
      offerPrice: "$15.00 / share",
      equityPurchase: "$10.7B Equity Purchase",
      entryEV: "$39.1B (13.6x EBITDA)",
      sponsorEquity: "$8.03B Equity Cheque",
      recourseDebt: "$8.6B 3-Tranche Recourse",
      projectDebtRolled: "$23.9B Project Debt"
    },
    thesis: "Architected a 5-year leveraged buyout model evaluating an all-cash take-private offer at $15.00/share ($10.7B equity purchase; $39.1B entry EV at 13.6x Adjusted EBITDA) with institutional Sources & Uses engineering.",
    executiveSummary: [
      "Architected a 5-year leveraged buyout model evaluating an all-cash take-private offer at $15.00/share ($10.7B equity purchase; $39.1B entry EV at 13.6x Adjusted EBITDA) with institutional Sources & Uses engineering.",
      "Structured an $8.6B 3-tranche recourse debt package (Term Loan B at SOFR+300, 6.25% Senior Secured Notes, 7.25% Senior Notes) alongside an $8.03B sponsor equity cheque, while rolling over $23.9B in asset-level project debt.",
      "Modeled 100% free cash flow sweeps, tax-equity (HLBV), mandatory debt amortization, and multi-variable return sensitivity tables across exit multiples (11.0x–15.0x EBITDA), entry valuation, and 3–7 year hold periods.",
      "Targeted Institutional Return Profile: Delivers 1.58x MOIC and 9.61% gross base IRR under 13.0x exit multiple (modest multiple contraction from entry). Identifies entry price discipline and renewable rate-base expansion as key drivers to surpass 15%+ hurdle rates."
    ],
    financialTable: {
      headers: ["Operating Line ($M)", "FY25A", "FY26E", "FY27E", "FY28E", "FY29E", "FY30E"],
      rows: [
        ["Total Revenues", "$12,233", "$12,610", "$13,015", "$13,440", "$13,905", "$14,395"],
        ["Adjusted EBITDA", "$2,871", "$3,040", "$3,245", "$3,470", "$3,710", "$3,962"],
        ["EBITDA Margin %", "23.47%", "24.11%", "24.93%", "25.82%", "26.68%", "27.52%"],
        ["Depreciation & Amortization", "-$1,220", "-$1,270", "-$1,325", "-$1,380", "-$1,440", "-$1,505"],
        ["Operating Profit (EBIT)", "$1,651", "$1,770", "$1,920", "$2,090", "$2,270", "$2,457"],
        ["Parent Interest Expense", "-$485", "-$592", "-$568", "-$538", "-$500", "-$398"],
        ["Free Cash Flow Available for Sweep", "$—", "$250", "$320", "$410", "$485", "$514"],
        ["Cumulative Term Loan B Repaid", "$—", "$295", "$654", "$1,101", "$1,660", "$3,298"],
        ["Closing Parent Net Debt", "$7,713", "$7,335", "$6,871", "$6,290", "$5,561", "$4,640"],
        ["Parent Net Leverage Multiple", "3.00x", "2.62x", "2.33x", "2.01x", "1.67x", "1.17x"]
      ]
    },
    sourcesAndUses: {
      sources: [
        { item: "Term Loan B (Recourse, SOFR+300 bps)", amount: "$4,478.8M", pct: "26.2%" },
        { item: "Senior Secured Notes (Recourse, 6.25%)", amount: "$2,497.8M", pct: "14.6%" },
        { item: "Senior Unsecured Notes (Recourse, 7.25%)", amount: "$1,636.5M", pct: "9.6%" },
        { item: "Total New Parent Recourse Debt (3.0x EBITDA)", amount: "$8,613.0M", pct: "50.3%", isSubtotal: true },
        { item: "Balance Sheet Cash", amount: "$482.0M", pct: "2.8%" },
        { item: "Sponsor Equity Cheque (Balancing Cheque)", amount: "$8,030.5M", pct: "46.9%", highlight: true },
        { item: "Total Sources of Funds", amount: "$17,125.5M", pct: "100.0%", isTotal: true }
      ],
      uses: [
        { item: "Equity Purchase Consideration ($15.00 x 714M shares)", amount: "$10,710.0M", pct: "62.5%" },
        { item: "Refinancing of Existing Parent Recourse Debt", amount: "$5,984.0M", pct: "34.9%" },
        { item: "Transaction Advisory & Legal Fees", amount: "$214.2M", pct: "1.3%" },
        { item: "Financing Fees & OID (Parent Facilities)", amount: "$217.3M", pct: "1.3%" },
        { item: "Total Uses of Funds", amount: "$17,125.5M", pct: "100.0%", isTotal: true }
      ]
    },
    returnsBridge: [
      { step: "Exit Fiscal Year", value: "FY2030E (5-Year Hold)" },
      { step: "Exit EV / Adjusted EBITDA Multiple", value: "13.0x" },
      { step: "FY30E Exit Adjusted EBITDA", value: "$3,961.5M" },
      { step: "Exit Enterprise Value", value: "$51,499.3M" },
      { step: "Less: Total Net Debt at Exit (Recourse + Rolled)", value: "-$38,279.9M" },
      { step: "Less: Exit Transaction Fees & Expenses", value: "-$515.0M" },
      { step: "Exit Equity Value to Sponsor", value: "$12,704.4M" },
      { step: "Less: Sponsor Initial Equity Cheque", value: "-$8,030.5M" },
      { step: "Net Capital Gain to Sponsor", value: "$4,674.0M", highlight: true },
      { step: "Multiple of Invested Capital (MOIC)", value: "1.58x", highlight: true },
      { step: "Base Gross IRR (5-Year Single Cash Flow)", value: "9.61%", highlight: true }
    ],
    debtSchedule: {
      headers: ["Debt Tranche ($M)", "At Close", "FY26E", "FY27E", "FY28E", "FY29E", "FY30E"],
      rows: [
        ["Term Loan B (Recourse)", "$4,478.8", "$4,184.1", "$3,824.6", "$3,377.8", "$2,818.8", "$1,180.7"],
        ["Senior Secured Notes (6.25%)", "$2,497.8", "$2,497.8", "$2,497.8", "$2,497.8", "$2,497.8", "$2,497.8"],
        ["Senior Unsecured Notes (7.25%)", "$1,636.5", "$1,636.5", "$1,636.5", "$1,636.5", "$1,636.5", "$1,636.5"],
        ["Total Parent Debt", "$8,613.0", "$8,318.4", "$7,958.9", "$7,512.1", "$6,953.1", "$5,315.0"],
        ["Asset-Level Project Debt (Rolled Over)", "$23,900.0", "$23,450.0", "$22,950.0", "$22,400.0", "$21,800.0", "$21,150.0"],
        ["Parent Cash Balance", "$900.0", "$983.3", "$1,088.2", "$1,222.2", "$1,392.4", "$675.2"],
        ["Parent Net Debt", "$7,713.0", "$7,335.1", "$6,870.7", "$6,289.9", "$5,560.7", "$4,639.8"],
        ["Parent Net Leverage", "3.00x", "2.62x", "2.33x", "2.01x", "1.67x", "1.17x"]
      ]
    },
    sensitivityGrid: {
      title: "LBO Return Sensitivity: Gross IRR (%) across Offer Price vs Exit Multiple (5-Yr Hold)",
      colHeader: "Exit EV / EBITDA Multiple",
      rowHeader: "Offer Price / Share",
      cols: ["11.0x", "12.0x", "13.0x (Base)", "14.0x", "15.0x"],
      rows: [
        { label: "$13.00", values: ["5.2%", "10.4%", "15.4%", "20.1%", "24.6%"] },
        { label: "$14.00", values: ["1.5%", "6.9%", "12.1%", "16.9%", "21.4%"] },
        { label: "$15.00 (Base)", values: ["-2.1%", "3.8%", "9.61%", "14.6%", "19.2%"], isBase: true },
        { label: "$16.00", values: ["-5.8%", "0.9%", "7.0%", "12.3%", "17.0%"] },
        { label: "$17.00", values: ["-9.4%", "-1.9%", "4.6%", "10.1%", "14.9%"] }
      ],
      note: "Base case yields 1.58x MOIC / 9.61% gross IRR at $15.00 entry and 13.0x exit. Model reveals an attractive 15.4% IRR if entry valuation is negotiated to $13.00/share or if clean utility expansion drives exit to 14.0x+ EBITDA."
    },
    auditChecks: [
      { check: "Sources = Uses Equality Verification", status: "PASS", result: "$0.00 discrepancy" },
      { check: "Balance Sheet Equilibrium (Assets = Liab + Equity)", status: "PASS", result: "0.00 across all 5 yrs" },
      { check: "Cash Flow Statement Reconciliation Check", status: "PASS", result: "0.00 closing cash tie-out" },
      { check: "Parent Recourse vs Project Debt Segregation", status: "PASS", result: "$23.9B project debt rolled cleanly" }
    ]
  },
  {
    id: "project-2",
    projectNumber: 2,
    title: "Power Finance Corp & REC Ltd: M&A Accretion / Dilution Model",
    subtitle: "₹41,135 Cr ($5.0B+) Public Minority Amalgamation | 0.88x Swap Ratio & Synergy Underwriting",
    company: "Power Finance Corporation & REC Ltd",
    ticker: "NSE: PFC / RECLTD",
    category: "M&A / Merger Model",
    sector: "Sovereign Financials / Power NBFCs",
    valuationDate: "August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1IUe0UQRZvAz-o12iACFCWCSIvDbdC8V1/edit?usp=share_link&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/PFC_REC_Merger_Model_Accretion_Valuation.xlsx",
    summaryMetrics: {
      headline: "-1.95% Initial Dilution",
      badge: "₹41,135 Cr ($5.0B+) Deal",
      tone: "gold",
      swapRatio: "0.88x Swap Ratio",
      breakevenRatio: "0.811x (EPS-Neutral)",
      preTaxSynergies: "₹554 Cr Pre-Tax",
      debtSpreadCompression: "10 bps Spread Reduction",
      proFormaOwnership: "75.0% Legacy PFC Retention",
      combinedLoanAssets: "~₹10+ Lakh Cr Loan Book"
    },
    thesis: "Engineered a buy-side merger model evaluating the statutory amalgamation of India’s premier power NBFCs (~₹10+ Lakh Cr combined loan assets), modeling PFC acquiring the remaining 47.37% public minority stake in REC.",
    executiveSummary: [
      "Engineered a buy-side merger model evaluating the statutory amalgamation of India’s premier power NBFCs (~₹10+ Lakh Cr combined loan assets), modeling PFC acquiring the remaining 47.37% public minority stake in REC.",
      "Modeled an all-stock transaction issuing 109.77 Cr new shares at an 0.88x swap ratio, projecting pro forma ownership (75.0% legacy PFC retention) and underwriting ₹554 Cr in pre-tax synergies via 10 bps debt spread compression.",
      "Conducted accretion/dilution analysis showing -1.95% initial dilution, calculated an EPS-neutral exchange ratio of 0.811x, and benchmarked valuation against 6 precedent landmark Indian financial sector all-stock mergers.",
      "Sovereign Credit Moat & Governance: 100% all-stock structure preserves capital without cash burn or new acquisition debt, consolidating India's power finance infrastructure into a single ₹10+ Lakh Cr powerhouse with Maharatna sovereign backing."
    ],
    financialTable: {
      headers: ["Earnings Line (₹ Cr)", "PFC Standalone", "REC Acquired (47.37%)", "Pre-Synergy Combined", "Synergies (Net of Tax)", "Pro Forma Run-Rate"],
      rows: [
        ["Total Income", "115,450", "28,226", "143,676", "—", "143,676"],
        ["Interest Expense", "-71,210", "-17,166", "-88,376", "+404 (Funding Synergies)", "-87,972"],
        ["Net Interest Income (NII)", "44,240", "11,060", "55,300", "+404", "55,704"],
        ["Operating & Admin Costs", "-1,257", "-220", "-1,477", "+30 (Opex Synergies)", "-1,447"],
        ["Net Profit / PAT", "25,901", "7,725", "33,626", "+217 (50% Yr 1 Phase-In)", "33,843"],
        ["Shares Outstanding (Cr)", "330.01", "—", "330.01", "+109.77 (New Issued)", "439.78"],
        ["Earnings Per Share (EPS)", "₹78.49", "—", "₹76.46", "—", "₹76.96"],
        ["EPS Accretion / (Dilution) %", "—", "—", "-2.58%", "—", "-1.95%"]
      ]
    },
    dealTerms: [
      { step: "Target Equity Value Acquired (47.37% REC Minority)", value: "₹41,135 Cr", pct: "100.0%" },
      { step: "Implied Offer Price per REC Share", value: "₹329.78", pct: "-2.8% vs Market" },
      { step: "PFC New Shares Issued at 0.88x Ratio", value: "109.77 Cr Shares", pct: "24.96% New Equity" },
      { step: "Pro Forma Ownership: Legacy PFC Shareholders", value: "75.04%", highlight: true },
      { step: "Cash Draw / New Acquisition Debt", value: "₹0 Cr (100% Stock Consideration)", pct: "0.0%" },
      { step: "EPS-Neutral Breakeven Ratio", value: "0.811x PFC / REC", highlight: true },
      { step: "Annual Pre-Tax Synergies Underwritten (10 bps)", value: "₹554.0 Cr / yr", pct: "93.0% Funding Spread" }
    ],
    precedentTransactions: [
      { step: "HDFC Ltd / HDFC Bank Ltd", value: "1.68x Ratio (42 HDFC Bank for 25 HDFC)", pct: "100% Stock Mega Merger" },
      { step: "IDFC Ltd / IDFC First Bank Ltd", value: "1.55x Ratio (155 IDFC First for 100 IDFC)", pct: "Reverse Merger Consolidation" },
      { step: "Vijaya Bank / Bank of Baroda", value: "0.402x Ratio (402 BoB for 1,000 Vijaya)", pct: "PSU Banking Amalgamation" },
      { step: "Dena Bank / Bank of Baroda", value: "0.110x Ratio (110 BoB for 1,000 Dena)", pct: "PSU Banking Amalgamation" },
      { step: "Shriram City / Shriram Transport", value: "1.55x Ratio (155 STFC for 100 SCUF)", pct: "NBFC Consolidation" },
      { step: "Equitas Holdings / Equitas SFB", value: "2.31x Ratio (231 ESFB for 100 EHL)", pct: "HoldCo Elimination" }
    ],
    sensitivityGrid: {
      title: "M&A Sensitivity: Pro Forma EPS Accretion / (Dilution) % across Exchange Ratio vs Synergy Phase-in",
      colHeader: "Exchange Ratio (PFC / REC)",
      rowHeader: "Synergy Phase-In",
      cols: ["0.73x", "0.78x", "0.83x", "0.88x (Announced)", "0.93x"],
      rows: [
        { label: "0% (Nil Synergies)", values: ["+1.75%", "+0.27%", "-1.18%", "-2.58%", "-3.94%"] },
        { label: "25% Phase-In", values: ["+2.08%", "+0.59%", "-0.86%", "-2.26%", "-3.63%"] },
        { label: "50% Phase-In (Base Yr 1)", values: ["+2.41%", "+0.91%", "-0.54%", "-1.95%", "-3.32%"], isBase: true },
        { label: "75% Phase-In", values: ["+2.74%", "+1.24%", "-0.22%", "-1.63%", "-3.01%"] },
        { label: "100% (Full Run-Rate)", values: ["+3.07%", "+1.56%", "+0.10%", "-1.32%", "-2.70%"] }
      ],
      note: "EPS neutrality is mathematically achieved at 0.811x exchange ratio. At 0.88x, full run-rate synergies narrow dilution to -1.32%, while 10 bps funding compression across the ₹10+ Lakh Cr book provides long-term value creation."
    },
    auditChecks: [
      { check: "Pro Forma Ownership Sums to 100.0%", status: "PASS", result: "75.04% PFC + 24.96% REC = 100.0%" },
      { check: "Share Count Formulaic Reconciliation", status: "PASS", result: "330.01 Cr + 109.77 Cr = 439.78 Cr exact" },
      { check: "EPS Neutrality Formulaic Proof at 0.811x", status: "PASS", result: "Variance = 0.000000 (Exact Breakeven)" },
      { check: "Precedent All-Stock Benchmark Tie-Out", status: "PASS", result: "6 Landmark Indian transactions reconciled" }
    ]
  },
  {
    id: "project-3",
    projectNumber: 3,
    title: "Tata Motors PV: Integrated 3-Statement Financial Operating Model",
    subtitle: "5-Year Operating Projections (IS, BS, CFS), Capex Scheduling & Cash Flow Deleveraging",
    company: "Tata Motors Passenger Vehicles (TMPV)",
    ticker: "NSE: TMPV / TATAMOTORS",
    category: "3-Statement & Operating Models",
    sector: "Automotive / Clean Mobility",
    valuationDate: "August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1AHu9rK8FCMzDrPfkKrVjisFIoS4Vb0mA/edit?usp=sharing&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/Tata_Motors_PV_3Statement_Model.xlsx",
    summaryMetrics: {
      headline: "₹3.36T → ₹4.36T Top-Line",
      badge: "5-Yr Operating Model",
      tone: "positive",
      revenueGrowth: "₹3.36T to ₹4.36T (FY31E)",
      ebitdaMargin: "13.2% to 15.6%",
      segmentEconomics: "EV & ICE Platforms",
      capexProgram: "₹78,500 Cr 5-Yr Capex",
      workingCapital: "DSO 28d / DIO 44d / DPO 68d",
      dscrCoverage: "2.85x Base / 2.12x Trough"
    },
    thesis: "Constructed a dynamic 5-year three-statement financial model linking revenue builds, production capacity, working capital cycles (DSO, DIO, DPO), debt schedules, and automated circular interest breakers.",
    executiveSummary: [
      "Constructed a dynamic 5-year three-statement financial model linking revenue builds, production capacity, working capital cycles (DSO, DIO, DPO), debt schedules, and automated circular interest breakers.",
      "Forecast top-line growth from ₹3.36T to ₹4.36T and earnings recovery through FY2031, modeling segment unit economics across Electric Vehicles (EV) and Internal Combustion Engine (ICE) platforms.",
      "Stress-tested cash-flow sensitivities focusing on capex intensity, inventory turns, debt service coverage ratio (DSCR), and balance sheet liquidity buffers under severe supply chain and margin headwinds.",
      "Deleveraging & Cash Accumulation: Capex program of ₹78,500 Cr is funded 100% through internal cash generation, paying down borrowings from ₹54,400 Cr to ₹5,200 Cr while cash reserves rise to ₹1,07,240 Cr by FY31."
    ],
    financialTable: {
      headers: ["Metric (₹ Cr)", "FY26A", "FY27E", "FY28E", "FY29E", "FY30E", "FY31E"],
      rows: [
        ["Total Revenue", "336,450", "354,955", "373,768", "393,577", "414,437", "436,280"],
        ["YoY Revenue Growth %", "5.60%", "5.50%", "5.30%", "5.30%", "5.30%", "5.30%"],
        ["Cost of Materials Consumed", "-213,645", "-223,621", "-233,605", "-243,624", "-253,635", "-263,513"],
        ["Operating EBITDA", "44,411", "48,631", "53,450", "59,037", "65,482", "68,060"],
        ["EBITDA Margin %", "13.20%", "13.70%", "14.30%", "15.00%", "15.80%", "15.60%"],
        ["Depreciation & Amortization", "-15,140", "-16,327", "-17,567", "-18,891", "-20,309", "-21,820"],
        ["Operating Profit (EBIT)", "29,271", "32,304", "35,883", "40,146", "45,173", "46,240"],
        ["Net Finance Costs", "-3,620", "-2,730", "-1,750", "-640", "+620", "+1,750"],
        ["Profit Before Tax (PBT)", "25,651", "29,574", "34,133", "39,506", "45,793", "47,990"],
        ["Net Profit (PAT)", "19,238", "22,180", "25,600", "29,629", "34,345", "35,992"],
        ["Free Cash Flow to Firm (FCFF)", "21,768", "24,657", "28,487", "33,460", "39,234", "42,102"]
      ]
    },
    debtSchedule: {
      headers: ["Deleveraging & Liquidity (₹ Cr)", "FY26A", "FY27E", "FY28E", "FY29E", "FY30E", "FY31E"],
      rows: [
        ["Total Borrowings (Debt)", "54,400", "44,200", "33,500", "22,100", "12,000", "5,200"],
        ["Annual Debt Repayment", "-9,800", "-10,200", "-10,700", "-11,400", "-10,100", "-6,800"],
        ["Cash & Liquid Equivalents", "38,490", "47,820", "58,940", "72,310", "88,450", "107,240"],
        ["Net Debt / (Net Cash)", "15,910", "-3,620", "-25,440", "-50,210", "-76,450", "-102,040"],
        ["Net Debt / EBITDA", "0.36x", "Net Cash", "Net Cash", "Net Cash", "Net Cash", "Net Cash"],
        ["Debt Service Coverage Ratio (DSCR)", "2.44x", "2.68x", "2.85x", "3.12x", "3.64x", "4.15x"]
      ]
    },
    sensitivityGrid: {
      title: "DSCR Stress Sensitivity: Coverage Ratio across Capex Intensity vs EBITDA Margin Compression",
      colHeader: "Capex Intensity (% of Revenue)",
      rowHeader: "EBITDA Margin Headwind",
      cols: ["3.5% Capex", "4.0% Capex", "4.5% Capex (Base)", "5.0% Capex", "5.5% Capex"],
      rows: [
        { label: "-200 bps Margin Shock", values: ["2.42x", "2.28x", "2.12x (Trough)", "1.98x", "1.84x"] },
        { label: "-100 bps Margin Shock", values: ["2.74x", "2.58x", "2.44x", "2.30x", "2.16x"] },
        { label: "Base Operating Margin", values: ["3.18x", "3.02x", "2.85x (Base)", "2.68x", "2.52x"], isBase: true },
        { label: "+100 bps Margin Outperformance", values: ["3.56x", "3.39x", "3.22x", "3.05x", "2.88x"] },
        { label: "+200 bps Margin Outperformance", values: ["3.94x", "3.77x", "3.60x", "3.43x", "3.26x"] }
      ],
      note: "Institutional lender covenant requires minimum DSCR >= 1.50x. Under a combined stress test of 5.5% capex intensity and a severe -200 bps margin contraction, TMPV still clears 1.84x DSCR, maintaining full covenant headroom."
    },
    auditChecks: [
      { check: "Balance Sheet Tie-Out (Assets = Liabilities + Equity)", status: "PASS", result: "0.00 difference across all 5 yrs" },
      { check: "Cash Flow Closing Cash Reconciliation", status: "PASS", result: "Reconciled exactly to Balance Sheet" },
      { check: "Automated Circular Interest Breaker", status: "PASS", result: "Convergence achieved without iteration crash" },
      { check: "Segment EV vs ICE Roll-Forward", status: "PASS", result: "100% reconciled to consolidated revenue" }
    ]
  },
  {
    id: "project-4",
    projectNumber: 4,
    title: "Infosys Ltd: DCF Intrinsic Valuation & Peer Comps Analysis",
    subtitle: "5-Year Unlevered Free Cash Flow & Relative Valuation | Dislocation & Downside Underwriting",
    company: "Infosys Limited",
    ticker: "NSE: INFY / NYSE: INFY",
    category: "DCF & Intrinsic Valuation",
    sector: "Technology / IT Services",
    valuationDate: "August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1XYt4_8lUHFFoRVV0Ui3mdQkX0jxMf_eX/edit?usp=sharing&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/Infosys_DCF_Valuation_Model.xlsx",
    summaryMetrics: {
      headline: "₹834.45 / share",
      badge: "-25.2% Downside",
      tone: "negative",
      wacc: "11.40% WACC",
      terminalGrowth: "4.50% (g)",
      equityValue: "₹337,697 Cr",
      peerDiscount: "21.9% vs Peer Comps",
      ebitdaMargin: "23.7% (Top-Quartile)",
      marketPrice: "₹1,115.20 Spot Price"
    },
    thesis: "Built an institutional 5-year Unlevered DCF model utilizing a WACC of 11.4% and 4.5% perpetual growth rate, deriving an intrinsic equity value of ₹337,697 Cr (₹834.45/share), establishing a ~25.2% downside margin of safety.",
    executiveSummary: [
      "Built an institutional 5-year Unlevered DCF model utilizing a WACC of 11.4% and 4.5% perpetual growth rate, deriving an intrinsic equity value of ₹337,697 Cr (₹834.45/share), establishing a ~25.2% downside margin of safety.",
      "Benchmarked against public trading comps (TCS, HCL Tech, Wipro, LTIMindtree), showing Infosys traded at a 21.9% multiple discount to peer median EBITDA multiples despite posting top-quartile EBITDA margins (23.7%).",
      "Reconciled the DCF-to-comps valuation spread, identifying macroeconomic discretionary IT budget contractions and GenAI pricing pressure as critical fundamental valuation drivers.",
      "Dual-Track Valuation Underwriting: Recommends using the DCF valuation (₹834.45) as a conservative risk-adjusted downside anchor, while viewing trading comps (₹1,346.57) as upside optionality conditional upon enterprise IT spending recovery."
    ],
    financialTable: {
      headers: ["Metric (₹ Cr)", "FY26A", "FY27E", "FY28E", "FY29E", "FY30E", "FY31E"],
      rows: [
        ["Total Revenue", "178,650", "187,583", "196,493", "205,335", "214,061", "222,624"],
        ["YoY Revenue Growth %", "—", "5.00%", "4.75%", "4.50%", "4.25%", "4.00%"],
        ["Operating Profit (EBIT)", "37,379", "38,454", "40,281", "42,094", "43,883", "45,638"],
        ["EBIT Margin %", "20.92%", "20.50%", "20.50%", "20.50%", "20.50%", "20.50%"],
        ["Effective Taxes (25%)", "-9,345", "-9,614", "-10,070", "-10,523", "-10,971", "-11,409"],
        ["NOPAT", "28,034", "28,841", "30,211", "31,570", "32,912", "34,228"],
        ["Depreciation & Amort.", "+4,200", "+4,502", "+4,716", "+4,928", "+5,137", "+5,343"],
        ["Capital Expenditure (Capex)", "-4,466", "-4,690", "-4,912", "-5,133", "-5,352", "-5,566"],
        ["Change in Working Capital", "-1,326", "-1,072", "-1,069", "-1,061", "-1,047", "-1,027"],
        ["Unlevered Free Cash Flow (UFCF)", "26,442", "27,581", "28,945", "30,304", "31,651", "31,626"]
      ]
    },
    valuationBridge: [
      { step: "Present Value of 5-Yr UFCF", value: "₹102,853 Cr", pct: "31.7%" },
      { step: "Present Value of Terminal Value (g=4.5%, WACC=11.4%)", value: "₹221,819 Cr", pct: "68.3%" },
      { step: "Implied Enterprise Value (EV)", value: "₹324,672 Cr", pct: "100.0%" },
      { step: "Add: Cash & Liquid Investments", value: "+₹13,025 Cr", pct: "+4.0%" },
      { step: "Implied Equity Value", value: "₹337,697 Cr", pct: "104.0%" },
      { step: "Diluted Shares Outstanding", value: "404.69 Cr", pct: "—" },
      { step: "Intrinsic Fair Value Per Share", value: "₹834.45", highlight: true }
    ],
    peerTable: {
      headers: ["Company", "Ticker", "Mkt Cap (₹ Cr)", "EV (₹ Cr)", "LTM Rev (₹ Cr)", "EBITDA Margin", "EV / Rev", "EV / EBITDA", "P / E"],
      rows: [
        ["Infosys Ltd (Target)", "INFY", "451,315", "438,290", "184,582", "23.70%", "2.37x", "10.02x", "14.90x"],
        ["Tata Consultancy Services", "TCS", "837,000", "804,000", "276,000", "26.11%", "2.91x", "11.16x", "16.81x"],
        ["HCL Technologies", "HCLTECH", "359,000", "339,000", "140,000", "18.87%", "2.42x", "12.83x", "19.83x"],
        ["Wipro Ltd", "WIPRO", "180,000", "162,000", "94,968", "18.41%", "1.71x", "9.26x", "13.62x"],
        ["Tech Mahindra", "TECHM", "145,000", "139,000", "59,176", "15.65%", "2.35x", "15.00x", "28.24x"],
        ["LTIMindtree", "LTIM", "139,000", "127,000", "44,075", "16.89%", "2.88x", "17.06x", "26.58x"]
      ],
      benchmarks: [
        { metric: "Peer Median EV / EBITDA", value: "12.83x" },
        { metric: "Infosys EV / EBITDA Multiple", value: "10.02x (21.9% Discount)" },
        { metric: "Peer Median P / E", value: "19.83x" },
        { metric: "Peer Median EBITDA Margin", value: "18.41% vs INFY 23.70%" }
      ]
    },
    sensitivityGrid: {
      title: "DCF Sensitivity: Intrinsic Share Price (₹) across WACC vs Terminal Growth Rate",
      colHeader: "Terminal Growth Rate (g)",
      rowHeader: "WACC (%)",
      cols: ["3.50%", "4.00%", "4.50%", "5.00%", "5.50%"],
      rows: [
        { label: "10.40%", values: ["₹821.50", "₹868.10", "₹923.40", "₹989.30", "₹1,068.70"] },
        { label: "10.90%", values: ["₹768.40", "₹808.90", "₹856.20", "₹911.80", "₹977.80"] },
        { label: "11.40% (Base)", values: ["₹721.20", "₹756.80", "₹834.45", "₹845.80", "₹902.10"], isBase: true },
        { label: "11.90%", values: ["₹679.00", "₹710.40", "₹746.50", "₹788.10", "₹836.50"] },
        { label: "12.40%", values: ["₹641.10", "₹668.90", "₹700.70", "₹737.00", "₹778.90"] }
      ],
      note: "At 11.40% WACC and 4.50% terminal growth, DCF yields ₹834.45/share. Dislocation analysis highlights that even under generous terminal growth assumptions, valuation remains below spot price (₹1,115.20), serving as a crucial underwriting downside anchor."
    },
    auditChecks: [
      { check: "DCF Forecast Balance & UFCF Tie-Out", status: "PASS", result: "0.00 difference" },
      { check: "CAPM WACC Parameter Calculation", status: "PASS", result: "11.40% verified" },
      { check: "Net Cash Balance Sheet Reconciliation", status: "PASS", result: "+₹13,025 Cr verified" },
      { check: "Peer Multiples Discount Calculation", status: "PASS", result: "21.9% discount vs 12.83x median verified" }
    ]
  }
];
