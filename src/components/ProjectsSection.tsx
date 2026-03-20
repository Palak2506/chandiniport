import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import jAndJImg from "@/assets/j&j.png";
import vodafoneImg from "@/assets/v.png";
import mentalHealthImg from "@/assets/mh.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MyConcerta - Multilingual Website Migration",
      description: "Developed a multilingual React web application for Johnson & Johnson supporting role-based navigation and responsive UI. Integrated Google Maps API and REST APIs to build a \"Find Treatment Centre\" feature using user GPS location. Implemented lazy loading and unit testing with Jest and React Testing Library, improving performance and reliability.",
      image: jAndJImg,
      technologies: ["React", "JavaScript", "Jest", "React Testing Library", "Google Maps API", "REST APIs"]
    },
    {
      title: "Vodafone Client Services Platform",
      description: "Built responsive sales, billing, and payment dashboards using React, TypeScript, Redux, HTML5, and Bootstrap. Implemented state management and automated unit testing, reducing production defects and improving release quality. Collaborated with backend and QA teams to deliver high-performance enterprise web applications.",
      image: vodafoneImg,
      technologies: ["React", "TypeScript", "Redux", "HTML5", "Bootstrap", "Unit Testing", "REST APIs"]
    },
    {
      title: "Analyzing the Impact of Physical Activity on Mental Health",
      description: "Developed machine learning models including Logistic Regression, SVM, and Random Forest to predict mental health outcomes using lifestyle and activity data. Performed data preprocessing, feature engineering, normalization, and SMOTE to handle class imbalance, achieving 93% precision and 80% recall. Identified key behavioral factors such as sleep duration, screen time, and work hours affecting mental well-being.",
      image: mentalHealthImg,
      technologies: ["Machine Learning", "Logistic Regression", "SVM", "Random Forest", "SMOTE", "Data Preprocessing", "Feature Engineering"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Projects demonstrating React development, REST API integration, and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
