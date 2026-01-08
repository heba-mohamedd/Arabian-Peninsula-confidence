import React from "react";
import { Data_Steps } from "../data/data";
import CircleCard from "./ui/CircleCard";

export default function StepsList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5">
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
