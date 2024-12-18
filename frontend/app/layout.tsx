'use client';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/Header/Header';
import { Spacer } from '@/components/UI/spacer/spacer';
import { Footer } from '@/components/Footer/Footer';
import useGlobalTeamStore from '@/store/useThemeStore';
import useAuthStore from '@/store/useAuthStore';
import { useEffect } from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { globalTheme } = useGlobalTeamStore();
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <html lang='en' data-theme={globalTheme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-base-300`}
      >
        <Toaster />
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
      </body>
    </html>
  );
}
