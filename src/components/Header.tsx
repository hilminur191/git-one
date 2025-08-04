import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8">
      <h1 className="text-2xl font-bold text-blue-600">Hilmi Portofolio</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Beranda
        </Link>
        <Link href="/about" className="text-blue-500 hover:underline">
          Tentang
        </Link>
      </nav>
    </header>
  );
}
