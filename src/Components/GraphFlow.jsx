// import { useState, useEffect, useRef } from "react";
// import {
//   ReactFlow,
//   useNodesState,
//   useEdgesState,
//   Handle,
//   Position,
// } from "@xyflow/react";
// import "@xyflow/react/dist/style.css";
// import { motion } from "framer-motion";
// import {
//   FaBuilding,
//   FaVideo,
//   FaGears,
//   FaDesktop,
//   FaLightbulb,
//   FaHeadset,
//   FaShieldHalved,
//   FaNetworkWired,
//   FaArrowDown,
// } from "react-icons/fa6";
// import { ReactFlowProvider, useReactFlow } from "reactflow";

// // System data
// const systemsData = [
//   {
//     id: "sys-1",
//     label: "أنظمة إدارة المباني",
//     icon: FaBuilding,
//     color: "from-blue-500 to-blue-600",
//     borderColor: "border-blue-200",
//   },
//   {
//     id: "sys-2",
//     label: "الأنظمة الصوتية والمرئية",
//     icon: FaDesktop,
//     color: "from-purple-500 to-purple-600",
//     borderColor: "border-purple-200",
//   },
//   {
//     id: "sys-3",
//     label: "أنظمة المراقبة والكاميرات",
//     icon: FaVideo,
//     color: "from-red-500 to-red-600",
//     borderColor: "border-red-200",
//   },
//   {
//     id: "sys-4",
//     label: "الحلول الذكية",
//     icon: FaLightbulb,
//     color: "from-yellow-500 to-yellow-600",
//     borderColor: "border-yellow-200",
//   },
//   {
//     id: "sys-5",
//     label: "أنظمة التحكم",
//     icon: FaGears,
//     color: "from-teal-500 to-teal-600",
//     borderColor: "border-teal-200",
//   },
//   {
//     id: "sys-6",
//     label: "خدمات الإدارة والدعم التقني",
//     icon: FaHeadset,
//     color: "from-indigo-500 to-indigo-600",
//     borderColor: "border-indigo-200",
//   },
//   {
//     id: "sys-7",
//     label: "مراكز القيادة الأمنية الموحدة",
//     icon: FaShieldHalved,
//     color: "from-emerald-500 to-emerald-600",
//     borderColor: "border-emerald-200",
//   },
// ];

// // Mobile View Component - Vertical Layout
// const MobileView = () => {
//   return (
//     <div className="w-full py-8 px-4 bg-transparent">
//       <div className="max-w-md mx-auto space-y-4">
//         {/* Central Hub */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="relative"
//         >
//           <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 rounded-2xl p-6 shadow-xl">
//             <div className="text-center text-white">
//               <FaNetworkWired className="text-4xl mx-auto mb-3 drop-shadow-lg" />
//               <h3 className="text-xl font-black mb-1">الأنظمة المتطورة</h3>
//             </div>
//           </div>
//         </motion.div>

//         {/* Arrow Down */}
//         <div className="flex justify-center">
//           <FaArrowDown className="text-2xl text-emerald-500 animate-bounce" />
//         </div>

//         {/* Systems List */}
//         <div className="space-y-3">
//           {systemsData.map((system, index) => {
//             const Icon = system.icon;
//             return (
//               <motion.div
//                 key={system.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 + index * 0.1 }}
//               >
//                 <div
//                   className={`bg-white border-2 ${system.borderColor} rounded-xl p-4 shadow-md active:scale-95 transition-transform`}
//                 >
//                   <div className="flex items-center gap-4">
//                     {/* Icon */}
//                     <div
//                       className={`p-3 rounded-lg bg-gradient-to-br ${system.color} flex-shrink-0`}
//                     >
//                       <Icon className="text-2xl text-white" />
//                     </div>

//                     {/* Label */}
//                     <div className="flex-1">
//                       <h4 className="text-sm font-bold text-gray-800 leading-snug">
//                         {system.label}
//                       </h4>
//                     </div>

//                     {/* Status */}
//                     <div
//                       className={`w-2 h-2 rounded-full bg-gradient-to-r ${system.color} animate-pulse flex-shrink-0`}
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Desktop View Component - React Flow
// const DesktopView = () => {
//   const { fitView } = useReactFlow();
//   const didFitRef = useRef(false);

