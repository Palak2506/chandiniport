import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";
import cert1 from "@/assets/cert1-python-full-stack.png";
import cert2 from "@/assets/cert2-public-speaking.png";
import cert3 from "@/assets/cert3-internship.png";
import cert4 from "@/assets/cert4-training.png";

const EducationSection = () => {
  const education = [
    {
      institution: "Dublin Business School",
      degree: "Postgraduate Diploma in Business Analytics",
      dates: "April 2024 – April 2025",
      grade: "",
      coursework: [
        "Data Analysis & Visualization",
        "Predictive Analytics & Machine Learning",
        "Business Intelligence",
        "Applied Research Methods",
        "Programming for Data Analytics (Python)",
      ],
    },
    {
      institution: "Coorg Institute of Technology",
      degree: "Bachelor of Engineering (Computer Science)",
      dates: "Aug 2017 – Aug 2021",
      grade: "",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Web Technologies",
        "Software Engineering",
        "Cloud Computing",
        "Artificial Intelligence",
      ],
    }
  ];

  const certifications: Array<{
    title: string;
    issuer: string;
    date: string;
    description?: string;
    image: string;
  }> = [
    {
      title: "Python Full Stack Course (Certificate of Completion)",
      issuer: "Pentagon Space",
      date: "2021-2022",
      description:
        "Successfully completed Python Full Stack Course from Batch No: PS27MAY21PFS#0005 for the year 2021-22.",
      image: cert1,
    },
    {
      title: "Public Speaking Foundations (Certificate of Completion)",
      issuer: "LinkedIn Learning",
      date: "Jan 05, 2022",
      description:
        "Course completed on Jan 05, 2022 at 05:50PM UTC.",
      image: cert2,
    },
    {
      title: "Machine Learning & Artificial Intelligence (Certificate of Internship)",
      issuer: "Inventeron Technologies and Business Solutions LLP",
      date: "",
      description:
        "Completed internship in Machine Learning & Artificial Intelligence.",
      image: cert3,
    },
    {
      title: "Machine Learning (Certificate of Training)",
      issuer: "Internshala Trainings",
      date: "Jun 18, 2020 - Jul 30, 2020",
      description:
        "Successfully completed six weeks online training on Machine Learning (from 18th June, 2020 to 30th July, 2020).",
      image: cert4,
    },
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic background and coursework in business analytics and computer science
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.dates}</span>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.coursework.length > 0 && (
                    <CardContent>
                      <p className="font-semibold text-foreground mb-3">Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge 
                            key={courseIndex}
                            variant="secondary"
                            className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] text-sm hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-40 object-contain mb-3 rounded-md"
                    />
                    <CardTitle className="text-lg font-bold text-foreground mb-2">
                      {cert.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-[hsl(var(--primary))] mb-2">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;