"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

interface CurvatureAnnotation {
  min: number;
  max: number;
  label: string;
  description: string;
  color: string;
}

const annotations: CurvatureAnnotation[] = [
  {
    min: 0,
    max: 10,
    label: "Straight",
    description: "Normal spine alignment",
    color: "rgba(34, 197, 94, 0.6)",
  },
  {
    min: 10,
    max: 25,
    label: "Mild",
    description: "Observation & Schroth Initiation",
    color: "rgba(59, 130, 246, 0.6)",
  },
  {
    min: 25,
    max: 40,
    label: "Moderate",
    description: "Bracing & Intensive PT",
    color: "rgba(249, 115, 22, 0.6)",
  },
  {
    min: 40,
    max: 90,
    label: "Severe",
    description: "Surgical Consultation Range",
    color: "rgba(239, 68, 68, 0.6)",
  },
];

// SVG spine path generator based on curvature
const generateSpinePath = (curvature: number): string => {
  const baseY = 400;
  const startX = 250;
  const curveFactor = (curvature / 90) * 80; // Max 80px deviation

  const points = [];
  for (let i = 0; i <= 20; i++) {
    const y = baseY - (i * 20);
    const offset = Math.sin((i / 20) * Math.PI) * curveFactor;
    points.push(`${startX + offset},${y}`);
  }

  return `M ${points.join(" L ")}`;
};

export default function SpineVisualizer() {
  const [curvature, setCurvature] = useState(25);

  const currentAnnotation = useMemo(
    () => annotations.find((a) => curvature >= a.min && curvature < a.max) || annotations[0],
    [curvature]
  );

  const spinePath = useMemo(() => generateSpinePath(curvature), [curvature]);

  return (
    <section className="py-24 bg-gradient-to-b from-clinical-white via-clinical-surface to-clinical-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-clinical-text mb-2">
            Interactive Spine Visualizer
          </h2>
          <p className="text-lg text-gray-600">
            Adjust the slider to see how different curvature levels affect spinal alignment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: SVG Spine */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white card-clinical p-8 w-full max-w-sm">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                aria-label="Interactive spine visualization"
              >
                {/* Background Grid (subtle) */}
                <defs>
                  <linearGradient
                    id="spineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* Vertebrae (visual markers) */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <motion.circle
                    key={`vertebra-${i}`}
                    cx={250 + Math.sin((i / 7) * Math.PI) * (curvature / 2)}
                    cy={400 - i * 30}
                    r="8"
                    fill="#2563EB"
                    opacity={0.6}
                    animate={{
                      cx: 250 + Math.sin((i / 7) * Math.PI) * (curvature / 2),
                      cy: 400 - i * 30,
                    }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  />
                ))}

                {/* Main Spine Path */}
                <motion.path
                  d={spinePath}
                  stroke="url(#spineGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Dynamic Annotation Circle */}
                <motion.circle
                  cx="250"
                  cy="300"
                  r="40"
                  fill="none"
                  stroke={currentAnnotation.color}
                  strokeWidth="2"
                  opacity="0.5"
                  animate={{ r: 50 + curvature / 2 }}
                  transition={{ type: "spring", damping: 15 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Right: Controls & Annotation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Curvature Display */}
            <div className="card-clinical p-6">
              <div className="flex items-end justify-between mb-4">
                <h3 className="text-xl font-semibold text-clinical-text">
                  Curvature Level
                </h3>
                <motion.span
                  key={curvature}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl font-bold text-spinal-blue"
                >
                  {Math.round(curvature)}°
                </motion.span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="0"
                max="90"
                value={curvature}
                onChange={(e) => setCurvature(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-spinal-blue"
                aria-label="Curvature slider"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0°</span>
                <span>45°</span>
                <span>90°</span>
              </div>
            </div>

            {/* Annotation Card */}
            <motion.div
              key={currentAnnotation.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card-clinical p-6 border-l-4"
              style={{
                borderLeftColor: currentAnnotation.color,
                backgroundColor: currentAnnotation.color + "10",
              }}
            >
              <div className="flex items-center mb-3">
                <motion.div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: currentAnnotation.color }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h4 className="text-lg font-semibold text-clinical-text">
                  {currentAnnotation.label}
                </h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {currentAnnotation.description}
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Range: {currentAnnotation.min}° - {currentAnnotation.max}°
              </div>
            </motion.div>

            {/* Clinical Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-lg p-4 border border-blue-100"
            >
              <p className="text-sm text-gray-700">
                💡 <strong>Clinical Note:</strong> This visualizer demonstrates
                spinal curvature severity levels. Consult a healthcare provider
                for professional assessment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
