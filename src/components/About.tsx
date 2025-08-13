import { Code, Coffee, Lightbulb, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "เขียนโค้ดที่อ่านง่าย บำรุงรักษาได้ และทำงานได้อย่างมีประสิทธิภาพ",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "หาทางออกที่สร้างสรรค์สำหรับปัญหาทางเทคนิคและ UX ที่ซับซ้อน",
    },
    {
      icon: Target,
      title: "User-Focused",
      description:
        "มุ่งเน้นสร้างประสบการณ์ผู้ใช้ที่ดีและตอบโจทย์ความต้องการจริง",
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description:
        "เรียนรู้เทคโนโลยีใหม่ๆ อย่างต่อเนื่องเพื่อให้ทันต่อการเปลี่ยนแปลง",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            เกี่ยวกับผม
          </h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              สวัสดีครับ ผม อาทิตย์ วรรณชัย เป็น Frontend Developer
              ที่ทำงานที่บริษัท HUGCODE CO.,LTD. ตั้งแต่เดือนพฤศจิกายน 2024
              ถึงปัจจุบัน ผมมีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันด้วย React,
              TypeScript และเทคโนโลยีสมัยใหม่อื่นๆ
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
