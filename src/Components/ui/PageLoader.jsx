import React from "react";
import "./PageLoader.css";

export default function PageLoader() {
  return (
    <div className="page-loader-container">
      <div className="modern-loader">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="loader-content">
          <div className="loader-logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00963F" />
                  <stop offset="100%" stopColor="#00FF87" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="loader-text">جاري التحميل...</p>
        </div>
      </div>
    </div>
  );
}
