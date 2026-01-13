import { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaVideo,
  FaGears,
  FaDesktop,
  FaLightbulb,
  FaHeadset,
  FaShieldHalved,
  FaNetworkWired,
  FaArrowDown,
} from "react-icons/fa6";

// System data
const systemsData = [
  {
    id: "sys-1",
    label: "أنظمة إدارة المباني",
    icon: FaBuilding,
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "sys-2",
    label: "الأنظمة الصوتية والمرئية",
    icon: FaDesktop,
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200",
  },
  {
    id: "sys-3",
    label: "أنظمة المراقبة والكاميرات",
    icon: FaVideo,
    color: "from-red-500 to-red-600",
    borderColor: "border-red-200",
  },
  {
    id: "sys-4",
    label: "الحلول الذكية",
    icon: FaLightbulb,
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-200",
  },
  {
    id: "sys-5",
    label: "أنظمة التحكم",
    icon: FaGears,
    color: "from-teal-500 to-teal-600",
    borderColor: "border-teal-200",
  },
  {
    id: "sys-6",
    label: "خدمات الإدارة والدعم التقني",
    icon: FaHeadset,
    color: "from-indigo-500 to-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    id: "sys-7",
    label: "مراكز القيادة الأمنية الموحدة",
    icon: FaShieldHalved,
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-200",
  },
];

// Mobile View Component - Vertical Layout
const MobileView = () => {
  return (
    <div className="w-full py-8 px-4 bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100 rounded-3xl">
      <div className="max-w-md mx-auto space-y-4">
        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 rounded-2xl p-6 shadow-xl">
            <div className="text-center text-white">
              <FaNetworkWired className="text-4xl mx-auto mb-3 drop-shadow-lg" />
              <h3 className="text-xl font-black mb-1">مركز التكامل</h3>
              <p className="text-sm font-semibold opacity-90">
                Integration Hub
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 bg-white/20 rounded-full px-3 py-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-bold">Connected</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <FaArrowDown className="text-2xl text-emerald-500 animate-bounce" />
        </div>

        {/* Systems List */}
        <div className="space-y-3">
          {systemsData.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div
                  className={`bg-white border-2 ${system.borderColor} rounded-xl p-4 shadow-md active:scale-95 transition-transform`}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${system.color} flex-shrink-0`}
                    >
                      <Icon className="text-2xl text-white" />
                    </div>

                    {/* Label */}
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800 leading-snug">
                        {system.label}
                      </h4>
                    </div>

                    {/* Status */}
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${system.color} animate-pulse flex-shrink-0`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Badge */}
        <div className="text-center pt-4">
          <div className="inline-block bg-white/90 border border-gray-200 rounded-full px-5 py-2 shadow-md">
            <p className="text-sm font-bold text-gray-700">
              <span className="text-emerald-600 text-lg">
                {systemsData.length}
              </span>{" "}
              أنظمة متكاملة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Desktop View Component - React Flow
const DesktopView = () => {
  // Custom Node Component for Systems
  const SystemNode = ({ data }) => {
    const Icon = data.icon;

    return (
      <div className="relative group">
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${data.color} rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-300`}
        />

        <div
          className={`relative bg-white border-2 ${data.borderColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[180px] max-w-[200px]`}
        >
          <div className="flex justify-center mb-3">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${data.color} shadow-md`}
            >
              <Icon className="text-2xl text-white" />
            </div>
          </div>

          <h4 className="text-sm font-bold text-gray-800 text-center leading-snug mb-3">
            {data.label}
          </h4>

          <div
            className={`pt-3 border-t ${data.borderColor} flex items-center justify-center gap-2`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${data.color} animate-pulse`}
            />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              Active
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Custom Node Component for Central Hub
  const HubNode = () => {
    return (
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl blur-2xl opacity-50 animate-pulse" />

        <div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 rounded-3xl p-10 shadow-2xl min-w-[280px]">
          <div className="text-center text-white">
            <div className="inline-block mb-4 animate-spin-slow">
              <FaNetworkWired className="text-6xl drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-black mb-2">مركز التكامل</h3>
            <p className="text-base font-semibold opacity-90 mb-3">
              Integration Hub
            </p>
            <div className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Connected
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const nodeTypes = {
    systemNode: SystemNode,
    hubNode: HubNode,
  };

  // Calculate circular positions
  const getCircularPosition = (index, total, radius = 450) => {
    const angle = (index * 360) / total - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      x: 500 + radius * Math.cos(rad),
      y: 350 + radius * Math.sin(rad),
    };
  };

  // Create nodes
  const initialNodes = [
    {
      id: "hub",
      type: "hubNode",
      position: { x: 400, y: 250 },
      data: {},
      draggable: false,
    },
    ...systemsData.map((system, index) => {
      const pos = getCircularPosition(index, systemsData.length);
      return {
        id: system.id,
        type: "systemNode",
        position: pos,
        data: system,
      };
    }),
  ];

  // Create edges
  const initialEdges = systemsData.map((system) => ({
    id: `edge-hub-${system.id}`,
    source: "hub",
    target: system.id,
    type: "smoothstep",
    animated: true,
    style: {
      stroke: "#10b981",
      strokeWidth: 2,
      opacity: 0.6,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#10b981",
      width: 20,
      height: 20,
    },
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[850px] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 rounded-3xl overflow-hidden shadow-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.5}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          color="#10b981"
          gap={20}
          size={1}
          variant="dots"
          style={{ opacity: 0.15 }}
        />

        <Controls
          className="bg-white shadow-lg rounded-lg border border-gray-200"
          showInteractive={false}
        />

        <MiniMap
          nodeColor={(node) => {
            if (node.type === "hubNode") return "#10b981";
            return "#3b82f6";
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
          className="bg-white shadow-lg rounded-lg border border-gray-200"
          style={{ width: 150, height: 100 }}
        />
      </ReactFlow>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Main Component with Responsive Detection
const GraphFlow = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return <div dir="rtl">{isMobile ? <MobileView /> : <DesktopView />}</div>;
};

export default GraphFlow;
