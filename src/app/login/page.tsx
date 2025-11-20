'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.36 1.67-4.66 1.67-3.86 0-6.99-3.14-6.99-7s3.13-7 6.99-7c2.03 0 3.36.79 4.3 1.7l2.1-2.1C18.05 3.72 15.55 2.5 12.48 2.5c-5.48 0-9.92 4.45-9.92 9.92s4.44 9.92 9.92 9.92c5.2 0 9.52-3.53 9.52-9.69 0-.64-.06-1.25-.17-1.83l-9.35-.02z" />
    </svg>
);
  
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
);

const SocialButtons = () => (
    <>
        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
                <GoogleIcon className="mr-2 h-4 w-4" />
                Google
            </Button>
            <Button variant="outline" className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:text-white border-0">
                <FacebookIcon className="mr-2 h-4 w-4" />
                Facebook
            </Button>
        </div>
    </>
);


export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  const heroContent = {
    login: {
      title: 'Welcome Back',
      subtitle: 'Access your personal account details and reservation history.',
    },
    signup: {
      title: 'Create an Account',
      subtitle: 'Join us for a more personalized experience.',
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section
          className="h-[30vh] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #667eea22, #764ba222)'}}
        >
          <div className="text-center">
            <h1 className="font-headline text-5xl font-bold text-foreground">
              {activeTab === 'login' ? heroContent.login.title : heroContent.signup.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground mt-2">
              {activeTab === 'login' ? heroContent.login.subtitle : heroContent.signup.subtitle}
            </p>
          </div>
        </section>

        <section className="-mt-16 pb-20">
            <div className="container mx-auto px-4">
                 <Card className="max-w-md mx-auto bg-card shadow-xl border-none rounded-lg">
                    <CardHeader className="p-6">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Log In</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <CardContent className="space-y-6 pt-6 px-0 pb-0">
                                  <div className="space-y-2">
                                      <Label htmlFor="email-login">Email Address</Label>
                                      <Input id="email-login" type="email" placeholder="m@example.com" />
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="password-login">Password</Label>
                                      <div className="relative">
                                          <Input id="password-login" type={showPassword ? 'text' : 'password'} className="pr-10" />
                                          <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                                          >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                          </button>
                                      </div>
                                  </div>
                                  <div className="text-right">
                                    <Link href="#" className="text-sm font-medium text-gradient-secondary hover:brightness-110 transition">
                                      Forgot your password?
                                    </Link>
                                  </div>
                                  <Button className="w-full bg-primary-gradient text-white font-bold">Sign In to Your Account</Button>
                                  <SocialButtons />
                                </CardContent>
                            </TabsContent>
                            <TabsContent value="signup">
                                <CardContent className="space-y-4 pt-6 px-0 pb-0">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                          <Label htmlFor="first-name-signup">First Name</Label>
                                          <Input id="first-name-signup" type="text" placeholder="John" />
                                      </div>
                                      <div className="space-y-2">
                                          <Label htmlFor="last-name-signup">Last Name</Label>
                                          <Input id="last-name-signup" type="text" placeholder="Doe" />
                                      </div>
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="email-signup">Email Address</Label>
                                      <Input id="email-signup" type="email" placeholder="john.doe@example.com" />
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="password-signup">Create Password</Label>
                                      <Input id="password-signup" type="password" />
                                  </div>
                                  <Button className="w-full bg-primary-gradient text-white font-bold">Create Your Account</Button>
                                  <SocialButtons />
                                  <p className="text-xs text-muted-foreground text-center pt-2">
                                    By creating an account, you agree to our{' '}
                                    <Link href="#" className="text-gradient-secondary hover:brightness-110 transition">
                                      Privacy Policy
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="#" className="text-gradient-secondary hover:brightness-110 transition">
                                      Terms of Service
                                    </Link>
                                    .
                                  </p>
                                </CardContent>
                            </TabsContent>
                        </Tabs>
                    </CardHeader>
                </Card>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
