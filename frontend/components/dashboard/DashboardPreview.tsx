import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import RecentActivity from "./RecentActivity";
import Suggestions from "./Suggestions";

export default function DashboardPreview() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <DashboardHeader />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <DashboardStats />

          <div className="space-y-8">
            <RecentActivity />

            <Suggestions />
          </div>

        </div>

      </div>
    </section>
  );
}