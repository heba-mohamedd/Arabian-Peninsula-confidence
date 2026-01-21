import React from "react";
import { Timeline } from "antd";
import { AiOutlinePython } from "react-icons/ai";
import { motion } from "framer-motion";

const FinancialTimeline = ({ data }) => {
  return (
    <div className="mt-7   flex items-center  justify-center">
      <Timeline
        items={data?.map((item, index) => ({
          icon: (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary p-2 rounded-full flex items-center justify-center shadow-sm">
                <AiOutlinePython color="white" size={30} />
              </div>
            </motion.div>
          ),
          content: (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mr-5 mb-10 -mt-3 text-right"
            >
              <h3 className="text-lg mb-1">السنة المالية {item.period}</h3>
              <p className="text-dark-grey ">متاحة عند الطلب</p>
            </motion.div>
          ),
        }))}
      />
    </div>
  );
};

export default FinancialTimeline;
