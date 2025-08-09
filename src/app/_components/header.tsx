import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight text-center lg:text-center mb-20 mt-8">
      <Link href="/" className="hover:underline">
        the social artifice collective
      </Link>
      .
    </h2>
  );
};

export default Header;
