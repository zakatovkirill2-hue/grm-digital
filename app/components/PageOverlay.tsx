"use client";

import { motion } from "framer-motion";

export default function PageOverlay() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 0, opacity: 0 }}
      exit={{
        scale: 35,
        opacity: 1,
      }}
      transition={{
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
      fixed
      left-1/2
      top-1/2
      h-24
      w-24
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-green-500
      blur-3xl
      pointer-events-none
      z-[9999]"
    />
  );
}