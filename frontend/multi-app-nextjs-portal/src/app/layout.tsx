import './globals.css';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unified Property Portal',
  description: 'Multi-application portal for property estimation and market analysis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
