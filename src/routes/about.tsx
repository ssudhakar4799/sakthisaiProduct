import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, TrendingUp, ThumbsUp } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Silprovet — Our Mission for Veterinary Wellness" },
      { name: "description", content: "Learn about Silprovet's mission to advance veterinary wellness with science-backed nutrition for livestock worldwide." },
    ],
  }),
});

const values = [
  { icon: ShieldCheck, title: "Company Mission", text: "Our mission is to advance veterinary wellness through science-backed nutrition that empowers healthier livestock and stronger farms." },
  { icon: TrendingUp, title: "Product We Care", text: "Silprovet is engineered for reliability, traceability, and consistent results across cattle, poultry, and small ruminants." },
  { icon: ThumbsUp, title: "Company Reliable", text: "Our team upholds rigorous quality standards and conducts ongoing research to keep our product trusted and effective." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container mx-auto px-4 py-16">
        <h1 className="mb-4 text-center text-4xl font-bold text-primary-deep">About Us</h1>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          Silprovet was founded on the belief that healthy livestock build healthy communities. Our team blends veterinary science, nutrition, and farmer-first design to deliver products that work in the real world.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
