import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    try {
      console.log('Sending email with data:', formData);
      // EmailJS configuration
      const serviceId = 'service_kjb83pi'; // SMTP service ใหม่
      const templateId = 'template_iqmfhie';
      const publicKey = 'gq115VBsHnV0XkAE6';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS result:', result);

      alert('ส่งข้อความสำเร็จ! ผมจะตอบกลับเร็วๆ นี้ครับ');
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error('Error sending email:', error);
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "athit.wanc@gmail.com",
      link: "mailto:athit.wanc@gmail.com",
    },
    {
      icon: Phone,
      title: "โทรศัพท์",
      value: "+66 623728714",
      link: "tel:+66623728714",
    },
    {
      icon: MapPin,
      title: "ที่อยู่",
      value: "37/3430 หมู่บ้านพฤกษา13 ต.คลองสาม อ.คลอวหลวง จ.ปทุมธานี, ประเทศไทย",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/AthitWanchai",
      color: "hover:text-foreground",
    },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   url: "https://linkedin.com/in/athit-wanchai",
    //   color: "hover:text-tech-blue"
    // },
    {
      name: "Email",
      icon: Mail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=athit.wanc@gmail.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Contact Form - Hidden temporarily */}
          {/* <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              ส่งข้อความ
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    ชื่อ *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="ชื่อ"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    อีเมล *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  หัวข้อ *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary"
                // placeholder="เรื่องที่ต้องการปรึกษา"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  ข้อความ *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                // placeholder="เล่ารายละเอียดเกี่ยวกับโปรเจกต์หรือสิ่งที่ต้องการปรึกษา..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-intense transition-all duration-300 transform hover:scale-[1.02]"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                ส่งข้อความ
              </Button>
            </form>
          </Card> */}

          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                ข้อมูลติดต่อ
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Component = info.link ? 'a' : 'div';
                  const linkProps = info.link ? { href: info.link } : {};

                  return (
                    <Component
                      key={index}
                      {...linkProps}
                      className={`flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30 transition-all duration-300 group ${info.link
                        ? 'hover:border-primary/30 hover:bg-primary/5 cursor-pointer'
                        : 'cursor-default'
                        }`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {info.title}
                        </p>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </Component>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-glow text-muted-foreground ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