//   useEffect(() => {
//     if (!didFitRef.current) {
//       const timer = setTimeout(() => {
//         fitView({
//           padding: 0.15,
//           includeHiddenNodes: false,
//           duration: 400,
//           minZoom: 0.7,
//           maxZoom: 0.7,
//         });
//         didFitRef.current = true;
//       }, 150);
//       return () => clearTimeout(timer);
//     }
//   }, []);
//   const initialEdges = systemsData.map((system, index) => ({
//     id: `edge-hub-${system.id}`,
//     source: "hub",
//     sourceHandle: `handle-${index}`,
//     target: system.id,
//     type: "smoothstep",
//     animated: false,
//     style: {
//       stroke: "#E5E7EB",
//       strokeWidth: 2,
//     },
//   }));

//   const SystemNode = ({ data }) => {
//     const getTargetPosition = () => {
//       const angle = data.angle;
//       if (angle >= -45 && angle < 45) return Position.Left;
//       if (angle >= 45 && angle < 135) return Position.Top;
//       if (angle >= 135 || angle < -135) return Position.Right;
//       return Position.Bottom;
//     };

//     return (
//       <div className="relative group">
//         <Handle
//           type="target"
//           position={getTargetPosition()}
//           style={{ background: "transparent", border: "none" }}
//         />
//         <div
//           className={`relative bg-white border-2 ${data.borderColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[180px] max-w-[200px]`}
//         >
//           <h4 className="text-sm font-bold text-gray-800 text-center leading-snug mb-3">
//             {data.label}
//           </h4>
//         </div>
//       </div>
//     );
//   };
//   // Custom Node Component for Central Hub - Hollow Circle
//   const HubNode = () => {
//     // Create handles around the circle perimeter
//     const handleCount = systemsData.length;
//     const handles = [];

//     for (let i = 0; i < handleCount; i++) {
//       const angle = (i * 360) / handleCount - 90; // Same as node positioning
//       const rad = (angle * Math.PI) / 180;
//       const outerRadius = 70;

//       const x = 64 + outerRadius * Math.cos(rad);
//       const y = 64 + outerRadius * Math.sin(rad);

//       handles.push(
//         <Handle
//           key={`handle-${i}`}
//           type="source"
//           position={Position.Top}
//           id={`handle-${i}`}
//           style={{
//             left: `${x}px`,
//             top: `${y}px`,
//             background: "transparent",
//             border: "none",
//           }}
//         />
//       );
//     }

//     return (
//       <div className="relative">
//         {handles}
//         {/* Hollow Circle */}
//         <div className="relative w-32 h-32 rounded-full border-4 border-primary bg-[#F7F7F7] shadow-2xl"></div>
//       </div>
//     );
//   };

//   const nodeTypes = {
//     systemNode: SystemNode,
//     hubNode: HubNode,
//   };

//   // Calculate circular positions
//   const getCircularPosition = (index, total, radius = 300) => {
//     const angle = (index * 360) / total - 90;
//     const rad = (angle * Math.PI) / 180;
//     return {
//       x: 700 + radius * Math.cos(rad),
//       y: 350 + radius * Math.sin(rad),
//     };
//   };

//   // Create nodes
//   const initialNodes = [
//     {
//       id: "hub",
//       type: "hubNode",
//       position: { x: 750, y: 300 },
//       data: {},
//       draggable: false,
//     },
//     ...systemsData.map((system, index) => {
//       const pos = getCircularPosition(index, systemsData.length);
//       const angle = (index * 360) / systemsData.length - 90;
//       return {
//         id: system.id,
//         type: "systemNode",
//         position: pos,
//         data: { ...system, angle },
//         draggable: false,
//         selectable: false,
//       };
//     }),
//   ];
//   const [nodes] = useNodesState(initialNodes);
//   const [edges] = useEdgesState(initialEdges);

//   return (
//     <div className="w-full h-[600px] bg-transparent rounded-3xl overflow-hidden">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         nodeTypes={nodeTypes}
//         minZoom={0.8}
//         maxZoom={0.8}
//         defaultZoom={0.8}
//         nodesDraggable={false}
//         nodesConnectable={false}
//         elementsSelectable={false}
//         panOnDrag={false}
//         zoomOnScroll={false}
//         zoomOnPinch={false}
//         zoomOnDoubleClick={false}
//         preventScrolling
//         proOptions={{ hideAttribution: true }}
//       >
//         <defs>
//           <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#10b981" />
//             <stop offset="100%" stopColor="#3b82f6" />
//           </linearGradient>
//         </defs>
//       </ReactFlow>
//     </div>
//   );
// };

// // Main Component with Responsive Detection
// const GraphFlow = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return (
//     <div className="">
//       {isMobile ? (
//         <MobileView />
//       ) : (
//         <ReactFlowProvider>
//           <DesktopView />
//         </ReactFlowProvider>
//       )}
//     </div>
//   );
// };

