import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Maaz Abbasi
            </h3>
            <p className="text-muted-foreground">
              BS Computer Science student passionate about Machine Learning, 
              Deep Learning, and Frontend Development.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="hover-glow border-primary/30 hover:border-primary"
                onClick={() => window.open('https://github.com/maazabbasi', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover-glow border-primary/30 hover:border-primary"
                onClick={() => window.open('https://linkedin.com/in/maazabbasi', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover-glow border-primary/30 hover:border-primary"
                onClick={() => window.open('mailto:maaz@example.com', '_blank')}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 maaz@example.com</p>
              <p>📍 Murree, Pakistan</p>
              <p>🎓 Kohsar University</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Maaz Abbasi. Made with{' '}
              <Heart className="h-4 w-4 inline text-red-500" />{' '}
              and lots of coffee ☕
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;