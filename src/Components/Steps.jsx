import React from "react";
import CircleCard from "./ui/CircleCard";

export default function Steps({ steps = [] }) {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {steps.map((step, index) => (
          <CircleCard
            key={step.id || index}
            stepNumber={index}
            title={step.title}
            description={step.description}
            imageUP={index % 2 !== 0}
            offset={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
