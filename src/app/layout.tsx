import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import "../../public/fonts/fonts.css"

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
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}