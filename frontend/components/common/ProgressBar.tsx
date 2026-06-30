"use client";

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
}

export default function ProgressBar({
  label,
  value,
  color,
}: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300">{label}</span>
        <span className={color}>{value}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${color.replace("text", "bg")}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}