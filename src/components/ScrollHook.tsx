import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollHook = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1 1.5"],
  });
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const style = {
    scale: scaleValue,
    opacity: opacityValue,
  };

  return { componentRef, style };
};

export default useScrollHook;
