import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCreative, Navigation } from "swiper/modules"
import { Camera, Heart, Sparkles } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/navigation"
import "./LetterSwiper.css"
import pages from "./static/content"

export default function LetterSwiper({ onNext }) {
  
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-white via-pink-50 to-blue-50">
      {/* Fixed Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-8 px-6 sticky top-0 z-10 bg-gradient-to-b from-white via-pink-50 to-transparent"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          style={{ backgroundSize: "200% 200%" }}
        >
          To My Love <span className="text-purple-400">❤️</span>
        </motion.h2>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            filter: [
              "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
              "drop-shadow(0 0 40px rgba(59, 130, 246, 0.9))",
              "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="text-blue-500 mt-4"
        >
          <Camera size={42} />
        </motion.div>
      </motion.div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-sm mb-10"
        >
          <Swiper
            grabCursor={true}
            effect="creative"
            creativeEffect={{
              prev: { shadow: true, translate: ["-20%", 0, -1] },
              next: { translate: ["100%", 0, 0] },
            }}
            navigation={true}
            modules={[EffectCreative, Navigation]}
            className="w-full h-[480px] md:h-[520px] rounded-3xl"
          >
            {pages.map((page, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-3xl p-5 shadow-2xl relative overflow-hidden"
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl relative">
                    <div className="p-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {page.content}
                      </p>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-3 right-3 text-pink-400">
                      <Heart size={16} fill="currentColor" />
                    </div>
                    <div className="absolute bottom-3 left-3 text-purple-400">
                      <Sparkles size={14} />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
            y: -4,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xl font-semibold rounded-full shadow-2xl overflow-hidden group border border-white/70"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="relative z-10 flex gap-2">
            See More Magic...
            <Sparkles size={20} className="mt-0.5" />
          </span>
        </motion.button>
      </div>
    </div>
  )
}
