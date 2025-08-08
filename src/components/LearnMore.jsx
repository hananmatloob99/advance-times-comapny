"use client";

import { cn } from "../lib/utils.js";
import { AnimatePresence, motion } from "motion/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Context setup
const ModalContext = createContext(undefined);

export const LearnMoreProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useLearnMore = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useLearnMore must be used within a LearnMoreProvider");
  }
  return context;
};

export function LearnMoreModal({ children }) {
  return <LearnMoreProvider>{children}</LearnMoreProvider>;
}

export const LearnMoreTrigger = ({ children, className }) => {
  const { setOpen } = useLearnMore();
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-white text-center relative z-10",
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

export const LearnMoreBody = ({ className }) => {
  const { open, setOpen } = useLearnMore();

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open]);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal content */}
          <motion.div
            ref={modalRef}
            className={cn(
              "min-h-[30%] max-h-[90%] md:max-w-[35%] bg-red-900 text-white rounded-2xl z-50 flex flex-col items-center justify-center p-10 shadow-lg text-center relative",
              className
            )}
            initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 15 }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-blue-800 transition"
              aria-label="Close Modal"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>

            {/* Modal content */}
            <p className="text-lg text-white flex items-center justify-center">
              Advanced Times Company for General Contracting undertakes the
              design of different safety systems according to the type of
              building or real estate, according to its activity commercial,
              industrial, or residential, as well as coordinating with the
              compitent authorities and adopting these designs and taking into
              account all the architectural and construction considerations of
              the real estate.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const LearnMoreContent = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

export const LearnMoreFooter = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-100 dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};

// Hook for detecting outside clicks
export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
