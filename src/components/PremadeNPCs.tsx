import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, User, Trash2 } from "lucide-react";
import { NPC } from "./NPCGenerator";

type Props = {
  presets: NPC[];
  onDelete: (id: number) => void;
};

const PremadeNPCs = ({ presets, onDelete }: Props) => {
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
            <CardDescription className="text-sm">{preset.era}</CardDescription>
          </CardHeader>

          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">{preset.description}</p>

            <div className="bg-secondary/50 rounded-lg p-3">
              <p className="text-xs text-foreground/70 italic">{preset.personality}</p>
            </div>

            <div className="flex justify-center space-x-2">
              <Button
                variant={preset.occupied ? "default" : "outline"}
                className={`w-full ${preset.occupied ? "neon-glow" : ""}`}
                disabled={!preset.occupied}
              >
                {preset.occupied ? "Use This NPC" : "Empty Slot"}
              </Button>
              {preset.occupied && preset.era === "Custom NPC" && (
                <Button
                  variant="destructive"
                  onClick={() => onDelete(preset.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PremadeNPCs;
