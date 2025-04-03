'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/logo.png" 
            alt="Quiropedistas Tamanaco" 
            width={150} 
            height={150}
            priority
          />
          
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Inicio
          </Link>
          <Link href="/servicios" className={styles.navLink}>
            Servicios
          </Link>
          <Link href="/nosotros" className={styles.navLink}>
            Nosotros
          </Link>
          <Link href="/contacto" className={styles.navLink}>
            ¿Qué más ofrecemos?
          </Link>
          <Link href="https://wa.me/584122013118" className={styles.navLink}>
            Contacto
          </Link>
        </nav>

        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMobileMenu}
          aria-label="Menú"
        >
          ☰
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Inicio
          </Link>
          <Link href="/servicios" onClick={() => setMobileMenuOpen(false)}>
            Servicios
          </Link>
          <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)}>
            Nosotros
          </Link>
          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
            Información Adicional
          </Link>
          <Link href="https://wa.me/584122013118" onClick={() => setMobileMenuOpen(false)}>
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
}