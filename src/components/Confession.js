import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"

export default function Confession({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full px-6 py-8 overflow-y-auto flex flex-col items-center bg-gradient-to-b from-purple-50 via-pink-50 to-red-50"
    >
      <div className="w-full max-w-2xl">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            {/* Heart + Sparkles */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Heart className="w-16 h-16 text-pink-400 fill-current mx-auto" />

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + 35 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                    top: `${50 + 35 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                There’s a little secret I’ve been saving for the right moment.
              </h2>

              <h2 className="text-1xl md:text-2xl font-bold bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent inline-flex items-center gap-1">
                <span>Want to know what it is?</span>
                <span className="text-purple-400">🫣</span>
              </h2>

              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent inline-flex items-center gap-1">
                <span>A sweet letter for my sweetheart</span>
                <span className="text-purple-400">❤️</span>
              </h2>

              <motion.p
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-base md:text-lg text-pink-500 leading-relaxed"
              >
                Hi Ammayi...💖. I always wanted to write a letter for uh but I couldn't ayy. 
                After a long time, I got some free time, so I thought this is a nice time to do someting for uh. 
                asal ayite letter rayalani undee, kani manam malli apudu kalustamo telidu, so I thought of write a love letter like this for uh. 
                U will get many surprises like this, eesariki ilaa oka special letter just for someone special like uh. 
                obviously This will be a lengthy one, tlsuu kadaa amma nvuu antee nak antha istamoo, 
                so nee gurinchi rastu chaala peddaga aypotadi. So Take your time and get ready for something special.
              </motion.p>
            </div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 md:px-12 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group mt-6"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current" />
                Show me
                <Heart className="w-5 h-5 fill-current" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
