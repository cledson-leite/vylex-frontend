import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './styles/global.sass';

const roboto = Roboto({
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
