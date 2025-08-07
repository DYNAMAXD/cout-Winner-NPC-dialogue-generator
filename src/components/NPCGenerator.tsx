import { useState } from "react";
import NPCToggle from "./NPCToggle";
import PremadeNPCs from "./PremadeNPCs";
import CustomNPCForm from "./CustomNPCForm";

export type NPC = {
  id: number;
  name: string;
  era: string;
  description: string;
  personality: string;
  age?: string;
  parents?: string;
  appearance?: string;
  powers?: string;
  occupied: boolean;
};

const NPCGenerator = () => {
  const [activeMode, setActiveMode] = useState<"premade" | "custom">("premade");

  const [presets, setPresets] = useState<NPC[]>([
    {
      id: 1,
      name: "Farmer Edmund",
      era: "16th Century Farmer",
      description: "A hardworking peasant from medieval England, wise in the ways of agriculture and local folklore.",
      personality: "Humble, superstitious, weathered by hard work",
      age: "47",
      parents: "Unknown",
      appearance: "Rugged, bearded, weathered clothes",
      powers: "",
      occupied: true,
    },
    {
      id: 2,
      name: "Merchant Hakim",
      era: "18th Century Middle Eastern Merchant",
      description: "A cunning trader from the Ottoman Empire, fluent in multiple languages and skilled in negotiation.",
      personality: "Shrewd, charming, well-traveled",
      age: "36",
      parents: "Yusuf and Amira",
      appearance: "Turbaned, silk robes, jeweled rings",
      powers: "",
      occupied: true,
    },
    {
      id: 3,
      name: "Industrialist Victoria",
      era: "Late 19th Century Industrialist",
      description: "A pioneering factory owner during the Industrial Revolution, progressive yet ruthless in business.",
      personality: "Ambitious, innovative, socially conscious",
      age: "41",
      parents: "Arthur and Eleanor",
      appearance: "Elegant dress, gloves, commanding presence",
      powers: "",
      occupied: true,
    },
    {
      id: 4,
      name: "Slot 1",
      era: "Empty Slot",
      description: "Available for your custom NPC creation",
      personality: "Awaiting your imagination...",
      occupied: false,
    },
    {
      id: 5,
      name: "Slot 2",
      era: "Empty Slot",
      description: "Available for your custom NPC creation",
      personality: "Awaiting your imagination...",
      occupied: false,
    },
    {
      id: 6,
      name: "Slot 3",
      era: "Empty Slot",
      description: "Available for your custom NPC creation",
      personality: "Awaiting your imagination...",
      occupied: false,
    },
  ]);

  const handleSaveCustomNPC = (npcData: Omit<NPC, "id" | "occupied">) => {
    setPresets((prev) => {
      const nextSlotIndex = prev.findIndex((p) => !p.occupied);
      if (nextSlotIndex === -1) return prev;

      const updated = [...prev];
      updated[nextSlotIndex] = {
        ...updated[nextSlotIndex],
        ...npcData,
        era: "Custom NPC",
        occupied: true,
      };
      return updated;
    });
  };

  const handleDeleteNPC = (id: number) => {
    setPresets((prev) =>
      prev.map((p) =>
        p.id === id && p.era === "Custom NPC"
          ? {
              ...p,
              name: `Slot ${p.id - 3}`,
              era: "Empty Slot",
              description: "Available for your custom NPC creation",
              personality: "Awaiting your imagination...",
              age: "",
              parents: "",
              appearance: "",
              powers: "",
              occupied: false,
            }
          : p
      )
    );
  };

  return (
    <section id="generator" className="py-20 galaxy-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold neon-text mb-6">Select a persona</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose between our carefully crafted premade characters or create your own unique NPCs
            with custom personalities, backstories, and abilities.
          </p>
        </div>

        <NPCToggle activeMode={activeMode} onModeChange={setActiveMode} />

        <div className="animate-fade-in">
          {activeMode === "premade" ? (
            <PremadeNPCs presets={presets} onDelete={handleDeleteNPC} />
          ) : (
            <CustomNPCForm onSave={handleSaveCustomNPC} />
          )}
        </div>
      </div>
    </section>
  );
};

export default NPCGenerator;
