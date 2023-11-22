import React from "react";
import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectImage({ src, alt }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <img
        className="project-image"
        src={src}
        alt={alt}
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          maxWidth: "100%",
          height: "auto",
        }}
      ></img>
    </motion.div>
  );
}

export default ProjectImage;
