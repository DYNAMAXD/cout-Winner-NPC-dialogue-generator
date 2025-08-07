import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NPCGenerator from "@/components/NPCGenerator";
import ContributorFooter from "@/components/ContributorFooter";

const Index = () => {
  return (
    <div className="min-h-screen galaxy-bg">
      <Navigation />
      <HeroSection />
      <NPCGenerator />
      <ContributorFooter />
    </div>
  );
};

export default Index;
