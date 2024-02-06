import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <Link href="/About">About</Link> <Link href="/">Home</Link>
    </nav>
  );
};
