import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Users, Award, Clock, Star, Shield, Heart, MessageCircle} from "lucide-react"
import styles from "./Nosotros.module.css"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Quiropedistas Tamanaco",
  description:
    "Conoce a nuestro equipo de especialistas en quiropedia y podología en Caracas. Profesionales con amplia experiencia en el cuidado de tus pies.",
    alternates: {
      canonical: "https://quiropedistastamanaco.com/nosotros",
    },
}

// Definimos los miembros del equipo
const teamMembers = [
  {
    name: "Alirio Calderón",
    role: "Quiropedista",
    image: "/images/nosotros/calderon2.jpg",
  },
  {
    name: "Francisco González",
    role: "Quiropedista",
    image: "/images/nosotros/gonzalez2.jpg",
  },
  {
    name: "Rafael Meza",
    role: "Quiropedista",
    image: "/images/nosotros/meza3.JPG",
  },
  {
    name: "Luis Mora",
    role: "Quiropedista",
    image: "/images/nosotros/mora1.jpg",
  },
  {
    name: "Pedro Pérez",
    role: "Quiropedista",
    image: "/images/nosotros/perez2.jpg",
  },
  {
    name: "Alfredo  Quintero",
    role: "Quiropedista",
    image: "/images/nosotros/quintero2.jpg",
  },
  {
    name: "Luis Ramírez",
    role: "Quiropedista",
    image: "/images/nosotros/ramirez2.jpg",
  },
  {
    name: "Marvin Salcedo",
    role: "Quiropedista",
    image: "/images/nosotros/salcedo1.jpg",
  },
  {
    name: "Carmen Barrios",
    role: "Coordinadora de Operaciones",
    image: "/images/nosotros/carmen.jpg",
  },
  {
    name: "María Elena Vargas",
    role: "Manicurista",
    image: "/images/nosotros/mariaelena1.jpg",
  },
]

// Valores de la empresa
const companyValues = [
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Profesionalismo",
    description:
      "Contamos con personal altamente calificado y en constante actualización para ofrecer los mejores tratamientos.",
  },
  {
    icon: <Heart className="w-10 h-10 text-blue-600" />,
    title: "Compromiso",
    description:
      "Nos dedicamos a mejorar la salud y bienestar de nuestros pacientes, brindando soluciones efectivas a sus problemas podológicos.",
  },
  {
    icon: <Star className="w-10 h-10 text-blue-600" />,
    title: "Excelencia",
    description:
      "Buscamos la perfección en cada tratamiento, utilizando técnicas avanzadas y productos de primera calidad.",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Sobre Nosotros</h1>
          <p className={styles.heroDescription}>
            Conoce a nuestro equipo de profesionales dedicados al cuidado y bienestar de tus pies.
          </p>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className="container">
          <div className={styles.historyContent}>
            <div className={styles.historyText}>
              <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
              <p className={styles.paragraph}>
                Quiropedistas Tamanaco nació con la misión de ofrecer servicios profesionales de quiropedia y podología
                en Caracas, combinando técnicas tradicionales con tecnologías modernas para el cuidado integral de los
                pies.
              </p>
              <p className={styles.paragraph}>
                Con más de 50 años de experiencia en el sector, nos hemos consolidado como el centro de referencia en
                tratamientos podológicos, atendiendo a miles de pacientes con diversas afecciones en los pies.
              </p>
              <p className={styles.paragraph}>
                Nuestro compromiso es brindar un servicio de calidad, personalizado y con los más altos estándares de
                higiene y profesionalismo.
              </p>
            </div>
            <div className={styles.historyImage}>
              <Image
                src="/images/nosotros/local3.jpeg"
                alt="Centro Quiropedistas Tamanaco"
                width={800}
                height={600}
                className={styles.imageRounded}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            {companyValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIconContainer}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whyChooseUsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIconContainer}>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className={styles.reasonTitle}>Equipo Profesional</h3>
              <p className={styles.reasonDescription}>
                Contamos con quiropedistas certificados y personal especializado con amplia experiencia en el cuidado de
                los pies.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIconContainer}>
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className={styles.reasonTitle}>Calidad Garantizada</h3>
              <p className={styles.reasonDescription}>
                Utilizamos productos de primera calidad y seguimos estrictos protocolos de higiene y esterilización.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIconContainer}>
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className={styles.reasonTitle}>Atención Personalizada</h3>
              <p className={styles.reasonDescription}>
                Cada tratamiento se adapta a las necesidades específicas de cada paciente, garantizando resultados
                óptimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageContainer}>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={300}
                    height={300}
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
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
              Descubre más comodidades que tenemos para ti
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

