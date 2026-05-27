import { Phone, Instagram, Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary-deep text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 md:flex-row md:gap-12">
        <a href="tel:+2250706964563" className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4" /> +225 07 06 96 45 63
        </a>
        <a href="#" className="flex items-center gap-2 text-sm">
          <Instagram className="h-4 w-4" /> Instagram
        </a>
        <a href="#" className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4" /> www.silprovet.com
        </a>
      </div>
    </footer>
  );
}
