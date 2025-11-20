
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const AnimatedCard = ({ children, className, delay }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay || 0}ms` }}
    >
      {children}
    </div>
  );
};


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-dish');
  const featuredDishes = PlaceHolderImages.filter(p => p.id.startsWith('dish-'));
  const storyImage = PlaceHolderImages.find(p => p.id === 'our-story-image');

  const testimonials = [
    {
      quote: "The best dining experience I've had this year! The scallop dish was out of this world.",
      author: "Alex Johnson",
      title: "Local Food Critic",
    },
    {
      quote: "An absolute gem. The ambiance is perfect for a special occasion, and the service is impeccable.",
      author: "Samantha Bee",
      title: "Lifestyle Blogger",
    },
    {
      quote: "Every dish is a work of art. You can taste the passion and quality in every single bite. Highly recommended!",
      author: "Michael Ren",
      title: "Happy Customer",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="font-headline text-4xl md:text-6xl font-bold animate-fade-in-up"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)', animationDelay: '0.2s' }}
            >
              Experience Culinary Excellence
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-200 max-w-xl mx-auto mt-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}>
              We craft unforgettable moments with locally sourced, seasonal
              ingredients.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                <Link href="/menu">View Our Menu</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
                <Link href="/events">Book an Event</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold text-foreground">
                Our Signature Creations
              </h2>
              <p className="font-body text-lg text-muted-foreground mt-2">
                A taste of what makes Gusto unique.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredDishes.map((dish, index) => (
                <AnimatedCard key={dish.id} delay={index * 150}>
                  <Card 
                    className="bg-card overflow-hidden shadow-subtle border-none rounded-lg h-full"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={dish.imageUrl}
                        alt={dish.description}
                        fill
                        className="object-cover"
                        data-ai-hint={dish.imageHint}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-headline text-2xl font-bold text-foreground">
                        {dish.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mt-2">
                        {dish.description}
                      </p>
                      <p className="font-body font-bold text-lg mt-4 text-gradient-secondary">
                        {dish.price}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-subtle">
                {storyImage && (
                    <Image
                      src={storyImage.imageUrl}
                      alt={storyImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={storyImage.imageHint}
                    />
                )}
              </div>
              <div className="flex flex-col justify-center text-left">
                <h2 className="font-headline text-4xl font-bold text-gradient-primary">
                  Our Story
                </h2>
                <h3 className="font-body text-xl font-bold text-muted-foreground mt-2">A Journey of Flavor Since 2010</h3>
                <p className="font-body text-base text-muted-foreground mt-4 max-w-prose">
                  Founded on the belief that a great meal is a memorable experience, Gusto brings together family recipes and modern technique. We are passionate about supporting local farmers and showcasing the best our region has to offer.
                </p>
                <div className="mt-8">
                   <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary">
                     <Link href="/about">Learn More</Link>
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold text-foreground">
                What Our Guests Say
              </h2>
              <p className="font-body text-lg text-muted-foreground mt-2">
                Don't just take our word for it.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                 <AnimatedCard key={index} delay={index * 150}>
                    <Card className="bg-card shadow-subtle border-none rounded-lg text-center h-full">
                      <CardContent className="p-8 flex flex-col items-center justify-center">
                        <p className="font-body italic text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex gap-1 my-4">
                          {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-transparent bg-clip-text bg-secondary-gradient" fill="url(#star-gradient)" />
                          ))}
                          <svg width="0" height="0">
                              <defs>
                                  <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" style={{stopColor: '#f093fb'}} />
                                      <stop offset="100%" style={{stopColor: '#f5576c'}} />
                                  </linearGradient>
                              </defs>
                          </svg>
                        </div>
                        <h4 className="font-headline text-lg font-bold text-foreground">
                          &mdash; {testimonial.author}
                        </h4>
                        <p className="font-body text-sm text-gray-400">{testimonial.title}</p>
                      </CardContent>
                    </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl font-bold">
              Ready for an Unforgettable Evening?
            </h2>
            <p className="font-body text-lg text-gray-200 mt-4 mb-8 max-w-xl mx-auto">
              Reserve your table online and secure your spot at Gusto.
            </p>
            <Button asChild size="lg" className="bg-secondary-gradient text-white font-bold hover:opacity-90 transition-opacity">
              <Link href="/reservations">Reserve Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
