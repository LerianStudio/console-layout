"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "../../../providers/sidebar-provider";

const sidebarVariants = {
  opened: {
    width: "auto",
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    width: "72px",
  },
};

export interface SidebarRootProps {
  children: React.ReactNode;
}

export const SidebarRoot = ({ children }: SidebarRootProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <AnimatePresence>
      <motion.div
        data-collapsed={isCollapsed}
        className="group/sidebar relative flex flex-col shadow-sidebar bg-background border-r"
        variants={sidebarVariants}
        initial="closed"
        animate={isCollapsed ? "closed" : "opened"}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
