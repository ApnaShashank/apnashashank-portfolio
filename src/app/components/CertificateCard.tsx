import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  platform: string;
  imageUrl?: string;
  rotation?: number;
  delay?: number;
  onClick?: () => void;
}

export function CertificateCard({ 
  title, 
  platform, 
  imageUrl,
  rotation = 0,
  delay = 0,
  onClick
}: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
      onClick={onClick}
      className="relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      style={{ rotate: rotation }}
    >
      {/* Pin decoration */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-400 rounded-full shadow-md flex items-center justify-center">
        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
      </div>

      {/* Certificate Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl overflow-hidden mb-4">
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
            <Award size={64} className="text-sky-400 opacity-50" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {platform}
          </p>
          <ExternalLink size={16} className="text-sky-500" />
        </div>
      </div>

      {/* Tape decoration */}
      <div className="absolute -top-2 right-8 w-16 h-6 bg-yellow-200/60 rotate-45 shadow-sm"></div>
    </motion.div>
  );
}
