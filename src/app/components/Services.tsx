"use client";

import { motion } from "framer-motion";
import VehicleToggle from "@/app/components/VehicleToggle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const handleVehicleChange = (vehicleType: 'passenger' | 'commercial') => {
    console.log(`Selected vehicle type: ${vehicleType}`);
  };
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center py-8 md:py-24 px-12 text-gray-300"
      >
          <div className="container mx-auto px-6 text-center flex items-center justify-center">
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className=" text-2xl md:text-3xl mx-auto "
          >
            Evolving the drive with <span className="text-white font-bold">360-degree </span> <br/> comprehensive solutions
          </motion.p>
          </div>
          <VehicleToggle onVehicleChange={handleVehicleChange} />
      </motion.section>
    </div>
  );
}