"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";
import { CalendarCheck2, List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SidebarDashboard({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <div className={clsx("flex flex-1 flex-col transition-all duration-300", {
        "md:ml-20": isCollapsed,
        "md:ml-64": !isCollapsed
      })}>
        <header className="md:hidden flex items-center justify-between border-b border-slate-900 px-2 md:px-6 h-14 z-10 sticky top-0 bg-slate-900">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                >
                  <List className="w-5 h-5"/>
                </Button>
              </SheetTrigger>
              
              <h1 className="text-base md:text-lg font-semibold">
                Dashboard
              </h1>
            </div>
            <SheetContent
              side="left"
              className="sm:max-w-xs text-white"
            >
              <SheetTitle>Geser</SheetTitle>
              <SheetDescription>Menu administrativo</SheetDescription>

              <nav className="grid gap-2 text-base pt-5">
                <SidebarLink 
                  href="/dashboard"
                  icon={<CalendarCheck2 className="w-6 h-6" />}
                  label="Dashboard"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
              </nav>
          </SheetContent>
          </Sheet>
        </header>
      </div>
      
      <main className="flex-1 py-4 px-2 md:p-6">
        {children}
      </main>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  isCollapsed: boolean
}

function SidebarLink({ href, icon, label, pathname, isCollapsed }: SidebarLinkProps) {
  return (
    <Link
      href={href}
    >
      <div>
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link>
  );
}