import React from "react";
import { Data_Steps } from "../data/data";
import CircleCard from "./ui/CircleCard";

export default function StepsList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {Data_Steps.map((step, index) => (
        <CircleCard
          key={index}
          stepNumber={index}
          title={step.title}
          description={step.description}
          imageUP={index % 2 !== 0}
          offset={index % 2 === 0}
        />
      ))}
    </div>
  );
}
