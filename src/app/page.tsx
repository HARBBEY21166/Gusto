import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="h-[200vh] pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground mb-4">
              Welcome to Gusto
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the finest dining, where every dish is a work of art.
            </p>
            <div className="flex justify-center gap-4">
               <Button size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                View Menu
              </Button>
              <div className="p-0.5 bg-secondary-gradient rounded-md">
                <Button variant="ghost" size="lg" className="bg-card text-gradient-secondary px-8 w-full h-full hover:bg-card/90">
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
