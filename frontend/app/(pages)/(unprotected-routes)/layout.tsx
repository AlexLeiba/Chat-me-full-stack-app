// 'use client';
import { Header } from '@/components/Header/Header';
import { Spacer } from '@/components/UI/spacer/spacer';
import { Footer } from '@/components/Footer/Footer';
import useAuthStore from '@/store/useAuthStore';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <header>
          <Header type='auth' />
        </header>

        <Spacer size={14} />

        <main className='flex-grow'>{children}</main>

        <footer>
          <Footer type='auth' />
        </footer>
      </div>
    </>
  );
}
