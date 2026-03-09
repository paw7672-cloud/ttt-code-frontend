import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import big1 from "../../assets/bigimage/big1.jpeg";
import big2 from "../../assets/bigimage/big2.jpeg";
import big3 from "../../assets/bigimage/big3.jpeg";
import big4 from "../../assets/bigimage/big4.jpeg";
import big5 from "../../assets/bigimage/big5.jpeg";
import big6 from "../../assets/bigimage/big6.jpeg";
import big7 from "../../assets/bigimage/big7.jpeg";

const howtttdifferent = () => {
  const canvasRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function hexToRGBA(hex, alpha) {
      let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const data = [
      { text: "Choose from INFINITE Programs", color: "#49bad3", icon: "🌐", img: big1, link: "/programs", h: 0 },
      { text: "Enroll for Unique Programs", color: "#2d98b1", icon: "📋", img: big2, link: "/enroll", h: 0 },
      { text: "Concept of Integration", color: "#406d85", icon: "⚙️", img: big3, link: "/integration", h: 0 },
      { text: "TTT MAP", color: "#4a5568", icon: "🗺️", img: big4, link: "/map", h: 0 },
      { text: "ABCDL Model", color: "#f55a67", icon: "🖥️", img: big5, link: "/abcdl", h: 0 },
      { text: "Post Program Support", color: "#bc4b51", icon: "👤", img: big6, link: "/support", h: 0 },
      { text: "Detailed Feedbacks", color: "#8b5e61", icon: "💬", img: big7, link: "/feedback", h: 0 }
    ];

    const images = data.map(item => {
      const img = new Image();
      img.src = item.img;
      return img;
    });

    let hoveredIndex = -1;
    let canvasW, canvasH;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvasW = rect.width;
      canvasH = rect.height;

      canvas.width = canvasW * dpr;
      canvas.height = canvasH * dpr;

      ctx.setTransform(1,0,0,1,0,0);
      ctx.scale(dpr, dpr);
    }

    window.addEventListener("resize", resize);
    resize();

    function wrapText(context, text, x, y, maxWidth, lineHeight) {
      let words = text.split(" ");
      let line = "";

      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + " ";

        if (context.measureText(testLine).width > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }

      context.fillText(line, x, y);
    }

    function draw() {
      ctx.clearRect(0, 0, canvasW, canvasH);

      const cX = canvasW / 2;
      const cY = canvasH;

      const outerR = canvasW * 0.42;
      const innerR = canvasW * 0.16;
      const iconR = innerR + canvasW * 0.04;

      const sliceAngle = Math.PI / data.length;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cX, cY, iconR, Math.PI, Math.PI * 2);
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 8]);
      ctx.stroke();
      ctx.restore();

      data.forEach((item, i) => {
        const target = hoveredIndex === i ? 1 : 0;
        item.h += (target - item.h) * 0.12;

        const startA = Math.PI + i * sliceAngle;
        const midA = startA + sliceAngle / 2;
        const endA = startA + sliceAngle;

        if (item.h > 0.05) {
          const imgDist = outerR + item.h * 70;

          const imgX = cX + Math.cos(midA) * imgDist;
          const imgY = cY + Math.sin(midA) * imgDist;

          const imgSize = canvasW * 0.07;

          ctx.save();
          ctx.globalAlpha = item.h;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(0,0,0,0.2)";

          ctx.beginPath();
          ctx.arc(imgX, imgY, imgSize / 2, 0, Math.PI * 2);
          ctx.clip();

          if (images[i].complete) {
            ctx.drawImage(images[i], imgX - imgSize / 2, imgY - imgSize / 2, imgSize, imgSize);
          }

          ctx.restore();

          ctx.beginPath();
          ctx.arc(imgX, imgY, imgSize / 2, 0, Math.PI * 2);
          ctx.strokeStyle = item.color;
          ctx.lineWidth = 4;
          ctx.globalAlpha = item.h;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        const push = item.h * 25;
        const offX = Math.cos(midA) * push;
        const offY = Math.sin(midA) * push;

        ctx.save();
        ctx.translate(offX, offY);

        ctx.beginPath();
        ctx.moveTo(cX, cY);
        ctx.arc(cX, cY, outerR, startA, endA);
        ctx.closePath();

        ctx.fillStyle = item.h > 0.01 ? hexToRGBA(item.color, 0.12 * item.h) : "#ffffff";
        ctx.fill();

        ctx.strokeStyle = "#f1f5f9";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cX, cY, outerR, startA, endA);
        ctx.lineWidth = 10 + item.h * 5;
        ctx.strokeStyle = item.color;

        if (item.h > 0.1) {
          ctx.shadowBlur = 20 * item.h;
          ctx.shadowColor = item.color;
        }

        ctx.stroke();
        ctx.shadowBlur = 0;

        const iX = cX + Math.cos(midA) * iconR;
        const iY = cY + Math.sin(midA) * iconR;

        ctx.beginPath();
        ctx.arc(iX, iY, canvasW * 0.022, 0, Math.PI * 2);

        ctx.fillStyle = "#fff";
        ctx.strokeStyle = item.color;
        ctx.lineWidth = 3;

        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#222";
        ctx.font = `${canvasW * 0.016}px Arial`;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(item.icon, iX, iY);

        ctx.save();
        ctx.translate(cX, cY);
        ctx.rotate(midA + Math.PI / 2);

        const fs = Math.max(10, canvasW * 0.014);

        ctx.font = `${item.h > 0.5 ? "700" : "500"} ${fs}px Segoe UI`;

        ctx.fillStyle = item.h > 0.5 ? item.color : "#333";

        ctx.textAlign = "center";

        wrapText(ctx, item.text, 0, -outerR + canvasW * 0.08, canvasW * 0.14, fs * 1.4);

        ctx.restore();
        ctx.restore();
      });

      requestAnimationFrame(draw);
    }

    function handle(e) {
      const rect = canvas.getBoundingClientRect();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const dx = clientX - rect.left - canvasW / 2;
      const dy = clientY - rect.top - canvasH;

      const dist = Math.sqrt(dx * dx + dy * dy);

      const angle = Math.atan2(dy, dx);

      let normA = angle < 0 ? angle + Math.PI * 2 : angle;

      if (dist > canvasW * 0.05 && dist < canvasW * 0.6 && normA >= Math.PI) {
        const index = Math.floor((normA - Math.PI) / (Math.PI / data.length));
        hoveredIndex = index;
        setActiveItem(data[index]);
      } else {
        hoveredIndex = -1;
        setActiveItem(null);
      }
    }

    canvas.addEventListener("mousemove", handle);
    canvas.addEventListener("touchstart", handle);
    canvas.addEventListener("touchmove", handle);
    canvas.addEventListener("touchend", () => {
      hoveredIndex = -1;
      setActiveItem(null);
    });

    draw();
  }, []);

 return (
    <div className="flex justify-center items-center min-h-screen bg-white overflow-hidden font-sans">

      <div className="relative w-[95vw] max-w-[1400px] aspect-[2/1.2] flex justify-center items-end">

        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-pointer touch-none"
        />

        {/* CENTER SEMICIRCLE */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[35%] aspect-[2/1] bg-white rounded-t-[1000px] shadow-[0_-15px_60px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center text-center z-50">

          <h1 className="text-black font-extrabold leading-tight text-[clamp(16px,3vw,34px)]">
            How TTT <br /> is <br /> Different
          </h1>

          {/* KNOW MORE BUTTON */}
          {activeItem && (
            <button
              onClick={() => navigate(activeItem.link)}
              className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Know More →
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default howtttdifferent;