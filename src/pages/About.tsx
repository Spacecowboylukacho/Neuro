
import { Users, Target, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ჩვენს შესახებ
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              ავტიზმის სპექტრის მქონე ბავშვებისა და მათი ოჯახების მხარდაჭერა
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="h-8 w-8 mr-3 text-primary" />
                  ჩვენი მისია
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  ჩვენი მისიაა ავტიზმის სპექტრის მქონე ბავშვებს და მათ ოჯახებს მივაწოდოთ 
                  უმაღლესი ხარისხის მომსახურება, რათა ხელი შევუწყოთ მათ განვითარებას და 
                  დამოუკიდებელ ცხოვრებას.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Heart className="h-8 w-8 mr-3 text-primary" />
                  ჩვენი ხედვა
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  ჩვენ ვხედავთ მომავალს, სადაც ყველა ბავშვი, მიუხედავად მისი განსაკუთრებული 
                  საჭიროებებისა, მიიღებს იმ მხარდაჭერას, რაც მას სჭირდება წარმატებული ცხოვრებისთვის.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ჩვენი ღირებულებები</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ოჯახური მიდგომა</h3>
              <p className="text-muted-foreground">
                ჩვენ ვმუშაობთ მთელ ოჯახთან, ვიღებთ მხედველობაში ყველას საჭიროებებს
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">პროფესიონალიზმი</h3>
              <p className="text-muted-foreground">
                ჩვენი გუნდი შედგება გამოცდილი სპეციალისტებისგან
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">თანადგომა</h3>
              <p className="text-muted-foreground">
                ყველა ბავშვი უნიკალურია და იმსახურებს ინდივიდუალურ მიდგომას
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">დაგვიკავშირდით</h2>
            <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg mb-4">
                <strong>მისამართი:</strong> რაფაელ აღლაძის ქუჩა 30 ა, თბილისი, საქართველო
              </p>
              <p className="text-lg mb-4">
                <strong>ტელეფონი:</strong> 032 271 44 08
              </p>
              <p className="text-lg">
                <strong>ელ. ფოსტა:</strong> info@autismcenter.ge
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
