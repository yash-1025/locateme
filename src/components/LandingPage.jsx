import React, { useEffect, useState } from 'react';

const LandingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          if (onComplete) onComplete(); // Trigger onComplete callback when loading is done
          return 100;
        }
        return oldProgress + 5; // Increment progress
      });
    }, 200); // Update progress every 200ms
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">LocateMe</h1>
        <div className="relative w-64 h-2 bg-gray-800 rounded-lg overflow-hidden mx-auto">
          <div
            className="bg-green-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400 mt-4 text-lg">Launching Now</p>
      </div>
    </div>
  );
};

export default LandingPage;
