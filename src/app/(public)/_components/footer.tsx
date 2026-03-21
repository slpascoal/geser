export function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Geser. Todos os direitos reservados.
      </div>
    </footer>
  );
}