import { suggestions } from "@/data/dashboard";
import { Sparkles } from "lucide-react";

export default function Suggestions() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-cyan-300">
        <Sparkles size={20} />
        AI Suggestions
      </h3>

      <div className="space-y-4">
        {suggestions.map((item) => (
          <p
            key={item}
            className="text-gray-200"
          >
            • {item}
          </p>
        ))}
      </div>
    </div>
  );
}