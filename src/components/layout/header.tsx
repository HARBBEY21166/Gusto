
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, User, LogOut, LayoutDashboard } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Logo from '@/components/logo';
import { Separator } from '../ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { isLoggedIn, getCurrentUser, removeAuthData, type User as ApiUser } from '@/services/api';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const NavLink = ({ href, label, onClick }: { href: string; label: string, onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'font-body text-base font-medium transition-colors',
        isActive
          ? 'text-gradient-primary font-bold'
          : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {label}
    </Link>
  );
};

const UserNav = () => {
    const [user, setUser] = useState<ApiUser | null>(null);
    const [authChecked, setAuthChecked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn()) {
            setUser(getCurrentUser());
        }
        setAuthChecked(true);
    }, []);

    const handleLogout = () => {
        removeAuthData();
        setUser(null);
        router.push('/');
        // Optionally, show a toast notification for successful logout
    };

    if (!authChecked) {
        return null; // or a loading skeleton
    }

    if (user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                            {/* Potential for user avatar image */}
                            <AvatarFallback>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
                            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Account">
                    <User className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end" forceMount>
                <DropdownMenuItem asChild>
                    <Link href="/login">
                        Log In
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/login">
                        Sign Up
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-card/95 backdrop-blur-sm shadow-subtle' : 'bg-card border-b'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <UserNav />
            <Button asChild className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-card">
                <SheetHeader className="mb-8">
                   <SheetTitle>
                    <span className="sr-only">Mobile Menu</span>
                  </SheetTitle>
                  <Logo />
                </SheetHeader>
                <div className="flex flex-col items-start gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
                  ))}
                </div>
                <Separator className="my-8" />
                <div className="flex flex-col gap-4">
                   <Button asChild variant="ghost" className="justify-start text-base">
                     <Link href="/login">
                       <User className="mr-2 h-5 w-5" />
                       Log In / Sign Up
                     </Link>
                   </Button>
                    <Button asChild className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                      <Link href="/reservations">Reserve a Table</Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
