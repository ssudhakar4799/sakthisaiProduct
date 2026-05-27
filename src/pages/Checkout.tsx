import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CheckCircle2 } from "lucide-react";

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState("standard");
  const [confirmed, setConfirmed] = useState(false);

  const unitPrice = 45.99;
  const shippingCost = shipping === "express" ? 12 : shipping === "free" ? 0 : 5;
  const subtotal = unitPrice * quantity;
  const total = subtotal + shippingCost;

  if (confirmed) {
    const orderId = `SPV-${Math.floor(100000 + Math.random() * 900000)}`;
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
          <div className="animate-scale-in relative mb-6 flex h-24 w-24 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
            <span className="absolute inset-0 rounded-full bg-primary/40" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
            <CheckCircle2 className="relative h-14 w-14 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <h1 className="animate-fade-up text-4xl font-extrabold text-primary-deep">Order Confirmed!</h1>
          <p className="animate-fade-up mt-3 max-w-md text-muted-foreground" style={{ animationDelay: "0.1s" }}>
            Thank you! Your order <span className="font-semibold text-primary">#{orderId}</span> has been received.
          </p>

          <div className="animate-fade-up mt-8 w-full max-w-md rounded-2xl border border-border bg-card p-6 text-left shadow-sm" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Items</span><span className="font-medium">Silprovet × {quantity}</span></div>
            <div className="mt-2 flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span className="font-medium">${shippingCost.toFixed(2)}</span></div>
            <div className="my-3 border-t border-border" />
            <div className="flex justify-between text-base font-bold"><span>Total Paid</span><span className="text-primary">${total.toFixed(2)}</span></div>
          </div>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Button onClick={() => setConfirmed(false)} variant="hero" size="lg" className="rounded-full px-8">Place Another Order</Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-primary-deep">Cart and Checkout</h1>
        <form onSubmit={(e) => { e.preventDefault(); setConfirmed(true); }} className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-semibold">Quantity</h2>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" onClick={() => setQuantity(n)} className={`h-10 w-10 rounded-lg border font-medium transition-colors ${quantity === n ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"}`}>{n}</button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-semibold">Shipping</h2>
              <RadioGroup value={shipping} onValueChange={setShipping} className="space-y-2">
                <Label className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-3 hover:border-primary">
                  <span className="flex items-center gap-2"><RadioGroupItem value="standard" /> Standard (5-7 days)</span><span className="font-medium">$5.00</span>
                </Label>
                <Label className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-3 hover:border-primary">
                  <span className="flex items-center gap-2"><RadioGroupItem value="express" /> Express (1-2 days)</span><span className="font-medium">$12.00</span>
                </Label>
                <Label className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-3 hover:border-primary">
                  <span className="flex items-center gap-2"><RadioGroupItem value="free" /> Free pickup</span><span className="font-medium">$0.00</span>
                </Label>
              </RadioGroup>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-semibold">Your Information</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div><Label htmlFor="name">Full Name</Label><Input id="name" required className="mt-1" /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required className="mt-1" /></div>
                <div className="md:col-span-2"><Label htmlFor="address">Address</Label><Input id="address" required className="mt-1" /></div>
                <div><Label htmlFor="phone">Phone Number</Label><Input id="phone" type="tel" required className="mt-1" /></div>
                <div><Label htmlFor="country">Country</Label><Input id="country" required className="mt-1" defaultValue="Ivory Coast" /></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-2xl bg-card p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-primary-deep">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Silprovet × {quantity}</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>${shippingCost.toFixed(2)}</span></div>
                <div className="my-3 border-t border-border" />
                <div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-primary">${total.toFixed(2)}</span></div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-6 w-full">Place Order</Button>
            </div>
          </div>
        </form>
      </div>
      <SiteFooter />
    </div>
  );
}
