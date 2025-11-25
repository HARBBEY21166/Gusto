
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  // Placeholder for dynamic user data
  const user = {
    firstName: 'Jane',
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Section 1: Dashboard Hero & Welcome */}
        <section
          className="pt-32 pb-16" // pt-32 to account for header
          style={{ background: 'linear-gradient(180deg, hsl(var(--muted)) 0%, hsl(var(--background)) 100%)' }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                  Welcome back, {user.firstName}!
                </h1>
                <p className="font-body text-lg text-muted-foreground mt-2">
                  Manage your reservations, view your history, and update your preferences.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                <Link href="/reservations">Reserve a New Table</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
