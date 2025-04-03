import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer} id = "horarios">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
              <div className={styles.logoPlaceholder}>Quiropedistas Tamanaco, C.A.</div>
            </div>
            <p className={styles.description}>
              RIF: J00112485-3
            </p>
            <p className={styles.description}>
              Especialistas en quiropedia, servicios de manicura y estética, podología, tratamientos y productos para el bienestar de tus pies en Caracas.
            </p>
        
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/quiropedistastamanacooficial"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram className={styles.socialIcon} />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/584122013118"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <MessageCircle className={styles.socialIcon} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.title}>Enlaces rápidos</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/servicios">Nuestros Servicios</Link>
              </li>
              <li>
                <Link href="/nosotros">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Más cosas para ti</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Información de Contacto</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <p>C.C.C.T, Nivel PB, Chuao, Caracas</p>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <p>
                  <a href="tel:+584122013118">+58 412 201 3118</a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <p>
                  <a href="tel:+582129590448">+58 212 959 0448</a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <p>
                  <a href="tel:+582129592720">+58 212 959 2720</a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <p>
                  <a href="mailto:qtamanaco@gmail.com">qtamanaco@gmail.com</a>
                </p>
              </div>
              <div className={styles.contactItem} id = "horario">
                <Clock className={styles.contactIcon} />
                <div>
                  <p>Lunes a Sábado: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0472!2d-66.8568094!3d10.4848171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a598d3a45c259%3A0x28a74d9173c85e15!2sQuiropedistas%20Tamanaco!5e0!3m2!1ses!2sve!4v1648123456789!5m2!1ses!2sve"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Quiropedistas Tamanaco"
            className={styles.map}
          ></iframe>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Quiropedistas Tamanaco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

