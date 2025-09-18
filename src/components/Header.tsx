import { Link } from "react-router-dom";
import { Church } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/eventos", label: "Eventos" },
  { href: "/sermoes", label: "Sermões" },
  { href: "/contato", label: "Contato" },
];

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary dark:text-primary-foreground">
          <Church className="h-6 w-6" />
          <span>Kerigma</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;