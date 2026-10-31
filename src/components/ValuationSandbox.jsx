import React, { useState } from 'react';
import { Sliders, TrendingUp, DollarSign, Calculator, HelpCircle } from 'lucide-react';

export const ValuationSandbox = () => {
  const [activeTab, setActiveTab] = useState('aes-lbo');

  // AES Corp LBO State
  const [offerPrice, setOfferPrice] = useState(15.00);
  const [exitMultiple, setExitMultiple] = useState(13.0);

  // Infosys DCF State
  const [wacc, setWacc] = useState(11.20);
  const [terminalGrowth, setTerminalGrowth] = useState(4.50);

  // AES Corp Calculation
  const dilutedSharesAES = 714; // million shares
  const equityPurchaseAES = offerPrice * dilutedSharesAES; // $m
  const refinanceDebtAES = 5984; // $m
  const feesAES = 431.5; // $m
  const totalUsesAES = equityPurchaseAES + refinanceDebtAES + feesAES;
  const newDebtAES = 8613; // $m
  const bsCashAES = 482; // $m
  const sponsorEquityAES = Math.max(0, totalUsesAES - newDebtAES - bsCashAES);

  const exitEbitdaAES = 3961.5; // $m
  const exitEnterpriseValAES = exitMultiple * exitEbitdaAES;
  const exitNetDebtAES = 38279.9; // $m (including project debt)
  const exitFeesAES = exitEnterpriseValAES * 0.01;
  const exitEquityValAES = Math.max(0, exitEnterpriseValAES - exitNetDebtAES - exitFeesAES);

  const moicAES = sponsorEquityAES > 0 ? exitEquityValAES / sponsorEquityAES : 0;
  const grossIrrAES = moicAES > 0 ? (Math.pow(moicAES, 1 / 5) - 1) * 100 : 0;
  const netGainAES = exitEquityValAES - sponsorEquityAES;

  // Infosys DCF Calculation
  const projectedFcfs = [27581, 28945, 30304, 31651, 31626]; // FY27-31
  const rWacc = wacc / 100;
  const rG = terminalGrowth / 100;

  let pvFcfs = 0;
  projectedFcfs.forEach((fcf, idx) => {
    pvFcfs += fcf / Math.pow(1 + rWacc, idx + 1);
  });

  const terminalFcfInfy = 31626;
  const terminalValInfy = (terminalFcfInfy * (1 + rG)) / Math.max(0.001, rWacc - rG);
  const pvTerminalValInfy = terminalValInfy / Math.pow(1 + rWacc, 5);
  const enterpriseValInfy = pvFcfs + pvTerminalValInfy;
  const equityValInfy = enterpriseValInfy + 13025; // Net cash
  const sharesInfy = 404.69; // Cr shares
  const fairValuePerShareInfy = equityValInfy / sharesInfy;
  const currentPriceInfy = 1115.20;
  const upsideDownsideInfy = ((fairValuePerShareInfy / currentPriceInfy) - 1) * 100;

  return (
    <section className="sandbox-section" id="sandbox">
      <div className="section-container">
        <div className="section-header">
          <div>
            <div className="section-tag">
              <Sliders size={14} />
              <span>Interactive Underwriting Sandbox</span>
            </div>
            <h2 className="section-title">Valuation &amp; LBO Sensitivity Simulator</h2>
            <p className="section-desc">
              Test dynamic deal variables in real-time. Adjust entry purchase prices, exit multiples, discount rates, and perpetual growth assumptions to observe live changes to MOIC, IRR, and fair value.
            </p>
          </div>
        </div>

        <div className="simulator-box">
          <div className="simulator-tabs">
            <button
              className={`sim-tab-btn ${activeTab === 'aes-lbo' ? 'active' : ''}`}
              onClick={() => setActiveTab('aes-lbo')}
              id="sim-tab-aes"
            >
              The AES Corp ($17.1B LBO Returns)
            </button>
            <button
              className={`sim-tab-btn ${activeTab === 'infy-dcf' ? 'active' : ''}`}
              onClick={() => setActiveTab('infy-dcf')}
              id="sim-tab-infy"
            >
              Infosys Ltd (DCF Intrinsic Valuation)
            </button>
          </div>

          {activeTab === 'aes-lbo' ? (
            <div className="simulator-grid" id="aes-lbo-simulator">
              <div className="slider-group">
                <div className="slider-card">
                  <div className="slider-label-row">
                    <span className="slider-title">Take-Private Offer Price</span>
                    <span className="slider-val">${offerPrice.toFixed(2)} / share</span>
                  </div>
                  <input
                    type="range"
                    min="13.00"
                    max="17.00"
                    step="0.25"
                    value={offerPrice}
                    onChange={(e) => setOfferPrice(parseFloat(e.target.value))}
                    className="range-input"
                    id="slider-aes-offer-price"
                  />
                  <div className="slider-range-labels">
                    <span>$13.00 (Distressed)</span>
                    <span>$15.00 (Agreed Offer)</span>
                    <span>$17.00 (Overpay)</span>
                  </div>
                </div>

                <div className="slider-card">
                  <div className="slider-label-row">
                    <span className="slider-title">Exit EV / Adj. EBITDA Multiple (5-Yr Hold)</span>
                    <span className="slider-val">{exitMultiple.toFixed(1)}x EBITDA</span>
                  </div>
                  <input
                    type="range"
                    min="11.5"
                    max="14.5"
                    step="0.25"
                    value={exitMultiple}
                    onChange={(e) => setExitMultiple(parseFloat(e.target.value))}
                    className="range-input"
                    id="slider-aes-exit-multiple"
                  />
                  <div className="slider-range-labels">
                    <span>11.5x (Contraction)</span>
                    <span>13.0x (Underwritten Base)</span>
                    <span>14.5x (Expansion)</span>
                  </div>
                </div>
              </div>

              <div className="sim-results-card">
                <div className="sim-results-header">
                  <span className="sim-results-title">SPONSOR RETURN OUTPUTS • FY2030E EXIT</span>
                  <span className="status-badge pass">LIVE CALCULATION</span>
                </div>

                <div className="sim-metrics-grid">
                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Multiple on Invested Capital</span>
                    <span className={`sim-metric-val ${moicAES >= 1.5 ? 'gold' : 'rose'}`}>
                      {moicAES.toFixed(2)}x
                    </span>
                  </div>

                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Gross Sponsor IRR</span>
                    <span className={`sim-metric-val ${grossIrrAES >= 10 ? 'emerald' : grossIrrAES >= 7 ? 'gold' : 'rose'}`}>
                      {grossIrrAES.toFixed(2)}%
                    </span>
                  </div>

                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Required Sponsor Cheque</span>
                    <span className="sim-metric-val num">
                      ${sponsorEquityAES.toFixed(0)}M
                    </span>
                  </div>

                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Net Dollar Gain to Sponsor</span>
                    <span className={`sim-metric-val num ${netGainAES >= 0 ? 'emerald' : 'rose'}`}>
                      ${netGainAES.toFixed(0)}M
                    </span>
                  </div>
                </div>

                <div className="sim-verdict-box">
                  <strong>Investment Memo Takeaway:</strong>{' '}
                  {grossIrrAES >= 15
                    ? `Outstanding hurdle achievement (${grossIrrAES.toFixed(1)}% IRR). Entry at $${offerPrice.toFixed(2)} creates substantial margin of safety.`
                    : grossIrrAES >= 9.5
                    ? `Baseline infrastructure return (${grossIrrAES.toFixed(1)}% IRR / ${moicAES.toFixed(2)}x MOIC). Meets utility-adjacent hurdle rate with complete cash-sweep deleveraging.`
                    : `Sub-hurdle return (${grossIrrAES.toFixed(1)}% IRR). Transaction requires either purchase price discount below $14.50 or exit multiple expansion to clear sponsor committee.`}
                </div>
              </div>
            </div>
          ) : (
            <div className="simulator-grid" id="infy-dcf-simulator">
              <div className="slider-group">
                <div className="slider-card">
                  <div className="slider-label-row">
                    <span className="slider-title">Weighted Average Cost of Capital (WACC)</span>
                    <span className="slider-val">{wacc.toFixed(2)}%</span>
                  </div>
                  <input
                    type="range"
                    min="10.00"
                    max="12.50"
                    step="0.10"
                    value={wacc}
                    onChange={(e) => setWacc(parseFloat(e.target.value))}
                    className="range-input"
                    id="slider-infy-wacc"
                  />
                  <div className="slider-range-labels">
                    <span>10.00% (Low Risk)</span>
                    <span>11.20% (Underwritten Base)</span>
                    <span>12.50% (High Risk)</span>
                  </div>
                </div>

                <div className="slider-card">
                  <div className="slider-label-row">
                    <span className="slider-title">Perpetual Terminal Growth Rate (g)</span>
                    <span className="slider-val">{terminalGrowth.toFixed(2)}%</span>
                  </div>
                  <input
                    type="range"
                    min="3.50"
                    max="5.50"
                    step="0.10"
                    value={terminalGrowth}
                    onChange={(e) => setTerminalGrowth(parseFloat(e.target.value))}
                    className="range-input"
                    id="slider-infy-growth"
                  />
                  <div className="slider-range-labels">
                    <span>3.50% (Conservative)</span>
                    <span>4.50% (Base Case)</span>
                    <span>5.50% (Secular Growth)</span>
                  </div>
                </div>
              </div>

              <div className="sim-results-card">
                <div className="sim-results-header">
                  <span className="sim-results-title">INTRINSIC VALUATION OUTPUTS • INFOSYS LTD</span>
                  <span className="status-badge pass">UFCF DISCOUNTED</span>
                </div>

                <div className="sim-metrics-grid">
                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Intrinsic Fair Value / Share</span>
                    <span className="sim-metric-val gold">
                      ₹{fairValuePerShareInfy.toFixed(2)}
                    </span>
                  </div>

                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Implied Market Premium / (Discount)</span>
                    <span className={`sim-metric-val ${upsideDownsideInfy >= 0 ? 'emerald' : 'rose'}`}>
                      {upsideDownsideInfy >= 0 ? '+' : ''}{upsideDownsideInfy.toFixed(1)}%
                    </span>
                  </div>

                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Implied Enterprise Value</span>
                    <span className="sim-metric-val num">
                      ₹{enterpriseValInfy.toFixed(0)} Cr
                    </span>
                  </div>

                  <div className="sim-metric-item">
                    <span className="sim-metric-label">Terminal Value Contribution</span>
                    <span className="sim-metric-val num">
                      {((pvTerminalValInfy / enterpriseValInfy) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="sim-verdict-box">
                  <strong>Senior Review Takeaway:</strong> Current market price is ₹{currentPriceInfy.toFixed(2)}. At WACC={wacc.toFixed(1)}% and g={terminalGrowth.toFixed(1)}%, fair value is ₹{fairValuePerShareInfy.toFixed(0)} ({upsideDownsideInfy.toFixed(1)}%). Notice that terminal value represents {((pvTerminalValInfy / enterpriseValInfy) * 100).toFixed(1)}% of enterprise value, demonstrating high sensitivity to macro discount rates.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
