# Angshurpita Ganguly — Investment Banking & Private Equity Portfolio

An institutional-grade portfolio dashboard engineered for Investment Banking, Private Equity, and M&A / Valuation Analyst recruitment. Designed with **Apple.com's signature liquid glass 3D design language** and Wall Street typography (Space Black, frosted glass specular highlights, SF Pro / Inter typography, and tabular figures).

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

## 💎 Design & Technical Highlights

1. **Apple Liquid Glass & 3D Aesthetic**:
   - Translucent glassmorphism with heavy blur (`backdrop-filter: blur(32px)`), hairline specular borders (`inset 0 1px 1px rgba(255, 255, 255, 0.18)`), and subtle ambient gradient illumination.
   - Refined typography: Apple SF Pro Display / SF Pro Text / Inter system fonts with tight tracking (`-0.025em`) and tabular numerals (`SF Mono` / `JetBrains Mono`).
   - Investment banking standard color palette: Space Black `#000000`, Titanium Pearl `#F5F5F7`, Apple Blue `#2997FF`, Alpine Green `#30D158`, and Coral `#FF453A`.

2. **Full Deal Memorandum & Model Inspector**:
   - Institutional Underwriting Thesis & Senior Review Diagnostics.
   - Multi-Year Integrated Financial Projections Table.
   - Sources & Uses / Capital Structure / Valuation Bridge.
   - 2D Sensitivity Heatmap with underwritten base case highlights.
   - Audited Model Integrity Check (100% PASS across Sources=Uses, balance sheet tie-outs, and SEC Form 10-K reconciliations).

3. **Dual View Layout**:
   - Switch between **3D Liquid Glass Deal Cards** and a clean **Bloomberg League Table**.

4. **Candidate Background & Resume Integration**:
   - Direct download for [`Angshurpita_Ganguly_Finance_CV.pdf`](public/downloads/Angshurpita_Ganguly_Finance_CV.pdf).
   - Highlighting GCECT Kolkata B.Tech IT (**9.72 / 10.00 CGPA**), J.P. Morgan Investment Banking Simulation, and CFA Level 1 Candidate.

---

## 🚀 Instant Deployment to Vercel

Configured for **zero-configuration deployment on Vercel** with `vercel.json` included.

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/finance-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **Add New... -> Project**.
3. Import the `finance-portfolio` repository.
4. Framework Preset will automatically detect **Vite** (`npm run build`, output: `dist`).
5. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🛠️ Local Development

```bash
npm install
npm run dev
npm run build
```
