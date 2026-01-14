import React from "react";
import { MdOutlineArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import frame7 from "../../assets/Frame 7.png";

export default function Title({ title }) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full ">
      <img src={frame7} alt={title} className="w-full min-h-[150px]" />

      <div className="absolute  inset-0 flex items-center px-5 pointer-events-none">
        <div className="flex  w-full items-center gap-2 text-xl pointer-events-auto px-12">
          <button
            onClick={() => navigate("/")}
            className="text-dark-grey border bg-transparent border-none p-0 cursor-pointer"
          >
            الرئيسية
          </button>

          <MdOutlineArrowLeft size={35} color="#00963F" />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
