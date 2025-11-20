
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="font-headline text-5xl font-bold text-foreground mb-4">Book an Event</h1>
        <p className="font-body text-lg text-muted-foreground mb-8">This page is under construction.</p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
