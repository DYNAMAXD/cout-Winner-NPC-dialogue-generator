import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const CustomNPCForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    parents: "",
    appearance: "",
    photo: "",
    bio: "",
    hasSuperPowers: false,
    superPowers: ""
  });

  const [nextSlot, setNextSlot] = useState(1);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Here you would save the NPC data
    console.log("Saving NPC to slot", nextSlot, formData);
    setNextSlot(prev => prev + 1);
    // Reset form
    setFormData({
      name: "",
      age: "",
      gender: "",
      parents: "",
      appearance: "",
      photo: "",
      bio: "",
      hasSuperPowers: false,
      superPowers: ""
    });
  };

  return (
    <Card className="cosmic-card max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl neon-text">Create Your Custom NPC</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Basic Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter NPC name"
                className="cosmic-card border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input
                id="age"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                placeholder="Enter age"
                className="cosmic-card border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">Gender *</Label>
              <Select onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger className="cosmic-card border-border">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="parents">Parents</Label>
              <Input
                id="parents"
                value={formData.parents}
                onChange={(e) => handleInputChange("parents", e.target.value)}
                placeholder="Enter parent information"
                className="cosmic-card border-border"
              />
            </div>
          </div>
          
          {/* Detailed Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Detailed Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="appearance">Appearance *</Label>
              <Textarea
                id="appearance"
                value={formData.appearance}
                onChange={(e) => handleInputChange("appearance", e.target.value)}
                placeholder="Describe the NPC's physical appearance"
                className="cosmic-card border-border min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="photo">Photo URL (Optional)</Label>
              <Input
                id="photo"
                value={formData.photo}
                onChange={(e) => handleInputChange("photo", e.target.value)}
                placeholder="Enter image URL"
                className="cosmic-card border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Biography (Optional)</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Write the NPC's background story"
                className="cosmic-card border-border min-h-[100px]"
              />
            </div>
          </div>
        </div>
        
        {/* Super Powers Section */}
        <div className="cosmic-card rounded-lg p-6 border border-accent/30">
          <div className="flex items-center space-x-3 mb-4">
            <Switch
              checked={formData.hasSuperPowers}
              onCheckedChange={(checked) => handleInputChange("hasSuperPowers", checked)}
            />
            <Label className="text-lg font-medium text-accent">
              Does this NPC have super powers?
            </Label>
          </div>
          
          {formData.hasSuperPowers && (
            <div className="space-y-2">
              <Label htmlFor="superPowers">Super Powers Description</Label>
              <Textarea
                id="superPowers"
                value={formData.superPowers}
                onChange={(e) => handleInputChange("superPowers", e.target.value)}
                placeholder="Describe the NPC's supernatural abilities"
                className="cosmic-card border-border"
              />
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button
            onClick={handleSubmit}
            className="neon-glow px-12 py-3 text-lg"
            disabled={!formData.name || !formData.age || !formData.gender || !formData.appearance}
          >
            Save in Slot {nextSlot}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomNPCForm;