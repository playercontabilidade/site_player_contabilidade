
import React from "react";

interface ProgressDotsProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ currentStep, totalSteps }) => {
  if (currentStep === 0 || currentStep === totalSteps) return null;
  
  return (
    <div className="flex justify-center space-x-2 mb-6">
      {Array.from({ length: totalSteps - 1 }, (_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            index < currentStep ? 'bg-amber-500' : 'bg-white/30'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
