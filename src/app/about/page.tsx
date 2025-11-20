
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Users, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const traditionImage = PlaceHolderImages.find(p => p.id === 'about-tradition');

  const values = [
    {
      icon: Leaf,
      title: 'Locally Sourced',
      description: 'We forge direct relationships with local farmers and fishermen to ensure the freshest, most sustainable ingredients arrive on your plate.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We are more than a restaurant; we are a gathering place for friends and family. We are committed to supporting and enriching our local community.',
    },
    {
      icon: Star,
      title: 'Masterful Craft',
      description: 'Every dish is a testament to our dedication to the craft of cooking. We honor traditional techniques while embracing creative innovation.',
    },
  ];

  const teamMembers = [
    {
      id: 'team-head-chef',
      name: 'Alessandro',
      title: 'Head Chef & Founder',
    },
    {
      id: 'team-general-manager',
      name: 'Isabella',
      title: 'General Manager',
    },
    {
      id: 'team-pastry-chef',
      name: 'Marco',
      title: 'Pastry Chef',
    }
  ].map(member => ({ ...member, image: PlaceHolderImages.find(p => p.id === member.id) }));


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center text-white">
          {aboutHeroImage && (
            <Image
              src={aboutHeroImage.imageUrl}
              alt={aboutHeroImage.description}
              fill
              className="object-cover"
              data-ai-hint={aboutHeroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-xl">
              <h1
                className="font-headline text-5xl md:text-6xl font-bold"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
              >
                Our Story
              </h1>
              <p className="font-body text-lg md:text-xl text-gray-200 mt-4">
                More than a meal. It's a legacy of flavor.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-subtle">
                {traditionImage && (
                    <Image
                      src={traditionImage.imageUrl}
                      alt={traditionImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={traditionImage.imageHint}
                    />
                )}
              </div>
              <div className="flex flex-col justify-center text-left">
                <h2 className="font-headline text-4xl font-bold text-gradient-primary">
                  A Family Tradition
                </h2>
                <div className="font-body text-base text-muted-foreground mt-6 space-y-4 max-w-prose">
                  <p>
                    Gusto was born from a lifetime of memories around the family table. Our head chef and founder, Alessandro, learned the secrets of flavor from his grandmother in a sun-drenched kitchen in Tuscany. For us, food is more than sustenance; it's a language of love and heritage.
                  </p>
                  <p>
                    We opened Gusto in 2010 to share that feeling with our community, creating a place where every guest is treated like family and every dish tells a story.
                  </p>
                </div>
                <p className="font-signature text-5xl text-foreground mt-6">
                  Alessandro
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold text-foreground">
                Our Promise
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card shadow-subtle border-none rounded-lg text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary-gradient p-3 rounded-full w-fit">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center">
                    <CardTitle className="font-headline text-2xl font-bold text-foreground">
                      {value.title}
                    </CardTitle>
                    <p className="font-body text-muted-foreground mt-4">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold text-foreground">
                Meet The Family
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center text-center">
                  {member.image && (
                    <Avatar className="w-40 h-40 mb-4 border-4 border-card shadow-subtle">
                      <AvatarImage src={member.image.imageUrl} alt={`Headshot of ${member.name}`} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <h3 className="font-headline text-2xl font-bold text-foreground">{member.name}</h3>
                  <p className="font-body text-base text-gradient-secondary">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl font-bold">
              Become a Part of Our Story
            </h2>
            <p className="font-body text-lg text-gray-200 mt-4 mb-8 max-w-xl mx-auto">
              Come and create your own memories at our table.
            </p>
            <Button asChild size="lg" className="bg-secondary-gradient text-white font-bold hover:opacity-90 transition-opacity">
              <Link href="/reservations">Reserve Your Table</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
