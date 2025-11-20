import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages[0];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center text-white">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="font-headline text-4xl md:text-6xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
            >
              Experience Culinary Excellence
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-200 max-w-xl mx-auto mt-4 mb-8">
              We craft unforgettable moments with locally sourced, seasonal
              ingredients.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                <Link href="/menu">View Our Menu</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
                <Link href="/events">Book an Event</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
