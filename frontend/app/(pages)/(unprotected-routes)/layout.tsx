'use client';
import '../../globals.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/Header/Header';
import { Spacer } from '@/components/UI/spacer/spacer';
import { Footer } from '@/components/Footer/Footer';
import useGlobalTeamStore from '@/store/useThemeStore';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { globalTheme } = useGlobalTeamStore();

  return (
    <html lang='en' data-theme={globalTheme}>
      <body className={` antialiased  bg-base-300`}>
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
