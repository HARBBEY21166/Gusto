
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactHeroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[40vh] flex items-center justify-center text-white">
          {contactHeroImage && (
            <Image
              src={contactHeroImage.imageUrl}
              alt={contactHeroImage.description}
              fill
              className="object-cover"
              data-ai-hint={contactHeroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="font-headline text-5xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
            >
              Find Us & Get In Touch
            </h1>
            <p className="font-body text-lg text-gray-200 max-w-xl mx-auto mt-4">
              We can't wait to welcome you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Contact Info */}
              <div className="flex flex-col gap-8">
                <h2 className="font-headline text-4xl font-bold text-foreground">Visit Us</h2>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-body font-bold text-foreground">Address</h3>
                      <p className="text-muted-foreground">123 Main Street, City, State 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-body font-bold text-foreground">Hours</h3>
                      <p className="text-muted-foreground">Mon-Thu: 11am - 10pm</p>
                      <p className="text-muted-foreground">Fri-Sat: 11am - 11pm</p>
                      <p className="text-muted-foreground">Sunday: 10am - 9pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-body font-bold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-body font-bold text-foreground">Email</h3>
                      <p className="text-muted-foreground">hello@gustorestaurant.com</p>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity self-start">
                  <Link href="https://www.google.com/maps/search/?api=1&query=123+Main+Street+City+State+12345" target="_blank">
                    Get Directions
                  </Link>
                </Button>
              </div>

              {/* Right Column: Interactive Map */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-subtle">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257797799516!2d-122.41941548468115!3d37.77492957975873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4c16a3e5%3A0x4c7d5c2e3a6a42a6!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Restaurant Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto bg-card shadow-subtle border-none rounded-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl font-bold text-foreground">Send Us a Message</CardTitle>
                <CardDescription className="font-body text-lg text-muted-foreground pt-2">
                  Have a question? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body">Full Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-body">Subject</Label>
                    <Input id="subject" type="text" placeholder="e.g., Dietary Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
