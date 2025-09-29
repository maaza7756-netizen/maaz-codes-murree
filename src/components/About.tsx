import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Get to know more about my journey and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing a BS in Computer Science at Kohsar University, Murree, 
                where I've discovered my passion for the fascinating world of artificial intelligence 
                and web development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My academic journey has equipped me with a strong foundation in programming, 
                data structures, and algorithms, while my personal projects have allowed me to 
                explore the practical applications of machine learning and deep learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies 
                to build innovative solutions that can make a positive impact.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="surface-gradient border-primary/20 hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  BS Computer Science<br />
                  Kohsar University, Murree<br />
                  <span className="text-primary">Currently Pursuing</span>
                </p>
              </CardContent>
            </Card>

            <Card className="surface-gradient border-secondary/20 hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold">Passion</h4>
                </div>
                <p className="text-muted-foreground">
                  Machine Learning & Deep Learning<br />
                  Frontend Web Development<br />
                  <span className="text-secondary">Innovation & Problem Solving</span>
                </p>
              </CardContent>
            </Card>

            <Card className="surface-gradient border-accent/20 hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold">Goal</h4>
                </div>
                <p className="text-muted-foreground">
                  Building AI-powered solutions<br />
                  Contributing to open source<br />
                  <span className="text-accent">Making technology accessible</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;