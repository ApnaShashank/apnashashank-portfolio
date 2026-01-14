import { motion } from "motion/react";
import { GraduationCap, Calendar } from "lucide-react";

interface DegreeCardProps {
  degree: string;
  university: string;
  year: string;
  imageUrl?: string;
  delay?: number;
}

export function DegreeCard({ 
  degree, 
  university, 
  year,
  imageUrl,
  delay = 0 
}: DegreeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Corner badge */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
        <GraduationCap size={28} className="text-white" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={degree}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <GraduationCap size={64} className="text-purple-400 opacity-50" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
            {degree}
          </h3>
          <p className="text-lg text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {university}
          </p>
          <div className="flex items-center gap-2 text-purple-600">
            <Calendar size={18} />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>{year}</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-purple-300"></div>
        <div className="w-3 h-3 rounded-full bg-pink-300"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
      </div>
    </motion.div>
  );
}
