export default function DashboardHeader() {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-white">
          AI Career Dashboard
        </h2>

        <p className="mt-2 text-gray-400">
          Your career progress at a glance
        </p>
      </div>

      <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
        ● Live
      </span>
    </div>
  );
}