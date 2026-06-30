"use client";

import CountUp from "react-countup";
import { stats } from "@/data/landing";

export default function Stats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="text-center">
          <h3 className="text-4xl font-bold text-cyan-400">
            <CountUp
              end={item.value}
              duration={2.5}
              suffix={item.suffix}
            />
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}