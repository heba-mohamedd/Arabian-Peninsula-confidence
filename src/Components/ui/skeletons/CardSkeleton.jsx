import React from "react";
import "./Skeleton.css";

export default function CardSkeleton({ height = "200px", className = "" }) {
  return (
    <div className={`skeleton-card ${className}`} style={{ height }}>
      <div className="skeleton-image skeleton-shimmer"></div>
      <div className="skeleton-content">
        <div className="skeleton-title skeleton-shimmer"></div>
        <div className="skeleton-text skeleton-shimmer"></div>
        <div
          className="skeleton-text skeleton-shimmer"
          style={{ width: "80%" }}
        ></div>
      </div>
    </div>
  );
}
