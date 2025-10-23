import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

export default function FinalScreen({onNext}) {
  const [cardOpen, setCardOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [typingComplete, setTypingComplete] = useState(false)
  const messageRef = useRef(null)

  const proposalMessage = `From the moment you came into my life, everything started to change.  
You brought colors to my ordinary days, warmth to my silence, and a happiness I was missing.  

Every sunrise feels brighter because of you.  
Every dream feels possible because you inspire me.  
Every challenge feels easier because I imagine you by my side.  

You are not just my lover, you’re the most special part of my life.  
You make me smile, you make my heart race, and you make me want to be a better version of myself.  

I want to spend forever making you smile, forever holding your hand, forever being the reason you believe in love.

I don’t know what the future holds, but I know one thing for sure.
I want that future with you.

Will you be mine forever and always?

With all my love,
Your devoted heart 💕`

  useEffect(() => {
    if (cardOpen && !typingComplete) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < proposalMessage.length) {
          setDisplayedText(proposalMessage.slice(0, currentIndex + 1))
          currentIndex++

          // Auto scroll as text appears
          if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight
          }
        } else {
          setTypingComplete(true)
          clearInterval(typingInterval)
        }
      }, 30)

      return () => clearInterval(typingInterval)
    }
  }, [cardOpen, proposalMessage])

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Main content */}
      <div className="max-w-xl w-full mx-auto text-center">
        <AnimatePresence mode="wait">
          {!cardOpen ? (
            // Closed card state
            <motion.div
              key="closed"
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="mb-8 flex justify-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <img src="/assets/gif/msg.gif" className="w-28" alt="envelope" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl text-pink-300 mb-8 leading-tight font-semibold">
                This is just for <span className="text-pink-500 font-bold">you...</span>
              </h1>

              <div
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 bg-pink-950/20 backdrop-blur-md border border-pink-500/30 rounded-3xl p-8 w-full mx-auto max-w-84"
                onClick={() => setCardOpen(true)}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 fill-current" />
                </motion.div>
                <p className="text-lg text-pink-500">Tap to see what’s inside</p>
              </div>
            </motion.div>
          ) : (
            // Open card state
            <motion.div
              layout
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.div className="bg-pink-950/20 backdrop-blur-md border border-pink-500/30 shadow-2xl rounded-3xl p-8">
                <div
                  ref={messageRef}
                  className="h-80 overflow-y-auto text-left pr-2.5"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(232, 164, 198, 0.1) transparent",
                  }}
                >
                  <div className="text-rose-400 text-lg leading-relaxed whitespace-pre-line">
                    {displayedText}
                    {!typingComplete && (
                      <motion.span
                        className="text-pink-400"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      >
                        |
                      </motion.span>
                    )}
                    {typingComplete && (
                        <div className="w-full h-80 flex items-center justify-center overflow-hidden rounded-2xl">
                            <video
                            src="/assets/video/1.mp4"
                            controls
                            autoPlay
                            className="w-full h-[70%] object-cover rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                            />
                        </div>
                    )}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question and button */}
        <AnimatePresence>
          {typingComplete && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center"
            >
              <motion.h2
                className="text-2xl md:text-3xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-10 mb-8 font-semibold"
              >
                So, Will you be mine forever?
              </motion.h2>

              <motion.button
                onClick={onNext}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center mx-auto"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Yes, forever!
                <Heart className="w-5 h-5 ml-2 fill-current" />
              </motion.button>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  )
}