'use client';
import localFont from 'next/font/local';
import '../../globals.css';
import { Spacer } from '@/components/UI/spacer/spacer';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import useGlobalThemeStore from '@/store/useThemeStore';

const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { globalTheme } = useGlobalThemeStore();
  return (
    <html data-theme={globalTheme} lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
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
      </body>
    </html>
  );
}
