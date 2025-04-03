import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Configuración optimizada de fuentes
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Quiropedistas Tamanaco - Especialistas en el cuidado de tus pies',
  description: 'Centro especializado en quiropedia, podología estética y tratamientos para el bienestar de tus pies en Caracas. Agenda tu cita hoy.',
  keywords: 'quiropedia, podología, cuidado de pies, Caracas, tratamientos podológicos, salud de pies, quiropedistas, quiropedia en caracas, podologos en caracas, productos para pies en caracas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}