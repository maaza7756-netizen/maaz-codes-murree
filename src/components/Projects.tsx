import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, Globe, Database, Code } from 'lucide-react';
import mlProject from '@/assets/ml-project.jpg';
import webProject from '@/assets/web-project.jpg';
import dlProject from '@/assets/dl-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Student Performance Predictor',
      description: 'A machine learning model that predicts student academic performance based on various factors like study hours, attendance, and previous scores. Built using Python and scikit-learn.',
      image: mlProject,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      category: 'Machine Learning',
      icon: Brain,
      color: 'primary',
      githubUrl: 'https://github.com/maazabbasi/student-performance-ml',
      liveUrl: null,
      features: ['Data preprocessing and cleaning', 'Feature engineering', 'Model comparison and validation', 'Interactive visualizations']
    },
    {
      title: 'Responsive Portfolio Website',
      description: 'A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. Features smooth animations, dark mode toggle, and mobile-first design.',
      image: webProject,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Web Development',
      icon: Globe,
      color: 'accent',
      githubUrl: 'https://github.com/maazabbasi/portfolio-website',
      liveUrl: 'https://maazabbasi-portfolio.netlify.app',
      features: ['Fully responsive design', 'Smooth scroll animations', 'Contact form integration', 'SEO optimized']
    },
    {
      title: 'Image Classification CNN',
      description: 'A deep learning project using convolutional neural networks to classify images. Implemented with TensorFlow and trained on a custom dataset.',
      image: dlProject,
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      category: 'Deep Learning',
      icon: Database,
      color: 'secondary',
      githubUrl: 'https://github.com/maazabbasi/image-classification-cnn',
      liveUrl: null,
      features: ['Custom CNN architecture', 'Data augmentation techniques', 'Transfer learning implementation', 'Model evaluation metrics']
    },
    {
      title: 'University Course Manager',
      description: 'A web-based application for managing university courses, students, and grades. Features user authentication and role-based access control.',
      image: webProject, // Reusing web project image
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      icon: Code,
      color: 'primary',
      githubUrl: 'https://github.com/maazabbasi/course-manager',
      liveUrl: null,
      features: ['User authentication system', 'CRUD operations', 'Role-based permissions', 'RESTful API design']
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary/20',
          iconColor: 'text-primary',
          border: 'border-primary/20',
          tagBg: 'bg-primary/10',
          tagText: 'text-primary'
        };
      case 'secondary':
        return {
          iconBg: 'bg-secondary/20',
          iconColor: 'text-secondary',
          border: 'border-secondary/20',
          tagBg: 'bg-secondary/10',
          tagText: 'text-secondary'
        };
      case 'accent':
        return {
          iconBg: 'bg-accent/20',
          iconColor: 'text-accent',
          border: 'border-accent/20',
          tagBg: 'bg-accent/10',
          tagText: 'text-accent'
        };
      default:
        return {
          iconBg: 'bg-primary/20',
          iconColor: 'text-primary',
          border: 'border-primary/20',
          tagBg: 'bg-primary/10',
          tagText: 'text-primary'
        };
    }
  };

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            A collection of university projects and personal work showcasing my skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const IconComponent = project.icon;
            
            return (
              <Card 
                key={project.title}
                className={`surface-gradient ${colors.border} hover-glow group overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  <div className={`absolute top-4 left-4 p-2 ${colors.iconBg} rounded-lg`}>
                    <IconComponent className={`h-5 w-5 ${colors.iconColor}`} />
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 ${colors.tagBg} ${colors.tagText} rounded-full text-sm font-medium`}>
                    {project.category}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.iconColor === 'text-primary' ? 'bg-primary' : colors.iconColor === 'text-secondary' ? 'bg-secondary' : 'bg-accent'}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${colors.border} ${colors.iconColor} hover:bg-primary hover:text-primary-foreground flex-1`}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-glow text-primary-foreground flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Note about university projects */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto surface-gradient border-primary/20 animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">About These Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                These projects represent my learning journey at Kohsar University. Each one taught me something new 
                about programming, problem-solving, and technology. While some are academic assignments, I've enhanced 
                them with additional features and improvements to showcase my growing skills and passion for development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;