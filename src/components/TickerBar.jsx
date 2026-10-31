import React from 'react';
import { liveMarketTickers } from '../data/profileData';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const TickerBar = () => {
  // Double the list for infinite seamless marquee
  const tickers = [...liveMarketTickers, ...liveMarketTickers];

  return (
    <div className="ticker-bar" id="market-ticker-bar">
      <div className="ticker-status">
        <span className="pulse-dot"></span>
        <span>BENCHMARKS LIVE</span>
      </div>
      <div className="ticker-track-container">
        <div className="ticker-track">
          {tickers.map((t, idx) => (
            <div key={`${t.ticker}-${idx}`} className="ticker-item">
              <span className="ticker-symbol">{t.ticker}</span>
              <span className="ticker-price">{t.price}</span>
              <span className={`ticker-change ${t.isUp ? 'up' : 'down'}`}>
                {t.isUp ? '+' : ''}{t.change}
              </span>
              <span style={{ color: '#475569', fontSize: '0.68rem' }}>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
