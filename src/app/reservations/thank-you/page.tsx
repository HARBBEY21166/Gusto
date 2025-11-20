
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ReservationThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      <h1 className="font-headline text-5xl font-bold text-gradient-primary mb-4">
        Thank You For Your Reservation!
      </h1>
      <p className="font-body text-lg text-muted-foreground max-w-md mx-auto mb-8">
        A confirmation email has been sent to your inbox. We are looking forward to serving you.
      </p>
      <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
        <Link href="/">Back to Homepage</Link>
      </Button>
    </main>
  );
}
