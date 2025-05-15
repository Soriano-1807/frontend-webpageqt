import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Configuración de la fuente Outfit
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Quiropedistas Tamanaco - Especialistas en el cuidado de tus pies',
  description: 'Centro especializado en quiropedia, podología estética y tratamientos para el bienestar de tus pies en Caracas. Agenda tu cita hoy.',
  keywords: 'quiropedia, podología, cuidado de pies, Caracas, tratamientos podológicos, salud de pies, dr scholl caracas, dr scholl, dr scholl ccct, berkemann ccct, callos, verrugas, uñas encarnadas, onicocriptosis, hongos',
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  },
  alternates: { // Añadido - URL canónica
    canonical: "https://quiropedistastamanaco.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={outfit.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="google-site-verification" content="eu7Xxycw4hdZCeqDI2laklmufEtk4_hW17Qn4LisR4U" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}