import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/global.sass';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Vylex Frontend',
  description: 'Teste tecnico para vylex',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