// export default GraphFlow;

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ReactFlow,
  Handle,
  Position,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  FaBuilding,
  FaVideo,
  FaGears,
  FaDesktop,
  FaLightbulb,
  FaHeadset,
  FaShieldHalved,
  FaNetworkWired,
} from "react-icons/fa6";

// ================== DATA ==================
const systemsData = [
  {
    id: "sys-1",
    label: "أنظمة إدارة المباني",
    icon: FaBuilding,
    borderColor: "border-blue-200",
  },
  {
    id: "sys-2",
    label: "الأنظمة الصوتية والمرئية",
    icon: FaDesktop,
    borderColor: "border-purple-200",
  },
  {
    id: "sys-3",
    label: "أنظمة المراقبة والكاميرات",
    icon: FaVideo,
    borderColor: "border-red-200",
  },
  {
    id: "sys-4",
    label: "الحلول الذكية",
    icon: FaLightbulb,
    borderColor: "border-yellow-200",
  },
  {
    id: "sys-5",
    label: "أنظمة التحكم",
    icon: FaGears,
    borderColor: "border-teal-200",
  },
  {
    id: "sys-6",
    label: "خدمات الإدارة والدعم التقني",
    icon: FaHeadset,
    borderColor: "border-indigo-200",
  },
  {
    id: "sys-7",
    label: "مراكز القيادة الأمنية الموحدة",
    icon: FaShieldHalved,
    borderColor: "border-emerald-200",
  },
];

// ================== NODES ==================
const SystemNode = ({ data }) => {
  const getTargetPosition = () => {
    const angle = data.angle;
    if (angle >= -45 && angle < 45) return Position.Left;
    if (angle >= 45 && angle < 135) return Position.Top;
    if (angle >= 135 || angle < -135) return Position.Right;
    return Position.Bottom;
  };

  return (
    <div className="relative">
      <Handle
        type="target"
        position={getTargetPosition()}
        style={{ background: "transparent", border: "none" }}
      />
      <motion.div
        className={`bg-white border-2 ${data.borderColor} rounded-2xl p-4 shadow-lg min-w-[180px] text-center`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3 },
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h4 className="text-sm font-bold text-gray-800">{data.label}</h4>
      </motion.div>
    </div>
  );
};

const HubNode = () => {
  const handleCount = systemsData.length;

  return (
    <div className="relative w-32 h-32">
      {Array.from({ length: handleCount }).map((_, i) => {
        const angle = (i * 360) / handleCount - 90;
        const rad = (angle * Math.PI) / 180;
        const r = 70;

        return (
          <Handle
            key={i}
            type="source"
            id={`handle-${i}`}
            position={Position.Top}
            style={{
              left: `${64 + r * Math.cos(rad)}px`,
              top: `${64 + r * Math.sin(rad)}px`,
              background: "transparent",
              border: "none",
            }}
          />
        );
      })}

      <motion.div
        className="w-32 h-32 rounded-full border-4 border-primary bg-[#F7F7F7] shadow-xl flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaNetworkWired className="text-3xl text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
};

// ================== FLOW ==================
const Flow = () => {
  const { fitView } = useReactFlow();
  const fitted = useRef(false);

  useEffect(() => {
    const fit = () => {
      fitView({ padding: 0.2 });
    };

    if (!fitted.current) {
      setTimeout(() => {
        fit();
        fitted.current = true;
      }, 100);
    }

    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [fitView]);

  const getCircularPosition = (index, total, radius = 300) => {
    const angle = (index * 360) / total - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      x: 700 + radius * Math.cos(rad),
      y: 250 + radius * Math.sin(rad),
    };
  };

  const nodes = [
    {
      id: "hub",
      type: "hubNode",
      position: { x: 700, y: 250 },
      draggable: false,
    },
    ...systemsData.map((sys, i) => {
      const angle = (i * 360) / systemsData.length - 90;
      return {
        id: sys.id,
        type: "systemNode",
        position: getCircularPosition(i, systemsData.length),
        data: { ...sys, angle },
        draggable: false,
      };
    }),
  ];

  const edges = systemsData.map((sys, i) => ({
    id: `e-${sys.id}`,
    source: "hub",
    sourceHandle: `handle-${i}`,
    target: sys.id,
    type: "smoothstep",
    style: { stroke: "#E5E7EB", strokeWidth: 2 },
  }));

  return (
    <motion.div
      className="w-full h-[500px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ systemNode: SystemNode, hubNode: HubNode }}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
        proOptions={{ hideAttribution: true }}
      />
    </motion.div>
  );
};

// ================== EXPORT ==================
export default function GraphFlow() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
