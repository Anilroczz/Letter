import { useState } from "react";
import { motion } from "motion/react"
import { Heart } from "lucide-react"
import DiaryPage from "./DiaryPage";
import PageTurn from "./PageTurn";
import pages from "./static/content"
import "./Letter.css";

export default function Letters({onNext}) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div >
        <div className="diary">
        <DiaryPage {...pages[currentPage]} />
        <PageTurn onNext={nextPage} onPrev={prevPage} />
        </div>

        {
            (currentPage === pages.length - 1) &&  
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                <button
                    onClick={onNext}
                    className="start-btn pulse-glow"
                >
                <Heart className="heart-icon" />
                    See Next
                </button>
            </motion.div>
        }
    </div>
  );
}
