import React from "react";
import { ServiceCard } from "./ServiceCard.jsx";

export function ServicesDescription({ typeDescription, services }) {
  return (
    <>
      <p className="text-xl mb-6">{typeDescription}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </>
  );
}
