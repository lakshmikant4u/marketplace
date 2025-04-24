'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b p-4 shadow-sm">
      <Link
        href="/"
        className="text-2xl font-semibold hover:underline hover:text-blue-600 transition"
      >
        Dashboard
      </Link>
    </header>
  );
}
