import { dashboardStats } from "@/data/dashboard";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {dashboardStats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg"
        >
          <p className="text-sm text-gray-400">
            {item.title}
          </p>

          <h3 className={`mt-3 text-4xl font-bold ${item.color}`}>
            {item.value}%
          </h3>
        </div>
      ))}
    </div>
  );
}