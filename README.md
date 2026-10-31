# Angshurpita Ganguly — Investment Banking & Private Equity Portfolio

An institutional-grade web portfolio engineered for Investment Banking, Private Equity, and M&A / Valuation Analyst recruitment. Designed with a prestigious Wall Street aesthetic (deep obsidian, Bloomberg tabular typography, live market benchmark tickers, and dynamic transaction inspection).

---

## 🏛️ Featured Financial Models & Spreadsheets

| # | Transaction / Model | Company | Ticker | Methodology | Live Verification |
|---|---------------------|---------|--------|-------------|-------------------|
| **1** | [Infosys DCF Valuation Model](public/downloads/Infosys_DCF_Valuation_Model.xlsx) | Infosys Limited | `NSE: INFY` | 5-Year Unlevered DCF & Dislocation Analysis | [Google Sheet ↗](https://docs.google.com/spreadsheets/d/1XYt4_8lUHFFoRVV0Ui3mdQkX0jxMf_eX/edit?usp=sharing) |
| **2** | [Infosys Trading Comps Matrix](public/downloads/Infosys_Trading_Comps_Analysis.xlsx) | Infosys Limited | `NSE: INFY` | Comparable Company Multiples (TCS, HCL, Wipro) | [Google Sheet ↗](https://docs.google.com/spreadsheets/d/1XYt4_8lUHFFoRVV0Ui3mdQkX0jxMf_eX/edit?usp=sharing) |
| **3** | [AES Corp $17.1B LBO Model](public/downloads/AES_Corporation_17B_LBO_Model.xlsx) | The AES Corporation | `NYSE: AES` | $17.1B Take-Private Buyout & 5-Yr Sponsor Waterfall | [Google Sheet ↗](https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link) |
| **4** | [AES Corp 3-Statement & Capex Build](public/downloads/AES_Corporation_3Statement_Operating_Model.xlsx) | The AES Corporation | `NYSE: AES` | 4-Segment Forecast, $23.2B Capex & Cash Sweep | [Google Sheet ↗](https://docs.google.com/spreadsheets/d/1fl-OSp1XZDXeAeFNc_qnds4Q_FlYob96/edit?usp=share_link) |
| **5** | [Trent Ltd (Tata Retail) DCF & Comps](public/downloads/Trent_Tata_Retail_DCF_and_Comps.xlsx) | Trent Limited | `NSE: TRENT` | 1,000+ Store Expansion DCF & Peer Comps | [Google Sheet ↗](https://docs.google.com/spreadsheets/d/1AHu9rK8FCMzDrPfkKrVjisFIoS4Vb0mA/edit?usp=sharing) |
| **6** | [Pidilite Industries LBO Model](public/downloads/Pidilite_Industries_LBO_Model.xlsx) | Pidilite Industries | `NSE: PIDILITIND` | 28% Premium Buyout & Dual-Tranche Amortization | [Google Sheet ↗](https://docs.google.com/spreadsheets/d/1V2PVe1kNvEmUNse3SCQh7_vk69fjhkCU/edit?usp=sharing) |

---

## ⚡ Key Platform Capabilities

1. **Live Bloomberg Benchmark Ticker**: Real-time pulsing market rates across INFY, AES, TRENT, PIDILITIND, US 10Y Yield, India 10Y G-Sec, SOFR, and Brent Crude.
2. **Interactive Valuation & LBO Sandbox**:
   - **AES Corp Buyout Simulator**: Real-time adjustment of purchase offer price ($13-$17) and exit multiple (11.5x-14.5x) to recalculate MOIC, Gross IRR, Sponsor Equity Cheque, and Dollar Gain dynamically.
   - **Infosys DCF Simulator**: Real-time adjustment of WACC (10%-12.5%) and Perpetual Growth (3.5%-5.5%) to recalculate intrinsic share price and market discount/premium.
3. **Comprehensive Deal Memorandum Modals**:
   - Institutional underwriting thesis & senior review diagnostics.
   - Multi-year integrated financial projection tables.
   - Sources & Uses funding waterfall, debt amortization schedules, and WACC derivations.
   - 2D Sensitivity heatmaps with underwritten base case highlights.
   - 100% PASS audit check reconciliations (Tolerance 0.50, Sources=Uses delta 0.00, Balance Sheet tie-out 0.00).
4. **Dual Layout Modes**: Switch between high-impact Tombstone Deal Cards and Bloomberg League Table view.
5. **Candidate Profile & Direct CV Download**: Direct access to Angshurpita's Finance CV (`Angshurpita_Ganguly_Finance_CV.pdf`).

---

## 🚀 Instant Deployment to Vercel

The application is pre-configured for **zero-configuration deployment on Vercel** with `vercel.json` included.

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/finance-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **Add New... -> Project** and import the `finance-portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live on `https://<project-name>.vercel.app` in under 30 seconds!

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy directly from your terminal
vercel
```

---

## 🛠️ Local Development & Testing

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build
```
