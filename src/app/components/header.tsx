import Link from "next/link";

type HeaderProps = {
  title: string;
  showBack?: boolean;
};

function Header({
  title,
  showBack = false,
}: HeaderProps) {

  return (
    <header className="mb-6 flex items-center gap-4 py-4 border-b-2">
      {showBack && (
        <Link
          href="/"
          className="rounded-md border font-bold border-gray-200 px-3 py-1 ml-5 text-sm text-gray-700 hover:bg-gray-50"
        >
          Back
        </Link>
      )}{" "}
      <h1 className="text-2xl text-center mx-auto font-bold sm:text-3xl">
        {title}
      </h1>
    </header>
  );
}

export default Header