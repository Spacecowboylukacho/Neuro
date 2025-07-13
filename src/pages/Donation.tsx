
import { useState } from 'react';
import { Heart, Users, Gift, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const Donation = () => {
  const [amount, setAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: ''
  });
  const { toast } = useToast();

  const predefinedAmounts = [50, 100, 250, 500];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "მადლობა თქვენი დონაციისთვის! ❤️",
      description: `თქვენი ${amount} ლარის დონაცია დაეხმარება ბავშვებს უკეთესი მომავლის შექმნაში.`,
    });
    setAmount('');
    setDonorInfo({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ერთად შევქმნათ უკეთესი მომავალი
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              თქვენი დონაცია დაეხმარება ავტიზმის სპექტრის მქონე ბავშვებს მიიღონ 
              იმ ზრუნვა და მხარდაჭერა, რაც მათ სჭირდებათ ნაღდი პოტენციალის 
              რეალიზებისთვის
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                <span>150+ ბავშვი ყოველწლიურად</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 mr-2" />
                <span>24/7 მხარდაჭერა</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Gift className="h-6 w-6 mr-2 text-primary" />
                  დონაციის გაკეთება
                </CardTitle>
                <CardDescription>
                  აირჩიეთ თქვენთვის მოსახერხებელი თანხა და დაეხმარეთ ბავშვებს
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonate} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <Label className="text-base font-medium">დონაციის ტიპი</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType} className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">ერთჯერადი</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">ყოველთვიური</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Predefined Amounts */}
                  <div>
                    <Label className="text-base font-medium">აირჩიეთ თანხა (ლარი)</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {predefinedAmounts.map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={amount === preset.toString() ? "default" : "outline"}
                          onClick={() => setAmount(preset.toString())}
                          className="h-12"
                        >
                          {preset} ₾
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <Label htmlFor="custom-amount">ან შეიყვანეთ სხვა თანხა</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="თანხა ლარებში"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="donor-name">სახელი და გვარი</Label>
                      <Input
                        id="donor-name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="donor-email">ელ. ფოსტა</Label>
                      <Input
                        id="donor-email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Heart className="h-5 w-5 mr-2" />
                    დონაციის გაკეთება - {amount} ₾
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Impact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">როგორ იხარჯება თქვენი დონაცია</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">60% - პირდაპირი მომსახურება</h4>
                      <p className="text-sm text-muted-foreground">
                        თერაპიული სესიები, კონსულტაციები და ინდივიდუალური მუშაობა
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">25% - აღჭურვილობა</h4>
                      <p className="text-sm text-muted-foreground">
                        თანამედროვე ტექნოლოგიები და სათერაპიო მასალები
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Gift className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">15% - ოპერაციული ხარჯები</h4>
                      <p className="text-sm text-muted-foreground">
                        ადმინისტრაცია და ცენტრის მუშაობის უზრუნველყოფა
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      რას ნიშნავს თქვენი დონაცია?
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p><strong>50 ₾</strong> - ერთი სესია ლოგოპედთან</p>
                      <p><strong>100 ₾</strong> - ერთი ინდივიდუალური კონსულტაცია</p>
                      <p><strong>250 ₾</strong> - კვირიანი თერაპიული კურსი</p>
                      <p><strong>500 ₾</strong> - ერთი ბავშვის თვიური მხარდაჭერა</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">💝 მადლობის სიტყვა</h3>
                <p className="text-muted-foreground">
                  "თქვენი ყველა დონაცია, მიუხედავად მისი ოდენობისა, არის ინვესტიცია 
                  ბავშვების მომავალში. ყოველი ლარი ეხმარება ვინმეს უკეთესი ცხოვრების შექმნაში."
                </p>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  - ავტიზმის ცენტრის გუნდი
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
