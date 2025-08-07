import { useState } from "react";
import NPCToggle from "./NPCToggle";
import PremadeNPCs from "./PremadeNPCs";
import CustomNPCForm from "./CustomNPCForm";

const NPCGenerator = () => {
  const [activeMode, setActiveMode] = useState<"premade" | "custom">("premade");

  return (
    <section id="generator" className="py-20 galaxy-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold neon-text mb-6">
            NPC Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose between our carefully crafted premade characters or create your own unique NPCs 
            with custom personalities, backstories, and abilities.
          </p>
        </div>
        
        <NPCToggle 
          activeMode={activeMode}
          onModeChange={setActiveMode}
        />
        
        <div className="animate-fade-in">
          {activeMode === "premade" ? (
            <PremadeNPCs />
          ) : (
            <CustomNPCForm />
          )}
        </div>
      </div>
    </section>
  );
};

export default NPCGenerator;