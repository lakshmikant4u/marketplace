'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { href: '/estimator', label: 'Estimator' },
  { href: '/market', label: 'Market Analysis' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Property Portal</h2>
      <nav className="space-y-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'block p-2 rounded hover:bg-gray-200',
              pathname.startsWith(href) && 'bg-gray-300 font-semibold'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
