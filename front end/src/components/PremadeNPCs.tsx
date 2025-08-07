import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, User } from "lucide-react";

const PremadeNPCs = () => {
  const presets = [
    {
      id: 1,
      name: "Farmer Edmund",
      era: "16th Century Farmer",
      description: "A hardworking peasant from medieval England, wise in the ways of agriculture and local folklore.",
      personality: "Humble, superstitious, weathered by hard work",
      occupied: true
    },
    {
      id: 2,
      name: "Merchant Hakim",
      era: "18th Century Middle Eastern Merchant",
      description: "A cunning trader from the Ottoman Empire, fluent in multiple languages and skilled in negotiation.",
      personality: "Shrewd, charming, well-traveled",
      occupied: true
    },
    {
      id: 3,
      name: "Industrialist Victoria",
      era: "Late 19th Century Industrialist",
      description: "A pioneering factory owner during the Industrial Revolution, progressive yet ruthless in business.",
      personality: "Ambitious, innovative, socially conscious",
      occupied: true
    },
    {
      id: 4,
      name: "Slot 1",
      era: "Empty Slot",
      description: "Available for your custom NPC creation",
      personality: "Awaiting your imagination...",
      occupied: false
    },
    {
      id: 5,
      name: "Slot 2",
      era: "Empty Slot",
      description: "Available for your custom NPC creation",
      personality: "Awaiting your imagination...",
      occupied: false
    },
    {
      id: 6,
      name: "Slot 3",
      era: "Empty Slot",
      description: "Available for your custom NPC creation",
      personality: "Awaiting your imagination...",
      occupied: false
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {presets.map((preset) => (
        <Card 
          key={preset.id} 
          className={`cosmic-card transition-all duration-300 hover:scale-105 ${
            preset.occupied ? "neon-glow" : "border-dashed border-muted"
          }`}
        >
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              {preset.occupied ? (
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center">
                  <Plus className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
            </div>
            <CardTitle className={preset.occupied ? "text-foreground" : "text-muted-foreground"}>
              {preset.name}
            </CardTitle>
            <CardDescription className="text-sm">
              {preset.era}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {preset.description}
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-3">
              <p className="text-xs text-foreground/70 italic">
                {preset.personality}
              </p>
            </div>
            
            <Button 
              variant={preset.occupied ? "default" : "outline"}
              className={`w-full ${preset.occupied ? "neon-glow" : ""}`}
              disabled={!preset.occupied}
            >
              {preset.occupied ? "Use This NPC" : "Empty Slot"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PremadeNPCs;