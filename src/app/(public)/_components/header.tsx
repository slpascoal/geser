import Link from "next/link";

export function Header() {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-[999]"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Geser
        </Link>

        <nav>
          <a href="#">Profissionais</a>
        </nav>
      </div>
    </header>
  );
}