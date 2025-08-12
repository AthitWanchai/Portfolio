import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/athitwanchai",
      color: "hover:text-foreground",
    },
    // {
    //      name: "LinkedIn",
    //      icon: Linkedin,
    //      url: "https://linkedin.com/in/athit-wanchai",
    //      color: "hover:text-tech-blue"
    // },
    {
      name: "Email",
      icon: Mail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=athit.wanc@gmail.com",
      color: "hover:text-accent",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "เกี่ยวกับผม", id: "about" },
                { name: "ทักษะ", id: "skills" },
                { name: "ผลงาน", id: "projects" },
                { name: "ติดต่อ", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">ติดต่อ</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 athit.wanc@gmail.com</p>
              <p>📱 +66 623728714</p>
              <p>
                📍 37/3430 หมู่บ้านพฤกษา13 ต.คลองสาม อ.คลอวหลวง จ.ปทุมธานี,
                ประเทศไทย
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-card/50 rounded-lg flex items-center justify-center border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-glow text-muted-foreground ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Athit Wanchai - Frontend Developer Portfolio. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
