import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NPCToggleProps {
  activeMode: "premade" | "custom";
  onModeChange: (mode: "premade" | "custom") => void;
}

const NPCToggle = ({ activeMode, onModeChange }: NPCToggleProps) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="cosmic-card rounded-full p-2 flex">
        <Button
          variant={activeMode === "premade" ? "default" : "ghost"}
          onClick={() => onModeChange("premade")}
          className={`rounded-full px-8 py-3 transition-all duration-300 ${
            activeMode === "premade" 
              ? "neon-glow" 
              : "hover:bg-secondary"
          }`}
        >
          Premade NPCs
        </Button>
        <Button
          variant={activeMode === "custom" ? "default" : "ghost"}
          onClick={() => onModeChange("custom")}
          className={`rounded-full px-8 py-3 transition-all duration-300 ${
            activeMode === "custom" 
              ? "neon-glow" 
              : "hover:bg-secondary"
          }`}
        >
          Custom NPC
        </Button>
      </div>
    </div>
  );
};

export default NPCToggle;