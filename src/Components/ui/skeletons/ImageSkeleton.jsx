import React from "react";
import "./Skeleton.css";

export default function ImageSkeleton({
  width = "100%",
  height = "400px",
  className = "",
}) {
  return (
    <div
      className={`skeleton-image skeleton-shimmer ${className}`}
      style={{ width, height }}
    ></div>
  );
}
