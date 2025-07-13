
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Heart, Users, Award, BookOpen, Star } from 'lucide-react';

interface Feedback {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}

const Home = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: '1',
      author: 'ნინო გელაშვილი',
      content: 'ავტიზმის ცენტრი ჩვენი ოჯახისთვის ნამდვილი სასწაული იყო. ჩემი ვაჟი დიდი პროგრესი აქვს მიღწეული.',
      rating: 5, 
      date: '2024-01-15'
    },
    {
      id: '2', 
      author: 'გიორგი მამარდაშვილი',
      content: 'პროფესიონალი გუნდი და ინდივიდუალური მიდგომა. ძალიან კმაყოფილი ვარ მომსახურებით.',
      rating: 5,
      date: '2024-01-10'
    }
  ]);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "შეტყობინება",
        description: "გამოხმატების დასატოვებლად გაიარეთ ავტორიზაცია",
        variant: "destructive"
      });
      return;
    }

    if (feedback.trim()) {
      const newFeedback: Feedback = {
        id: Date.now().toString(),
        author: user.name,
        content: feedback,
        rating: 5,
        date: new Date().toISOString().split('T')[0]
      };
      
      setFeedbacks([newFeedback, ...feedbacks]);
      setFeedback('');
      
      toast({
        title: "მადლობა!",
        description: "თქვენი გამოხმატება წარმატებით დაემატა"
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ავტიზმის სპექტრის ცენტრი
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              პროფესიონალური მხარდაჭერა ავტიზმის სპექტრის მქონე ბავშვებისა და მათი ოჯახებისთვის
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <BookOpen className="mr-2 h-5 w-5" />
                  ჩვენი სერვისები
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  <Heart className="mr-2 h-5 w-5" />
                  დაგვიკავშირდით
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-700">დახმარებული ბავშვი</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-700">წლიანი გამოცდილება</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-700">კმაყოფილი ოჯახი</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ჩვენს შესახებ
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              ჩვენ ვართ პროფესიონალთა გუნდი, რომელიც მუშაობს ავტიზმის სპექტრის მქონე 
              ბავშვების განვითარებისა და მათი ოჯახების მხარდაჭერის მიზნით.
            </p>
          </div>
          <div className="text-center">
            <Link to="/about">
              <Button size="lg" variant="outline">
                მეტის გაცნობა
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              მშობელთა გამოხმატებები
            </h2>
          </div>

          {/* Feedback Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {feedbacks.map((fb) => (
              <Card key={fb.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{fb.author}</CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(fb.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{fb.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{fb.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feedback Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>დატოვეთ თქვენი გამოხმატება</CardTitle>
              <CardDescription>
                გაუზიარეთ სხვებს თქვენი გამოცდილება ჩვენთან
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <Textarea
                  placeholder="დაწერეთ თქვენი გამოხმატება..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button type="submit" className="w-full">
                  გამოხმატების დატოვება
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
