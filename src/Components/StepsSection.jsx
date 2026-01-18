import { motion } from "framer-motion";
import CircleCard from "./ui/CircleCard";

// Accept steps as props for flexibility
export default function StepsSection({ steps = [] }) {
  // Calculate grid columns dynamically based on number of steps
  const getGridCols = (totalSteps) => {
    if (totalSteps <= 3) return "md:grid-cols-3";
    if (totalSteps === 4) return "md:grid-cols-4";
    if (totalSteps === 5) return "md:grid-cols-5";
    if (totalSteps === 6) return "md:grid-cols-6";
    if (totalSteps === 7) return "md:grid-cols-7";
    return "md:grid-cols-5"; // Default for more than 7
  };

  const gridCols = getGridCols(steps.length);

  return (
    <section className="py-4 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop: Grid Layout */}
        <div
          className={`hidden md:grid ${gridCols} gap-x-6 gap-y-8 items-start`}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id || index}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index % 2 === 0 ? "mt-0" : "mt-20"}
            >
              <CircleCard
                stepNumber={index}
                title={step.title}
                description={step.description}
                imageUP={index % 2 !== 0}
                offset={index % 2 === 0}
              >
                {step.items && (
                  <ul className="text-start list-disc list-outside mt-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </CircleCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="block md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id || index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CircleCard
                stepNumber={index}
                title={step.title}
                description={step.description}
              >
                {step.items && (
                  <ul className="text-right list-disc list-outside mt-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </CircleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
