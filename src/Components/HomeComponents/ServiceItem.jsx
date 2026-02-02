import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export function ServiceItem({ item }) {
  return (
    <div className="group relative bg-light-grey/5 border-r-3 border-primary rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4">
          <MdOutlineMiscellaneousServices className="text-white " size={30} />
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">{item.title}</h3>
        <p className="text-center mb-1 text-dark-grey">{item.description}</p>
        <ol>
          {item.items?.map((point, index) => (
            <li
              key={index}
              className="text-base leading-relaxed flex items-start gap-2  group text-dark-grey"
            >
              {index + 1}-<span>{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
