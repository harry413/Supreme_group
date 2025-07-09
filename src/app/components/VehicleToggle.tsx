"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';


interface VehicleToggleProps {
  onVehicleChange?: (vehicleType: 'passenger' | 'commercial') => void;
}

const VehicleToggle: React.FC<VehicleToggleProps> = ({ onVehicleChange }) => {
  const [current, setCurrent] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<'passenger' | 'commercial'>('passenger');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const handleVehicleSelect = (vehicleType: 'passenger' | 'commercial') => {
    setSelectedVehicle(vehicleType);
    onVehicleChange?.(vehicleType);
  };

  const vehicleData = {
    passenger: {
      title: 'Passenger Vehicle',
      description: 'Revving up innovation from interior to exterior.',
      videos: [
          { id: 1, src: '/Passenger Alpha - Trim.mp4', alt:'Complete Body' },
          { id: 2, src: '/Cabin.mp4', alt:'Cabin' },
          { id: 3, src: '/Front.mp4', alt:'front' },
          { id: 4, src: '/Exterior.mp4', alt:'Exterior' }
        ]
    },
    commercial: {
      title: 'Commercial Vehicle',
      description: 'Advancing engineering for heavy-duty vehicles.',
      videos: [
          { id: 1, src: '/Commercial Alpha.mp4', alt:'Complete Body' },
          { id: 2, src: '/Trunk.mp4', alt:'Front' },
          { id: 3, src: '/Exterior.mp4', alt:'Exterior' },
        ]
    }
  };

  const selectedData = vehicleData[selectedVehicle];
  
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center w-full max-w-full mx-auto px-4 py-6 space-y-2">
      {/* Toggle Buttons */}
      <div className="flex md:flex-col sm:flex-row gap-4 items-start justify-center">
        {Object.entries(vehicleData).map(([key, data]) => {
          const isSelected = selectedVehicle === key;
          return (
            <motion.button
              key={key}
              onClick={() => handleVehicleSelect(key as 'passenger' | 'commercial')}
              className={`
                relative flex flex-col items-start justify-start gap-3 px-8 py-8 rounded-xl
                font-semibold text-lg transition-all duration-300 md:min-w-[250px] cursor-pointer
                ${isSelected 
                  ? 'text-white shadow-lg' 
                  : 'text-gray-700  hover:shadow-md'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{data.title}</span>
              <span className="text-sm">{data.description }</span>
              {isSelected && (
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-20"
                  layoutId="highlight"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Content Section */}
      <motion.div
        key={selectedVehicle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full p-2 md:p-8"
      >
         <div className="space-y-3 flex items-center justify-center w-full">
              {selectedData?.videos.map((video, index) => (
                <div className="w-full h-64 relative " key={index}>
                  <motion.video
                    key={video.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className= {`w-full h-full object-cover `}
                    src={video.src}
                    autoPlay
                    muted 
                    loop
                    >
                    Your browser does not support the video tag.
                    </motion.video>
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-3 w-3 rounded-full transition-all duration-300`}
                    />
                    <p className="text-sm">{video.alt}</p>
                  </div>
              ))}
            </div>
      </motion.div>
    </div>
  );
};

export default VehicleToggle;