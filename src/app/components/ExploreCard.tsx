import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ExploreCardProps {
  title: string;
  imageUrl?: string;
  rotation?: number;
  delay?: number;
}

export function ExploreCard({ title, imageUrl, rotation = 0, delay = 0 }: ExploreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
      className="relative bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
      style={{ rotate: rotation }}
    >
      {/* Website thumbnail */}
      <div className="relative w-full h-56 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl overflow-hidden mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-30">🌐</div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 
          className="text-xl font-bold text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-purple-600 font-medium">
          <span style={{ fontFamily: 'Poppins, sans-serif' }}>Explore</span>
          <ArrowRight size={18} />
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-md"></div>
      
      {/* Bottom corner sticker */}
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-30"></div>
    </motion.div>
  );
}
