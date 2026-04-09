/**
 * Datos de FAQ — módulo plano (no cliente) para que pueda ser importado
 * tanto desde el componente FAQ (client) como desde JSON-LD (server).
 * Importarlo directamente desde el módulo "use client" rompe el build.
 */
export const faqItems = [
  {
    question: "¿Cuánto cuesta una página web en Monterrey?",
    answer:
      "En ALFA3 manejamos distintos planes según las necesidades de tu negocio: Landing Page desde $4,900 MXN, One Page desde $7,900 MXN, Sitio Empresarial desde $15,900 MXN y E-commerce desde $6,900 MXN/mes. Todos son precios únicos (excepto e-commerce) sin costos ocultos. El precio final depende de funcionalidades específicas — te damos una cotización exacta en menos de 24 horas.",
  },
  {
    question: "¿En cuánto tiempo desarrollan un sitio web?",
    answer:
      "Una Landing Page se entrega en 5 a 7 días hábiles. Un sitio One Page entre 7 y 14 días. Un sitio Empresarial entre 2 y 4 semanas dependiendo del contenido y las revisiones. Trabajamos con entregas por etapas para que puedas ver el avance desde el principio.",
  },
  {
    question: "¿Atienden a empresas en toda Nuevo León?",
    answer:
      "Sí. Aunque tenemos presencia en Monterrey, atendemos a empresas de todo el área metropolitana: San Pedro Garza García, Guadalupe, Apodaca, San Nicolás de los Garza, Santa Catarina, García, Escobedo, Juárez y municipios aledaños. También trabajamos con clientes fuera de Nuevo León en todo México.",
  },
  {
    question: "¿Usan WordPress o hacen desarrollo a medida?",
    answer:
      "Hacemos desarrollo a medida con tecnologías modernas como Next.js y React — no usamos plantillas ni WordPress genérico. Esto nos permite entregas más rápidas (LCP < 2 segundos), mejor SEO técnico y sitios que escalan con tu negocio. El resultado es una web que convierte, no solo una que se ve bien.",
  },
  {
    question: "¿Mi sitio va a aparecer en Google?",
    answer:
      "Cada sitio que desarrollamos incluye optimización SEO técnica básica: estructura de URLs, metadatos, Open Graph, velocidad de carga y etiquetas de encabezado. Para negocios en Monterrey y Nuevo León, también configuramos el perfil de Google Business, el sitemap y las señales de SEO local. Los paquetes con SEO avanzado incluyen estrategia de keywords, linkbuilding y reportes mensuales.",
  },
  {
    question: "¿Qué incluye el mantenimiento mensual?",
    answer:
      "El mantenimiento incluye actualizaciones de seguridad, backups automáticos, monitoreo de disponibilidad (uptime), correcciones de errores y hasta 2 horas de cambios de contenido al mes. También incluye reportes mensuales de rendimiento y Core Web Vitals. El costo varía según el plan — te lo cotizamos junto con el proyecto.",
  },
  {
    question: "¿Tienen experiencia con tiendas en línea (e-commerce)?",
    answer:
      "Sí. Desarrollamos e-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos (MercadoPago, Stripe, PayPal), gestión de inventario y panel de administración. El plan de e-commerce es mensual e incluye soporte continuo para que siempre puedas vender sin interrupciones.",
  },
  {
    question: "¿Cómo es el proceso de trabajo y pago?",
    answer:
      "El proceso tiene 4 etapas: (1) Llamada de diagnóstico gratuita para entender tu negocio; (2) Propuesta con alcance, entregables y cronograma; (3) Desarrollo con entregas por etapas y tus revisiones; (4) Lanzamiento y capacitación. El pago se divide en 50% al inicio y 50% al lanzar. Para e-commerce es mensual.",
  },
  {
    question: "¿Pueden rediseñar mi sitio web actual?",
    answer:
      "Sí, hacemos rediseños modernizando tu sitio sin perder la identidad de marca ni el SEO acumulado. Auditamos tu web actual, identificamos oportunidades de mejora en velocidad, diseño y conversión, y construimos la nueva versión en paralelo para que no pierdas tráfico durante el proceso.",
  },
  {
    question: "¿Incluye dominio y hosting?",
    answer:
      "El dominio (.com, .com.mx, .mx) y el hosting van por separado del costo de desarrollo. Te asesoramos para elegir el proveedor más adecuado según tu proyecto y presupuesto, y lo configuramos todo nosotros. En el plan de e-commerce, el hosting ya está incluido en la mensualidad.",
  },
] as const
