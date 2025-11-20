
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const menuCategories = [
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'main-courses', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];

const MenuNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('appetizers');
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    menuCategories.forEach(category => {
      sectionRefs.current[category.id] = document.getElementById(category.id);
    });

    const handleScroll = () => {
      const nav = navRef.current;
      if (nav) {
        // Use getBoundingClientRect().top to know when the top of the nav hits the top of the viewport
        const navTop = nav.getBoundingClientRect().top;
        // The header height is 5rem (80px), or h-20 in tailwind.
        // We make it sticky when the nav is about to scroll past the header.
        if (navTop <= 80) { 
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
      
      let currentSection = '';
      const headerOffset = 150; // Offset for the sticky nav height
      for (const category of menuCategories) {
        const section = sectionRefs.current[category.id];
        if (section && section.offsetTop - headerOffset <= window.scrollY) {
          currentSection = category.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = sectionRefs.current[sectionId];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for sticky header
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={navRef} className={cn('bg-card transition-shadow duration-200 sticky z-40 top-20',
      isSticky 
        ? 'shadow-md translate-y-0' 
        : '-translate-y-full shadow-none'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16 gap-8">
          {menuCategories.map(category => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => handleLinkClick(e, category.id)}
              className={cn(
                'font-body text-base font-medium transition-all duration-200 relative pb-1',
                activeSection === category.id
                  ? 'text-gradient-primary font-bold'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {category.label}
              <span className={cn(
                'absolute bottom-0 left-0 w-full h-0.5 bg-primary-gradient transition-transform duration-300 ease-out',
                activeSection === category.id ? 'scale-x-100' : 'scale-x-0'
              )} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
