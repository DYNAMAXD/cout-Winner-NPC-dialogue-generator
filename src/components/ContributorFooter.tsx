import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import sujalimg from "./sujal.jpg"
import adiimg from "./adi.jpg"
const ContributorFooter = () => {
  const contributors = [
    {
      id: 1,
      name: "Sujal Khera",
      contribution: "AI Dialogue Engine",
      image: sujalimg,
      links: {
        github: "https://github.com/Sujal-Khera",
        linkedin: "https://www.linkedin.com/in/sujal-khera-402127293/",
        email: "sujalkhera.c@gmail.com"
      }
    },
    {
      id: 2,
      name: "Gawdham Rithi",
      contribution: "Character Design System",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      links: {
        github: "#",
        linkedin: "#",
        email: "maya@npcgen.dev"
      }
    },
    {
      id: 3,
      name: "Aditya Aryan",
      contribution: "Backend Architecture",
      image: adiimg,
      links: {
        github: "#",
        linkedin: "#",
        email: "jordan@npcgen.dev"
      }
    },
    {
      id: 4,
      name: "Divyansh Yadav",
      contribution: "UI/UX Design",
      image: "",
      links: {
        github: "#",
        linkedin: "#",
        email: "sam@npcgen.dev"
      }
    }
  ];

  return (
    <footer id="contributors" className="py-20 galaxy-bg border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon-text mb-4">Our Contributors</h2>
          <p className="text-xl text-muted-foreground">
            Meet the talented individuals who brought this project to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <Card 
              key={contributor.id}
              className="cosmic-card group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={contributor.image}
                    alt={contributor.name}
                    className="w-24 h-24 rounded-full mx-auto border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {contributor.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {contributor.contribution}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={contributor.links.github}
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={contributor.links.linkedin}
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${contributor.links.email}`}
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 NPC Dialogue Generator. Built with passion for immersive storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContributorFooter;