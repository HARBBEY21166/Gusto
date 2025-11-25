
'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, UtensilsCrossed, PartyPopper, Star, History, User, Salad, Pencil } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function DashboardPage() {
  // Placeholder for dynamic user data
  const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '(555) 555-1234',
  };

  const preferences = [
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'gluten-free', label: 'Gluten-Free' },
    { id: 'nut-allergy', label: 'Nut Allergy' },
  ];

  // Placeholder for upcoming reservations data.
  // Set to null to test the empty state.
  const upcomingReservation = {
    date: 'Fri, Dec 25',
    time: '7:30 PM',
    partySize: 4,
    status: 'Confirmed' as 'Confirmed' | 'Pending',
  };
  // const upcomingReservation = null;

  // Placeholder for reservation history data.
  const reservationHistory = [
    {
        id: 'res1',
        date: 'Sat, Nov 18, 2023',
        partySize: 2,
        orderTotal: '$124.50',
        rating: 5,
    },
    {
        id: 'res2',
        date: 'Fri, Oct 20, 2023',
        partySize: 4,
        orderTotal: '$210.00',
        rating: 4,
    },
    {
        id: 'res3',
        date: 'Wed, Sep 12, 2023',
        partySize: 1,
        orderTotal: '$65.00',
        rating: 5,
    }
  ];
  // const reservationHistory: any[] = [];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFilled = i < rating;
        return (
          <Star
            key={i}
            className={`w-4 h-4 ${isFilled ? 'text-transparent' : 'text-muted-foreground/50'}`}
            fill={isFilled ? 'url(#star-gradient)' : 'none'}
            style={isFilled ? {} : { fillOpacity: 0.5 }}
          />
        );
      })}
       <svg width="0" height="0">
            <defs>
                <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#f093fb'}} />
                    <stop offset="100%" style={{stopColor: '#f5576c'}} />
                </linearGradient>
            </defs>
        </svg>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Section 1: Dashboard Hero & Welcome */}
        <section
          className="pt-32 pb-16" // pt-32 to account for header
          style={{ background: 'linear-gradient(180deg, hsl(var(--muted)) 0%, hsl(var(--background)) 100%)' }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                  Welcome back, {user.firstName}!
                </h1>
                <p className="font-body text-lg text-muted-foreground mt-2">
                  Manage your reservations, view your history, and update your preferences.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                <Link href="/reservations">Reserve a New Table</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Upcoming Reservations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="font-headline text-4xl font-bold text-foreground">Upcoming Reservations</h2>
              <p className="font-body text-lg text-muted-foreground mt-2">Your next visit to Gusto.</p>
            </div>

            {upcomingReservation ? (
              <Card className="overflow-hidden shadow-subtle border-l-4 border-secondary-gradient-from">
                 <style jsx>{`
                    .border-secondary-gradient-from {
                        border-image: linear-gradient(to top, #f093fb, #f5576c) 1;
                    }
                 `}</style>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 items-center gap-6">
                    {/* Date & Time */}
                    <div className="md:col-span-1">
                      <p className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                        {upcomingReservation.date}
                      </p>
                       <p className="font-body text-xl text-muted-foreground">
                        at {upcomingReservation.time}
                      </p>
                    </div>

                    {/* Details & Status */}
                    <div className="md:col-span-1 flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-muted-foreground" />
                        <span className="font-body text-base text-foreground">Party of {upcomingReservation.partySize}</span>
                      </div>
                       <div className="flex items-center gap-2">
                         <Badge variant={upcomingReservation.status === 'Confirmed' ? 'default' : 'secondary'} className={upcomingReservation.status === 'Confirmed' ? 'bg-green-600' : 'bg-amber-500'}>
                           {upcomingReservation.status}
                         </Badge>
                       </div>
                    </div>

                    {/* Actions */}
                    <div className="md:col-span-1 flex md:justify-end gap-6">
                       <Button variant="link" className="p-0 h-auto text-gradient-secondary font-bold">Modify</Button>
                       <Button variant="link" className="p-0 h-auto text-destructive">Cancel</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
               <Card className="flex flex-col items-center justify-center text-center p-12 border-dashed shadow-none">
                 <UtensilsCrossed className="w-16 h-16 text-muted-foreground mb-4" />
                 <h3 className="font-headline text-2xl font-bold text-foreground">No Upcoming Reservations</h3>
                 <p className="font-body text-muted-foreground mt-2 mb-6">Ready for your next experience? Book a table now.</p>
                 <Button asChild className="bg-primary-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                    <Link href="/reservations">
                        <PartyPopper className="mr-2 h-4 w-4"/>
                        Make a Reservation
                    </Link>
                 </Button>
               </Card>
            )}
          </div>
        </section>

        {/* Section 3: Reservation History */}
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="font-headline text-4xl font-bold text-foreground">Dining History</h2>
                    <p className="font-body text-lg text-muted-foreground mt-2">A look back at your memorable moments with us.</p>
                </div>

                {reservationHistory.length > 0 ? (
                    <Card className="shadow-subtle border-none">
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                <TableRow>
                                    <TableHead className="font-body text-sm font-bold">Date</TableHead>
                                    <TableHead className="font-body text-sm font-bold">Party Size</TableHead>
                                    <TableHead className="font-body text-sm font-bold">Order Total</TableHead>
                                    <TableHead className="font-body text-sm font-bold text-right">Rating</TableHead>
                                </TableRow>
                                </TableHeader>
                                <TableBody>
                                {reservationHistory.map((res) => (
                                    <TableRow key={res.id} className="cursor-pointer hover:bg-muted/50">
                                        <TableCell className="font-medium text-foreground">{res.date}</TableCell>
                                        <TableCell className="text-muted-foreground">{res.partySize}</TableCell>
                                        <TableCell className="text-muted-foreground">{res.orderTotal}</TableCell>
                                        <TableCell className="text-right">
                                            <StarRating rating={res.rating} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="flex flex-col items-center justify-center text-center p-12 border-dashed shadow-none">
                        <History className="w-16 h-16 text-muted-foreground mb-4" />
                        <h3 className="font-headline text-2xl font-bold text-foreground">No Dining History</h3>
                        <p className="font-body text-muted-foreground mt-2">Your past reservations will appear here. Time to make some memories!</p>
                    </Card>
                )}
            </div>
        </section>

        {/* Section 4: Profile & Preferences */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="shadow-subtle border-none">
              <CardHeader>
                <CardTitle className="font-headline text-4xl font-bold text-foreground">Profile & Preferences</CardTitle>
                <CardDescription className="font-body text-lg text-muted-foreground pt-2">Manage your personal information and dining preferences.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column: Profile */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-headline text-2xl font-bold text-foreground flex items-center gap-2"><User />Profile Details</h3>
                    <div className="space-y-4 font-body text-base">
                      <p><strong className="font-medium text-muted-foreground w-24 inline-block">First Name:</strong> {user.firstName}</p>
                      <p><strong className="font-medium text-muted-foreground w-24 inline-block">Last Name:</strong> {user.lastName}</p>
                      <p><strong className="font-medium text-muted-foreground w-24 inline-block">Email:</strong> {user.email}</p>
                      <p><strong className="font-medium text-muted-foreground w-24 inline-block">Phone:</strong> {user.phone}</p>
                    </div>
                    <Button variant="outline" className="self-start">
                      <Pencil className="mr-2 h-4 w-4"/>
                      Edit Profile
                    </Button>
                  </div>
                  {/* Right Column: Dietary Preferences */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-headline text-2xl font-bold text-foreground flex items-center gap-2"><Salad />Dietary Preferences</h3>
                    <div className="space-y-4">
                      {preferences.map((pref) => (
                        <div key={pref.id} className="flex items-center space-x-2">
                          <Checkbox id={pref.id} />
                          <Label htmlFor={pref.id} className="font-body text-base">
                            {pref.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      This helps us serve you better on your next visit.
                    </p>
                    <Button variant="outline" className="self-start">Save Preferences</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
