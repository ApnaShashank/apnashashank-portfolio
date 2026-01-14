interface DoodleProps {
  type: 'star' | 'circle' | 'arrow' | 'wave' | 'zigzag' | 'heart' | 'sparkle';
  color: string;
  size?: number;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  rotation?: number;
  opacity?: number;
}

export function Doodle({ type, color, size = 40, position, rotation = 0, opacity = 0.4 }: DoodleProps) {
  const doodleSvgs = {
    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    circle: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c3 0 3-8 6-8s3 8 6 8 3-8 6-8 3 8 6 8" />
      </svg>
    ),
    zigzag: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20L8 8L14 20L20 8" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    sparkle: (
      <svg viewBox="0 0 24 24" fill={color} stroke="none">
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
        <path d="M18 16L18.5 18.5L21 19L18.5 19.5L18 22L17.5 19.5L15 19L17.5 18.5L18 16Z" />
      </svg>
    ),
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...position,
        width: size,
        height: size,
        rotate: rotation,
        opacity: opacity,
      }}
    >
      {doodleSvgs[type]}
    </div>
  );
}
