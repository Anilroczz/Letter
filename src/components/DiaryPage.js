import { motion, AnimatePresence } from "framer-motion";

export default function DiaryPage({ bgClass, content }) {
  return (
    <AnimatePresence>
        <motion.div
        className={`diary-page ${bgClass}`}
        key={bgClass}
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: 90, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        >
        <div className="page-content">{content}</div>
        </motion.div>
    </AnimatePresence>
  );
}
