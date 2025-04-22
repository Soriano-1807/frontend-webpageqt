"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./Home.module.css"
import { MessageCircle, Clock, Star, Shield, Award, ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Quiropedistas Tamanaco - Especialistas en el cuidado de tus pies en Caracas",
  description:
    "Servicios profesionales de quiropedia, podología estética y tratamientos para el bienestar de tus pies en Caracas.",
  alternates: {
    canonical: "https://quiropedistastamanaco.com",
  },
}

export default function Home() {
  // Estado para el carrusel de testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Testimonios
  const testimonials = [
    {
      text: "Después de años sufriendo con las uñas en mis pies, encontré en Quiropedistas Tamanaco la solución definitiva. Su profesionalismo y atención personalizada han mejorado significativamente mi calidad de vida.",
      author: "María Rodríguez, cliente desde 2008",
    },
    {
      text: "Excelente servicio y atención. Los tratamientos para mis uñas encarnadas fueron muy efectivos y el dolor desapareció por completo. Recomiendo ampliamente este centro.",
      author: "Carlos Mendoza, cliente desde 2019",
    },
    {
      text: "La hidroterapia incluida en los tratamientos hace una gran diferencia. Mis pies nunca se habían sentido tan bien. El personal es muy amable y profesional.",
      author: "Ana Gómez, cliente desde 2021",
    },
    {
      text: "Visito Quiropedistas Tamanaco regularmente para el cuidado de mis pies diabéticos. Su atención especializada me ha ayudado a prevenir complicaciones y mantener mis pies saludables.",
      author: "José Martínez, cliente desde 1989",
    },
  ]

  // Función para avanzar al siguiente testimonio
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // Función para retroceder al testimonio anterior
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Cambio automático de testimonios cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Casos de antes y después para mostrar
  const beforeAfterCases = [
    {
      id: "onicogrifosis",
      title: "Onicogrifosis",
      description: "Tratamiento efectivo para uñas engrosadas y deformadas.",
      beforeImage: "/images/antes-despues/onicogrifosisAntes.JPG",
      afterImage: "/images/antes-despues/onicogrifosisDespues.jpg",
    },
    {
      id: "verrugas",
      title: "Verrugas",
      description: "Eliminación de verrugas plantares y ungueales.",
      beforeImage: "/images/antes-despues/verruga10.jpeg",
      afterImage: "/images/antes-despues/verruga8.jpeg",
    },
    {
      id: "callos",
      title: "Callosidades",
      description: "Tratamiento para eliminar callos y durezas, aliviando el dolor al caminar.",
      beforeImage: "/images/antes-despues/callossupreme2.jpg",
      afterImage: "/images/antes-despues/callossupremecurados1.jpg",
    },
    {
      id: "onicocriptosis",
      title: "Onicocriptosis",
      description: "Solución para la infección, inflamación y dolor de las uñas encarnadas.",
      beforeImage: "/images/antes-despues/onicoantes1jpg.jpg",
      afterImage: "/images/antes-despues/onicodespues2jpg.jpg",
    },
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Cuidamos tus Pies con Esmero y Dedicación desde 1975</h1>
              <p className={styles.heroSubtitle}>
                Especialistas en quiropedia, servicios de manicura y estética, podología, tratamientos y productos para el bienestar de tus pies en Caracas, ubicados en la PB del CCCT.
              </p>
              <div className={styles.heroOptions}>
                <div className={styles.optionCard}>
                  <Clock className={styles.optionIcon} />
                  <h3>Atención por Orden de Llegada</h3>
                  <p>Atendemos por orden de llegada en nuestro horario regular de atención.</p>
                  <Link href="/#horario" className="btn">
                    Ver Horarios
                  </Link>
                </div>
                <div className={styles.optionCard}>
                  <MessageCircle className={styles.optionIcon} />
                  <h3>Contáctanos</h3>
                  <p>¿Tienes preguntas? Escríbenos por WhatsApp o Instagram para más información.</p>
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
            <div className={styles.heroImage}>
              <Image
                src="/images/estoesloquequiero.jpg"
                alt="Servicio de Quiropedistas Tamanaco"
                width={500}
                height={500}
                className={styles.mainHeroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.beforeAfterSection}>
        <div className="container">
          <h2 className="section-title">Resultados que Hablan por Sí Mismos</h2>

          <div className={styles.beforeAfterGrid}>
            {beforeAfterCases.map((item) => (
              <div key={item.id} className={styles.beforeAfterCard}>
                <h3 className={styles.beforeAfterTitle}>{item.title}</h3>
                <p className={styles.beforeAfterDescription}>{item.description}</p>
                <div className={styles.beforeAfterImages}>
                  <div className={styles.imageContainer}>
                    <span className={styles.imageLabel}>Antes</span>
                    <Image
                      src={item.beforeImage || "/placeholder.svg"}
                      alt={`Antes - ${item.title}`}
                      width={300}
                      height={300}
                      className={styles.beforeAfterImg}
                    />
                  </div>
                  <div className={styles.imageContainer}>
                    <span className={styles.imageLabel}>Después</span>
                    <Image
                      src={item.afterImage || "/placeholder.svg"}
                      alt={`Después - ${item.title}`}
                      width={300}
                      height={300}
                      className={styles.beforeAfterImg}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.viewMoreContainer}>
            <Link href="/servicios" className="btn">
              Ver Todos Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Sección: Por qué elegirnos */}
      <section className={styles.whyChooseUsSection}>
        <div className="container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <p className={styles.sectionDescription}>
            En Quiropedistas Tamanaco nos distinguimos por ofrecer un servicio de excelencia, respaldado por años de
            experiencia y profesionales altamente calificados.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Award className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Experiencia y Profesionalismo</h3>
              <p className={styles.featureDescription}>
                Contamos con más de 50 años de experiencia en el cuidado de los pies, garantizando
                tratamientos efectivos y seguros.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Shield className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Máxima Higiene y Seguridad</h3>
              <p className={styles.featureDescription}>
                Utilizamos equipos esterilizados y seguimos estrictos protocolos de higiene para garantizar tu seguridad
                en cada visita.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Star className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Atención Personalizada</h3>
              <p className={styles.featureDescription}>
                Cada tratamiento se adapta a tus necesidades específicas, brindándote una experiencia cómoda y
                resultados óptimos.
              </p>
            </div>
          </div>

          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>"{testimonials[currentTestimonial].text}"</p>
              <p className={styles.testimonialAuthor}>- {testimonials[currentTestimonial].author}</p>

              <div className={styles.testimonialControls}>
                <button onClick={prevTestimonial} className={styles.testimonialButton} aria-label="Testimonio anterior">
                  <ChevronLeft className={styles.testimonialControlIcon} />
                </button>
                <div className={styles.testimonialDots}>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.testimonialDot} ${index === currentTestimonial ? styles.testimonialDotActive : ""}`}
                      onClick={() => setCurrentTestimonial(index)}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className={styles.testimonialButton}
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className={styles.testimonialControlIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>¿Listo para cuidar la salud de tus pies?</h2>
          <p className={styles.ctaText}>
          Visítanos en nuestro centro en el horario de atención. ¡Te atenderemos por orden de llegada!
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contacto" className={styles.ctaButtonSecondary}>
              Conoce nuestros productos
            </Link>
            <Link href="/servicios" className={styles.ctaButton}>
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}




