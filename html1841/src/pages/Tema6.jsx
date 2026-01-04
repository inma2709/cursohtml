/* Tema6Head.jsx
   Página React lista para copiar/pegar.
   ✅ Incluye <link rel="stylesheet"> del CSS en el <head> usando un pequeño efecto (sin librerías).
*/

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";


export default function Tema6Head() {
  // 👉 Ajusta la ruta a TU hoja de estilos (según tu proyecto)
  const CSS_HREF = useMemo(() => "/assets/styles.css", []);

  // Estilos internos para prevenir scroll horizontal y mejorar responsividad
  const internalStyles = `
    .doc {
      overflow-x: hidden;
      max-width: 100%;
      word-wrap: break-word;
    }
    
    .doc-section pre {
      overflow-x: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
      max-width: 100%;
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    .doc-section code {
      word-wrap: break-word;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      max-width: 100%;
      display: inline-block;
      word-break: break-all;
    }
    
    .dd-body {
      max-width: 100%;
      overflow-x: hidden;
    }
    
    .dd-body pre {
      overflow-x: auto;
      max-width: 100%;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    
    .callout {
      max-width: 100%;
      overflow-x: hidden;
      word-wrap: break-word;
    }
    
    @media (max-width: 768px) {
      .doc-section pre,
      .doc-section code {
        font-size: 0.8rem;
        line-height: 1.4;
      }
      
      .dd-body ul li,
      .dd-body p {
        word-break: break-word;
      }
    }
  `;

  useEffect(() => {
    // Inserta (si no existe) el <link rel="stylesheet" href="..."> en <head>
    const id = "manual-global-css";
    let link = document.getElementById(id);

    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    } else {
      // Si ya existe, asegura que apunte a la ruta actual
      link.href = CSS_HREF;
    }

    // Inyectar estilos internos para prevenir scroll horizontal
    const existingInternalStyles = document.getElementById('internal-styles-tema6');
    if (!existingInternalStyles) {
      const styleElement = document.createElement('style');
      styleElement.id = 'internal-styles-tema6';
      styleElement.textContent = internalStyles;
      document.head.appendChild(styleElement);
    }

    // (Opcional) título de la pestaña
    document.title = "UF1841 · Tema 6 · Cabecera (head)";

    return () => {
      // Si NO quieres que se quite al salir de la página, comenta estas líneas
      // document.getElementById(id)?.remove();
    };
  }, [CSS_HREF, internalStyles]);

  // -------------------------
  // TEST (interactivo + feedback)
  // -------------------------
  const questions = useMemo(
    () => [
      {
        id: "q1",
        question: "¿Cuál es la función principal del elemento <head>?",
        options: [
          "Contener el texto principal de la página",
          "Mostrar el menú de navegación",
          "Definir metainformación y recursos del documento",
          "Insertar imágenes visibles",
        ],
        correctIndex: 2,
        explanation:
          "El <head> concentra configuración: metadatos, título, enlaces a recursos (CSS, favicon, fuentes), etc.",
      },
      {
        id: "q2",
        question: "¿Dónde se muestra el contenido de <title>?",
        options: [
          "Dentro del cuerpo de la página",
          "En la pestaña del navegador",
          "En el pie de página",
          "Dentro del CSS",
        ],
        correctIndex: 1,
        explanation:
          "El <title> se muestra en la pestaña, marcadores e historial; también ayuda a buscadores.",
      },
      {
        id: "q3",
        question: "¿Qué etiqueta se utiliza para enlazar una hoja de estilo externa?",
        options: ["<style>", "<css>", "<link>", "<script>"],
        correctIndex: 2,
        explanation:
          'Para CSS externo se usa <link rel="stylesheet" href="..."> dentro del <head>.',
      },
      {
        id: "q4",
        question: "¿Cuál es la función del favicon?",
        options: [
          "Aplicar estilos a la página",
          "Mostrar un icono identificativo del sitio",
          "Definir la codificación",
          "Insertar imágenes en el contenido",
        ],
        correctIndex: 1,
        explanation:
          "El favicon es el icono del sitio en pestañas, favoritos y algunos listados del navegador.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(questions.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

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

  function handleChange(qid, idx) {
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
    if (submitted) setSubmitted(false);
  }

  function grade() {
    setSubmitted(true);
  }

  const score = useMemo(() => {
    if (!submitted) return 0;
    let ok = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) ok += 1;
    }
    return ok;
  }, [submitted, answers, questions]);

  const total = questions.length;

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <section className="doc-hero" aria-labelledby="tema6-title">
        <p className="doc-kicker">Tema 6 · La cabecera del documento HTML (&lt;head&gt;)</p>
        <h1 id="tema6-title">Tema 6 · La cabecera del documento HTML (&lt;head&gt;)</h1>
        <p className="doc-lead">
          La cabecera de una página web no se ve, pero decide cómo el navegador interpreta el documento,
          cómo se aplican los estilos y cómo se presenta la identidad del sitio (título, favicon, metadatos).
          En este tema nos centramos en el contenido de <code>&lt;head&gt;</code>, el favicon y los enlaces a CSS.
        </p>

        <div className="callout tip">
          En un proyecto React, lo más habitual es colocar el enlace al CSS en <code>index.html</code>. Aquí lo
          incluimos también desde esta página para que puedas copiar/pegar y funcione sin depender de otras piezas.
        </div>
      </section>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del Tema 6">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#s61" onClick={(e) => handleIndexClick(e, 's61')}>6.1 Qué es &lt;head&gt; y su función real</a>
          </li>
          <li>
            <a href="#s62" onClick={(e) => handleIndexClick(e, 's62')}>6.2 &lt;title&gt;: el título del documento</a>
          </li>
          <li>
            <a href="#s63" onClick={(e) => handleIndexClick(e, 's63')}>6.3 Metadatos esenciales</a>
          </li>
          <li>
            <a href="#s64" onClick={(e) => handleIndexClick(e, 's64')}>6.4 Favicon: identidad visual</a>
          </li>
          <li>
            <a href="#s65" onClick={(e) => handleIndexClick(e, 's65')}>6.5 Enlaces a hojas de estilo CSS</a>
          </li>
          <li>
            <a href="#s66" onClick={(e) => handleIndexClick(e, 's66')}>6.6 Estructura completa recomendada</a>
          </li>
          <li>
            <a href="#test" onClick={(e) => handleIndexClick(e, 'test')}>Test de repaso</a>
          </li>
        </ol>
      </nav>

      {/* SECCIONES (details/summary) */}
      <section className="doc-section" id="s61">
        <details className="dd">
          <summary>6.1 ¿Qué es la cabecera &lt;head&gt; y cuál es su función real?</summary>
          <div className="dd-body">
            <p>
              El elemento <code>&lt;head&gt;</code> contiene <strong>metainformación</strong> del documento HTML.
              No forma parte del contenido visible, pero es imprescindible para que el navegador entienda
              cómo debe interpretar la página y qué recursos debe cargar.
            </p>
            <p>En términos prácticos, el <code>&lt;head&gt;</code> sirve para:</p>
            <ul>
              <li>Identificar el documento (título).</li>
              <li>Definir cómo se interpreta el texto (codificación).</li>
              <li>Enlazar recursos externos (CSS, iconos, fuentes).</li>
              <li>Ofrecer información útil a buscadores y plataformas (metadatos).</li>
            </ul>

            <p>Un ejemplo mínimo sería:</p>
            <pre>
              <code>{`<head>
  <title>Mi página web</title>
</head>`}</code>
            </pre>

            <div className="callout tip">
              La cabecera se procesa antes que el contenido visible. Si un recurso clave (como el CSS) no está bien
              enlazado, el navegador renderiza sin ese estilo: la página “funciona”, pero pierde calidad visual y
              control de presentación.
            </div>
          </div>
        </details>
      </section>

     <section className="doc-section" id="s62">
  <details className="dd">
    <summary>6.2 El título del documento: &lt;title&gt;</summary>
    <div className="dd-body">
      <p>
        El elemento <code>&lt;title&gt;</code> define el <strong>título oficial</strong> del documento HTML.
        Es uno de los elementos más importantes de la cabecera, ya que identifica la página
        tanto para las personas como para los sistemas automáticos.
      </p>

      <p>El contenido del <code>&lt;title&gt;</code> aparece en:</p>
      <ul>
        <li>La pestaña del navegador</li>
        <li>Marcadores / favoritos</li>
        <li>Historial de navegación</li>
        <li>Resultados de buscadores (como título principal del resultado)</li>
      </ul>

      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<title>Todo Jardín · Consejos de jardinería y plantas</title>`}</code>
      </pre>

      <h3>Importancia del &lt;title&gt; para el SEO</h3>
      <p>
        El <code>&lt;title&gt;</code> es uno de los <strong>factores SEO más importantes</strong>
        dentro del HTML. Los motores de búsqueda lo utilizan para entender de qué trata la página
        y decidir cuándo mostrarla en los resultados.
      </p>

      <p>
        Además, es el texto que el usuario ve primero en una búsqueda,
        por lo que influye directamente en si hace clic o no.
      </p>

      <p>Un buen título SEO debe:</p>
      <ul>
        <li>Describir claramente el contenido de la página</li>
        <li>Incluir las palabras clave principales de forma natural</li>
        <li>Ser único para cada página del sitio</li>
        <li>No ser demasiado largo (aprox. 50–60 caracteres)</li>
      </ul>

      <div className="callout">
        📌 El <code>&lt;title&gt;</code> no es un eslogan ni un texto decorativo:
        es una etiqueta técnica con impacto real en visibilidad y accesibilidad.
      </div>

      <h3>Errores comunes con el título</h3>
      <ul>
        <li>Usar el mismo <code>&lt;title&gt;</code> en todas las páginas</li>
        <li>Poner títulos genéricos como “Inicio” o “Página principal”</li>
        <li>Rellenarlo solo con palabras clave sin sentido</li>
        <li>Olvidar actualizarlo cuando cambia el contenido</li>
      </ul>

      <div className="callout warn">
        Un documento sin <code>&lt;title&gt;</code> está incompleto:
        pierde claridad para el usuario y relevancia para los sistemas que
        organizan e indexan páginas (navegadores, buscadores, marcadores).
      </div>

      <div className="callout">
        🧠 Idea clave para el alumno:  
        El <code>&lt;title&gt;</code> es el nombre oficial de tu página en Internet.  
        <strong>Si no lo defines bien, ni el usuario ni Google sabrán exactamente qué ofreces.</strong>
      </div>
    </div>
  </details>
</section>

    <section className="doc-section" id="s63">
  <details className="dd">
    <summary>6.3 Metadatos esenciales en la cabecera</summary>
    <div className="dd-body">
      <p>
        Los metadatos se definen con la etiqueta <code>&lt;meta&gt;</code>. 
        No se muestran en pantalla, pero aportan información clave sobre el documento
        tanto al navegador como a los motores de búsqueda.
      </p>

      <h3>Codificación de caracteres</h3>
      <p>
        Indica al navegador cómo interpretar los caracteres del documento.
        Hoy en día, la codificación estándar y recomendada es UTF-8.
      </p>
      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<meta charset="utf-8">`}</code>
      </pre>

      <div className="callout">
        Usar UTF-8 evita problemas con acentos, eñes y caracteres especiales,
        especialmente en páginas en español.
      </div>

      <h3>Meta descripción</h3>
      <p>
        La meta descripción ofrece un resumen del contenido de la página.
        Aunque no influye directamente en la posición del ranking,
        <strong>sí es clave para el SEO</strong> porque afecta al porcentaje de clics (CTR).
      </p>

      <pre style={{ overflowX: 'auto' }}>
        <code>{`<meta name="description" content="Todo sobre jardinería, plantas y cuidados del jardín">`}</code>
      </pre>

      <p>
        Los buscadores suelen mostrar esta descripción como el texto que aparece
        debajo del título en los resultados de búsqueda.
        Una buena descripción:
      </p>
      <ul>
        <li>Explica claramente de qué trata la página</li>
        <li>Invita al usuario a hacer clic</li>
        <li>Debe ser única para cada página</li>
        <li>No suele superar los 150–160 caracteres</li>
      </ul>

      <div className="callout">
        📌 Aunque Google puede generar su propio texto si lo considera más relevante,
        <strong>siempre es buena práctica definir la meta descripción</strong>.
      </div>

      <h3>Palabras clave (enfoque histórico)</h3>
      <p>
        Antiguamente, la etiqueta <code>keywords</code> se usaba para indicar a los
        buscadores los temas principales de la página.
      </p>

      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<meta name="keywords" content="jardinería, plantas, cuidados, consejos">`}</code>
      </pre>

      <p>
        En la actualidad, los principales motores de búsqueda <strong>ya no utilizan
        esta etiqueta para posicionar</strong>, debido a su abuso en el pasado.
      </p>

      <div className="callout">
        ⚠️ Hoy en día, el SEO se basa más en:
        <ul>
          <li>Contenido de calidad</li>
          <li>Estructura correcta del HTML</li>
          <li>Uso semántico de etiquetas (<code>header</code>, <code>main</code>, <code>article</code>, etc.)</li>
          <li>Buen rendimiento y accesibilidad</li>
        </ul>
      </div>

      <div className="callout">
        🧠 Idea clave para el alumno:  
        Los metadatos no “decoran” la página.  
        <strong>Definen cómo se interpreta, cómo se indexa y cómo se presenta en buscadores.</strong>  
        La cabecera es un espacio técnico que condiciona el comportamiento global del documento.
      </div>
    </div>
  </details>
</section>


  <section className="doc-section" id="s64">
  <details className="dd">
    <summary>6.4 El favicon: identidad visual del sitio</summary>
    <div className="dd-body">
      <p>
        El <strong>favicon</strong> es el icono que identifica visualmente a un sitio web en la pestaña del navegador,
        en los marcadores y en otros contextos del navegador. Aunque su tamaño es reducido, cumple una función clave:
        <strong>permitir el reconocimiento inmediato del sitio</strong> y reforzar su identidad visual.
      </p>

      <p>
        El navegador carga el favicon desde la cabecera del documento mediante la etiqueta <code>&lt;link&gt;</code>.
        No se trata de un elemento decorativo sin más: forma parte de la experiencia global del usuario.
      </p>

      <h3>Formatos de favicon más utilizados</h3>

      <ul>
        <li>
          <strong>ICO</strong>: formato clásico y ampliamente compatible. Puede contener varios tamaños en un solo archivo.
        </li>
        <li>
          <strong>PNG</strong>: muy habitual en la actualidad, permite transparencia y buena calidad visual.
        </li>
        <li>
          <strong>SVG</strong>: formato vectorial, muy ligero y escalable (soporte cada vez mayor, pero no universal).
        </li>
      </ul>

      <p>Ejemplo con formato ICO:</p>
      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<link rel="icon" href="favicon.ico" type="image/x-icon">`}</code>
      </pre>

      <p>Ejemplo con formato PNG:</p>
      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<link rel="icon" href="favicon.png" type="image/png">`}</code>
      </pre>

      <p>Ejemplo con SVG (cuando se decide usarlo):</p>
      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<link rel="icon" href="favicon.svg" type="image/svg+xml">`}</code>
      </pre>

      <h3>Tamaños recomendados</h3>

      <ul>
        <li><strong>16×16 px</strong>: pestañas del navegador.</li>
        <li><strong>32×32 px</strong>: pestañas en pantallas de alta resolución.</li>
        <li><strong>48×48 px</strong>: accesos directos y algunos entornos de escritorio.</li>
      </ul>

      <p>
        En el caso del formato <code>.ico</code>, varios de estos tamaños pueden coexistir en un único archivo.
      </p>

      <h3>Herramientas web para crear favicons (sin instalar nada)</h3>

      <ul>
        <li>
          <strong>Favicon Generator</strong> (favicon.io): subes una imagen o escribes texto
          y genera automáticamente todos los tamaños necesarios.
        </li>
        <li>
          <strong>RealFaviconGenerator</strong>: ideal para proyectos profesionales,
          genera favicons para navegadores, móviles y PWA.
        </li>
        <li>
          <strong>Canva</strong>: permite diseñar el icono visualmente y exportarlo en PNG
          para luego convertirlo a favicon.
        </li>
      </ul>

      <div className="callout info">
        Estas herramientas son ideales para alumnado que aún no domina programas de diseño.
      </div>

      <h3>Programas de diseño para crear favicons</h3>

      <ul>
        <li>
          <strong>GIMP</strong>: software libre, permite crear imágenes pequeñas con transparencia.
        </li>
        <li>
          <strong>Inkscape</strong>: perfecto para crear favicons en SVG a partir de formas simples.
        </li>
        <li>
          <strong>Photoshop</strong>: opción profesional si ya se trabaja con branding y logotipos.
        </li>
      </ul>

      <h3>Ideas sencillas para diseñar un buen favicon</h3>

      <ul>
        <li>
          <strong>Una inicial</strong>: la primera letra del nombre del sitio (ej. “D” para DevCampus).
        </li>
        <li>
          <strong>Un símbolo</strong>: un icono simple que represente la temática (⚙️, 📚, 💻).
        </li>
        <li>
          <strong>Parte del logotipo</strong>: usar solo el elemento más reconocible del logo.
        </li>
        <li>
          <strong>Figura geométrica</strong>: círculo, cuadrado o hexágono con un color corporativo.
        </li>
      </ul>

      <div className="callout tip">
        Si dudas, reduce el diseño hasta que siga entendiéndose a 16×16 píxeles.
        Si no se reconoce ahí, es demasiado complejo.
      </div>

      <h3>Recomendaciones finales</h3>

      <ul>
        <li>
          <strong>Simplicidad extrema</strong>: evita textos largos o detalles finos.
        </li>
        <li>
          <strong>Alto contraste</strong>: el icono debe destacar incluso en pestañas oscuras.
        </li>
        <li>
          <strong>Diseño centrado</strong>: deja márgenes para evitar recortes visuales.
        </li>
        <li>
          <strong>Coherencia visual</strong>: debe encajar con colores y estilo del sitio.
        </li>
        <li>
          <strong>Pruebas reales</strong>: revisa cómo se ve en el navegador, no solo en el editor.
        </li>
      </ul>

      <div className="callout tip">
        Un favicon bien diseñado transmite cuidado, profesionalidad y atención al detalle.
        Su ausencia suele dar sensación de proyecto inacabado.
      </div>
    </div>
  </details>
