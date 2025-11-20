
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import MenuNav from '@/components/menu-nav';

const MenuSection = ({ id, title }: { id: string; title: string }) => (
  <section id={id} className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-headline text-4xl font-bold text-foreground text-center">{title}</h2>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for menu items */}
        <div className="border p-4 rounded-lg shadow-subtle bg-card">
          <h3 className="font-headline text-xl font-bold">Dish Name</h3>
          <p className="text-muted-foreground mt-2 text-sm">Short description of the dish goes here.</p>
          <p className="font-bold text-lg mt-4 text-gradient-secondary">$15</p>
        </div>
        <div className="border p-4 rounded-lg shadow-subtle bg-card">
          <h3 className="font-headline text-xl font-bold">Dish Name</h3>
          <p className="text-muted-foreground mt-2 text-sm">Short description of the dish goes here.</p>
          <p className="font-bold text-lg mt-4 text-gradient-secondary">$18</p>
        </div>
        <div className="border p-4 rounded-lg shadow-subtle bg-card">
          <h3 className="font-headline text-xl font-bold">Dish Name</h3>
          <p className="text-muted-foreground mt-2 text-sm">Short description of the dish goes here.</p>
          <p className="font-bold text-lg mt-4 text-gradient-secondary">$22</p>
        </div>
      </div>
    </div>
  </section>
);


export default function MenuPage() {
  const menuHeroImage = PlaceHolderImages.find(p => p.id === 'menu-hero');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[40vh] flex items-center justify-center text-white">
          {menuHeroImage && (
            <Image
              src={menuHeroImage.imageUrl}
              alt={menuHeroImage.description}
              fill
              className="object-cover"
              data-ai-hint={menuHeroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="font-headline text-5xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
            >
              Our Menu
            </h1>
            <p className="font-body text-lg text-gray-200 max-w-xl mx-auto mt-4">
              Crafted with passion, served with pride.
            </p>
          </div>
        </section>

        <MenuNav />

        <MenuSection id="appetizers" title="Appetizers" />
        <MenuSection id="main-courses" title="Main Courses" />
        <MenuSection id="desserts" title="Desserts" />
        <MenuSection id="drinks" title="Drinks" />

      </main>
      <Footer />
    </div>
  );
}
