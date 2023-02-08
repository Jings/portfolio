import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedPageProps = {
  children: ReactNode;
};

export default function AnimatedPage({ children }: AnimatedPageProps) {
  return (
    <motion.div
      className="flex h-full w-full flex-col p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
