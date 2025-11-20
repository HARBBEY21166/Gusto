

'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { ImagePlaceholder, PlaceHolderImages } from '@/lib/placeholder-images';
import MenuNav from '@/components/menu-nav';
import { Leaf, Flame, WheatOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: ('v' | 'gf' | 'spicy')[];
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
  image: ImagePlaceholder | undefined;
};

const menuData: Omit<MenuCategory, 'image'>[] = [
  {
    id: 'appetizers',
    title: 'Appetizers',
    items: [
      {
        name: 'Bruschetta al Pomodoro',
        description: 'Toasted ciabatta with fresh tomatoes, garlic, basil, and extra virgin olive oil.',
        price: '$14',
        tags: ['v'],
      },
      {
        name: 'Calamari Fritti',
        description: 'Lightly fried calamari served with a spicy marinara sauce.',
        price: '$18',
        tags: ['spicy'],
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, ripe tomatoes, and basil, drizzled with balsamic glaze.',
        price: '$16',
        tags: ['v', 'gf'],
      },
    ],
  },
  {
    id: 'main-courses',
    title: 'Main Courses',
    items: [
      { name: 'Spaghetti Carbonara', description: 'Classic carbonara with pancetta, egg yolk, pecorino cheese, and black pepper.', price: '$24' },
      { name: 'Filetto di Manzo', description: 'Grilled beef tenderloin with a red wine reduction, served with asparagus.', price: '$42', tags: ['gf'] },
      { name: 'Risotto ai Funghi', description: 'Creamy risotto with wild mushrooms, parmesan, and truffle oil.', price: '$28', tags: ['v'] },
      { name: 'Lasagna alla Bolognese', description: 'Layers of fresh pasta, rich meat sauce, béchamel, and Parmigiano-Reggiano.', price: '$26'},
      { name: 'Pollo alla Cacciatora', description: 'Braised chicken with onions, herbs, tomatoes, and red wine.', price: '$32'},
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Tiramisu', description: 'Ladyfingers dipped in coffee, layered with mascarpone cream, and dusted with cocoa.', price: '$12' },
      { name: 'Panna Cotta', description: 'Silky vanilla bean panna cotta with a mixed berry coulis.', price: '$11', tags: ['gf'] },
      { name: 'Cannoli Siciliani', description: 'Crispy pastry shells filled with sweet ricotta cream and chocolate chips.', price: '$10' },
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { name: 'Espresso', description: 'A single shot of rich, aromatic espresso.', price: '$4' },
      { name: 'Negroni', description: 'A classic cocktail with gin, Campari, and sweet vermouth.', price: '$16' },
      { name: 'San Pellegrino', description: 'Sparkling natural mineral water.', price: '$6' },
    ]
  },
];

const TagIcon = ({ tag }: { tag: 'v' | 'gf' | 'spicy' }) => {
  const iconMap = {
    v: { icon: Leaf, label: 'Vegetarian' },
    gf: { icon: WheatOff, label: 'Gluten-Free' },
    spicy: { icon: Flame, label: 'Spicy' },
  };
  const { icon: Icon, label } = iconMap[tag];
  return <Icon className="w-4 h-4 text-muted-foreground" title={label} />;
};


const MenuCategorySection = ({ id, title, items, image }: MenuCategory) => (
  <section id={id} className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold text-foreground">{title}</h2>
        <div className="mt-2 w-24 h-1 bg-primary-gradient mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className={cn("flex flex-col gap-8", {
          'lg:order-last': id === 'desserts',
        })}>
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h3 className="font-headline text-2xl font-bold text-foreground">{item.name}</h3>
                  <div className="flex gap-2">
                    {item.tags?.map(tag => <TagIcon key={tag} tag={tag} />)}
                  </div>
                </div>
                <p className="font-headline text-2xl font-bold text-gradient-secondary ml-4">{item.price}</p>
              </div>
              <p className="text-muted-foreground mt-2 font-body text-base max-w-md">{item.description}</p>
            </div>
          ))}
        </div>
        <div className={cn("relative aspect-[4/3] rounded-lg overflow-hidden shadow-subtle order-first", {
          'lg:order-first': id === 'desserts',
          'lg:order-last': id !== 'desserts',
        })}>
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
      </div>
    </div>
  </section>
);


export default function MenuPage() {
  const menuHeroImage = PlaceHolderImages.find(p => p.id === 'menu-hero');

  const fullMenuData: MenuCategory[] = menuData.map(category => ({
    ...category,
    image: PlaceHolderImages.find(p => p.id === `menu-${category.id}`),
  }));


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

        <MenuNav />

        {fullMenuData.map(category => (
            <MenuCategorySection 
              key={category.id}
              id={category.id}
              title={category.title}
              items={category.items}
              image={category.image}
            />
        ))}

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl font-bold text-foreground">
              Hungry Yet?
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-2 mb-8">
              Your table is waiting.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                <Link href="/reservations">Reserve a Table</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary">
                <Link href="#">View Full Menu (PDF)</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
