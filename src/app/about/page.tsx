
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const traditionImage = PlaceHolderImages.find(p => p.id === 'about-tradition');

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
        
        <div className="container mx-auto px-4 py-20 text-center bg-muted">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-4">The Journey of Gusto Continues</h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                More about our philosophy and team will be placed here. Check back soon for the full story!
            </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
