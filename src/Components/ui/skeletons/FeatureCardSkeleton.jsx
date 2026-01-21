import React from "react";
import "./Skeleton.css";

export default function FeatureCardSkeleton() {
  return (
    <div className="skeleton-feature-card">
      <div className="skeleton-feature-header skeleton-shimmer"></div>
      <div className="skeleton-feature-list">
        <div className="skeleton-list-item skeleton-shimmer"></div>
        <div className="skeleton-list-item skeleton-shimmer"></div>
        <div className="skeleton-list-item skeleton-shimmer"></div>
        <div
          className="skeleton-list-item skeleton-shimmer"
          style={{ width: "80%" }}
        ></div>
      </div>
    </div>
  );
}
