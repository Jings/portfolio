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
      className="flex flex-col p-10 h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
