import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Revenue-Focused Web Builds',
  description: 'Websites that load fast, rank fast, and convert.',
  openGraph: { title: 'Revenue-Focused Web Builds', description: 'Websites that load fast, rank fast, and convert.' },
  twitter: { card: 'summary_large_image', title: 'Revenue-Focused Web Builds', description: 'Websites that load fast, rank fast, and convert.' }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">Infinite Web</a>
        <nav className="hidden gap-6 md:flex">
          <a href="#work" className="hover:opacity-80">Work</a>
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#results" className="hover:opacity-80">Results</a>
          <a href="#contact" className="hover:opacity-80">Start</a>
        </nav>
        <a href="#contact" className="btn btn-primary">Start a project</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-10 text-sm md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Infinite Web — Revenue-focused sites.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">X</a>
        </div>
      </div>
    </footer>
  );
}
