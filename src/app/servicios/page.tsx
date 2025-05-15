import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Clock } from "lucide-react"
import styles from "./Servicios.module.css"

export const metadata: Metadata = {
  title: "Servicios de Quiropedia y Podología | Quiropedistas Tamanaco",
  description:
    "Conoce nuestros servicios especializados en quiropedia, podología estética y tratamientos para el bienestar de tus pies en Caracas.",
    alternates: {
      canonical: "https://quiropedistastamanaco.com/servicios",
    },
}

// Servicios de quiropedia y tratamientos
const quiropediaServices = [
  {
    id: "quiropedia-clinica",
    title: "Quiropedia Clínica",
    description:
      "Cuidado completo y tratamiento de los pies. Su objetivo es mantener los pies en óptimas condiciones, tratando los problemas comunes y otras alteraciones que pueden provocar dolor.",
    image: "/images/servicios/ServicioQuiropedia.jpg",
  },
  {
    id: "laser",
    title: "Láser",
    description:
      "Tratamiento con láser para la eliminación de onicomicosis (hongos en uñas) y verrugas. Ofreciendo resultados precisos y no invasivos.",
    image: "/images/servicios/TratamientoLaserHongos.jpg",
  },
  {
    id: "tratamiento-onicocriptosis",
    title: "Tratamiento de Onicocriptosis",
    description: "Tratamiento para uñas encarnadas, elimina el dolor, la infección y la inflamación.",
    image: "/images/servicios/TratamientoUñaEncarnada.jpg",
  },
  {
    id: "tratamiento-verruga",
    title: "Tratamiento de Verruga",
    description:
      "Eliminación efectiva de verrugas plantares y ungueales, utilizando técnicas especializadas.",
    image: "/images/servicios/TratamientoVerruga.jpg",
  },
  {
    id: "quiropedia-onicogrifosis",
    title: "Quiropedia Clínica con Eliminación de Onicogrifosis",
    description:
      "Tratamiento combinado que incluye quiropedia clínica y eliminación de uñas engrosadas y deformadas (onicogrifosis).",
    image: "/images/servicios/ServicioOnicogrifosis.jpg",
  },
  {
    id: "quiropedia-infrarrojos",
    title: "Quiropedia Clínica con Infrarrojos",
    description:
      "Combinación de quiropedia clínica con terapia de infrarrojos para mejorar la circulación y aliviar dolores musculares y articulares.",
    image: "/images/servicios/QuiropediaConInfrarrojos.jpg",
  },
  {
    id: "pediluvio",
    title: "Pediluvio",
    description:
      "Desintoxicación iónica. Elimina toxinas y desechos acumulados en el cuerpo a través de los pies.",
    image: "/images/servicios/pediluvio.jpg"
  },
]

// Servicios de manicura y estética
const manicuraServices = [
  {
    id: "manicura",
    title: "Manicura",
    description: "Cuidado completo para tus manos y uñas, incluyendo limado, eliminación de cutículas, hidratación y esmaltado.",
    image: "/images/servicios/manicura.JPG",
  },
  {
    id: "esmalte",
    title: "Aplicación de Esmalte en las Uñas",
    description: "Servicio de esmaltado para las uñas, logrando un acabado elegante y duradero.",
    image: "/images/servicios/esmaltenormal.jpg",
  },
  {
    id: "semipermanente",
    title: "Aplicación de Esmalte Semipermanente",
    description:
      "Esmaltado de larga duración para las uñas, resistente a golpes y rozaduras, con acabado brillante por semanas.",
    image: "/images/servicios/esmaltesemipermanente1.jpg",
  },
  {
    id: "pulitura-pies",
    title: "Pulitura de Uñas",
    description:
      "Tratamiento que alisa y da brillo a las uñas sin utilizar esmalte, ideal para un look natural y saludable.",
    image: "/images/servicios/pulitura.JPG",
  },
  {
    id: "retiro-semipermanente",
    title: "Retiro de Esmalte Semipermanente",
    description:
      "Eliminación profesional y segura del esmalte semipermanente, protegiendo la salud de las uñas naturales.",
    image: "/images/servicios/retiroesmalte.JPG",
  },
]

export default function ServiciosPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Nuestros Servicios</h1>
          <p className={styles.heroDescription}>
            En Quiropedistas Tamanaco ofrecemos una amplia gama de servicios profesionales para el cuidado y bienestar
            de tus pies. Atendemos por orden de llegada.
          </p>
          <div className={styles.heroOptions}>
            <div className={styles.optionCard}>
              <Clock className={styles.optionIcon} />
              <h3>Atención por Orden de Llegada</h3>
              <p>Atendemos por orden de llegada en nuestro horario regular de atención.</p>
              <Link href="/servicios#horario" className="btn">
                Ver Horarios
              </Link>
            </div>
            <div className={styles.optionCard}>
              <MessageCircle className={styles.optionIcon} />
              <h3>Contáctanos</h3>
              <p>¿Tienes preguntas sobre nuestros servicios? Escríbenos por WhatsApp.</p>
              <a
                href="https://wa.me/584122013118"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Hidroterapia */}
      <section className={styles.hydrotherapySection}>
        <div className="container">
          <div className={styles.hydrotherapyContent}>
            <div className={styles.hydrotherapyText}>
              <h2 className={styles.sectionTitle}>Hidroterapia Incluida En La Mayoría De Nuestros Servicios</h2>
              <p>
                En Quiropedistas Tamanaco, la mayoría de nuestros servicios de quiropedia incluyen hidroterapia, un tratamiento
                que utiliza las propiedades terapéuticas del agua para mejorar la circulación, reducir la inflamación y
                aliviar el dolor en los pies.
              </p>
              <p>
                La hidroterapia es ideal para personas con problemas circulatorios, artritis, dolor crónico en los pies
                o simplemente para quienes buscan una experiencia relajante y rejuvenecedora como parte de su
                tratamiento podológico.
              </p>
            </div>
            <div className={styles.hydrotherapyImage}>
              <Image
                src="/images/servicios/hidroterapia.jpg"
                alt="Hidroterapia para pies"
                width={600}
                height={400}
                className={styles.hydrotherapyImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios de Quiropedia y Tratamientos */}
      <section className={styles.servicesList}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Servicios de Quiropedia y Tratamientos</h2>

          <div className={styles.servicesGrid}>
            {quiropediaServices.map((service) => (
              <div key={service.id} id={service.id} className={styles.serviceCard}>
                <div className={styles.serviceImageContainer}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios de Manicura y Estética */}
      <section className={styles.servicesList}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Servicios de Manicura y Estética</h2>

          <div className={styles.servicesGrid}>
            {manicuraServices.map((service) => (
              <div key={service.id} id={service.id} className={styles.serviceCard}>
                <div className={styles.serviceImageContainer}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>¿Listo para cuidar la salud de tus pies?</h2>
          <p className={styles.ctaDescription}>
            Visítanos en nuestro centro durante nuestro horario de atención. ¡Te atenderemos por orden de llegada!
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contacto" className={styles.ctaButtonSecondary}>
              Descubre que más cosas ofrecemos
            </Link>
            <a href="https://wa.me/584122013118" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

