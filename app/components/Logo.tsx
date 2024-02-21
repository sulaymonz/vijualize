import Link from 'next/link';

const Logo = ({ onClick }) => {
  return (
    <div>
      <Link href="/" onClick={onClick}>
        <img className="w-32" src="/images/logo.svg" />
      </Link>
    </div>
  );
};

export default Logo;
