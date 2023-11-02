import PortfolioView from "./portfolioView";
import TopNavView from "@/app/components/topNav";

export default function PortfolioPage() {
  return (
    <div>
      <TopNavView />
      {/* Main */}
      <div className="px-20">
        <PortfolioView />
      </div>
    </div>
  );
}
