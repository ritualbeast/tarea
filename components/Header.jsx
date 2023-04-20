import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/Login" passHref>
            mi sitio
          </Link>
        </div>
        <div>
          <Link href="/about">
            acerca de
          </Link>
          <Link href="/contact">
            contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
