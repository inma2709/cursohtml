
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tema2() {
  // Función para manejar clicks en enlaces del índice
  const handleIndexClick = (event, targetId) => {
    event.preventDefault();
    
    // Buscar el elemento objetivo
    const target = document.getElementById(targetId);
    if (target) {
      // Buscar el details padre más cercano y abrirlo
      const detailsParent = target.closest('details');
      if (detailsParent) {
        detailsParent.open = true;
      }
      
      // Hacer scroll al elemento después de un pequeño delay
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // useEffect para el título de la página
  useEffect(() => {
    document.title = "UF1841 · Tema 2 · Prototipado web";
  }, []);
  return (
    <div className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Tema 2 · Prototipado (sin código)</p>
        <h1>De idea a maqueta: Google Sites → Canva → Figma</h1>
        <p className="doc-lead">
          Antes de escribir HTML, vamos a hacer lo que hace un equipo profesional: <strong>probar ideas</strong>,
          decidir estructura, jerarquía y estilo… y validar que “se entiende” sin pelearte con el código.
          Empezamos con herramientas fáciles y visuales y terminamos en <strong>Figma</strong>, que es el estándar
          para diseño UI.
        </p>

        <div className="callout tip">
          <strong>Objetivo del Tema 2:</strong> que sepas crear una primera página atractiva, entender la lógica de
          “secciones”, priorizar contenido y preparar una maqueta lista para pasar a HTML/CSS.
        </div>

        <div className="callout">
          <strong>Norma del curso:</strong> prototipar no es “perder el tiempo”. Es ahorrar frustración después.
        </div>
      </header>

      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li><a href="#que-es" onClick={(e) => handleIndexClick(e, 'que-es')}>Qué es prototipar (y por qué importa)</a></li>
          <li><a href="#sites" onClick={(e) => handleIndexClick(e, 'sites')}>Paso 1: tu primera web en Google Sites (simple y resultona)</a></li>
          <li><a href="#canva" onClick={(e) => handleIndexClick(e, 'canva')}>Paso 2: diseño rápido en Canva (visual y presentable)</a></li>
          <li><a href="#figma" onClick={(e) => handleIndexClick(e, 'figma')}>Paso 3: Figma (prototipo profesional)</a></li>
          <li><a href="#video" onClick={(e) => handleIndexClick(e, 'video')}>Vídeo tutorial recomendado (Figma)</a></li>
          <li><a href="#recursos" onClick={(e) => handleIndexClick(e, 'recursos')}>Recursos y páginas para ampliar</a></li>
          <li><a href="#practica" onClick={(e) => handleIndexClick(e, 'practica')}>Práctica guiada</a></li>
          <li><a href="#cierre" onClick={(e) => handleIndexClick(e, 'cierre')}>Checklist final</a></li>
        </ol>
      </nav>

      {/* ===================================================== */}
      <section id="que-es" className="doc-section">
        <h2>1) Qué es prototipar (y por qué importa)</h2>

        <details open className="dd">
          <summary>1.1 · Prototipo = una “simulación” para decidir antes de construir</summary>
          <div className="dd-body">
            <p>
              Un prototipo es una versión visual de tu web para comprobar si:
              <strong> se entiende</strong>, <strong>guía la mirada</strong> y <strong>tiene un objetivo claro</strong>.
              No buscamos “perfecto”: buscamos <strong>claridad</strong>.
            </p>
            <figure className="media">
  <img
    src="./img/prototipado.png"
    alt="Proceso de prototipado web: Google Sites, Canva y Figma como herramientas para crear maquetas"
    loading="lazy"
    decoding="async"
  />
  <figcaption className="muted">
    Del concepto a la maqueta: diferentes herramientas de prototipado web
    (Google Sites, Canva y Figma) para transformar ideas en diseños visuales.
  </figcaption>
</figure>


            <div className="callout">
              <strong>Idea clave:</strong> si no puedes explicar tu estructura en 1 minuto, el diseño está verde. Puedes empezar por un papel y lápiz, pero aquí usamos herramientas digitales.
            </div>

            <details className="dd dd-nested">
              <summary>Qué decidimos en prototipado</summary>
              <div className="dd-body">
                <ul>
                  <li><strong>Jerarquía:</strong> qué se ve primero, segundo y tercero.</li>
                  <li><strong>Secciones:</strong> hero, beneficios, pruebas, servicios, FAQ, contacto…</li>
                  <li><strong>Acción principal (CTA):</strong> qué quieres que haga el usuario.</li>
                  <li><strong>Estilo:</strong> paleta, tipografía, espaciado y consistencia.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="sites" className="doc-section">
        <h2>2) Paso 1: tu primera web en Google Sites</h2>

        <details open className="dd">
          <summary>2.1 · Por qué empezamos aquí</summary>
          <div className="dd-body">
            <p>
              Google Sites te permite construir una web sencilla en minutos. Es ideal para entrenar:
              <strong> estructura</strong>, <strong>orden</strong> y <strong>claridad</strong> sin distraerte con detalles.
            </p>

            <div className="callout tip">
              <strong>Objetivo:</strong> aprender a “pensar por secciones”, que es exactamente como trabajaremos en HTML.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2.2 · Mini-guía: tu primera página atractiva </summary>
          <div className="dd-body">
            <ol>
              <li><strong>Crea un sitio</strong> y elige un tema base</li>
              <p>Puedes hacer un curriculum digital, o una presentación de proyectos o un blog de algún tema que te interese.</p>
              <li>
                En la <strong>cabecera</strong>, define:
                <ul>
                  <li>Un título corto (qué haces).</li>
                  <li>Un subtítulo (a quién ayudas / qué problema resuelves).</li>
                  <li>Un botón CTA (llamada a la acción): “Reservar”, “Ver catálogo”, “Contactar”, “Apuntarme”…</li>
                </ul>
              </li>
              <p>CTA (Call To Action) significa llamada a la acción. En diseño web es el elemento que indica de forma clara al usuario qué debe hacer a continuación: continuar, registrarse, descargar, comprar o avanzar al siguiente paso. Normalmente se presenta como un botón o enlace destacado y su función es guiar la navegación sin generar dudas. Un buen CTA reduce la fricción, facilita la toma de decisiones y ayuda a que la web cumpla su objetivo, evitando que el usuario se quede bloqueado pensando “¿y ahora qué?”.</p>
              <li>
                Añade 3–4 <strong>secciones</strong> como bloques:
                <ul>
                  <li><strong>Beneficios</strong> (3 cards con icono + frase).</li>
                  <li><strong>Prueba/Confianza</strong> (testimonios, datos, logos).</li>
                  <li><strong>Contenido</strong> (servicios o apartados principales).</li>
                  <li><strong>Contacto</strong> (lo esencial: email/formulario).</li>
                </ul>
              </li>
              <li><strong>Revisa en móvil</strong> (modo vista previa) y simplifica si se ve cargado.</li>
              <li><strong>Publica</strong> </li>
            </ol>

            <div className="callout">
              <strong>Regla:</strong> si dudas, quita. Una web clara siempre gana a una web “llena”.
            </div>

            <details className="dd dd-nested">
              <summary>Enlace útil (oficial): guía rápida de Google Sites</summary>
              <div className="dd-body">
                <p className="muted">
                  Abre esta guía y úsala como apoyo paso a paso:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://support.google.com/a/users/answer/9282722?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Workspace Learning Center — Google Sites (guía rápida)
                    </a>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="canva" className="doc-section">
        <h2>3) Paso 2: Canva (diseño rápido y presentable)</h2>

        <details open className="dd">
          <summary>3.1 · Qué aporta Canva en este punto</summary>
          <div className="dd-body">
            <p>
              Canva te permite hacer una versión más “gráfica” y controlada del diseño:
              paletas, tipografías, composición y secciones con estética coherente.
            </p>

            <div className="callout tip">
              <strong>Enfoque:</strong> aquí nos interesa la <strong>identidad visual</strong> y la consistencia.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3.2 · Flujo recomendado en Canva (sin perderte)</summary>
          <div className="dd-body">
            <ol>
              <li>Busca una plantilla de “Website / Landing” y elige una con estructura clara.</li>
              <li>Cambia <strong>solo</strong> 3 cosas primero: paleta, tipografía, imágenes (por coherencia).</li>
              <li>Reduce texto: titulares cortos + bullets.</li>
              <li>Marca un CTA visible y repítelo al final (sin saturar).</li>
              <li>Publica como web o exporta para presentarlo (según lo que te pida la actividad).</li>
            </ol>

            <details className="dd dd-nested">
              <summary>Enlaces útiles (oficial): Canva Websites</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    <a href="https://www.canva.com/help/canva-websites/" target="_blank" rel="noreferrer">
                      Canva — Websites (visión general)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canva.com/help/designing-websites/" target="_blank" rel="noreferrer">
                      Canva — Diseñar websites (plantillas y desde cero)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canva.com/help/publishing-canva-websites/" target="_blank" rel="noreferrer">
                      Canva — Publicar websites
                    </a>
                  </li>
                </ul>

                <div className="callout warn">
                  <strong>Ojo:</strong> Canva es genial para prototipar visual, pero después necesitaremos
                  traducirlo a HTML/CSS con criterio (no “copiar pixel a pixel”).
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="figma" className="doc-section">
        <h2>4) Paso 3: Figma (prototipo profesional)</h2>

        <details open className="dd">
          <summary>4.1 · Qué es Figma y por qué es estándar</summary>
          <div className="dd-body">
            <p>
              Figma es una herramienta de diseño de interfaces (UI) y prototipado. Se usa en equipos reales porque:
              permite diseñar pantallas, crear componentes reutilizables y prototipos clicables, y trabajar en colaboración.
            </p>

            <div className="callout">
              <strong>Traducción a tu aprendizaje:</strong> lo que prototipes aquí lo vas a poder pasar a HTML/CSS con más orden.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4.2 · Primeros conceptos que  debes conocer</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Frames:</strong> “pantallas” (desktop, tablet, móvil).</li>
              <li><strong>Auto Layout:</strong> el secreto para diseños que no se rompen.</li>
              <li><strong>Componentes:</strong> botones, cards, navbar… (una vez bien, reutilizas).</li>
              <li><strong>Styles:</strong> colores y tipografías centralizadas (consistencia).</li>
              <li><strong>Prototipo:</strong> enlazar pantallas (clic, hover, navegación).</li>
            </ul>
            <p> Figma es una herramienta muy potente para diseñar y prototipar interfaces de usuario.Pero para dominarla bien, necesitarás dedicarle tiempo y práctica. 
              En este curso, nos centraremos en los conceptos básicos que te permitirán crear prototipos básicos y que conozcas las bases de este programa que te permitan
              más adelante profundizar por tu cuenta.
            </p>

            <div className="callout tip">
              <strong>Regla:</strong> si una cosa se repite (botón, card, badge), se convierte en componente.
            </div>

            <details className="dd dd-nested">
              <summary>Recursos oficiales recomendados</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    <a href="https://www.figma.com/templates/" target="_blank" rel="noreferrer">
                      Figma — Templates (plantillas gratuitas para empezar)
                    </a>
                  </li>
                </ul>
              </div>
             
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="video" className="doc-section">
        <h2>5) Vídeo tutorial recomendado (Figma)</h2>

        <details open className="dd">
          <summary>Playlist oficial: Figma para principiantes</summary>
          <div className="dd-body">
            <p>
              Te dejo una playlist oficial para empezar con buen pie. Úsala como guía para tu primera maqueta.
            </p>

            <div className="callout tip">
              <strong>Cómo verla:</strong> 1) interfaz y frames → 2) auto layout → 3) componentes → 4) prototipo clicable.
            </div>

            <div className="media">
              <iframe
                width="100%"
                height="420"
                src="https://www.youtube.com/embed/videoseries?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4"
                title="Figma para principiantes (playlist oficial)"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 0, borderRadius: "14px" }}
              />
            </div>

            <p className="muted" style={{ marginTop: ".5rem" }}>
              Si el vídeo no carga en tu entorno, ábrelo en YouTube desde el canal oficial de Figma.
            </p>
          </div>
            <div className="dd-body">
                <ul>
                  <li>
                    <a href="https://www.youtube.com/watch?v=VdS9ZGHHXWQ" target="_blank" rel="noreferrer">
                      Curso Figma desde cero (YouTube, 1h 30min)
                    </a>
                  </li>
                </ul>
              </div>
               <div className="dd-body">
                <ul>
                  <li>
                    <a href="https://www.youtube.com/watch?v=q6WPfjTU_B0" target="_blank" rel="noreferrer">
                      Curso intensivo de Figma (YouTube, 30min)
                    </a>
                  </li>
                </ul>
              </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="recursos" className="doc-section">
        <h2>6) Recursos y páginas para ampliar</h2>

        <details open className="dd">
          <summary>Bonus: 6 sitios para aprender mirando (sin copiar)</summary>
          <div className="dd-body">
            <ul className="bonus-links">
              <li>
                <a href="https://coolors.co/" target="_blank" rel="noreferrer">
                  Coolors — paletas de color rápidas
                </a>
              </li>
              <li>
                <a href="https://colorhunt.co/" target="_blank" rel="noreferrer">
                  Color Hunt — paletas curadas
                </a>
              </li>
              <li>
                <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">
                  WebAIM Contrast Checker — contraste y accesibilidad
                </a>
              </li>
              <li>
                <a href="https://fonts.google.com/" target="_blank" rel="noreferrer">
                  Google Fonts — tipografías web
                </a>
              </li>
              <li>
                <a href="https://www.lapa.ninja/" target="_blank" rel="noreferrer">
                  Lapa Ninja — landings por sectores (muy útil para estructura)
                </a>
              </li>
              <li>
                <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
                  Awwwards — inspiración de alto nivel (analiza jerarquía y CTA)
                </a>
              </li>
            </ul>

            <div className="callout">
              <strong>Ejercicio:</strong> entra en 2 webs y escribe 5 decisiones que te llevarías:
              jerarquía, paleta, tipografía, espaciado, CTA.
            </div>

            {/* BONUS CSS opcional para este bloque (si quieres, pégalo en tu global.css)
                .bonus-links { list-style: none; padding: 0; margin: 0; display: grid; gap: .5rem; }
                .bonus-links a { display:block; padding:.7rem .8rem; border-radius: 14px; text-decoration:none; }
                .bonus-links a:hover { transform: translateY(-1px); }
                @media (min-width: 760px){ .bonus-links { grid-template-columns: 1fr 1fr; } }
            */}
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="practica" className="doc-section">
        <h2>7) Práctica guiada</h2>

        <details open className="dd">
          <summary>Ejercicio: la misma idea en 3 herramientas</summary>
          <div className="dd-body">
            <p>
              Elige un tema (por ejemplo: “clases de apoyo”, “peluquería”, “portfolio”, “evento”, “tienda pequeña”).
              Vas a repetir la misma estructura en Google Sites, Canva y Figma.
            </p>

            <ol>
              <li>
                Define tu <strong>mensaje</strong> (1 frase) y tu <strong>CTA</strong> (1 acción).
              </li>
              <li>
                Crea 4 secciones: <strong>Hero</strong> (título+CTA), <strong>Beneficios</strong> (3 items),
                <strong>Prueba</strong> (testimonio/dato), <strong>Contacto</strong>.
              </li>
              <li>
                Hazlo en <strong>Google Sites</strong> (rápido).
              </li>
              <li>
                Hazlo en <strong>Canva</strong> (cuidando paleta y tipografía).
              </li>
              <li>
                Hazlo en <strong>Figma</strong> (un frame móvil + un frame desktop).
              </li>
            </ol>

            <div className="callout tip">
              <strong>Entrega ideal:</strong> 3 capturas (Sites/Canva/Figma) + 6 líneas justificando tus decisiones.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="cierre" className="doc-section">
        <h2>8) Checklist final</h2>

        <details open className="dd">
          <summary>Si puedes marcar esto, vas muy bien</summary>
          <div className="dd-body">
            <ul>
              <li>Entiendo para qué sirve prototipar antes de programar.</li>
              <li>Sé estructurar una landing en secciones con un CTA claro.</li>
              <li>Distingo lo que aporta Google Sites vs Canva vs Figma.</li>
              <li>He creado al menos 1 pantalla móvil y 1 de escritorio en Figma.</li>
              <li>Puedo explicar mis decisiones (jerarquía, paleta, tipografía, espaciado).</li>
            </ul>

            <div className="callout tip">
              <strong>Frase para recordar:</strong> no diseñes para “que se vea bonito”; diseña para que se entienda rápido.
            </div>
          </div>
        </details>
<div className="doc-next">
  <Link className="btn btn-primary" to="/tema/3">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
      </section>
    </div>
  );
}
