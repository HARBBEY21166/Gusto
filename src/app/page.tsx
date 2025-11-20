import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-dish');
  const featuredDishes = PlaceHolderImages.filter(p => p.id.startsWith('dish-'));
  const storyImage = PlaceHolderImages.find(p => p.id === 'our-story-image');

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
              {featuredDishes.map((dish) => (
                <Card key={dish.id} className="bg-card overflow-hidden shadow-subtle border-none rounded-lg">
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
      </main>
    </div>
  );
}
