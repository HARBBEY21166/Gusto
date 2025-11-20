import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '@/components/logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card text-foreground border-t">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="font-body text-sm text-muted-foreground max-w-xs">
              Culinary excellence in the heart of the city.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-foreground">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/menu" className="font-body text-muted-foreground hover:text-primary transition-colors">Menu</Link>
              <Link href="/about" className="font-body text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="font-body text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="flex flex-col gap-3 font-body text-muted-foreground">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                <span>123 Main Street, City</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={16} className="mt-1 shrink-0 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={16} className="mt-1 shrink-0 text-primary" />
                <span>hello@gustorestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-foreground">Stay Updated</h4>
            <p className="font-body text-sm text-muted-foreground">
              Get exclusive offers and news.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background focus-visible:ring-primary"
              />
              <Button type="submit" className="bg-primary-gradient text-white font-bold whitespace-nowrap">
                Sign Up
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gusto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
