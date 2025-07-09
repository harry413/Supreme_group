// components/Loader.tsx
import { motion } from 'framer-motion';
import { SiSourceengine } from 'react-icons/si';

// Wrap the icon with Framer Motion so we can animate it
const MotionIcon = motion(SiSourceengine);

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <MotionIcon
        className="text-6xl text-orange-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </div>
  );
}
