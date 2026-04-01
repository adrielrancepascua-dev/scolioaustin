"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Zap } from "lucide-react";

interface AssessmentData {
  age: string;
  curveType: "thoracic" | "lumbar" | "";
  painLevel: number;
}

export default function HeroSection() {
  const [step, setStep] = useState(1);
  const [assessment, setAssessment] = useState<AssessmentData>({
    age: "",
    curveType: "",
    painLevel: 5,
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Assessment Data:", assessment);
    alert(
      `Assessment Complete!\nAge: ${assessment.age}, Curve Type: ${assessment.curveType}, Pain Level: ${assessment.painLevel}`
    );
    setStep(1);
    setAssessment({ age: "", curveType: "", painLevel: 5 });
  };

  const isStepValid = () => {
    if (step === 1) return assessment.age !== "";
    if (step === 2) return assessment.curveType !== "";
    if (step === 3) return true;
    return false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-clinical-white via-clinical-surface to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* H1 with staggered entry */}
            <div>
              {["3D", "Correction", "for a", "3D", "Condition"].map(
                (word, idx) => (
                  <motion.h1
                    key={idx}
                    variants={itemVariants}
                    className="text-5xl md:text-6xl font-bold text-clinical-text leading-tight"
                  >
                    {word}
                  </motion.h1>
                )
              )}
            </div>

            {/* Subtext */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-xl text-gray-700">
                Schroth & SEAS Methods for Evidence-Based Correction
              </p>
              <div className="flex items-center text-spinal-blue font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                Personalized 3D De-rotation Protocol
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-spinal-blue text-white font-semibold rounded-lg shadow-lg hover:bg-spinal-blue-dark transition-all"
            >
              Explore Treatment Plans
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>

            {/* Trust Points */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { label: "Clinically Validated", value: "Since 2010" },
                { label: "3D Analysis", value: "AI-Powered" },
                { label: "Patient Success", value: "94% Rate" },
                { label: "Support", value: "24/7 Available" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="card-clinical p-3 text-sm text-center"
                >
                  <p className="font-semibold text-spinal-blue">
                    {item.value}
                  </p>
                  <p className="text-gray-600 text-xs">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Glassmorphism Card with Multi-step Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-10 backdrop-blur-xl border border-white/30"
          >
            <h3 className="text-2xl font-bold text-clinical-text mb-2">
              Quick Assessment
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Step {step} of 3 - Get your personalized correction path
            </p>

            {/* Progress Indicator */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <motion.div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    s <= step ? "bg-spinal-blue" : "bg-gray-300"
                  }`}
                  animate={{ flex: s <= step ? 1 : 0.8 }}
                />
              ))}
            </div>

            {/* Step 1: Age Input */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <label className="block text-sm font-semibold text-clinical-text">
                  What is your age?
                </label>
                <input
                  type="number"
                  min="5"
                  max="120"
                  placeholder="Enter your age"
                  value={assessment.age}
                  onChange={(e) =>
                    setAssessment({ ...assessment, age: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-spinal-blue focus:outline-none transition-colors"
                />
                <p className="text-xs text-gray-500">
                  This helps us tailor your assessment
                </p>
              </motion.div>
            )}

            {/* Step 2: Curve Type Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <label className="block text-sm font-semibold text-clinical-text">
                  Which curve type applies to you?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      id: "thoracic",
                      label: "Thoracic",
                      desc: "Upper back",
                    },
                    {
                      id: "lumbar",
                      label: "Lumbar",
                      desc: "Lower back",
                    },
                  ].map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setAssessment({
                          ...assessment,
                          curveType: option.id as "thoracic" | "lumbar",
                        })
                      }
                      className={`p-4 rounded-lg border-2 transition-all ${
                        assessment.curveType === option.id
                          ? "border-spinal-blue bg-blue-50"
                          : "border-gray-300 bg-white hover:border-spinal-blue"
                      }`}
                    >
                      <div className="font-semibold text-sm">
                        {option.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {option.desc}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Pain Scale */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <label className="block text-sm font-semibold text-clinical-text">
                  Pain Level: {assessment.painLevel}/10
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={assessment.painLevel}
                  onChange={(e) =>
                    setAssessment({
                      ...assessment,
                      painLevel: Number(e.target.value),
                    })
                  }
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-spinal-blue"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>No Pain</span>
                  <span>Severe Pain</span>
                </div>
                <p className="text-sm text-gray-600 pt-2">
                  {assessment.painLevel === 0 && "You have no pain. Great!"}
                  {assessment.painLevel > 0 && assessment.painLevel <= 3 &&
                    "Mild pain. Treatable with non-invasive methods."}
                  {assessment.painLevel > 3 && assessment.painLevel <= 7 &&
                    "Moderate pain. Intensive PT recommended."}
                  {assessment.painLevel > 7 &&
                    "Significant pain. Consult a specialist."}
                </p>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePrev}
                disabled={step === 1}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Back
              </motion.button>
              {step < 3 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex-1 px-4 py-2 bg-spinal-blue text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </motion.button>
              )}
              {step === 3 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-spinal-blue text-white rounded-lg font-semibold transition-all"
                >
                  Generate My Path
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
