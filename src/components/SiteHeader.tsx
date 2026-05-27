import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export function SiteHeader() {
  const navCls = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`;
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <Leaf className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-primary">Silprovet</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/about" className={navCls}>About Us</NavLink>
          <NavLink to="/" end className={navCls}>Silprovet</NavLink>
          <NavLink to="/contact" className={navCls}>Contact Us</NavLink>
        </nav>
        <Button asChild variant="hero" size="sm">
          <Link to="/checkout">Order Now</Link>
        </Button>
      </div>
    </header>
  );
}
