import PortfolioView from "./portfolioView";
import TopNavView from "@/app/components/topNav";

export default function PortfolioPage({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <div>
      <TopNavView darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <PortfolioView />
    </div>
  );
}
