import React from "react";
import HeaderOfServise from "../HeaderOfServise.jsx";
import ImageGallerySwiper from "../ImageGallerySwiper.jsx";
import { ServicesDescription } from "./ServicesDescription.jsx";

export function SystemSection({ typeSystem }) {
  return (
    <section className="w-full">
      <HeaderOfServise title={typeSystem?.title} />

      {/* Image Gallery with Swiper */}
      {typeSystem?.images && typeSystem.images.length > 0 && (
        <ImageGallerySwiper
          images={typeSystem.images.map((img) => img.image || img)}
        />
      )}

      <ServicesDescription
        typeDescription={typeSystem?.description}
        services={typeSystem?.items}
      />
    </section>
  );
}
