import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Quiropedistas Tamanaco - Especialistas en el cuidado de tus pies',
  description: 'Centro especializado en quiropedia, podología estética y tratamientos para el bienestar de tus pies en Caracas. Agenda tu cita hoy.',
  keywords: 'quiropedia, podología, cuidado de pies, Caracas, tratamientos podológicos, salud de pies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}