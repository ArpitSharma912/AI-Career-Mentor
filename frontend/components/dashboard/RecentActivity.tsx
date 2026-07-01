import { recentActivity } from "@/data/dashboard";
import { CheckCircle2 } from "lucide-react";

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-6 text-xl font-bold text-white">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {recentActivity.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-green-400"
            />

            <span className="text-gray-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}