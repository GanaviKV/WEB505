import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Portfolio() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  const techSkills = ["Python", "Java", "C", "Data Structures", "HTML", "MySQL", "UNIX", "Web Development", "Power BI"];
  const softSkills = ["Teamwork", "Time Management", "Creative", "Effective Communication", "Critical Thinking"];

  const projects = [
    {
      title: "Global Case Analysis Dashboard (POWER BI)",
      description:
        "Interactive Power BI dashboard for global trend visualization, country comparison, and KPI insights.",
      technologies: ["Power BI", "Power Query", "DAX", "Excel/CSV", "Data Modeling"],
    },
    {
      title: "Smart Bag GPS Tracker (IoT Application)",
      description:
        "IoT-based GPS tracking system using NodeMCU and Blynk for real-time location monitoring.",
      technologies: ["Arduino C/C++", "TinyGPS++", "SoftwareSerial", "ESP8266WiFi", "Blynk"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Ganavi K V</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
              <a href="#resume">Resume</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-6xl font-bold mb-4">Hi, I'm <span className="text-primary">Ganavi K V</span></h2>
            <p className="text-2xl text-muted-foreground mb-6">Computer Science Student</p>
            <p className="max-w-2xl text-lg text-foreground/80 mb-8">
              Practical, calm-minded, responsible individual focused on delivering clean, timely, and effective work.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild><a href="#contact">Get in Touch</a></Button>
              <Button variant="outline" asChild><a href="#resume">View Resume</a></Button>
            </div>
          </div>
          <img src="/pro_pic.jpg" className="w-64 h-64 rounded-full object-cover border-4 border-primary shadow-2xl" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary"/>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary"/>+91 8310213155</div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary"/>ganvigowdaa18@gmail.com</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary"/>Hassan, Karnataka</div>
                <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary"/>www.reallygreatsite.com</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Education</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div><h3 className="font-semibold">BE in Computer Science</h3><p>MCE</p><p className="text-primary">2027 - 2023</p></div>
                <div><h3 className="font-semibold">PUC</h3><p>Times PU College</p><p className="text-primary">2023 - 2021</p></div>
                <div><h3 className="font-semibold">SSLC</h3><p>KSS Public School</p><p className="text-primary">2021 - 2019</p></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techSkills.map((skill) => <Badge key={skill}>{skill}</Badge>)}
          </div>
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((p) => (
              <Card key={p.title}>
                <CardHeader><CardTitle>{p.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Your Name" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
            <Input placeholder="Your Email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
            <Textarea placeholder="Your Message" value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})}/>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
