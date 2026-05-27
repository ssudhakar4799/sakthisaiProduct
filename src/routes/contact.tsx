import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Silprovet — Get in Touch" },
      { name: "description", content: "Contact the Silprovet team. We're here to help with orders, distribution, and product questions." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container mx-auto px-4 py-16">
        <h1 className="mb-4 text-center text-4xl font-bold text-primary-deep">Contact Us</h1>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Have a question or ready to place a wholesale order? Send us a message.
        </p>
        <div className="grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-4 rounded-2xl bg-card p-8 shadow-sm"
          >
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-primary" />
                <h2 className="text-xl font-semibold">Message sent!</h2>
                <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div><Label htmlFor="cname">Name</Label><Input id="cname" required className="mt-1" /></div>
                <div><Label htmlFor="cemail">Email</Label><Input id="cemail" type="email" required className="mt-1" /></div>
                <div><Label htmlFor="cmsg">Message</Label><Textarea id="cmsg" rows={5} required className="mt-1" /></div>
                <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
              </>
            )}
          </form>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm">
              <Phone className="h-6 w-6 text-primary" />
              <div><div className="font-semibold">Phone</div><div className="text-sm text-muted-foreground">+225 07 06 96 45 63</div></div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm">
              <Mail className="h-6 w-6 text-primary" />
              <div><div className="font-semibold">Email</div><div className="text-sm text-muted-foreground">contact@silprovet.com</div></div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm">
              <MapPin className="h-6 w-6 text-primary" />
              <div><div className="font-semibold">Address</div><div className="text-sm text-muted-foreground">Abidjan, Côte d'Ivoire</div></div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
