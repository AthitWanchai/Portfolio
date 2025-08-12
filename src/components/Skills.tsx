import { Card } from "@/components/ui/card";
import {
     Code,
     Palette,
     Database,
     Globe,
     Smartphone,
     GitBranch,
     Settings,
     Zap
} from "lucide-react";

export const Skills = () => {
     const skillCategories = [
          {
               title: "Frontend",
               icon: Code,
               color: "from-tech-blue to-tech-cyan",
               skills: ["React", "TypeScript", "Next.js",]
          },
          {
               title: "Styling",
               icon: Palette,
               color: "from-primary to-primary-glow",
               skills: ["Tailwind CSS", "Material-UI", "Bootstrap"]
          },
          {
               title: "Backend",
               icon: Database,
               color: "from-accent to-tech-purple",
               skills: ["Node.js", "Express",".NET API", "PostgreSQL"]
          },
          {
               title: "Tools",
               icon: Settings,
               color: "from-tech-cyan to-accent",
               skills: ["Git", "Vite", "Docker"]
          }
     ];

     const tools = [
          { name: "VS Code", icon: Code },
          { name: "Chrome DevTools", icon: Globe },
          { name: "Git", icon: GitBranch },
          { name: "Postman", icon: Zap },
          { name: "Responsive Design", icon: Smartphone }
     ];

     return (
          <section id="skills" className="py-20 bg-muted/20">
               <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                              ทักษะและความเชี่ยวชาญ
                         </h2>
                         <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                              เทคโนโลยีและเครื่องมือที่ผมใช้ในการพัฒนาเว็บแอปพลิเคชัน
                         </p>
                    </div>

                    {/* Skill Categories */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                         {skillCategories.map((category, index) => (
                              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
                                   <div className="mb-6">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                             <category.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                                   </div>

                                   <div className="space-y-3">
                                        {category.skills.map((skill, skillIndex) => (
                                             <div key={skillIndex} className="flex items-center">
                                                  <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 flex-shrink-0`}></div>
                                                  <span className="text-sm font-medium text-foreground">{skill}</span>
                                             </div>
                                        ))}
                                   </div>
                              </Card>
                         ))}
                    </div>

                    {/* Tools & Technologies */}
                    <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
                         <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
                              เครื่องมือที่ใช้งานประจำ
                         </h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                              {tools.map((tool, index) => (
                                   <div
                                        key={index}
                                        className="flex flex-col items-center p-4 bg-card/50 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group hover:scale-105"
                                   >
                                        <tool.icon className="w-8 h-8 text-primary mb-3 group-hover:text-primary-glow transition-colors" />
                                        <span className="text-sm text-muted-foreground text-center group-hover:text-foreground transition-colors">
                                             {tool.name}
                                        </span>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
};