"use client";

import PortfolioView from "./portfolioView";
import TopNavView from "@/app/components/Tabs/topNav";

export default function PortfolioPage() {
  return (
    <div>
      <TopNavView />
      <PortfolioView />
    </div>
  );
}
