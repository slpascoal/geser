"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const session = null;

  const navItems = [
    {
      href: "#profissionais",
      label: "Profissionais"
    }
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          className="bg-transparent hover:bg-transparent shadow-none text-white"
          variant="ghost"
          onClick={() => setIsOpen(false)}
        >
          <Link 
            href={item.href}
            className="text-base"
          >
            {item.label}
          </Link>
        </Button>
      ))}

      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 text-base"
        >
          Painel da clínica
        </Link>
      ) : (
        <Button className="text-base">
          <LogIn />
          Login
        </Button>
      )}
    </>
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 border-b border-slate-800 bg-slate-950">
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          href="/"
          className="text-2xl font-bold"
        >
          Ge<span className="text-primary">ser</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet 
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <SheetTrigger
            asChild
            className="md:hidden"
          >
            <Button
              variant="ghost"
              className="text-primary"
              size="icon"
            >
              <Menu className="w-6 h-6"/>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="p-8 w-60 sm:w-75 z-9999 border-l border-slate-800"
          >
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="pb-4 border-b border-slate-800">
              Veja nossos links
            </SheetDescription>

            <nav className="flex flex-col space-y-4 mt-2">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}