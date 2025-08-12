import { ChevronDown, GitBranch, Linkedin, Mail } from "lucide-react";
// import profileImage from "@/assets/profile-image.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float delay-700"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float delay-500"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fadeInUp">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl shadow-purple-500/20 animate-glow">
                <img
                  src="/484300364_9378818628862537_7556069300060829588_n.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-float shadow-lg"></div>
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            สวัสดีครับ! ผม นายอาทิตย์ วรรณชัย
          </h1>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                              <Button
                                   size="lg"
                                   className="bg-gradient-primary hover:shadow-intense transition-all duration-300 transform hover:scale-105"
                                   onClick={() => scrollToSection('projects')}
                              >
                                   ดูผลงาน
                              </Button>
                              <Button
                                   variant="outline"
                                   size="lg"
                                   className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                                   onClick={() => scrollToSection('contact')}
                              >
                                   ติดต่อ
                              </Button>
                         </div> */}

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-16">
            <a
              href="https://github.com/AthitWanchai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <GitBranch className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=athit.wanc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown
              className="w-8 h-8 mx-auto text-muted-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
