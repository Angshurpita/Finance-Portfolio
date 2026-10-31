export const projectsData = [
  {
    id: "project-1",
    projectNumber: 1,
    title: "Infosys Ltd: DCF Intrinsic Valuation & Underwriting Synthesis",
    subtitle: "5-Year Unlevered Discounted Cash Flow with Macro & GenAI Dislocation Diligence",
    company: "Infosys Limited",
    ticker: "NSE: INFY / NYSE: INFY",
    category: "DCF & Intrinsic Valuation",
    sector: "Technology / IT Services",
    valuationDate: "18 August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1XYt4_8lUHFFoRVV0Ui3mdQkX0jxMf_eX/edit?usp=sharing&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/Infosys_DCF_Valuation_Model.xlsx",
    summaryMetrics: {
      headline: "₹834.45 / share",
      badge: "-25.2% Downside",
      tone: "negative",
      wacc: "11.20%",
      terminalGrowth: "4.50%",
      equityValue: "₹337,697 Cr",
      marketPrice: "₹1,115.20"
    },
    thesis: "Valuation dislocation study identifying that while public trading multiples imply +20.7% to +33.1% upside, rigorous fundamental DCF modeling yields an intrinsic value of ₹834.45/share (-25.2% downside). DCF serves as the conservative underwriting downside anchor.",
    executiveSummary: [
      "Intrinsic Value Dislocation: Conservative DCF indicates material downside (-25.2%) against current trading levels of ₹1,115.20, whereas peer multiples suggest rerating upside. Recommends treating the DCF as the underwriting floor and comps as an upside scenario rather than blending them blindly.",
      "Terminal Value Sensitivity: Terminal value contributes 68.3% (₹221,819 Cr) of total Enterprise Value (₹324,672 Cr). A 50 bps increase in WACC compresses fair value by over ₹65/share.",
      "Conservative Cash Flow Construction: Forecast EBIT margin is held disciplined at 20.5% (below FY26 actual of 20.9%), capex exceeds D&A, and working capital absorbs ~12% of incremental revenue to prevent optimistic bias.",
      "Strategic GenAI Diligence: Diligence focus on whether client GenAI adoption creates net new billable contract value or accelerates pricing deflation and productivity pass-through."
    ],
    financialTable: {
      headers: ["Metric (₹ Cr)", "FY26A", "FY27E", "FY28E", "FY29E", "FY30E", "FY31E"],
      rows: [
        ["Total Revenue", "178,650", "187,583", "196,493", "205,335", "214,061", "222,624"],
        ["YoY Revenue Growth", "—", "5.00%", "4.75%", "4.50%", "4.25%", "4.00%"],
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
      { step: "Present Value of Terminal Value (g=4.5%)", value: "₹221,819 Cr", pct: "68.3%" },
      { step: "Implied Enterprise Value (EV)", value: "₹324,672 Cr", pct: "100.0%" },
      { step: "Add: Cash & Liquid Investments", value: "+₹13,025 Cr", pct: "+4.0%" },
      { step: "Implied Equity Value", value: "₹337,697 Cr", pct: "104.0%" },
      { step: "Diluted Shares Outstanding", value: "404.69 Cr", pct: "—" },
      { step: "Intrinsic Fair Value Per Share", value: "₹834.45", highlight: true }
    ],
    sensitivityGrid: {
      title: "DCF Sensitivity: Intrinsic Share Price (₹) across WACC vs Terminal Growth",
      colHeader: "Terminal Growth Rate (g)",
      rowHeader: "WACC (%)",
      cols: ["3.50%", "4.00%", "4.50%", "5.00%", "5.50%"],
      rows: [
        { label: "10.20%", values: ["₹821.50", "₹868.10", "₹923.40", "₹989.30", "₹1,068.70"] },
        { label: "10.70%", values: ["₹768.40", "₹808.90", "₹856.20", "₹911.80", "₹977.80"] },
        { label: "11.20% (Base)", values: ["₹721.20", "₹756.80", "₹797.90", "₹845.80", "₹902.10"], isBase: true },
        { label: "11.70%", values: ["₹679.00", "₹710.40", "₹746.50", "₹788.10", "₹836.50"] },
        { label: "12.20%", values: ["₹641.10", "₹668.90", "₹700.70", "₹737.00", "₹778.90"] }
      ],
      note: "Notice that even the most aggressive sensitivity combination (10.20% WACC / 5.00% g = ₹989.30) sits well below the market price of ₹1,115.20, confirming fundamental overextension."
    },
    auditChecks: [
      { check: "DCF Dynamic Forecast Tie-Out", status: "PASS", result: "0.00 difference" },
      { check: "WACC Parameter Calculation", status: "PASS", result: "11.20% verified" },
      { check: "Balance Sheet Net Cash Reconciliation", status: "PASS", result: "+₹13,025 Cr" },
      { check: "Terminal Value Formula Formulaic Check", status: "PASS", result: "Gordon Growth model exact" }
    ]
  },
  {
    id: "project-2",
    projectNumber: 2,
    title: "Infosys Ltd: Comparable Company Analysis & Peer Relative Valuation",
    subtitle: "Public Comps Matrix Benchmarked Against Tier-1 Indian IT Services Peers",
    company: "Infosys Limited",
    ticker: "NSE: INFY / BSE: 500209",
    category: "Trading Comps & Relative Valuation",
    sector: "Technology / IT Services",
    valuationDate: "18 August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1XYt4_8lUHFFoRVV0Ui3mdQkX0jxMf_eX/edit?usp=sharing&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/Infosys_Trading_Comps_Analysis.xlsx",
    summaryMetrics: {
      headline: "₹1,346.57 / share",
      badge: "+20.7% Upside (Blend)",
      tone: "positive",
      peerMedianEvEbitda: "12.83x",
      infyEvEbitda: "10.02x",
      discountToPeer: "21.9% Discount",
      marketPrice: "₹1,115.20"
    },
    thesis: "Cross-sectional peer trading analysis benchmarking Infosys against TCS, HCL Tech, Wipro, Tech Mahindra, and LTIMindtree. Demonstrates that Infosys trades at a 21.9% multiple discount to peer median EBITDA multiples despite posting top-quartile EBITDA margin (23.7%).",
    executiveSummary: [
      "Relative Value Arbitrage: Infosys trades at 10.02x EV/EBITDA compared to the peer median of 12.83x. EV/EBITDA multiple parity implies ₹1,419.26/share (+27.3% upside).",
      "P/E Multiple Implication: At peer median P/E of 19.83x, implied equity value is ₹600,508 Cr, or ₹1,483.86/share (+33.1% upside).",
      "Equal-Weighted Blend: Blending EV/Revenue (₹1,136.60), EV/EBITDA (₹1,419.26), and P/E (₹1,483.86) produces ₹1,346.57/share (+20.7% upside).",
      "Underwriting Conclusion: The comps rerating thesis hinges upon large-deal conversion and constant-currency revenue growth re-accelerating toward historical 7-9% levels."
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
        { metric: "Peer Median P / E", value: "19.83x" },
        { metric: "Peer Median EV / Revenue", value: "2.42x" },
        { metric: "Peer Median EBITDA Margin", value: "18.41%" }
      ]
    },
    impliedValuationMethods: [
      { method: "EV / Revenue (2.42x)", impliedEV: "₹446,952 Cr", impliedEqVal: "₹459,977 Cr", perShare: "₹1,136.60", upside: "+1.9%" },
      { method: "EV / EBITDA (12.83x)", impliedEV: "₹561,343 Cr", impliedEqVal: "₹574,368 Cr", perShare: "₹1,419.26", upside: "+27.3%" },
      { method: "P / E Multiple (19.83x)", impliedEV: "n.m.", impliedEqVal: "₹600,508 Cr", perShare: "₹1,483.86", upside: "+33.1%" },
      { method: "Equal-Weighted Blended Comps", impliedEV: "n.m.", impliedEqVal: "₹544,951 Cr", perShare: "₹1,346.57", upside: "+20.7%", highlight: true }
    ],
    auditChecks: [
      { check: "Enterprise Value Positive Check", status: "PASS", result: "All peers verified" },
      { check: "EBITDA Multiple Positivity Check", status: "PASS", result: "Clean multiples" },
      { check: "Share Count Reconciliation", status: "PASS", result: "404.69 Cr shares matched" },
      { check: "Net Cash Calculation", status: "PASS", result: "₹13,025 Cr exact" }
    ]
  },
  {
    id: "project-3",
    projectNumber: 3,
    title: "The AES Corporation: $17.1B Sponsor LBO & Take-Private Acquisition Model",
    subtitle: "Mega-Cap Utility & Clean Power Buyout with 3-Tranche Recourse Debt Structure",
    company: "The AES Corporation",
    ticker: "NYSE: AES",
    category: "LBO & Sponsor Buyouts",
    sector: "Infrastructure / Energy Transition & Power",
    valuationDate: "20 August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/AES_Corporation_17B_LBO_Model.xlsx",
    summaryMetrics: {
      headline: "1.58x MOIC / 9.61% IRR",
      badge: "$17.1B Transaction",
      tone: "gold",
      offerPrice: "$15.00 / share",
      sponsorEquity: "$8,030.5M",
      entryEV: "$39,051M",
      exitMultiple: "13.0x EBITDA"
    },
    thesis: "Take-private leveraged buyout of global power utility and renewables developer AES Corp. Structures $8.6B of new parent recourse debt and rolls over $23.9B of asset-level non-recourse project debt, requiring an $8.03B sponsor equity cheque with full exit sensitivity modeling.",
    executiveSummary: [
      "Transaction Overview: All-cash take-private offer at $15.00/share representing $10,710M equity purchase value and $39,051M total entry Enterprise Value (13.6x FY25A Adjusted EBITDA).",
      "Sources & Uses Engineering: Funded via $4,478.8M Term Loan B (SOFR+300), $2,497.8M Senior Secured Notes (6.25%), $1,636.5M Senior Unsecured Notes (7.25%), $482M balance sheet cash, and $8,030.5M sponsor equity.",
      "Conservative Exit Return Profile: Generating 1.58x MOIC and 9.61% gross IRR over a 5-year hold assuming exit at 13.0x EBITDA (a modest contraction from entry 13.6x). Net sponsor profit of $4,674.0M.",
      "Underwriting Decision Note: Returns sit below typical 15-20% private equity hurdles at the $15.00 entry price unless multiple expansion or dividend recapitalization is achieved, highlighting why sponsor discipline on entry valuation is paramount."
    ],
    sourcesAndUses: {
      sources: [
        { item: "New Term Loan B (Recourse, SOFR+3.00%)", amount: "$4,478.8M", pct: "26.2%" },
        { item: "Senior Secured Notes (Recourse, 6.25%)", amount: "$2,497.8M", pct: "14.6%" },
        { item: "Senior Unsecured Notes (Recourse, 7.25%)", amount: "$1,636.5M", pct: "9.6%" },
        { item: "Total New Parent Recourse Debt (3.0x EBITDA)", amount: "$8,613.0M", pct: "50.3%", isSubtotal: true },
        { item: "Balance Sheet Cash", amount: "$482.0M", pct: "2.8%" },
        { item: "Sponsor Equity Contribution (Balancing Cheque)", amount: "$8,030.5M", pct: "46.9%", highlight: true },
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
      { step: "Exit Fiscal Year", value: "FY2030E" },
      { step: "Exit EV / Adjusted EBITDA Multiple", value: "13.0x" },
      { step: "FY30E Exit Adjusted EBITDA", value: "$3,961.5M" },
      { step: "Exit Enterprise Value", value: "$51,499.3M" },
      { step: "Less: Total Net Debt at Exit", value: "-$38,279.9M" },
      { step: "Less: Exit Transaction Fees", value: "-$515.0M" },
      { step: "Exit Equity Value to Sponsor", value: "$12,704.4M" },
      { step: "Less: Sponsor Initial Equity Investment", value: "-$8,030.5M" },
      { step: "Net Capital Gain to Sponsor", value: "$4,674.0M", highlight: true },
      { step: "Multiple of Invested Capital (MOIC)", value: "1.58x", highlight: true },
      { step: "Gross IRR (5-Year Single Cash Flow)", value: "9.61%", highlight: true }
    ],
    sensitivityGrid: {
      title: "LBO Return Sensitivity: Gross IRR (%) across Offer Price vs Exit Multiple (5-Yr Hold)",
      colHeader: "Exit EV / EBITDA Multiple",
      rowHeader: "Offer Price / Share",
      cols: ["11.5x", "12.0x", "12.5x", "13.0x (Base)", "13.5x", "14.0x"],
      rows: [
        { label: "$13.00", values: ["7.8%", "10.4%", "13.0%", "15.4%", "17.8%", "20.1%"] },
        { label: "$14.00", values: ["4.2%", "6.9%", "9.6%", "12.1%", "14.6%", "16.9%"] },
        { label: "$15.00 (Base)", values: ["0.8%", "3.8%", "6.7%", "9.61%", "12.2%", "14.6%"], isBase: true },
        { label: "$16.00", values: ["-2.4%", "0.9%", "4.0%", "7.0%", "9.8%", "12.3%"] },
        { label: "$17.00", values: ["-5.8%", "-1.9%", "1.5%", "4.6%", "7.5%", "10.1%"] }
      ],
      note: "Base case clears 9.61% at $15.00 offer. Deal reaches institutional 15%+ hurdle if entry price is negotiated down to $13.00-$13.50 or if exit multiple expands to 14.0x+."
    },
    auditChecks: [
      { check: "Sources = Uses Balance Check", status: "PASS", result: "$0.00 discrepancy" },
      { check: "Balance Sheet Tie-Out (Assets = Liabilities + Equity)", status: "PASS", result: "0.00 across all 5 yrs" },
      { check: "Cash Flow Statement Reconciliation Check", status: "PASS", result: "0.00 closing cash tie-out" },
      { check: "Tolerance Threshold Applied", status: "PASS", result: "0.50 tolerance threshold" }
    ]
  },
  {
    id: "project-4",
    projectNumber: 4,
    title: "The AES Corporation: 3-Statement Financial Operating & Debt Schedule Model",
    subtitle: "Multi-Segment Projection with $23.2B Capex Build, HLBV Tax-Equity, & Cash Sweep Deleveraging",
    company: "The AES Corporation",
    ticker: "NYSE: AES",
    category: "3-Statement & Operating Models",
    sector: "Infrastructure / Utilities & Clean Energy",
    valuationDate: "20 August 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/AES_Corporation_3Statement_Operating_Model.xlsx",
    summaryMetrics: {
      headline: "$23.2B Capex Program",
      badge: "100% Cash Sweep",
      tone: "gold",
      tlPaydown: "$4.48B to $1.18B",
      netLeverageExit: "1.17x",
      operatingSegments: "4 Segments",
      modelAudit: "All Checks Pass"
    },
    thesis: "Comprehensive 5-year operating forecast modeling 4 core business segments (Renewables, Utilities, Energy Infrastructure, New Energy Tech). Bridges a massive $23.2B capital expenditure pipeline with structured non-recourse project finance, tax equity (HLBV), and rapid parent deleveraging.",
    executiveSummary: [
      "Segment Operational Mechanics: Projections split across Renewables (utility solar/wind expanding at 8.5% CAGR), US Utilities (regulated rate base growing at 5.0%), Energy Infrastructure (orderly coal/PPA run-off at -2.0%), and New Tech.",
      "Financing a $23.2B Capex Pipeline: 60% ($13.93B) financed via non-recourse project debt, 25% ($5.80B) via tax equity and minority partners, and only 15% ($3.48B) from group free cash flow, preserving sponsor leverage limits.",
      "100% Cash Sweep Deleveraging: Term Loan B amortizes 1% mandatory ($44.8M/yr) plus 100% available free cash sweep ($250M in Y1 ramping to $514M in Y4), reducing parent net leverage from 3.0x to 1.17x by exit.",
      "Institutional Model Integrity: Triple-statement model with live balance sheet plug, cash flow reconciliation, and zero integrity flags across all test scenarios."
    ],
    segmentBuild: [
      { segment: "Renewables (Solar / Wind / Storage)", fy25Revenue: "$2,845M", fy30Revenue: "$4,280M", cagr: "+8.5%", margin: "42.0%" },
      { segment: "US Regulated Utilities (Indiana / Ohio)", fy25Revenue: "$3,812M", fy30Revenue: "$4,865M", cagr: "+5.0%", margin: "34.5%" },
      { segment: "Energy Infrastructure (Thermal / LNG)", fy25Revenue: "$5,350M", fy30Revenue: "$4,835M", cagr: "-2.0%", margin: "25.0%" },
      { segment: "New Energy Technologies (Fluence / Grid)", fy25Revenue: "$226M", fy30Revenue: "$415M", cagr: "+12.9%", margin: "18.0%" },
      { segment: "Consolidated Total", fy25Revenue: "$12,233M", fy30Revenue: "$14,395M", cagr: "+3.3%", margin: "27.5%" }
    ],
    debtSchedule: {
      headers: ["Debt Tranche ($M)", "At Close", "FY26E", "FY27E", "FY28E", "FY29E", "FY30E"],
      rows: [
        ["Term Loan B (Recourse)", "$4,478.8", "$4,184.1", "$3,824.6", "$3,377.8", "$2,818.8", "$1,180.7"],
        ["Senior Secured Notes", "$2,497.8", "$2,497.8", "$2,497.8", "$2,497.8", "$2,497.8", "$2,497.8"],
        ["Senior Unsecured Notes", "$1,636.5", "$1,636.5", "$1,636.5", "$1,636.5", "$1,636.5", "$1,636.5"],
        ["Total Parent Debt", "$8,613.0", "$8,318.4", "$7,958.9", "$7,512.1", "$6,953.1", "$5,315.0"],
        ["Parent Cash Balance", "$900.0", "$983.3", "$1,088.2", "$1,222.2", "$1,392.4", "$675.2"],
        ["Parent Net Debt", "$7,713.0", "$7,335.1", "$6,870.7", "$6,289.9", "$5,560.7", "$4,639.8"],
        ["Parent Net Leverage", "3.00x", "2.62x", "2.33x", "2.01x", "1.67x", "1.17x"]
      ]
    },
    auditChecks: [
      { check: "Sources & Uses Mathematical Equality", status: "PASS", result: "$0.00 delta" },
      { check: "Consolidated Balance Sheet Equilibrium", status: "PASS", result: "$0.00 discrepancy" },
      { check: "Cash Flow Operating-to-Investing Roll-Forward", status: "PASS", result: "$0.00 delta" },
      { check: "10-K Form Disclosures Reconciliation", status: "PASS", result: "Item 7 & 8 matched" }
    ]
  },
  {
    id: "project-5",
    projectNumber: 5,
    title: "Trent Limited (Tata Retail): DCF Valuation & Peer Comps Model",
    subtitle: "High-Growth Retail Empire Model (Westside, Zudio, Star Market) with Expansion DCF",
    company: "Trent Limited (Tata Group)",
    ticker: "NSE: TRENT / BSE: 500251",
    category: "DCF & Intrinsic Valuation",
    sector: "Consumer Discretionary / Apparel Retail",
    valuationDate: "23 March 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1AHu9rK8FCMzDrPfkKrVjisFIoS4Vb0mA/edit?usp=sharing&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/Trent_Tata_Retail_DCF_and_Comps.xlsx",
    summaryMetrics: {
      headline: "₹1,429.64 / share",
      badge: "High Growth / Rich Multiples",
      tone: "neutral",
      wacc: "10.49%",
      terminalGrowth: "6.00%",
      storeCount: "1,000+ Stores",
      fy21_25Cagr: "56.2% CAGR"
    },
    thesis: "Valuation analysis of Tata Group's high-flying retail powerhouse (Zudio, Westside, Star Market). Compares exponential store rollout economics against fundamental DCF intrinsic value (₹1,429.64) versus market exuberance (₹3,366.70) alongside trading comps against Avenue Supermarts (DMART).",
    executiveSummary: [
      "Retail Engine Momentum: 1,000+ stores across 240+ Indian cities and 13.6M sq ft retail area. Driven by hyper-efficient value fashion format Zudio (766 stores) and premium lifestyle Westside (248 stores).",
      "Exponential Topline Trajectory: Revenue expanded from ₹2,593 Cr in FY21 to ₹17,135 Cr in FY25 (56.2% CAGR), with EBITDA surging from ₹114 Cr to ₹2,820 Cr (16.5% margin).",
      "WACC & Terminal Build: WACC estimated at 10.49% (Cost of Equity 10.61%, Beta 0.75, ERP 5.50%, Risk-free 6.50%). Terminal growth rate set at 6.00% to reflect long-term organized retail penetration in India.",
      "Valuation Reality Check: Fundamentals imply ₹1,429.64/share fair value. Public market price of ₹3,366.70 prices in unprecedented store runway and multiple expansion akin to DMART's 106x P/E multiples."
    ],
    financialTable: {
      headers: ["Metric (₹ Cr)", "FY21", "FY22", "FY23", "FY24", "FY25", "FY26E", "FY30E"],
      rows: [
        ["Sales Revenue", "2,593", "4,498", "8,242", "12,375", "17,135", "19,705", "28,826"],
        ["Gross Profit", "918", "1,817", "3,166", "4,922", "6,726", "7,734", "11,314"],
        ["Gross Margin %", "35.39%", "40.41%", "38.41%", "39.78%", "39.25%", "39.25%", "39.25%"],
        ["EBITDA", "114", "595", "1,114", "1,971", "2,820", "3,243", "4,744"],
        ["EBITDA Margin %", "4.39%", "13.22%", "13.52%", "15.92%", "16.46%", "16.46%", "16.46%"],
        ["Net Profit (PAT)", "-146", "106", "445", "1,487", "1,547", "1,443", "2,111"],
        ["Free Cash Flow to Firm (FCFF)", "—", "—", "—", "—", "—", "2,041", "2,985"]
      ]
    },
    valuationBridge: [
      { step: "Sum of PV of 5-Yr FCF (FY26E-FY30E)", value: "₹9,317 Cr", pct: "17.9%" },
      { step: "PV of Terminal Value (g=6.0%, WACC=10.49%)", value: "₹42,770 Cr", pct: "82.1%" },
      { step: "Enterprise Value (EV)", value: "₹52,088 Cr", pct: "100.0%" },
      { step: "Less: Total Borrowings / Net Debt", value: "-₹2,237 Cr", pct: "-4.3%" },
      { step: "Add: Cash & Liquid Investments", value: "+₹973 Cr", pct: "+1.9%" },
      { step: "Implied Equity Value", value: "₹50,824 Cr", pct: "97.6%" },
      { step: "Diluted Shares Outstanding", value: "35.55 Cr", pct: "—" },
      { step: "Intrinsic Fair Value Per Share", value: "₹1,429.64", highlight: true }
    ],
    peerTable: {
      headers: ["Retail Peer", "Ticker", "Mkt Cap (₹ Cr)", "EV / EBITDA", "P / E", "Key Format"],
      rows: [
        ["Trent Limited (Target)", "TRENT", "170,282", "18.37x", "110.1x", "Westside, Zudio, Star"],
        ["Avenue Supermarts", "DMART", "278,260", "23.09x", "106.1x", "Hypermarket Grocery"],
        ["Vishal Mega Mart", "VMM", "69,155", "25.33x", "65.4x", "Tier-2/3 Value Retail"],
        ["Aditya Birla Fashion", "ABLBL", "16,959", "20.68x", "n.m.", "Apparel Brands & Madura"],
        ["Vedant Fashions", "MANYAVAR", "16,720", "27.41x", "45.8x", "Ethnic & Occasion Wear"]
      ]
    },
    auditChecks: [
      { check: "Historical Balance Sheet Equality Check", status: "PASS", result: "Assets = Liab verified" },
      { check: "CAPM Beta & WACC Reconciliation", status: "PASS", result: "10.49% exact" },
      { check: "Terminal Gordon Growth Convergence", status: "PASS", result: "₹70,437 Cr undiscounted" }
    ]
  },
  {
    id: "project-6",
    projectNumber: 6,
    title: "Pidilite Industries: Leveraged Buyout (LBO) & Integrated Financial Model",
    subtitle: "Specialty Chemicals Buyout with 28% Acquisition Premium & Dual-Tranche Debt Paydown",
    company: "Pidilite Industries Limited",
    ticker: "NSE: PIDILITIND / BSE: 500331",
    category: "LBO & Sponsor Buyouts",
    sector: "Specialty Chemicals / Consumer Adhesives",
    valuationDate: "31 March 2026",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1V2PVe1kNvEmUNse3SCQh7_vk69fjhkCU/edit?usp=sharing&ouid=110781129401389125251&rtpof=true&sd=true",
    downloadUrl: "/downloads/Pidilite_Industries_LBO_Model.xlsx",
    summaryMetrics: {
      headline: "₹17,765 Cr Debt Package",
      badge: "Term A 100% Repaid",
      tone: "gold",
      acquisitionPremium: "28.0%",
      termARepayment: "₹1,755 Cr / yr",
      exitEV: "₹162,002 Cr",
      marketLeadership: "Fevicol Monopoly"
    },
    thesis: "LBO transaction model of iconic Indian adhesives monopoly Pidilite (Fevicol, Dr. Fixit, Fevikwik). Models a private equity takeover at a 28% premium, structuring a ₹17,765 Cr dual-tranche debt package with stringent covenant management and rapid 5-year deleveraging.",
    executiveSummary: [
      "Moat & Business Underwriting: Unparalleled distribution and brand dominance in consumer & bazaar adhesives, sustaining 52%+ gross margins and 18.8%+ EBITDA margins.",
      "Dual-Tranche Debt Financing: Structured with ₹8,199 Cr Term Loan A (7.0% interest, straight-line ₹1,755 Cr/yr amortization) and ₹9,566 Cr Term Loan B (9.0% interest with sweep).",
      "Deleveraging Milestone: Term Loan A is 100% amortized to ₹0 by Year 5, with Term Loan B paid down to ₹8,832 Cr, substantially lowering financial risk for sponsor exit.",
      "Covenants & Governance: Strict zero-dividend distribution covenant enforced throughout the 5-year hold to maximize debt paydown and liquidity headroom."
    ],
    financialTable: {
      headers: ["Metric (₹ Cr)", "20x0 (Base)", "20x1E", "20x2E", "20x3E", "20x4E", "20x5E"],
      rows: [
        ["Revenues", "13,140", "14,520", "15,754", "16,778", "17,533", "17,972"],
        ["Cost of Goods Sold (COGS)", "6,274", "7,603", "8,249", "8,785", "9,181", "9,410"],
        ["Gross Profit", "6,867", "6,917", "7,505", "7,993", "8,353", "8,561"],
        ["EBITDA", "2,733", "2,734", "2,966", "3,159", "3,301", "3,384"],
        ["EBITDA Margin %", "20.80%", "18.83%", "18.83%", "18.83%", "18.83%", "18.83%"],
        ["EBIT", "2,375", "2,359", "2,559", "2,725", "2,848", "2,919"],
        ["Net Income (PAT)", "1,732", "1,732", "1,882", "2,006", "2,097", "2,150"],
        ["Term Loan A Repayment", "—", "-1,755", "-1,755", "-1,755", "-1,755", "-1,755"],
        ["Term Loan A Balance", "8,199", "6,445", "4,690", "2,935", "1,181", "0 (Fully Repaid)"]
      ]
    },
    debtStructure: [
      { tranche: "Term Loan A (Amortizing)", opening: "₹8,199 Cr", rate: "7.00%", annualAmort: "₹1,755 Cr / yr", closing: "₹0 Cr (100% Repaid)" },
      { tranche: "Term Loan B (Sweep)", opening: "₹9,566 Cr", rate: "9.00%", annualAmort: "Excess Cash Sweep", closing: "₹8,832 Cr" },
      { tranche: "Total Debt Sized", opening: "₹17,765 Cr", rate: "Blended 8.08%", annualAmort: "—", closing: "₹8,832 Cr (-50.3% Deleveraged)" }
    ],
    returnsBridge: [
      { step: "Enterprise Value at Acquisition (28% Premium)", value: "₹167,780 Cr" },
      { step: "Initial Debt Financed", value: "₹17,765 Cr" },
      { step: "Initial Sponsor Equity Cheque", value: "₹150,015 Cr" },
      { step: "Implied Enterprise Value at Exit", value: "₹162,002 Cr" },
      { step: "Less: Remaining Net Debt at Exit", value: "-₹8,832 Cr" },
      { step: "Implied Equity Value at Exit", value: "₹153,170 Cr" },
      { step: "Term Loan A Payoff Status", value: "100% Amortized to ₹0", highlight: true }
    ],
    auditChecks: [
      { check: "Debt Service Coverage Tie-Out", status: "PASS", result: "Positive cash post-service" },
      { check: "Working Capital & Capex Cash Flow Integration", status: "PASS", result: "Reconciled" },
      { check: "Tax Calculation Tie-Out (25.5% Statutory Rate)", status: "PASS", result: "Exact" }
    ]
  }
];
