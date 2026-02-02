import React from "react";

export function ServiceCard({ service }) {
  return (
    <div className="bg-neutral-200 p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-dark-grey leading-relaxed max-w-lg">
        <span className="font-semibold text-black block mb-1">
          {service?.title}
        </span>
        {service?.description}
      </p>
      <ol className="list-decimal list-inside text-dark-grey leading-relaxed max-w-lg mt-3">
        {service?.points?.map((point, index) => (
          <li key={index}>{point?.point}</li>
        ))}
      </ol>
    </div>
  );
}
