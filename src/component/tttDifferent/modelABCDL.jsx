import React from "react";

const nodes = [
  { label: "Aim", color: "#00d2ff", angle: -90 },
  { label: "Background", color: "#ff9f43", angle: -18 },
  { label: "Class", color: "#1dd1a1", angle: 54 },
  { label: "Duration", color: "#a29bfe", angle: 126 },
  { label: "Location", color: "#ff6b6b", angle: 198 },
];

function ModelABCDL() {
  const radius = 210;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">

        {/* SVG Rotating Dotted Ring */}
        <svg
          className="absolute w-[420px] h-[420px] animate-spin-slow"
          viewBox="0 0 420 420"
        >
          <circle
            cx="210"
            cy="210"
            r="200"
            fill="none"
            stroke="rgb(19, 17, 17)"
            strokeWidth="3"
            strokeDasharray="9 12"
          />
        </svg>

        {/* Center Circle */}
        <div className="absolute w-[170px] h-[170px] bg-[#ff4d4d] text-white rounded-full flex flex-col items-center justify-center font-bold text-xl shadow-lg z-10">
          <span>ABCDL</span>
          <span className="text-sm font-light opacity-80">Model</span>
        </div>

        {/* Nodes */}
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              <div
                className="w-[110px] h-[110px] rounded-full border-[3.5px] flex items-center justify-center bg-white font-semibold cursor-pointer transition-all duration-500 hover:scale-150"
                style={{
                  borderColor: node.color,
                  color: node.color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = node.color;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${node.color}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = node.color;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {node.label}
              </div>
            </div>
          );
        })}

      </div>

      {/* Animation */}
      <style>
         {`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spinSlow 25s linear infinite;
          transform-origin: center;
        }
        `}
      </style>
    </div>
  );
}

export default ModelABCDL;