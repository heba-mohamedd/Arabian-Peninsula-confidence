import React from "react";
export default function MapIframe({ lat, lng, zoom = 15 }) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div className="w-full">
      <iframe
        src={src}
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg border border-light-grey"
        title="Map"
      />
    </div>
  );
}
