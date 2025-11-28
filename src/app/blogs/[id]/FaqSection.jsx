"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqSection({ faqs }) {
  const [open, setOpen] = useState(0); // ⭐ first one open

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = open === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <p className="text-base font-semibold text-gray-900">
                  {item.question}
                </p>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-700" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
