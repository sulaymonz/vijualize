import Link from 'next/link';
import Logo from './Logo';
import Person4Icon from '@mui/icons-material/Person4';

const Navbar = () => {
  return (
    <header className="w-full z-10">
      <div className="container mx-auto">
        <nav className="flex min-h-[64px] items-center justify-between py-1 lg:min-h-[90px] lg:py-4 font-mono">
          <Logo />

          <ul className="hidden md:flex">
            <li className="mr-4 lg:mr-8">
              <Link href="/">Generate</Link>
            </li>
            <li className="mr-4 lg:mr-8">
              <Link href="/">Explore</Link>
            </li>
            <li className="mr-4 lg:mr-8">
              <Link href="/">About</Link>
            </li>
            <li className="mr-4 lg:mr-8">
              <Link href="/colorlab">Color_Lab</Link>
            </li>
          </ul>

          <ul className="flex items-end justify-end">
            <li className="ml-4 lg:ml-8">
              <Link
                href="/"
                className="bg-black text-white text-sm px-2 rounded-sm"
              >
                sign_up
              </Link>
            </li>
            <li className="ml-4 lg:ml-8">
              <Link href="/">Pro</Link>
            </li>
            <li className="ml-4 lg:ml-8">
              <Link href="/">
                <Person4Icon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
