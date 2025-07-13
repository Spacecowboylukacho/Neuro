
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Clock, Users, Target, CheckCircle } from 'lucide-react';

const serviceDetails = {
  'behavioral-therapy': {
    title: 'ქცევითი თერაპია (ABA)',
    description: 'Applied Behavior Analysis (ABA) არის მეცნიერულად დადასტურებული მეთოდოლოgia, რომელიც ეხმარება ავტიზმის სპექტრის მქონე ბავშვებს ახალი უნარების შესწავლასა და პრობლემური ქცევების შემცირებაში.',
    duration: '1-2 საათი',
    frequency: 'კვირაში 2-5 ჯერ',
    ageGroup: '2-18 წელი',
    benefits: [
      'კომუნიკაციის უნარების გაუმჯობესება',
      'სოციალური ინტერაქციის ზრდა',
      'ყურადღების კონცენტრაცია',
      'პრობლემური ქცევის შემცირება',
      'ყოველდღიური უნარების განვითარება'
    ],
    process: [
      'საწყისი შეფასება და მიზნების განსაზღვრა',
      'ინდივიდუალური თერაპიული გეგმის შედგენა',
      '1:1 სესიები ქცევითი ანალიტიკოსთან',
      'რეგულარული პროგრესის შეფასება',
      'მშობლებისთვის რეკომენდაციების მიცემა'
    ]
  },
  'speech-therapy': {
    title: 'მეტყველების თერაპია',
    description: 'მეტყველების თერაპია მიზნად ისახავს კომუნიკაციის უნარების განვითარებას, მეტყველების სტიმულირებას და ენობრივი დარღვევების კორექციას.',
    duration: '45-60 წუთი',
    frequency: 'კვირაში 2-3 ჯერ',
    ageGroup: '2-16 წელი',
    benefits: [
      'მეტყველების გასაგებობის გაუმჯობესება',
      'ლექსიკის გაფართოება',
      'წინადადების სტრუქტურის განვითარება',
      'არავერბალური კომუნიკაციის გაძლიერება',
      'სოციალური კომუნიკაციის უნარები'
    ],
    process: [
      'მეტყველების დიაგნოსტიკური შეფასება',
      'ინდივიდუალური თერაპიული გეგმა',
      'თამაშზე დაფუძნებული სესიები',
      'მშობლებთან ყოველდღიური პრაქტიკა',
      'პროგრესის რეგულარული მონიტორინგი'
    ]
  },
  'occupational-therapy': {
    title: 'ოკუპაციური თერაპია',
    description: 'ოკუპაციური თერაპია ეხმარება ბავშვებს ყოველდღიურ აქტივობებში მონაწილეობისა და ჯანსაღი განვითარების უზრუნველყოფაში.',
    duration: '45-60 წუთი',
    frequency: 'კვირაში 1-3 ჯერ',
    ageGroup: '2-18 წელი',
    benefits: [
      'მუქრი მოტორული უნარების განვითარება',
      'სენსორული ინტეგრაციის გაუმჯობესება',
      'ყოველდღიური ცხოვრების უნარები',
      'კოორდინაციისა და ბალანსის განვითარება',
      'თვითმომსახურების უნარები'
    ],
    process: [
      'ოკუპაციური შეფასება',
      'სენსორული პროფილის შექმნა',
      'ინდივიდუალური ვარჯიშების პროგრამა',
      'სენსორული ინტეგრაційი აქტივობები',
      'საშინაო დავალებებისა და რეკომენდაციების მიცემა'
    ]
  },
  'psychological-support': {
    title: 'ფსიქოლოგიური მხარდაჭერა',
    description: 'ფსიქოლოგიური მხარდაჭერა მოიცავს როგორც ბავშვების, ისე მშობლების ემოციურ მხარდაჭერას და კონსულტაციას.',
    duration: '50 წუთი',
    frequency: 'კვირაში 1-2 ჯერ',
    ageGroup: 'ყველა ასაკი',
    benefits: [
      'ემოციური რეგულაციის უნარები',
      'სტრესის მართვა',
      'თვითშეგნების განვითარება',
      'ოჯახური ურთიერთობების გაუმჯობესება',
      'მშობლების მხარდაჭერა'
    ],
    process: [
      'ფსიქოლოგიური შეფასება',
      'ინდივიდუალური კონსულტაციები',
      'ოჯახური თერაპიული სესიები',
      'მშობლებისთვის მხარდაჭერის ჯგუფები',
      'კრიზისული ინტერვენცია'
    ]
  },
  'early-intervention': {
    title: 'ადრეული ჩარევა',
    description: 'ადრეული ჩარევის პროგრამები განკუთვნილია 0-6 წლის ასაკის ბავშვებისთვის და მიზნად ისახავს განვითარების ყველა სფეროში მხარდაჭერას.',
    duration: '30-45 წუთი',
    frequency: 'კვირაში 2-4 ჯერ',
    ageGroup: '0-6 წელი',
    benefits: [
      'ადრეული განვითარების სტიმულირება',
      'კოგნიტური უნარების განვითარება',
      'სოციალური ინტერაქციის ხელშეწყობა',
      'მშობელ-ბავშვის ურთიერთობის გაძლიერება',
      'სკოლამდელი მომზადება'
    ],
    process: [
      'კომპლექსური განვითარების შეფასება',
      'მულტიდისციპლინარული მიდგომა',
      'ოჯახურ გარემოში ჩარევა',
      'მშობლების მომზადება და ტრენინგი',
      'რეგულარული პროგრესის შეფასება'
    ]
  },
  'parent-training': {
    title: 'მშობელთა ტრენინგი',
    description: 'მშობელთა ტრენინგი მიზნად ისახავს მშობელების გაძლიერებას ავტიზმის სპექტრის მქონე ბავშვთან ურთიერთობაში.',
    duration: '90 წუთი',
    frequency: 'კვირაში 1 ჯერ',
    ageGroup: 'მშობლები',
    benefits: [
      'ავტიზმის სპექტრის გაგება',
      'ეფექტური კომუნიკაციის სტრატეგიები',
      'ქცევის მართვის ტექნიკები',
      'მხარდამჭერი გარემოს შექმნა',
      'საკუთარი ზრუნვა და სტრესის მართვა'
    ],
    process: [
      'საწყისი შეფასება და საჭიროებების განსაზღვრა',
      'ჯგუფური ტრენინგ სესიები',
      'პრაქტიკული ვარჯიშები',
      'ინდივიდუალური კონსულტაციები',
      'შემდგომი მხარდაჭერა'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  if (!serviceId || !serviceDetails[serviceId as keyof typeof serviceDetails]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">სერვისი ვერ მოიძებნა</h1>
          <Link to="/services">
            <Button>სერვისებზე დაბრუნება</Button>
          </Link>
        </div>
      </div>
    );
  }

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/services">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              სერვისებზე დაბრუნება
            </Button>
          </Link>
        </div>

        {/* Service Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Service Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>ხანგრძლივობა</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">{service.duration}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>სიხშირე</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">{service.frequency}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>ასაკი</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">{service.ageGroup}</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">სარგებელი</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Process Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">თერაპიული პროცესი</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            მზად ხართ დასაწყებად?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            დაგვიკავშირდით უფასო კონსულტაციისთვის და ერთად ვიპოვოთ საუკეთესო გზა 
            თქვენი ბავშვის განვითარებისთვის
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              კონსულტაციის დაჯავშნა
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
