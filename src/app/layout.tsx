import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'What wine to drink with your meal?',
  description: 'Ask the wine expert what wine to drink with your meal.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
