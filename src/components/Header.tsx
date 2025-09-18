import { useState } from "react";
import { Link } from "react-router-dom";
import { Church, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/eventos", label: "Eventos" },
  { href: "/sermoes", label: "Sermões" },
  { href: "/contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary dark:text-primary-foreground">
          <Church className="h-6 w-6" />
          <span>Kerigma</span>
        </Link>

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

        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;