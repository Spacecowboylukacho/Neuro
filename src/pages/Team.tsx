
import { Download, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: "დრ. ნინო ლორთქიფანიძე",
      position: "ცენტრის დირექტორი და ნევროლოგი",
      description: "20 წლიანი გამოცდილება ავტიზმის სპექტრის მკურნალობაში",
      achievements: "team-member-1-cv.pdf",
      image: "/placeholder.svg"
    },
    {
      name: "თამარ ბერიძე",
      position: "ქცევითი თერაპევტი",
      description: "ABA თერაპიის სერტიფიცირებული სპეციალისტი",
      achievements: "team-member-2-cv.pdf",
      image: "/placeholder.svg"
    },
    {
      name: "გიორგი წულუკიძე",
      position: "ლოგოპედი",
      description: "მეტყველების განვითარების ექსპერტი",
      achievements: "team-member-3-cv.pdf",
      image: "/placeholder.svg"
    },
    {
      name: "ნანა კვარაცხელია",
      position: "ეთერაპისტი",
      description: "სენსორული ინტეგრაციის სპეციალისტი",
      achievements: "team-member-4-cv.pdf",
      image: "/placeholder.svg"
    },
    {
      name: "დავით მელაძე",
      position: "ფსიქოლოგი",
      description: "ოჯახური კონსულტაციების ექსპერტი",
      achievements: "team-member-5-cv.pdf",
      image: "/placeholder.svg"
    }
  ];

  const handleDownload = (filename: string) => {
    // Mock download functionality
    console.log(`Downloading ${filename}`);
    // In real implementation, this would trigger file download
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ჩვენი გუნდი
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              გამოცდილი სპეციალისტები, რომლებიც ერთვებიან თქვენი ბავშვის განვითარებაში
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {member.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(member.achievements)}
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    CV-ის ჩამოტვირთვა
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              პროფესიონალი გუნდი თქვენი სამსახურებაში
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ჩვენი ყველა სპეციალისტი არის სერტიფიცირებული და ღია ფორმატით 
            თანამშრომლობისთვის თქვენს ოჯახთან
          </p>
          <Button size="lg" className="text-lg px-8">
            დაგვიკავშირდით კონსულტაციისთვის
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;
