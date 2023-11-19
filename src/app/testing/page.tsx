"use client";

import React, { useState } from "react";
import "./testing.css";
import { AnimatePresence, motion } from "framer-motion";
const page = () => {
  const [showH2, setShowH2] = useState(true);

  return (
    <div>
      <div className="py-96">
        <AnimatePresence>
          {showH2 && (
            <motion.h2
              key={1}
              className="text-center text-3xl"
              initial={{ x: "-100vw", opacity: 0.3 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
              exit={{ x: "100vw", opacity: 0.3 }}
            >
              Hello guys
            </motion.h2>
          )}

          {!showH2 && (
            <motion.h2
              key={2}
              className="text-center text-3xl"
              initial={{ x: "-100vw", opacity: 0.3 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
              exit={{ x: "100vw", opacity: 0.3 }}
            >
              Exit leave haha
            </motion.h2>
          )}
        </AnimatePresence>

        <button onClick={() => setShowH2(!showH2)}>Toggle</button>
      </div>
    </div>
  );
};

export default page;
