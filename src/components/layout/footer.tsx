import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '@/components/logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Logo className="text-white" />
            <p className="font-body text-sm text-[#999] max-w-xs">
              Culinary excellence in the heart of the city.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-[#999] hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-[#999] hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-white">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="font-body text-[#999] hover:text-white transition-colors">Home</Link>
              <Link href="/menu" className="font-body text-[#999] hover:text-white transition-colors">Menu</Link>
              <Link href="/about" className="font-body text-[#999] hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="font-body text-[#999] hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-white">Contact</h4>
            <ul className="flex flex-col gap-3 font-body text-[#999]">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>123 Main Street, City</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={16} className="mt-1 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={16} className="mt-1 shrink-0" />
                <span>hello@gustorestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-white">Stay Updated</h4>
            <p className="font-body text-sm text-[#999]">
              Get exclusive offers and news.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white text-foreground rounded-md border-0 focus-visible:ring-primary"
              />
              <Button type="submit" className="bg-primary-gradient text-white font-bold whitespace-nowrap">
                Sign Up
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 mt-8 text-center">
          <p className="font-body text-sm text-[#666]">
            © {new Date().getFullYear()} Gusto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;