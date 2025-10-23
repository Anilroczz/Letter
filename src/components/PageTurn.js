import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./PageTurn.css";

export default function PageTurn({ onNext, onPrev }) {
  return (
    <div className="page-controls">

      <motion.button
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        className="turn-btn"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="turn-btn"
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}
