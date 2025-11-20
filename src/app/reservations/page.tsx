
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar as CalendarIcon, Clock, Users, Phone, Pencil, CalendarX } from 'lucide-react';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const reservationSchema = z.object({
  date: z.date({
    required_error: 'A date is required.',
  }),
  time: z.string({
    required_error: 'A time is required.',
  }),
  partySize: z.string({
    required_error: 'Party size is required.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  requests: z.string().optional(),
});

export default function ReservationsPage() {
  const { toast } = useToast();
  const router = useRouter();
  const reservationsHeroImage = PlaceHolderImages.find(p => p.id === 'reservations-hero');

  const form = useForm<z.infer<typeof reservationSchema>>({
    resolver: zodResolver(reservationSchema),
  });

  function onSubmit(data: z.infer<typeof reservationSchema>) {
    console.log(data);
    toast({
      title: 'Reservation Submitted!',
      description: 'We have received your request and will confirm shortly.',
    });
    form.reset({ phone: '', requests: '' });
    router.push('/reservations/thank-you');
  }

  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = 17 + Math.floor(i / 2);
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  const infoItems = [
    {
      icon: Clock,
      title: "Running Late?",
      text: "Please call us. We will hold your table for 15 minutes."
    },
    {
      icon: CalendarX,
      title: "Change of Plans?",
      text: "We kindly request 24 hours notice for cancellations."
    },
    {
      icon: Users,
      title: "Large Party?",
      text: "For groups larger than 8, please call us directly."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[40vh] flex items-center justify-center text-white">
          {reservationsHeroImage && (
            <Image
              src={reservationsHeroImage.imageUrl}
              alt={reservationsHeroImage.description}
              fill
              className="object-cover"
              data-ai-hint={reservationsHeroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="font-headline text-5xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
            >
              Reserve Your Table
            </h1>
            <p className="font-body text-lg text-gray-200 max-w-xl mx-auto mt-4">
              Secure your spot for an unforgettable evening.
            </p>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-card shadow-subtle border-none rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="text-center pt-8">
                <CardTitle className="font-headline text-4xl font-bold text-foreground">Book a Table</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="font-body mb-2">Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={'outline'}
                                    className={cn(
                                      'w-full justify-start text-left font-normal h-12 text-base',
                                      !field.value && 'text-muted-foreground'
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {field.value ? (
                                      format(field.value, 'PPP')
                                    ) : (
                                      <span>Select a date...</span>
                                    )}
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body">Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 text-base">
                                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                  <SelectValue placeholder="Select a time..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map(slot => (
                                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="partySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body">Party Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 text-base">
                                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                                  <SelectValue placeholder="Select party size..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[...Array(4)].map((_, i) => (
                                  <SelectItem key={i + 1} value={`${i + 1}`}>
                                    {i + 1} person{i > 0 ? 's' : ''}
                                  </SelectItem>
                                ))}
                                <SelectItem value="5+">5+ people</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body">Phone Number</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                  <Input className="h-12 text-base pl-10" placeholder="(555) 123-4567" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                    </div>
                     <FormField
                        control={form.control}
                        name="requests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body">Special Requests (Optional)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Pencil className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                                <Textarea
                                  placeholder="Dietary restrictions, allergies, or occasion..."
                                  className="resize-none pl-10 pt-3"
                                  rows={4}
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    <Button type="submit" size="lg" className="w-full bg-primary-gradient text-primary-foreground font-bold text-lg h-14 hover:opacity-90 transition-opacity">
                      Complete Reservation
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {infoItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-headline text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="font-body text-muted-foreground mt-2 max-w-xs">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
