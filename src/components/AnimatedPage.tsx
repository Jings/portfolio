import { FunctionComponent, ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedPageProps = {
  children: ReactNode;
};

export const AnimatedPage: FunctionComponent<AnimatedPageProps> = ({
  children,
}): JSX.Element => {
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
};
