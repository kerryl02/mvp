import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Rbnb
        </Link>
        <nav>
          <Link href="/" className="mr-4">
            Accueil
          </Link>
          <Link href="/listings" className="mr-4">
            Annonces
          </Link>
          <Link href="/api/auth/login" className="mr-4">
            Connexion
          </Link>
          <Link href="/api/auth/register">
            Inscription
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

