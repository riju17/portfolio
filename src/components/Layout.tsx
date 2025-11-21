'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';
import CustomCursor from './CustomCursor';

type LayoutProps = {
  children: ReactNode;
};

/**
 * Layout wires the persistent header, footer, custom cursor
 * and page transition overlay around all routes.
 */
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <CustomCursor />
      <div className="relative flex min-h-screen flex-col">
        <Header currentPath={pathname} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <PageTransition pathname={pathname} />
    </>
  );
}
