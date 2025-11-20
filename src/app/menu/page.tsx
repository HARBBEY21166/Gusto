import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
      </main>
      <Footer />
    </div>
  );
}
