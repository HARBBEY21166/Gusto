
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

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

        {/* Placeholder for future sections */}
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-4">The Journey of Gusto</h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                Content about the restaurant's history, philosophy, and team will be placed here. Check back soon for the full story!
            </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
