const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center galaxy-bg pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 neon-text">
            NPC-DIALOGUE-GENERATOR
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Create compelling dialogue and immersive backstories for your virtual characters. 
              Build unique NPCs with rich personalities that bring your game worlds to life 
              through AI-powered narrative generation.
            </p>
          </div>
          
          <div className="cosmic-card rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-foreground/80 italic">
              "Every character has a story to tell. Let our AI help you craft the perfect 
              dialogue that resonates with players and creates unforgettable gaming experiences."
            </p>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse-neon"></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;