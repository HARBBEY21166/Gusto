
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
                                </CardContent>
                            </TabsContent>
                            <TabsContent value="signup">
                                 <CardContent className="space-y-4 pt-6">
                                 <div className="space-y-2">
                                    <Label htmlFor="name-signup">Name</Label>
                                    <Input id="name-signup" type="text" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email-signup">Email</Label>
                                    <Input id="email-signup" type="email" placeholder="m@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password-signup">Password</Label>
                                    <Input id="password-signup" type="password" />
                                </div>
                                <Button className="w-full bg-primary-gradient text-white font-bold">Create Your Account</Button>
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

    