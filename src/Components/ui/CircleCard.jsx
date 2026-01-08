import React from "react";

import step1 from "../../assets/Steps/step 1.png";
import step2 from "../../assets/Steps/step 2.png";
import step3 from "../../assets/Steps/step 3.png";
import step4 from "../../assets/Steps/step 4.png";
import step5 from "../../assets/Steps/step 5.png";

const STEPS_IMAGES = [step1, step2, step3, step4, step5];

export default function CircleCard({
  stepNumber,
  title,
  description,
  imageUP = false,
  className = "",
  offset = false,
}) {
  const image = (
    <img
      src={STEPS_IMAGES[stepNumber]}
      alt={`step-${stepNumber + 1}`}
      className="
        w-20 h-20
        sm:w-24 sm:h-24
        md:w-40 md:h-40
        object-contain
      "
    />
  );

  return (
    <div
      className={`
        flex flex-col items-center text-center gap-4
        max-w-xs mx-auto
        ${className}
        ${offset ? "mt-20 md:mt-[200px]" : ""}
      `}
    >
      {!imageUP && image}
      <div className=" px-3 py-2">
        <p className="text-base sm:text-lg font-medium">{title}</p>
        <p className="text-sm sm:text-base text-gray-500">{description}</p>
      </div>

      {imageUP && image}
    </div>
  );
}
