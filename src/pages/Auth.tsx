
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const { login, register, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(loginData.email, loginData.password);
      toast({
        title: "წარმატებით შეხვედით სისტემაში!",
        description: "მოგესალმებით ავტიზმის ცენტრის პორტალზე.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "შეცდომა",
        description: "არასწორი ელ. ფოსტა ან პაროლი",
        variant: "destructive",
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "შეცდომა",
        description: "პაროლები არ ემთხვევა",
        variant: "destructive",
      });
      return;
    }
    try {
      await register(registerData.email, registerData.password, registerData.name);
      toast({
        title: "რეგისტრაცია წარმატებით დასრულდა!",
        description: "მოგესალმებით ავტიზმის ცენტრის პორტალზე.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "შეცდომა",
        description: "რეგისტრაცია ვერ მოხერხდა. სცადეთ მოგვიანებით.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="ავტიზმის ცენტრი"
              className="h-12 w-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-lg font-bold">AC</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">ავტიზმის ცენტრი</h1>
          <p className="text-muted-foreground mt-2">შედით ან გაიარეთ რეგისტრაცია</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">შესვლა</TabsTrigger>
            <TabsTrigger value="register">რეგისტრაცია</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  შესვლა
                </CardTitle>
                <CardDescription>
                  შეიყვანეთ თქვენი მონაცემები სისტემაში შესასვლელად
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">ელ. ფოსტა</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        className="pl-10"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="login-password">პაროლი</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type="password"
                        className="pl-10"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'მიმდინარეობს...' : 'შესვლა'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  რეგისტრაცია
                </CardTitle>
                <CardDescription>
                  შექმენით ახალი ანგარიში ჩვენი სერვისების გამოსაყენებლად
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name">სახელი და გვარი</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-name"
                        type="text"
                        className="pl-10"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="register-email">ელ. ფოსტა</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-email"
                        type="email"
                        className="pl-10"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="register-password">პაროლი</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-password"
                        type="password"
                        className="pl-10"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">პაროლის გამეორება</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        type="password"
                        className="pl-10"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'მიმდინარეობს...' : 'რეგისტრაცია'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
