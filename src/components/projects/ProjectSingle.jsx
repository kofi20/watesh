import React from "react";
import { motion } from "framer-motion";

const ProjectSingle = ({ title, category, image, linkTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Single Project"
      >
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
              style={{ height: "300px", width: "auto" }}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectSingle;
