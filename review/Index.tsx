import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Globe, Download, Github, Linkedin, ExternalLink } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const techSkills = [
    "Python", "Java", "C", "Data Structures", "HTML", "MySQL", 
    "UNIX", "Web Development", "Power BI"
  ];

  const softSkills = [
    "Teamwork", "Time Management", "Creative", "Effective Communication", "Critical Thinking"
  ];

  const projects = [
    {
      title: "Global Case Analysis Dashboard (POWER BI)",
      description: "We built an interactive Global Case Analysis Dashboard in Power BI to clean data, visualize global trends, compare countries, and provide quick insights through charts, maps, and KPIs.",
      technologies: ["Power BI", "Power Query", "DAX", "Excel/CSV", "Data Modeling"],
    },
    {
      title: "Smart Bag GPS Tracker (IOT Application)",
      description: "A Smart Bag GPS Tracker using IoT that uses NodeMCU and a GPS module to send the bag's real-time location to the Blynk app for easy tracking.",
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
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#resume" className="text-foreground hover:text-primary transition-colors">Resume</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
                Hi, I'm <span className="text-primary">Ganavi K V</span>
              </h2>
              <p className="text-2xl text-muted-foreground mb-6">Computer Science Student</p>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
                Practical and straightforward individual who focuses on getting work done cleanly and on time. 
                Grounded, calm-minded, and responsible, with a consistent and realistic approach to tasks.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#resume">View Resume</a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/pro_pic.jpg" 
                alt="Ganavi K V" 
                className="w-64 h-64 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 8310213155</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>ganvigowdaa18@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Hassan, Karnataka</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>www.reallygreatsite.com</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">BE in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">MALNAD COLLEGE OF ENGINEERING</p>
                  <p className="text-sm text-primary">2027 - 2023</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">PUC</h3>
                  <p className="text-sm text-muted-foreground">TIMES PU COLLEGE</p>
                  <p className="text-sm text-primary">2023 - 2021</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">SSLC</h3>
                  <p className="text-sm text-muted-foreground">NETHAJI PUBLIC SCHOOL</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill, i) => (
                    <Badge key={i} variant="default">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  HTML Certificate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Python Certificate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Scratch Certificate
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-foreground/80">
                <div>
                  <p className="font-semibold">English</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
                <div>
                  <p className="font-semibold">Hindi</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
                <div>
                  <p className="font-semibold">Kannada</p>
                  <p className="text-sm text-muted-foreground">Basic</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Get in Touch</h2>
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'd love to hear from you!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Resume</h2>
          <Card>
            <CardHeader>
              <CardTitle>View & Download Resume</CardTitle>
              <CardDescription>Click the button below to download my resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-border rounded-lg overflow-hidden">
                <img 
                  src="/resume.jpg" 
                  alt="Resume Preview" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/resume.jpg" download="Ganavi_KV_Resume.jpg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/resume.jpg" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Size
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2024 Ganavi K V. All rights reserved.</p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:ganvigowdaa18@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="tel:+918310213155" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
