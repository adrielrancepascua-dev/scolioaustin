"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Activity,
  Wind,
  Target,
  AlertCircle,
  Zap,
} from "lucide-react";

const methodComparison = [
  {
    id: "traditional",
    title: "Traditional Physical Therapy",
    icon: Activity,
    color: "gray",
    description: "General, Non-Specific Approach",
    features: [
      { label: "General exercise routines", status: false },
      { label: "Non-specific stretching", status: false },
      { label: "One-size-fits-all programs", status: false },
      { label: "Limited 3D analysis", status: false },
      { label: "Inconsistent monitoring", status: false },
    ],
    stats: {
      effectiveness: "65%",
      sessions: "24-36",
      customization: "Low",
    },
    evidence: "General PT guidelines",
    isHighlighted: false,
  },
  {
    id: "scolioaustin",
    title: "ScolioAustin Pro-Max",
    icon: Zap,
    color: "blue",
    description: "Evidence-Based 3D De-rotation",
    features: [
      { label: "3D De-rotation & Correction", status: true },
      { label: "Respiratory Coaching Integration", status: true },
      { label: "ADL (Daily Life) Integration", status: true },
      { label: "AI-Powered 3D Analysis", status: true },
      { label: "Real-Time Progress Tracking", status: true },
    ],
    stats: {
      effectiveness: "94%",
      sessions: "12-16",
      customization: "Daily Personalization",
    },
    evidence: "Schroth & SEAS Clinical Validation",
    isHighlighted: true,
  },
];

export default function MethodComparison() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-clinical-white to-clinical-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-clinical-text mb-4">
            Traditional vs. Specialized Care
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare evidence-based 3D de-rotation with conventional approaches
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {methodComparison.map((method, idx) => {
            const Icon = method.icon;
            const isHovered = hoveredId === method.id;

            return (
              <motion.div
                key={method.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(method.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  y: isHovered ? -8 : 0,
                  scale: isHovered ? 1.02 : 1,
                }}
                className={`relative card-clinical p-8 rounded-2xl transition-all duration-300 h-full flex flex-col ${
                  method.isHighlighted
                    ? "md:ring-2 md:ring-spinal-blue bg-blue-50"
                    : "bg-gray-50 opacity-75"
                }`}
                style={
                  method.isHighlighted && isHovered
                    ? {
                        boxShadow:
                          "0 0 40px rgba(37, 99, 235, 0.6), 0 20px 25px rgba(37, 99, 235, 0.15)",
                      }
                    : {}
                }
              >
                {/* Badge */}
                {method.isHighlighted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-spinal-blue text-white px-4 py-1 rounded-full text-xs font-semibold"
                  >
                    ⭐ Recommended
                  </motion.div>
                )}

                {/* Icon & Title */}
                <div className="flex items-start mb-6">
                  <motion.div
                    animate={{
                      rotate: isHovered ? 10 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    className={`p-3 rounded-lg ${
                      method.isHighlighted
                        ? "bg-spinal-blue text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-clinical-text">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-grow">
                  {method.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ x: isHovered && feature.status ? 8 : 0 }}
                      className="flex items-start"
                    >
                      {feature.status ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.status
                            ? "text-clinical-text font-medium"
                            : "text-gray-500 line-through"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0.7 }}
                  className="grid grid-cols-3 gap-3 mb-6 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-spinal-blue">
                      {method.stats.effectiveness}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">Effectiveness</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-spinal-blue">
                      {method.stats.sessions}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">Sessions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-spinal-blue">
                      {method.stats.customization.split(" ")[0]}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {method.stats.customization.split(" ").length > 1
                        ? method.stats.customization.split(" ")[1]
                        : "Custom"}
                    </p>
                  </div>
                </motion.div>

                {/* Evidence Badge */}
                <motion.div
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <p className="text-xs font-semibold text-spinal-blue">
                    ✓ {method.evidence}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-spinal-blue to-spinal-blue-light rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "3D Precision",
                desc: "Spine-specific correction targeting exact misalignment vectors",
              },
              {
                icon: Wind,
                title: "Respiratory Integration",
                desc: "Breathing techniques enhance rib cage mobilization",
              },
              {
                icon: Activity,
                title: "ADL Coaching",
                desc: "Daily habit integration for sustained correction",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  className="flex justify-center mb-4"
                >
                  <item.icon className="w-8 h-8" />
                </motion.div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
