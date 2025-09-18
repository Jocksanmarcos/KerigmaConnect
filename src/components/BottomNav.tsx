import { NavLink } from "react-router-dom";
import { Home, Users, CalendarDays, BookOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: Users },
  { href: "/eventos", label: "Eventos", icon: CalendarDays },
  { href: "/sermoes", label: "Sermões", icon: BookOpen },
  { href: "/contato", label: "Contato", icon: Mail },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === "/"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400 w-full h-full",
                isActive && "text-primary dark:text-primary-foreground"
              )
            }
          >
            <link.icon className="h-5 w-5" />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;