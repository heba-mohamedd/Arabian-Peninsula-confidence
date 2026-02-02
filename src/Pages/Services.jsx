import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title.jsx";
import { useFacilityServicesQuery } from "../hooks/queries/useFacilityServices.js";
import PageLoader from "../Components/ui/PageLoader.jsx";
import { IntroSection, SystemSection } from "../Components/ServiceComponents";

export default function Services() {
  const { data: facilityManagementData, isLoading } =
    useFacilityServicesQuery();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <motion.section
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title="الخدمــات" />

      <div className="flex flex-col gap-5 justify-center items-center w-full max-w-7xl mx-auto px-6 my-10">
        {/* Intro */}
        <IntroSection
          title={facilityManagementData?.data?.name}
          description={facilityManagementData?.data?.description}
          importantNote={facilityManagementData?.data?.important_note}
        />

        {/* System Types */}
        {facilityManagementData?.data?.types?.map((typeSystem, index) => (
          <SystemSection key={index} typeSystem={typeSystem} />
        ))}
      </div>
    </motion.section>
  );
}
