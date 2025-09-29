import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maaz@example.com',
      href: 'mailto:maaz@example.com',
      color: 'primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/maazabbasi',
      href: 'https://github.com/maazabbasi',
      color: 'secondary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/maazabbasi',
      href: 'https://linkedin.com/in/maazabbasi',
      color: 'accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Murree, Pakistan',
      href: null,
      color: 'primary'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary/20',
          iconColor: 'text-primary',
          border: 'border-primary/20'
        };
      case 'secondary':
        return {
          iconBg: 'bg-secondary/20',
          iconColor: 'text-secondary',
          border: 'border-secondary/20'
        };
      case 'accent':
        return {
          iconBg: 'bg-accent/20',
          iconColor: 'text-accent',
          border: 'border-accent/20'
        };
      default:
        return {
          iconBg: 'bg-primary/20',
          iconColor: 'text-primary',
          border: 'border-primary/20'
        };
    }
  };

  return (
    <section id="contact" className="py-20 surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Let's connect and discuss opportunities, projects, or just have a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="surface-gradient border-primary/20 animate-slide-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-surface border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-surface border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-surface border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-surface border-border focus:border-primary min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground glow-effect"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Let's connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or simply connecting with fellow tech enthusiasts. Feel free to reach out through any 
                of the channels below or use the contact form.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const colors = getColorClasses(item.color);
                const IconComponent = item.icon;
                
                return (
                  <Card 
                    key={item.label}
                    className={`surface-gradient ${colors.border} hover-glow group`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${colors.iconBg} rounded-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`h-5 w-5 ${colors.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{item.label}</h4>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : '_self'}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`${colors.iconColor} hover:underline transition-colors`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-muted-foreground">{item.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <Card className="surface-gradient border-accent/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-3 text-accent">Ready to collaborate?</h4>
                <p className="text-muted-foreground mb-4">
                  Whether it's a university project, internship opportunity, or just a tech discussion, 
                  I'd love to hear from you!
                </p>
                <div className="flex gap-3 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open('https://github.com/maazabbasi', '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Follow on GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://linkedin.com/in/maazabbasi', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;