import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, TrendingUp, Heart, Activity, Droplets, Leaf, Award, CheckCircle2 } from "lucide-react";
import bottle from "@/assets/silprovet-bottle.png";
import chickens from "@/assets/chickens.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Silprovet — Advanced Veterinary Wellness for Healthier Livestock" },
      { name: "description", content: "Silprovet veterinary supplement boosts livestock resistance, growth, egg productivity, liver health, and reduces mortality. Order today." },
      { property: "og:title", content: "Silprovet — Advanced Veterinary Wellness" },
      { property: "og:description", content: "Empowering healthier lives for your livestock with advanced veterinary nutrition." },
    ],
  }),
});

const benefits = [
  { icon: ShieldCheck, text: "Improve livestock resistance to stress" },
  { icon: TrendingUp, text: "Encourages fast growth and egg productivity" },
  { icon: Droplets, text: "Improves liver health" },
  { icon: Heart, text: "Reduce mortality" },
  { icon: Activity, text: "Reduce disease risks" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero — diagonal green panel with bottle */}
      <section className="relative overflow-hidden bg-background">
        <div className="relative grid min-h-[560px] items-center md:grid-cols-2">
          {/* Left text */}
          <div className="container relative z-10 mx-auto space-y-6 px-6 py-16 md:px-12 md:py-20">
            <h1 className="animate-fade-up text-5xl font-extrabold tracking-tight text-primary-deep md:text-7xl">
              Silprovet
            </h1>
            <p className="animate-fade-up text-xl font-semibold leading-snug text-foreground/80 md:text-2xl" style={{ animationDelay: "0.15s" }}>
              Advanced Veterinary Wellness.
              <br />
              Empowering Healthier Lives.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="lg" className="rounded-full px-8">
                <Link to="/checkout">Order Now</Link>
              </Button>
            </div>
          </div>

          {/* Right diagonal green panel */}
          <div className="relative h-[400px] md:absolute md:right-0 md:top-0 md:h-full md:w-[60%]">
            <div
              className="hero-clip absolute inset-0"
              style={{ background: "var(--gradient-deep)" }}
            />
            <div className="relative flex h-full items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl md:h-96 md:w-96" />
              <img
                src={bottle}
                alt="Silprovet veterinary supplement bottle"
                width={500}
                height={500}
                className="animate-float relative z-10 w-64 drop-shadow-2xl md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-3">
          {/* Bottle + CTA */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl" />
              <img
                src={bottle}
                alt="Silprovet bottle"
                loading="lazy"
                width={400}
                height={400}
                className="w-48 drop-shadow-xl md:w-56"
              />
            </div>
            <Button asChild variant="hero" size="lg" className="rounded-full px-10">
              <Link to="/checkout">Order Now</Link>
            </Button>
          </div>

          {/* Benefit list */}
          <ul className="space-y-4">
            {benefits.map(({ icon: Icon, text }, i) => (
              <li
                key={text}
                className="animate-fade-up hover-lift flex items-center gap-4 rounded-xl bg-card/60 p-3"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110" style={{ background: "var(--gradient-primary)" }}>
                  <Icon className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <span className="font-medium text-foreground">{text}</span>
              </li>
            ))}
          </ul>

          {/* Chickens image */}
          <div className="flex justify-center">
            <img
              src={chickens}
              alt="Healthy poultry — rooster and chicks"
              loading="lazy"
              width={400}
              height={400}
              className="w-64 drop-shadow-lg md:w-72"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-secondary/40 py-20">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2">
          <div className="animate-fade-up">
            <h2 className="mb-6 text-4xl font-extrabold text-primary-deep">About Us</h2>
            <p className="leading-relaxed text-muted-foreground">
              Our mission is to advance veterinary wellness and empower healthier lives. Silprovet is engineered through years of research into livestock health—supporting immunity, growth, and overall vitality across cattle, poultry, and small ruminants. We partner with farmers worldwide to deliver science-backed nutrition that improves outcomes on the farm and on the plate.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="animate-scale-in flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
                  <Leaf className="h-7 w-7 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-primary-deep">Mission &amp; Healthier</h3>
              </div>
              <div className="animate-scale-in flex flex-col items-center text-center" style={{ animationDelay: "0.1s" }}>
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
                  <Award className="h-7 w-7 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-primary-deep">Care Reliability</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Anti-inflammatory",
                "Impact on the feed antibiotic and medication",
                "Reduce mortality",
                "Improve global performance for your livestock",
              ].map((t, i) => (
                <li key={t} className="animate-fade-up flex items-center gap-3" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-primary-deep md:text-4xl">Ready to support healthier livestock?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Join thousands of farmers trusting Silprovet for science-backed veterinary wellness.</p>
        <Button asChild variant="hero" size="lg" className="mt-8 rounded-full px-10">
          <Link to="/checkout">Place Your Order</Link>
        </Button>
      </section>

      <SiteFooter />
    </div>
  );
}
