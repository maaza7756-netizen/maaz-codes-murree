import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import maazHeadshot from '@/assets/maaz-headshot.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 glow-effect animate-scale-in">
                <img
                  src={maazHeadshot}
                  alt="Maaz Abbasi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Maaz
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                BS Computer Science Student
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about <span className="text-primary">Machine Learning</span>, {' '}
                <span className="text-secondary">Deep Learning</span>, and {' '}
                <span className="text-accent">Frontend Development</span>. 
                Currently studying at Kohsar University, Murree.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground glow-effect hover-glow"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up">
              <Button
                variant="outline"
                size="icon"
                className="hover-glow border-primary/30 hover:border-primary"
                onClick={() => window.open('https://github.com/maazabbasi', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover-glow border-primary/30 hover:border-primary"
                onClick={() => window.open('https://linkedin.com/in/maazabbasi', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover-glow border-primary/30 hover:border-primary"
                onClick={() => window.open('mailto:maaz@example.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;