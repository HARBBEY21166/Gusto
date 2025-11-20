
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

        {/* Other sections will go here */}
        
      </main>
      <Footer />
    </div>
  );
}
