
'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';


export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');

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
                    <CardHeader>
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Log In</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <CardContent className="space-y-4 pt-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email-login">Email</Label>
                                    <Input id="email-login" type="email" placeholder="m@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password-login">Password</Label>
                                    <Input id="password-login" type="password" />
                                </div>
                                <Button className="w-full bg-primary-gradient text-white font-bold">Log In</Button>
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
                                <Button className="w-full bg-primary-gradient text-white font-bold">Create Account</Button>
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


