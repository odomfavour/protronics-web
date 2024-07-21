import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Protronics-inc',
  metadataBase: new URL('https://protronics-inc.com'),
  description: 'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
  openGraph: {
    title: "Protronics Inc.",
    type: "website",
    url: 'https://protronics-inc.com',
    images: ["/opengraph-image.png"],
    siteName: 'Protronics Inc.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <div className="">{children}</div>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId='G-XG8CEXN52X' />
    </html>
  );
}
