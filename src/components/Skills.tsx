import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Database, Palette, GitBranch, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'primary',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Data Analysis', 'Model Training'],
      description: 'Building intelligent systems that learn from data'
    },
    {
      title: 'Deep Learning',
      icon: Database,
      color: 'secondary',
      skills: ['Neural Networks', 'Computer Vision', 'Natural Language Processing', 'TensorFlow'],
      description: 'Creating advanced AI models for complex problems'
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'accent',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
      description: 'Crafting beautiful and interactive user experiences'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'primary',
      skills: ['REST APIs', 'Git Version Control', 'Node.js Basics', 'Database Design'],
      description: 'Building full-stack web applications'
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'secondary',
      skills: ['UI Design', 'User Experience', 'Prototyping', 'Figma'],
      description: 'Creating intuitive and visually appealing interfaces'
    },
    {
      title: 'Tools & Workflow',
      icon: GitBranch,
      color: 'accent',
      skills: ['Git & GitHub', 'VS Code', 'Jupyter Notebooks', 'Linux Terminal'],
      description: 'Efficient development and collaboration tools'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary/20',
          iconColor: 'text-primary',
          border: 'border-primary/20',
          gradient: 'from-primary/10 to-primary/5'
        };
      case 'secondary':
        return {
          iconBg: 'bg-secondary/20',
          iconColor: 'text-secondary',
          border: 'border-secondary/20',
          gradient: 'from-secondary/10 to-secondary/5'
        };
      case 'accent':
        return {
          iconBg: 'bg-accent/20',
          iconColor: 'text-accent',
          border: 'border-accent/20',
          gradient: 'from-accent/10 to-accent/5'
        };
      default:
        return {
          iconBg: 'bg-primary/20',
          iconColor: 'text-primary',
          border: 'border-primary/20',
          gradient: 'from-primary/10 to-primary/5'
        };
    }
  };

  return (
    <section id="skills" className="py-20 surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            A showcase of technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.title}
                className={`surface-gradient ${colors.border} hover-glow group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 ${colors.iconBg} rounded-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className={`px-3 py-2 rounded-lg bg-gradient-to-r ${colors.gradient} border ${colors.border} text-sm font-medium animate-fade-in`}
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Note */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto surface-gradient border-primary/20 animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">University Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                I've applied these skills through various university projects, including data analysis assignments, 
                web development coursework, and machine learning experiments. Each project has helped me gain 
                practical experience and deepen my understanding of these technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;