import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";

export const Projects = () => {
     const projects = [
          {
               title: "Enterprise Dashboard System",
               description: "ระบบแดชบอร์ดสำหรับจัดการข้อมูลองค์กร พัฒนา UI/UX และเชื่อมต่อ API Backend",
               image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
               technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
               features: ["Real-time Data Visualization", "User Management", "Responsive Design", "API Integration"],
               demoUrl: "#",
               codeUrl: "#",
               category: "Enterprise",
               isConfidential: true
          },
          {
               title: "room-booking",
               description: "เว็บไซต์จองห้องพัก",
               image: "./1754993083591.jpg",
               technologies: ["React", "TypeScript"],
               features: ["Responsive Design", "Admin Dashboard"],
               demoUrl: "https://room-booking-three-xi.vercel.app/",
               codeUrl: "https://github.com/AthitWanchai/room-booking",
               category: "Web App"

          },
          {
               title: "E-commerce Website Design",
               description: "ออกแบบเว็บไซต์ขายของออนไลน์",
               image: "1754993642569.jpg",
               technologies: ["HTML", "CSS", "Bootstrap"],
               features: ["Responsive Design"],
               demoUrl: "https://athitwanchai.github.io/",
               codeUrl: "https://github.com/AthitWanchai/AthitWanchai.gitHub.io",
               category: "Web Design"
          },
          {
               title: "Online-Courses-Website",
               description: "เว็บไซต์คอร์สเรียนออนไลน์",
               image: "1754997343440.jpg",
               technologies: ["React", "TypeScript"],
               features: ["Responsive Design", "Course Management"],
               demoUrl: "#",
               codeUrl: "https://github.com/AthitWanchai/Online-Courses-Website",
               category: "Frontend"
          },
     ];

     const getCategoryIcon = (category: string) => {
          switch (category) {
               case "Enterprise":
                    return Globe;
               case "Web App":
                    return Code;
               case "Frontend":
                    return Smartphone;
               case "Web Design":
                    return Code;
               default:
                    return Code;
          }
     };

     return (
          <section id="projects" className="py-20 bg-background">
               <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                              ผลงานของผม
                         </h2>
                         <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                              โปรเจกต์ที่ผมได้พัฒนาระหว่างทำงานที่ HUGCODE และโปรเจกต์ส่วนตัว แสดงให้เห็นถึงความสามารถและประสบการณ์
                         </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                         {projects.map((project, index) => (
                              <Card key={index} className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group hover:scale-[1.02]">
                                   {/* Project Image */}
                                   <div className="relative overflow-hidden">
                                        <img
                                             src={project.image}
                                             alt={project.title}
                                             className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                             <div className="flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                                  {(() => {
                                                       const IconComponent = getCategoryIcon(project.category);
                                                       return <IconComponent className="w-4 h-4" />;
                                                  })()}
                                                  {project.category}
                                             </div>
                                        </div>
                                   </div>

                                   {/* Project Content */}
                                   <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                                             {project.title}
                                        </h3>

                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                             {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                             {project.technologies.map((tech, techIndex) => (
                                                  <span
                                                       key={techIndex}
                                                       className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                                                  >
                                                       {tech}
                                                  </span>
                                             ))}
                                        </div>

                                        {/* Features */}
                                        <div className="mb-6">
                                             <h4 className="text-sm font-semibold text-foreground mb-2">Features:</h4>
                                             <ul className="text-sm text-muted-foreground space-y-1">
                                                  {project.features.map((feature, featureIndex) => (
                                                       <li key={featureIndex} className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                            {feature}
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                             {project.isConfidential ? (
                                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                       <span>งานของบริษัท - ไม่สามารถแสดงโค้ดได้</span>
                                                  </div>
                                             ) : (
                                                  <>
                                                       <Button
                                                            size="sm"
                                                            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                                                            asChild
                                                       >
                                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                                 <ExternalLink className="w-4 h-4 mr-2" />
                                                                 Demo
                                                            </a>
                                                       </Button>
                                                       <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="border-primary/30 hover:bg-primary/10"
                                                            asChild
                                                       >
                                                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                                                 <Github className="w-4 h-4 mr-2" />
                                                                 Code
                                                            </a>
                                                       </Button>
                                                  </>
                                             )}
                                        </div>
                                   </div>
                              </Card>
                         ))}
                    </div>

               </div>
          </section>
     );
};