import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Heart, Users, Accessibility, ShoppingBag, MessageCircle, PawPrint } from "lucide-react"
import styles from "./MasInfo.module.css"

export const metadata: Metadata = {
  title: "Información Adicional | Quiropedistas Tamanaco",
  description:
    "Información importante sobre nuestros servicios, ubicación, políticas de atención y especialidades en Quiropedistas Tamanaco.",
    alternates: {
      canonical: "https://quiropedistastamanaco.com/contacto",
    },
}

export default function InformacionAdicionalPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Información Adicional</h1>
          <p className={styles.heroDescription}>
            Todo lo que necesitas saber sobre nuestros servicios y políticas de atención
          </p>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className="container">

          {/* Productos */}
          <div className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>Productos Especializados</h2>
            <p className={styles.sectionDescription}>
              Complementa tus tratamientos con nuestra amplia gama de productos especializados para el cuidado de tus
              pies.
            </p>

            {/* Reorganizar los elementos para que la imagen aparezca a la derecha */}
            <div className={styles.productsLayout}>
              <div className={styles.productsContent}>
                <div className={styles.productsList}>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Cremas hidratantes especializadas con Úrea</span>
                  </div>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Desodorantes para pies de Dr. Scholl's</span>
                  </div>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Spray y crema para hongos en uñas y pies de Lotrimin</span>
                  </div>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Plantillas antimpacto de Comforsil</span>
                  </div>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Taloneras para fascitis plantar de Comforsil</span>
                  </div>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Separadores de dedos</span>
                  </div>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Correctores y Protectores de Juanetes</span>
                  </div>
                  <div className={styles.productItem}>
                    <ShoppingBag className={styles.productItemIcon} />
                    <span>Removedor de verrugas de Dr Scholl's</span>
                  </div>
                </div>
                <p className={styles.productsNote}>
                  Y tenemos muchos muchos productos más para cuidar la salud de tus pies!
                </p>
              </div>

              <div className={styles.productsImageContainer}>
                <Image
                  src="/images/masinfo/ProductosQuiropedistasTamanaco.jpg"
                  alt="Productos para el cuidado de los pies"
                  width={400}
                  height={400}
                  className={styles.productsImage}
                />
              </div>
            </div>
          </div>
          
          {/* Pet Friendly */}
          <div className={styles.infoCard}>
            <div className={styles.infoCardContent}>
              <div className={styles.infoCardTextContent}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <PawPrint className={styles.icon} />
                  </div>
                  <h2 className={styles.infoCardTitle}>Somos Pet Friendly</h2>
                </div>
                <p className={styles.infoCardDescription}>
                  En Quiropedistas Tamanaco amamos a las mascotas tanto como tú. Puedes traer a tu compañero peludo
                  durante tu visita, le daremos una cariñosa y calurosa bienvenida!
                </p>
                <div className={styles.infoCardDetails}>
                  <div className={styles.infoCardDetail}>
                    <span className={styles.infoCardDetailLabel}>Nota:</span>
                    <span className={styles.infoCardDetailValue}>
                    Contamos con un área especial para recibir a tu compañero peludo con una fuente de agua fresca. ¡Tu mascota es tan bienvenida como tú en nuestras instalaciones!
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCardImageWrapper}>
                <Image
                  src="/images/masinfo/QuiropedistasTamanacoPetFriendly.jpg"
                  alt="Somos Pet Friendly"
                  width={400}
                  height={400}
                  className={styles.infoCardImage}
                />
              </div>
            </div>
          </div>

          {/* Atención especializada */}
          <div className={styles.specialtiesSection}>
            <h2 className={styles.sectionTitle}>Atención Especializada</h2>
            <p className={styles.sectionDescription}>
              En Quiropedistas Tamanaco nos enorgullece ofrecer atención especializada para todo tipo de pacientes,
              adaptándonos a sus necesidades específicas.
            </p>

            <div className={styles.specialtiesGrid}>
              {/* Adultos mayores */}
              <div className={styles.specialtyCard}>
                <div className={styles.specialtyIconContainer}>
                  <Heart className={styles.specialtyIcon} />
                </div>
                <div className={styles.specialtyContent}>
                  <h3 className={styles.specialtyTitle}>Expertos en Adultos Mayores</h3>
                  <p className={styles.specialtyDescription}>
                    Contamos con amplia experiencia en el cuidado de los pies de personas de la tercera edad,
                    considerando sus necesidades específicas y brindando un trato preferencial.
                  </p>
                </div>
              </div>

              {/* Pie diabético */}
              <div className={styles.specialtyCard}>
                <div className={styles.specialtyIconContainer}>
                  <svg
                    className={styles.specialtyIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 9H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.specialtyContent}>
                  <h3 className={styles.specialtyTitle}>Atención a Pie Diabético</h3>
                  <p className={styles.specialtyDescription}>
                    Ofrecemos tratamientos especializados para el cuidado del pie diabético, ayudando a prevenir
                    complicaciones y mantener la salud de los pies en pacientes con diabetes.
                  </p>
                </div>
              </div>

              {/* Personas con discapacidad */}
              <div className={styles.specialtyCard}>
                <div className={styles.specialtyIconContainer}>
                  <Accessibility className={styles.specialtyIcon} />
                </div>
                <div className={styles.specialtyContent}>
                  <h3 className={styles.specialtyTitle}>Accesibilidad Total</h3>
                  <p className={styles.specialtyDescription}>
                    Nuestras instalaciones están completamente adaptadas para atender a personas con discapacidades o
                    movilidad reducida, garantizando un acceso cómodo y una atención sin barreras.
                  </p>
                </div>
              </div>

              {/* Atención a niños */}
              <div className={styles.specialtyCard}>
                <div className={styles.specialtyIconContainer}>
                  <Users className={styles.specialtyIcon} />
                </div>
                <div className={styles.specialtyContent}>
                  <h3 className={styles.specialtyTitle}>Atención a niños</h3>
                  <p className={styles.specialtyDescription}>
                    Por supuesto que atendemos a los más pequeños de la casa también! Ofrecemos tratemientos adaptados a ellos y nos aseguramos de que se sientan en un ambiente amigable y seguro. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Atención por orden de llegada */}
          <div className={styles.infoCard}>
            <div className={styles.infoCardContent}>
              <div className={styles.infoCardTextContent}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <Clock className={styles.icon} />
                  </div>
                  <h2 className={styles.infoCardTitle}>Atención por Orden de Llegada</h2>
                </div>
                <p className={styles.infoCardDescription}>
                  En Quiropedistas Tamanaco no manejamos sistema de citas. Todos nuestros servicios se prestan
                  exclusivamente por orden de llegada, lo que te permite visitarnos cuando mejor te convenga dentro de
                  nuestro horario de atención.
                </p>
                <div className={styles.infoCardDetails}>
                  <div className={styles.infoCardDetail}>
                    <span className={styles.infoCardDetailLabel}>Horario:</span>
                    <span className={styles.infoCardDetailValue}>Lunes a Sábado: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCardImageWrapper}>
                <Image
                  src="/images/masinfo/ClientesQuiropedistasTamanaco.jpg"
                  alt="Atención por orden de llegada"
                  width={400}
                  height={400}
                  className={styles.infoCardImage}
                />
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className={styles.infoCard}>
            <div className={styles.infoCardContent}>
              <div className={styles.infoCardTextContent}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <MapPin className={styles.icon} />
                  </div>
                  <h2 className={styles.infoCardTitle}>Ubicación</h2>
                </div>
                <p className={styles.infoCardDescription}>
                  Estamos ubicados en la Planta Baja del Centro Comercial Tamanaco (CCCT), uno de los centros
                  comerciales más emblemáticos y accesibles de Caracas.
                </p>
                <div className={styles.infoCardDetails}>
                  <div className={styles.infoCardDetail}>
                    <span className={styles.infoCardDetailLabel}>Dirección:</span>
                    <span className={styles.infoCardDetailValue}>
                      Centro Comercial Tamanaco, Planta Baja, Chuao, Caracas
                    </span>
                  </div>
                  <div className={styles.infoCardDetail}>
                    <span className={styles.infoCardDetailLabel}>Referencia:</span>
                    <span className={styles.infoCardDetailValue}>
                      Al lado del Banco Provincial
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0472!2d-66.8568094!3d10.4848171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a598d3a45c259%3A0x28a74d9173c85e15!2sQuiropedistas%20Tamanaco!5e0!3m2!1ses!2sve!4v1648123456789!5m2!1ses!2sve"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Quiropedistas Tamanaco"
                  className={styles.map}
                ></iframe>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>¿Listo para cuidar la salud de tus pies?</h2>
            <p className={styles.ctaDescription}>
              Visítanos en nuestro centro durante nuestro horario de atención. ¡Te atenderemos por orden de llegada!
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/584122013118"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonWhatsapp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

