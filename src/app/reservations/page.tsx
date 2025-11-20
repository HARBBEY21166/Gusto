
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ReservationsPage() {
  const reservationsHeroImage = PlaceHolderImages.find(p => p.id === 'reservations-hero');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[40vh] flex items-center justify-center text-white">
          {reservationsHeroImage && (
            <Image
              src={reservationsHeroImage.imageUrl}
              alt={reservationsHeroImage.description}
              fill
              className="object-cover"
              data-ai-hint={reservationsHeroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="font-headline text-5xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
            >
              Reserve Your Table
            </h1>
            <p className="font-body text-lg text-gray-200 max-w-xl mx-auto mt-4">
              Secure your spot for an unforgettable evening.
            </p>
          </div>
        </section>

        {/* The rest of the reservation form will go here */}
        <div className="container mx-auto px-4 py-20 text-center">
            <p className="font-body text-lg text-muted-foreground">Reservation form coming soon...</p>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
