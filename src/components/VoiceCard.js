import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, Play, Pause, Heart } from "lucide-react";

export default function VoiceCard({onNext}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [particles, setParticles] = useState([]);
  const audioRef = useRef(null);

  // generate sparkly stars
  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 4,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setParticles(newParticles);
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Layer 1: gradient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,255,0.15),_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,0,255,0.15),_transparent_60%)]"></div>

      {/* Layer 2: sparkly floating stars */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-white blur-[1px] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `float-${p.id} ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
        <style>
          {particles
            .map(
              (p) => `
              @keyframes float-${p.id} {
                0%, 100% {
                  transform: translateY(0) scale(1);
                  opacity: ${p.opacity};
                }
                50% {
                  transform: translateY(-30px) scale(1.2);
                  opacity: 1;
                }
              }
            `
            )
            .join("\n")}
        </style>
      </div>

      {/* Main Card */}
      <motion.div
        className="relative bg-[#1a0b2e]/70 backdrop-blur-md rounded-2xl p-8 max-w-md text-center shadow-2xl border border-white/10 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Mic */}
        <motion.div
          className="flex justify-center mb-3"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Mic size={36} className="text-pink-400" />
        </motion.div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-pink-400 mb-1">
          My Voice, My Heart 🎵
        </h1>
        <p className="text-gray-300 mb-6">
          I recorded something special, just for you 💕
        </p>

        {/* Play / Pause Button */}
        <motion.button
          onClick={handlePlay}
          className={`mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg hover:scale-110 transition-transform ${
            isPlaying ? "animate-pulse" : ""
          }`}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <Pause size={32} className="text-white" />
          ) : (
            <Play size={32} className="text-white" />
          )}
        </motion.button>

        <p className="text-gray-400 text-sm mb-6">🔊 Tap to hear my voice</p>

        {/* Audio file (in /public) */}
        <audio
          ref={audioRef}
          src="/assets/voice/VoiceNote.mp3"
          onEnded={() => setIsPlaying(false)}
        />

        {/* Love message */}
        <p className="text-gray-200 leading-relaxed text-sm mb-8">
          Thank you for being the most special person in my life. You make
          every day feel like magic, every moment feel like a dream come true. I
          love you beyond words, beyond time, beyond everything 💕✨
        </p>

        {/* Button */}
        <motion.button
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
        >
          <Heart size={18} />
          View More →
        </motion.button>

        
      </motion.div>
    </div>
  );
}