</section>



    <section className="doc-section" id="s65">
  <details className="dd">
    <summary>6.5 Etiquetas &lt;link&gt; (CSS, iconos, fuentes y más)</summary>
    <div className="dd-body">
      <p>
        La etiqueta <code>&lt;link&gt;</code> se coloca en el <code>&lt;head&gt;</code> y sirve para
        <strong>conectar recursos externos</strong> con tu página web (sobre todo CSS, pero también favicons,
        fuentes, manifests, etc.). Es una etiqueta “vacía” (no tiene cierre) y funciona como un “conector”.
      </p>

      <div className="callout tip">
        Idea clave: <code>&lt;link&gt;</code> conecta recursos que el navegador debe cargar (CSS, fuentes, iconos…).
        Para JavaScript se usa <code>&lt;script&gt;</code>, no <code>&lt;link&gt;</code>.
      </div>

      <h3>1) Enlazar hojas de estilo CSS</h3>
      <p>
        El uso más habitual: cargar un archivo CSS externo. Así separas contenido (HTML) de diseño (CSS).
      </p>

      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<link rel="stylesheet" href="estilos.css">`}</code>
      </pre>

      <p>En proyectos organizados, es habitual separar en carpetas:</p>
      <pre style={{ overflowX: 'auto' }}>
        <code>{`<link rel="stylesheet" href="../assets/css/styles.css">`}</code>
      </pre>

      <ul>
        <li>
          Para CSS externo se usa <code>&lt;link&gt;</code>, no <code>&lt;style&gt;</code>.
          (<code>&lt;style&gt;</code> es para CSS dentro del propio HTML.)
        </li>
        <li><code>rel="stylesheet"</code> es obligatorio para indicar que es una hoja de estilos.</li>
        <li>
          Si hay varias hojas, el <strong>orden</strong> importa: lo último puede sobrescribir lo anterior.
        </li>
      </ul>

      <div className="callout warn">
        Un CSS mal enlazado no “rompe” la página: simplemente no se aplica. Aprende a detectar esto revisando:
        ruta, nombre, extensión, mayúsculas/minúsculas y la pestaña “Network” del navegador.
      </div>

      <h3>2) Varias hojas CSS y orden de carga</h3>
      <p>
        Es normal tener una hoja base y otra específica. El orden determina qué reglas ganan cuando hay conflicto:
      </p>

      <pre style={{ overflowX: 'auto' }}>
        <code>{`<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="tema.css">`}</code>
      </pre>

      <ul>
        <li>
          <strong>base.css</strong>: estilos generales (tipografía, layout, variables).
        </li>
        <li>
          <strong>tema.css</strong>: ajustes o estilos particulares (colores, páginas específicas).
        </li>
      </ul>

      <h3>3) Enlazar favicon y otros recursos con &lt;link&gt;</h3>
      <p>
        Otro uso muy común es enlazar el <strong>favicon</strong> (icono del sitio):
      </p>
      <pre style={{ overflowX: 'auto' }}>
        <code>{`<link rel="icon" href="/favicon.ico" type="image/x-icon">`}</code>
      </pre>

      <p>Y también otros recursos (según el proyecto):</p>
      <ul>
        <li>
          <strong>Manifest (PWA)</strong>:
          <pre><code>{`<link rel="manifest" href="/site.webmanifest">`}</code></pre>
        </li>
        <li>
          <strong>Iconos para móviles (Apple)</strong>:
          <pre><code>{`<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}</code></pre>
        </li>
      </ul>

      <h3>4) Fuentes de Google: cómo se enlazan con &lt;link&gt;</h3>
      <p>
        Google Fonts te permite usar tipografías sin descargarlas. Normalmente te da uno o varios
        <code>&lt;link&gt;</code> que debes pegar en el <code>&lt;head&gt;</code>.
      </p>

      <p><strong>Ejemplo típico (una fuente):</strong></p>
      <pre style={{ overflowX: 'auto' }}>
        <code>{`<!-- En el <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">`}</code>
      </pre>

      <p>
        Después, ya puedes usarla en tu CSS con <code>font-family</code>:
      </p>
      <pre style={{ overflowX: 'auto' }}>
        <code>{`/* En tu styles.css */
body{
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}`}</code>
      </pre>

      <ul>
        <li>
          <code>preconnect</code> acelera la conexión inicial con los servidores de fuentes (mejora rendimiento).
        </li>
        <li>
          <code>crossorigin</code> es importante para que el navegador gestione bien la carga desde <code>fonts.gstatic.com</code>.
        </li>
        <li>
          <code>display=swap</code> ayuda a evitar que el texto “desaparezca” mientras carga la fuente.
        </li>
      </ul>

      <div className="callout tip">
        Consejo: no cargues 10 fuentes distintas. Mejor 1 o 2 familias y pocos pesos (por ejemplo 400 y 700).
        Menos peso = página más rápida.
      </div>

      <h3>5) Diferencia entre &lt;link&gt; y &lt;script&gt; (muy importante)</h3>
      <p>
        Mucha gente confunde esto al empezar:
      </p>

      <ul>
        <li>
          <strong>&lt;link&gt;</strong> se usa para recursos como <strong>CSS, fuentes, iconos</strong>.
        </li>
        <li>
          <strong>&lt;script&gt;</strong> se usa para <strong>JavaScript</strong>.
        </li>
      </ul>

      <p><strong>Ejemplo correcto para JavaScript:</strong></p>
      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<script src="app.js"></script>`}</code>
      </pre>

      <p>
        Lo más habitual hoy (para evitar que bloquee el renderizado) es usar <code>defer</code>:
      </p>
      <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>{`<script src="app.js" defer></script>`}</code>
      </pre>

      <ul>
        <li>
          <code>defer</code> descarga el JS mientras se carga el HTML y lo ejecuta al final, cuando el DOM está listo.
        </li>
        <li>
          Alternativa: colocar el <code>&lt;script&gt;</code> justo antes de <code>&lt;/body&gt;</code>.
        </li>
      </ul>

      <div className="callout info">
        Regla práctica: si es “estilo / tipografía / icono”, suele ir con <code>&lt;link&gt;</code>.
        Si es “lógica / comportamiento”, va con <code>&lt;script&gt;</code>.
      </div>

      <h3>6) Errores típicos al enlazar (y cómo detectarlos)</h3>
      <ul>
        <li>
          <strong>Ruta incorrecta</strong>: <code>./</code>, <code>../</code>, carpetas mal puestas.
        </li>
        <li>
          <strong>Nombre distinto</strong>: <code>styles.css</code> no es igual que <code>style.css</code>.
        </li>
        <li>
          <strong>Mayúsculas/minúsculas</strong>: en servidores Linux, <code>Estilos.css</code> ≠ <code>estilos.css</code>.
        </li>
        <li>
          <strong>Cache</strong>: a veces cambia el archivo y el navegador sigue usando uno antiguo (prueba Ctrl+F5).
        </li>
      </ul>

      <div className="callout warn">
        Si “no se ve el CSS”, abre DevTools → pestaña Network (Red) y busca tu CSS:
        si sale 404, la ruta está mal.
      </div>
    </div>
  </details>
</section>


      <section className="doc-section" id="s66">
        <details className="dd">
          <summary>6.6 Estructura completa recomendada del &lt;head&gt;</summary>
          <div className="dd-body">
            <p>Ejemplo coherente y profesional:</p>
            <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              <code>{`<head>
  <meta charset="utf-8">
  <title>Todo Jardín</title>
  <meta name="description" content="Consejos y cuidados sobre jardinería y plantas">
  <meta name="keywords" content="jardinería, plantas, cuidados">
  <link rel="icon" href="favicon.png" type="image/png">
  <link rel="stylesheet" href="../assets/styles.css">
