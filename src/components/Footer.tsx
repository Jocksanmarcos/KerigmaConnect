const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Comunidade Batista Nacional Kerigma. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;