import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  Icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  delay?: number;
}

export function SkillCard({ name, Icon, bgColor, iconColor, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`${bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[140px]`}
    >
      <div className="relative">
        <Icon size={48} className={iconColor} strokeWidth={2} />
        
        {/* Sticker circle behind icon */}
        <div 
          className={`absolute -z-10 inset-0 blur-xl ${iconColor.replace('text-', 'bg-')} opacity-20 rounded-full scale-150`}
        ></div>
      </div>
      
      <span 
        className="text-lg font-bold text-gray-800"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {name}
      </span>
    </motion.div>
  );
}