</head>`}</code>
            </pre>

            <div className="callout tip">
              Esta combinación cubre: identidad (title + favicon), interpretación (charset) y presentación (CSS).
              La cabecera no es un añadido: es parte del diseño técnico del documento.
            </div>
          </div>
        </details>
      </section>

      {/* TEST */}
      <section className="doc-section" id="test" aria-labelledby="test-title">
        <h2 id="test-title">🧠 Test de repaso · Tema 6</h2>

        <div className="callout">
          Marca una opción por pregunta y pulsa <strong>Corregir</strong>. Recibirás feedback inmediato con explicación.
        </div>

        {submitted && (
          <div className="callout tip" role="status" aria-live="polite">
            Resultado: <strong>{score}</strong> / <strong>{total}</strong>
          </div>
        )}

        {questions.map((q, idx) => {
          const picked = answers[q.id];
          const isCorrect = submitted && picked === q.correctIndex;
          const isWrong = submitted && picked !== null && picked !== q.correctIndex;

          return (
            <div className="test-question" key={q.id}>
              <p>
                <strong>
                  {idx + 1}. {q.question}
                </strong>
              </p>

              {q.options.map((opt, optIdx) => (
                <label key={optIdx}>
                  <input
                    type="radio"
                    name={q.id}
                    checked={picked === optIdx}
                    onChange={() => handleChange(q.id, optIdx)}
                  />
                  {opt}
                </label>
              ))}

              {submitted && (
                <>
                  {isCorrect && (
                    <p className="callout tip">
                      ✔ Correcta. {q.explanation}
                    </p>
                  )}
                  {isWrong && (
                    <p className="callout warn">
                      ✘ No. La correcta es: <strong>{q.options[q.correctIndex]}</strong>.{" "}
                      {q.explanation}
                    </p>
                  )}
                  {picked === null && (
                    <p className="callout warn">⚠ No has respondido esta pregunta.</p>
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="doc-next">
          <button className="btn btn-primary" type="button" onClick={grade}>
            Corregir
          </button>
        </div>

        <div className="callout tip" style={{ marginTop: "1rem" }}>
          Si quieres que el CSS se cargue de forma “oficial” (recomendado), añade también en tu <code>index.html</code>:
          <pre style={{ marginTop: ".75rem", overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            <code>{`<link rel="stylesheet" href="/assets/styles.css">`}</code>
          </pre>
        </div>
      </section>
      <div className="doc-next">
  <Link className="btn btn-primary" to="/tema/7">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
    </main>
  );
}
