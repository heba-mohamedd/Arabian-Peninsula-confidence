import React from "react";
import certificateLogo from "../assets/certificateLogo.png";
import flag from "../assets/Flag.png";

export default function CertificatCard({ certificat }) {
  return (
    <div className="relative flex flex-col justify-between  h-auto rounded-xl shadow-sm overflow-hidden">
      {/* Flag */}
      <img src={flag} alt="flag" className="absolute top-0 right-0 w-10" />

      {/* Certificate Logo */}
      <div className="flex items-center justify-center flex-1  bg-white">
        <img
          src={certificateLogo}
          alt="certificate logo"
          className="object-cover"
        />
      </div>

      {/* Footer */}
      <div className="bg-neutral-200 flex justify-center items-center px-4 py-3">
        <p className="text-dark-grey px-3">إدارة الجودة</p>
        <p className="font-medium ">{certificat}</p>
      </div>
    </div>
  );
}
