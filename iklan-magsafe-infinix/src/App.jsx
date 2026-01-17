import React from 'react';
import './App.css';

const assets = {
  sideProfile: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-1-v1.webp",
  ai: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-2-v1.webp",
  slim: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-4-v1.webp",
  coil: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-5-v1.webp",
  dual: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-6-v2.webp",
  safe: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-7-v1.webp",
  phone: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-3-v1.webp"
};

const App = () => {
  return (
    <div className="page-wrapper">
      <nav className="header">
        <div className="brand">MAGPOWER 5</div>
        <div className="nav-links">
          <a href="#" className="active">Gambaran</a>
          <a href="#">Spesifikasi</a>
        </div>
        <button className="buy-button">Beli</button>
      </nav>

      <main className="bento-container">
        <div className="left-side">
          <div className="grid-item item-5000">
            <img src={assets.sideProfile} className="img-5000" alt="5000mAh Powerbank" />
          </div>

          <div className="grid-item item-ai">
            <div className="text-overlay">
              <h2>AI Charging</h2>
              <p>Power<br />Management</p>
            </div>
            <img src={assets.ai} className="img-ai" alt="AI Charging Technology" />
          </div>

          <div className="grid-item item-slim">
            <div className="text-overlay">
              <p className="description">Ultra Slim Crafted from<br />Aluminum Alloy</p>
            </div>
            <img src={assets.slim} className="img-slim" alt="Slim side" />
          </div>

          <div className="grid-item item-cycles">
            <h2>600+ Times</h2>
            <p>Charge Cycles</p>
            <img src={assets.coil} className="img-coil" alt="Coil" />
          </div>

          <div className="grid-item item-dual">
            <div className="text-overlay">
              <h2>Dual Mode for</h2>
              <p>Wireless & Cable</p>
            </div>
            <img src={assets.dual} className="img-dual" alt="Dual mode device" />
          </div>

          <div className="grid-item item-safe">
            <div className="text-overlay">
              <h2>Safe & Secure</h2>
              <p>Certification</p>
            </div>
            <img src={assets.safe} className="img-safe" alt="Device back" />
          </div>
        </div>

        <div className="grid-item item-phone">
          <div className="phone-header">
            <p>Wireless Charge Max</p>
            <div className="power-stat">
              <div className="battery-icon">
                <div className="battery-level">
                  <div className="battery-bolt"></div>
                </div>
              </div>
              <h3>20W</h3>
            </div>
          </div>
          <img src={assets.phone} className="img-phone" alt="Infinix Phone" />
        </div>
      </main>
    </div>
  );
};

export default App;