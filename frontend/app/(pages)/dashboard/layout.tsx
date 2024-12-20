'use client';
import { Header } from '@/components/Header/Header';
import { Spacer } from '@/components/UI/spacer/spacer';
import { Footer } from '@/components/Footer/Footer';
import useAuthStore from '@/store/useAuthStore';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { checkAuth } = useAuthStore();

  function getCookie(name: string) {
    const cookieArr = document.cookie.split(';');

    // Loop through the cookies to find the one you're looking for
    for (let i = 0; i < cookieArr.length; i++) {
      const cookie = cookieArr[i].trim();
      // If cookie name matches the one we're looking for
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1); // Return the cookie value
      }
    }
    return null; // Return null if cookie is not found
  }

  useEffect(() => {
    checkAuth();

    const token = getCookie('chat-me-token');

    console.log('🚀 ~ useEffect ~ token:=>>>>', token);

    if (token) {
      // If token exists, redirect to dashboard
      router.push('/dashboard');
    }
  }, [checkAuth, router]);
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
