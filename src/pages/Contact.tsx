
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "შეტყობინება მიღებულია!",
      description: "ჩვენ დაგიკავშირდებით უახლოეს მომავალში.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              დაგვიკავშირდით
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              ჩვენ აქ ვართ, რათა პასუხი გავცეთ თქვენს ყველა შეკითხვას
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">გაგზავნეთ შეტყობინება</CardTitle>
                <CardDescription>
                  შეავსეთ ფორმა და ჩვენ დაგიკავშირდებით უახლოეს მომავალში
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">სახელი და გვარი</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">ელ. ფოსტა</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">ტელეფონი</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">შეტყობინება</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    შეტყობინების გაგზავნა
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    მისამართი
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    რაფაელ აღლაძის ქუჩა 30 ა<br />
                    თბილისი, საქართველო
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    ტელეფონი
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">032 271 44 08</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    ელ. ფოსტა
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@autismcenter.ge</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    სამუშაო საათები
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground">
                    <p>ორშაბათი - პარასკევი: 09:00 - 18:00</p>
                    <p>შაბათი: 10:00 - 15:00</p>
                    <p>კვირა: დახურული</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>ჩვენი მდებარეობა</CardTitle>
                <CardDescription>
                  იპოვეთ ჩვენი ცენტრი თბილისის რუკაზე
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      რუკის ინტეგრაცია (Google Maps ან OpenStreetMap)
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      რაფაელ აღლაძის ქუჩა 30 ა, თბილისი
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
