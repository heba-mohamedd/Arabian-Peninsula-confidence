import React from "react";
import "./Skeleton.css";

export default function TextSkeleton({
  lines = 3,
  width = "100%",
  className = "",
}) {
  return (
    <div className={`skeleton-text-container ${className}`} style={{ width }}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="skeleton-text skeleton-shimmer"
          style={{ width: index === lines - 1 ? "70%" : "100%" }}
        ></div>
      ))}
    </div>
  );
}
