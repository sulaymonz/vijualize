import Link from 'next/link';

const Logo = ({ onClick }) => {
  return (
    <div>
      <Link href="/" onClick={onClick}>
        <img className="w-36" src="/images/logo-old.svg" />
      </Link>
    </div>
  );
};

export default Logo;
