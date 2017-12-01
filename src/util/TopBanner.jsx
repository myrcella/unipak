import React from 'react';

export default function TopBanner({ text }) {
  return (
    <div className="topBanner">
      <span className="topBannerLogo">U</span>
      <span className="topBannerText">{ text }</span>
    </div>
  );
}
