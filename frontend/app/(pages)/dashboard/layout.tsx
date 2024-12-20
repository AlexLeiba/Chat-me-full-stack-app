'use client';
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

    // const token = getCookie('chat-me-token');

    // console.log('🚀 ~ useEffect ~ token:=>>>>', token);

    // if (token) {
    //   // If token exists, redirect to dashboard
    //   router.push('/dashboard');
    // }
  }, [checkAuth]);
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <header>
          <Header type='dashboard' />
        </header>

        <Spacer size={14} />

        <main className='flex-grow'>{children}</main>

        <footer>
          <Footer type='dashboard' />
        </footer>
      </div>
    </>
  );
}
