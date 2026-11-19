
import React, { useEffect, useState } from "react";

const StatsSection: React.FC = () => {
  const [stats, setStats] = useState({
    entrepreneurs: 0,
    states: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervals = {
      entrepreneurs: null as NodeJS.Timeout | null,
      states: null as NodeJS.Timeout | null,
      satisfaction: null as NodeJS.Timeout | null
    };

    const startCount = (target: number, key: keyof typeof stats) => {
      const increment = target / (duration / 50);
      let current = 0;

      intervals[key] = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          if (intervals[key]) clearInterval(intervals[key]);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    // Start counting animations
    setTimeout(() => startCount(1600, 'entrepreneurs'), 200);
    setTimeout(() => startCount(24, 'states'), 400);
    setTimeout(() => startCount(100, 'satisfaction'), 600);

    return () => {
      Object.values(intervals).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <section className="w-full site-light py-8">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="flex justify-around items-center max-md:flex-col max-md:gap-6">
          <div className="text-center">
            <div className="site-copy text-[48px] font-bold font-inter leading-[56px] max-md:text-[36px] max-md:leading-[42px]">
              +{stats.entrepreneurs}
            </div>
            <div className="site-copy text-lg font-medium font-inter max-md:text-base">
              Empresários Satisfeitos
            </div>
          </div>
          
          <div className="text-center">
            <div className="site-copy text-[48px] font-bold font-inter leading-[56px] max-md:text-[36px] max-md:leading-[42px]">
              +{stats.states}
            </div>
            <div className="site-copy text-lg font-medium font-inter max-md:text-base">
              Estados Brasileiros
            </div>
          </div>
          
          <div className="text-center">
            <div className="site-copy text-[48px] font-bold font-inter leading-[56px] max-md:text-[36px] max-md:leading-[42px]">
              {stats.satisfaction}%
            </div>
            <div className="site-copy text-lg font-medium font-inter max-md:text-base">
              Clientes satisfeitos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
