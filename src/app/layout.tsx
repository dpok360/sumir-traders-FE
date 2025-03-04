'use client';

export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import './globals.css';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import Header from '@/components/layout/Header';
import { Provider } from 'react-redux';
import appStore from '@/redux/store/store';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});

// export const metadata: Metadata = {
//   title: 'Sumir Traders',
//   description: 'Sumir Traders is a Online Shopping platform for everyone.',
//   icons: {
//     icon: '/icons/logo.svg',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={appStore}>
      <html lang="en">
        <body
          className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
        >
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
}
