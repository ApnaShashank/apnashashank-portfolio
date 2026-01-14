import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface FloatingStickerProps {
  Icon: LucideIcon;
  color: string;
  size?: number;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  rotation?: number;
  delay?: number;
}

export function FloatingSticker({ 
  Icon, 
  color, 
  size = 32, 
  position, 
  rotation = 0,
  delay = 0 
}: FloatingStickerProps) {
  return (
    <motion.div
      className="absolute z-10"
      style={{
        ...position,
        rotate: rotation,
      }}
      animate={{
        y: [0, -10, 0],
        rotate: [rotation, rotation + 5, rotation],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <Icon size={size} className={color} />
    </motion.div>
  );
}
