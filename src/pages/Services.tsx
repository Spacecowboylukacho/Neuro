
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Users, Gamepad2, Stethoscope, BookOpen, Heart } from 'lucide-react';

const services = [
  {
    id: 'behavioral-therapy',
    title: 'ქცევითი თერაპია',
    description: 'ABA (Applied Behavior Analysis) მეთოდოლოგიის გამოყენებით ბავშვების ქცევის კორექცია',
    icon: Brain,
    color: 'text-blue-600'
  },
  {
    id: 'speech-therapy', 
    title: 'მეტყველების თერაპია',
    description: 'კომუნიკაციის უნარების განვითარება და მეტყველების სტიმულირება',
    icon: Users,
    color: 'text-green-600'
  },
  {
    id: 'occupational-therapy',
    title: 'ოკუპაციური თერაპია',
    description: 'ყოველდღიური უნარების განვითარება და სენსორული ინტეგრაცია',
    icon: Gamepad2,
    color: 'text-purple-600'
  },
  {
    id: 'psychological-support',
    title: 'ფსიქოლოგიური მხარდაჭერა',
    description: 'ბავშვების და მშობლების ფსიქოლოგიური კონსულტაცია',
    icon: Heart,
    color: 'text-red-600'
  },
  {
    id: 'early-intervention',
    title: 'ადრეული ჩარევა',
    description: 'ადრეული ასაკის ბავშვებისთვის განკუთვნილი სპეციალური პროგრამები',
    icon: Stethoscope,
    color: 'text-orange-600'
  },
  {
    id: 'parent-training',
    title: 'მშობელთა ტრენინგი',
    description: 'მშობლების განათლება და ტრენინგი ავტიზმის სპექტრის შესახებ',
    icon: BookOpen,
    color: 'text-indigo-600'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ჩვენი სერვისები
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ჩვენ გთავაზობთ კომპლექსურ მომსახურებას ავტიზმის სპექტრის მქონე ბავშვებისთვის, 
            რომელიც მორგებულია თითოეული ბავშვის ინდივიდუალურ საჭიროებებზე
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gray-100 group-hover:bg-primary/10 transition-colors">
                      <IconComponent className={`h-8 w-8 ${service.color} group-hover:text-primary transition-colors`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <Link to={`/services/${service.id}`}>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      მეტის გაცნობა
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            გსურთ უფრო მეტის გაცნობა?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            დაგვიკავშირდით უფასო კონსულტაციისთვის და გავარკვიოთ, 
            როგორ შეგვიძლია დავეხმაროთ თქვენს ბავშვს
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              კონტაქტი
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
