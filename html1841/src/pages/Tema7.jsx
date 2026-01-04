/* Tema7.jsx - El cuerpo del documento HTML (<body>)
   Página React COMPLETA sobre el elemento <body> en HTML
   - Qué contiene el body y por qué importa
   - Estructura semántica de HTML5: header, main, section, article, aside, footer
   - Jerarquía de encabezados (h1-h6): SEO, accesibilidad y navegadores
   - Enlaces, anclas y diferencias entre <a> y <link>
   - Comentarios en HTML para documentar
   - Relaciones DOM: padre, hijos, hermanos
   - Etiquetas para documentación: pre, code, details, summary
   - Etiquetas extra útiles: figure, time, abbr, address, etc.
   - Ejercicio práctico guiado con solución
   - Tablas resumen de todas las etiquetas
*/

import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";


export default function Tema7() {
  // 👉 Ajusta esta ruta a tu CSS real
  const CSS_HREF = useMemo(() => "/assets/styles.css", []);

  const handleIndexClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const detailsParent = target.closest("details");
    if (detailsParent) detailsParent.open = true;

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  useEffect(() => {
    const id = "manual-global-css";
    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    } else {
      link.href = CSS_HREF;
    }
    document.title = "UF1841 · Tema 7 · El cuerpo del documento HTML";
  }, [CSS_HREF]);

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <section className="doc-hero" aria-labelledby="tema-body-title">
        <p className="doc-kicker">Tema 7 · El cuerpo del documento HTML (&lt;body&gt;)</p>
        <h1 id="tema-body-title">
          Tema · El cuerpo del documento (<code>&lt;body&gt;</code>)
        </h1>
        <p className="doc-lead">
          El <code>&lt;body&gt;</code> es la zona donde vive el contenido real: lo que el usuario lee, ve, escucha y con lo
          que interactúa. En este tema trabajamos estructura semántica (HTML5), jerarquía de encabezados, enlaces/anclas,
          comentarios, relaciones del DOM (padre/hijos/hermanos), documentación con{" "}
          <code>&lt;pre&gt;</code>/<code>&lt;code&gt;</code> y organización con{" "}
          <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code>. También verás etiquetas “extra” muy útiles.
        </p>

        <div className="callout">
          Recuerda: el navegador puede “mostrar” muchas cosas aunque estén mal construidas. Nuestro objetivo no es que se
          vea “más o menos”, sino que esté bien estructurado, sea accesible y se mantenga estable a lo largo del tiempo.
          Debes de tener en cuenta que las etiquetas HTML tienen un significado y una función concreta: dan la estructura
          y son muy importantes para el navegador, los motores de búsqueda y las tecnologías de asistencia. Usa las etiquetas
          semánticas adecuadas y evita usar etiquetas solo por su apariencia visual. Para ello lo primero es conocerlas.
        </div>
      </section>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema Body">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#s1" onClick={(e) => handleIndexClick(e, "s1")}>
              1. Qué contiene el &lt;body&gt; y por qué importa
            </a>
          </li>
          <li>
            <a href="#s2" onClick={(e) => handleIndexClick(e, "s2")}>
              2. Estructura semántica de HTML5 (header, main, section, article, aside, footer)
            </a>
          </li>
          <li>
            <a href="#s3" onClick={(e) => handleIndexClick(e, "s3")}>
              3. Encabezados (&lt;h1&gt;–&lt;h6&gt;): jerarquía, SEO y accesibilidad
            </a>
          </li>
          <li>
            <a href="#s4" onClick={(e) => handleIndexClick(e, "s4")}>
              4. Enlaces, anclas y diferencias entre &lt;link&gt; y &lt;a&gt;
            </a>
          </li>
          <li>
            <a href="#s5" onClick={(e) => handleIndexClick(e, "s5")}>
              5. Comentarios en HTML (documentar sin afectar al contenido)
            </a>
          </li>
          <li>
            <a href="#s6" onClick={(e) => handleIndexClick(e, "s6")}>
              6. Relaciones en HTML: padre, hijos y hermanos (DOM)
            </a>
          </li>
          <li>
            <a href="#s7" onClick={(e) => handleIndexClick(e, "s7")}>
              7. Etiquetas para documentación: &lt;pre&gt;, &lt;code&gt;, &lt;details&gt; y &lt;summary&gt;
            </a>
          </li>
          <li>
            <a href="#s8" onClick={(e) => handleIndexClick(e, "s8")}>
              8. Etiquetas especiales útiles (figure, time, abbr, address, etc.)
            </a>
          </li>
          <li>
            <a href="#ejercicio" onClick={(e) => handleIndexClick(e, "ejercicio")}>
              Ejercicio práctico (guiado + solución)
            </a>
          </li>
          <li>
            <a href="#tablas" onClick={(e) => handleIndexClick(e, "tablas")}>
              Tablas resumen de etiquetas
            </a>
          </li>
        </ol>
      </nav>

      {/* 1. QUÉ CONTIENE EL BODY Y POR QUÉ IMPORTA */}
      <section className="doc-section" id="s1">
        <details className="dd" open>
          <summary>1. Qué contiene el &lt;body&gt; y por qué importa</summary>
          <div className="dd-body">
            <p>
              El elemento <code>&lt;body&gt;</code> es la segunda gran parte del documento HTML: aquí reside el contenido
              que el usuario percibe al navegar. Si el <code>&lt;head&gt;</code> configura y describe, el{" "}
              <code>&lt;body&gt;</code> <strong>comunica</strong> y <strong>estructura la experiencia</strong>.
            </p>

            <p>Dentro del body se insertan, entre otros:</p>
            <ul>
              <li>Texto estructurado: encabezados, párrafos, listas, citas.</li>
              <li>Contenido multimedia: imágenes, vídeo, audio, iframes.</li>
              <li>Navegación: enlaces, menús, índices y anclas internas.</li>
              <li>
                Estructura semántica: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>,{" "}
                <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>.
              </li>
              <li>Componentes interactivos: formularios, botones, controles.</li>
              <li>Documentos y recursos: PDFs, descargas, incrustaciones.</li>
            </ul>

            <div className="callout tip">
              Un body bien construido no se mide por "cantidad de cosas", sino por la claridad con la que el usuario
              entiende dónde está, qué puede hacer y cómo avanzar.
            </div>

            <div className="callout tip">
              El navegador puede mostrar casi cualquier HTML, pero solo un body bien estructurado será accesible, mantenible y
              comprensible.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🧩 ¿Por qué HTML5 introduce etiquetas semánticas?</summary>
          <div className="dd-body">
            <p>
              Durante muchos años, las páginas web se construían casi exclusivamente con cajas genéricas como{" "}
              <code>&lt;div&gt;</code> y <code>&lt;span&gt;</code>. Estas etiquetas permiten agrupar contenido, pero{" "}
              <strong>no explican qué es ese contenido</strong>.
            </p>

            <p>
              El resultado era un HTML lleno de contenedores sin significado, donde solo el programador entendía qué
              representaba cada parte de la página.
            </p>

            <pre>
              <code>{`<div id="top">
  <div id="menu">...</div>
</div>

<div id="content">
  <div class="post">...</div>
</div>

<div id="bottom">...</div>`}</code>
            </pre>

            <p>
              Visualmente esto funcionaba, pero desde el punto de vista del significado del documento,{" "}
              <strong>la página era prácticamente muda</strong>.
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>🚀 HTML5 y su gran novedad: la semántica</summary>
          <div className="dd-body">
            <p>
              Con HTML5 aparece una idea clave: <strong>las cajas no solo deben contener, también deben explicar qué contienen</strong>.
            </p>

            <p>
              Por eso se introducen las <strong>etiquetas semánticas</strong>, que describen el papel que cumple cada bloque dentro
              de la página:
            </p>

            <ul>
              <li><code>&lt;header&gt;</code> → cabecera</li>
              <li><code>&lt;nav&gt;</code> → navegación</li>
              <li><code>&lt;main&gt;</code> → contenido principal</li>
              <li><code>&lt;section&gt;</code> → secciones temáticas</li>
              <li><code>&lt;article&gt;</code> → contenido independiente</li>
              <li><code>&lt;footer&gt;</code> → pie de página</li>
            </ul>

            <pre>
              <code>{`<header>...</header>
<nav>...</nav>

<main>
  <article>...</article>
</main>

<footer>...</footer>`}</code>
            </pre>

            <div className="callout tip">
              Esta es, conceptualmente, la gran revolución de HTML5: pasar de cajas anónimas a estructuras con significado.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>📦 ¿En qué se diferencian realmente &lt;div&gt; y las etiquetas semánticas?</summary>
          <div className="dd-body">
            <p>
              Técnicamente, <code>&lt;div&gt;</code> y una etiqueta semántica se comportan de forma muy similar como cajas. La
              diferencia no es visual, sino <strong>conceptual y estructural</strong>.
            </p>

            <ul>
              <li><code>&lt;div&gt;</code> → caja sin significado</li>
              <li>
                <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code> → caja con significado
              </li>
            </ul>

            <p>Cuando usas etiquetas semánticas, el HTML se convierte en un documento que:</p>
            <ul>
              <li>Se entiende mejor al leer el código</li>
              <li>Describe la estructura real del contenido</li>
              <li>Comunica información a navegadores, buscadores y lectores de pantalla</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>♿ ¿Por qué es mejor usar semántica que solo &lt;div&gt;?</summary>
          <div className="dd-body">
            <p>
              El uso de etiquetas semánticas no es una cuestión de moda ni de estilo: tiene consecuencias reales.
            </p>

            <ul>
              <li>Mejora la accesibilidad: los lectores de pantalla entienden la estructura</li>
              <li>Mejora el SEO: los buscadores identifican el contenido importante</li>
              <li>Mejora el mantenimiento del código</li>
              <li>Reduce la necesidad de nombres artificiales como <code>div class="header"</code></li>
            </ul>

            <div className="callout warn">
              Usar solo <code>&lt;div&gt;</code> cuando existe una etiqueta semántica adecuada es desperdiciar una de las mayores
              mejoras de HTML5.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🧠 Idea clave para entender HTML moderno</summary>
          <div className="dd-body">
            <p>
              HTML no es solo un lenguaje para <em>colocar cajas</em>, sino para <strong>describir el contenido</strong>.
            </p>

            <p>
              CSS se encarga de cómo se ve. <br />
              HTML se encarga de qué es cada cosa.
            </p>

            <p>
              Las etiquetas semánticas existen para que el documento tenga sentido incluso aunque no tenga estilos.
            </p>
          </div>
        </details>
      </section>

      {/* 2. ESTRUCTURA SEMÁNTICA DE HTML5 */}
      <section className="doc-section" id="s2">
        <details className="dd" open>
          <summary>2. Estructura semántica de HTML5 (dentro del &lt;body&gt;)</summary>
          <div className="dd-body">
            <details className="dd" open>
              <summary>📦 Estructura semántica principal dentro del body</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<body>
  <header>...</header>
  <main>
    <section>
      <article>...</article>
    </section>
  </main>
  <footer>...</footer>
</body>`}</code>
                </pre>

                <ul>
                  <li><code>&lt;header&gt;</code>: introducción o cabecera de una página o sección.</li>
                  <li><code>&lt;main&gt;</code>: contenido principal y único del documento.</li>
                  <li><code>&lt;section&gt;</code>: agrupación temática de contenido (normalmente con encabezado).</li>
                  <li><code>&lt;article&gt;</code>: contenido independiente y reutilizable.</li>
                  <li><code>&lt;aside&gt;</code>: contenido complementario relacionado, no esencial.</li>
                  <li><code>&lt;footer&gt;</code>: información final o contextual de cierre.</li>
                </ul>

                <div className="callout warn">
                  No uses <code>&lt;section&gt;</code> solo para "envolver". Si no hay tema ni encabezado, probablemente necesitas
                  un <code>&lt;div&gt;</code>.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>&lt;header&gt;: cabeceras del documento y de secciones</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;header&gt;</code> representa el contenido introductorio de una página o de una sección concreta.
                </p>

                <p>Puede contener:</p>
                <ul>
                  <li>Encabezados (<code>&lt;h1&gt;…&lt;h6&gt;</code>)</li>
                  <li>Logotipos o imágenes representativas</li>
                  <li>Navegación (<code>&lt;nav&gt;</code>)</li>
                  <li>Textos introductorios</li>
                </ul>

                <pre>
                  <code>{`<header>
  <h1>Manual de HTML</h1>
  <p>Guía básica para principiantes</p>
  <nav>...</nav>
</header>`}</code>
                </pre>

                <div className="callout info">
                  Puede haber varios <code>&lt;header&gt;</code> en una página: uno general y otros dentro de{" "}
                  <code>&lt;article&gt;</code> o <code>&lt;section&gt;</code>.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>&lt;main&gt;: contenido principal</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;main&gt;</code> contiene el <strong>contenido central</strong> de la página. Es aquello que diferencia
                  este documento de cualquier otro del sitio.
                </p>

                <ul>
                  <li>Debe existir <strong>solo uno</strong> por página.</li>
                  <li>
                    No debe estar dentro de <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> o{" "}
                    <code>&lt;aside&gt;</code>.
                  </li>
                  <li>Mejora accesibilidad y navegación por teclado.</li>
                </ul>

                <pre>
                  <code>{`<body>
  <header>...</header>
  <nav>...</nav>

  <main>
    <h1>Noticias</h1>
    <section>...</section>
  </main>

  <footer>...</footer>
</body>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>&lt;section&gt;: bloques temáticos</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;section&gt;</code> agrupa contenido relacionado bajo un mismo tema. Normalmente incluye un encabezado.
                </p>

                <pre>
                  <code>{`<section>
  <h2>Noticias</h2>
  <article>...</article>
  <article>...</article>
</section>`}</code>
                </pre>

                <div className="callout warn">
                  No uses <code>&lt;section&gt;</code> solo para "envolver". Si no hay tema ni encabezado, probablemente necesites
                  un <code>&lt;div&gt;</code>.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>&lt;article&gt;: contenido independiente</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;article&gt;</code> representa una unidad de contenido <strong>autónoma</strong>, que podría leerse o
                  reutilizarse por separado.
                </p>

                <p>Ejemplos claros:</p>
                <ul>
                  <li>Entradas de un blog</li>
                  <li>Noticias</li>
                  <li>Comentarios</li>
                  <li>Fichas de producto</li>
                </ul>

                <pre>
                  <code>{`<article>
  <header>
    <h3>Título del artículo</h3>
    <p>Publicado el 12/03/2026</p>
  </header>

  <p>Contenido principal del artículo...</p>

  <blockquote>
    Una cita destacada relacionada con el contenido.
  </blockquote>

  <aside>
    <p>Nota o información adicional</p>
  </aside>

  <footer>
    <p>Autor · Categoría</p>
  </footer>
</article>`}</code>
                </pre>

                <div className="callout tip">
                  Un <code>&lt;article&gt;</code> bien construido puede tener su propia cabecera, su propio pie y contenido
                  estructurado internamente.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>&lt;aside&gt;: contenido complementario</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;aside&gt;</code> contiene información relacionada pero no esencial.
                </p>

                <ul>
                  <li>Notas</li>
                  <li>Enlaces relacionados</li>
                  <li>Publicidad contextual</li>
                  <li>Contenido secundario</li>
                </ul>

                <pre>
                  <code>{`<aside>
  <h4>¿Sabías que...?</h4>
  <p>HTML5 se publicó oficialmente en 2014.</p>
</aside>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>&lt;footer&gt;: cierre y contexto</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;footer&gt;</code> representa el cierre de una página o sección. Puede aparecer al final del documento o
                  dentro de un <code>&lt;article&gt;</code>.
                </p>

                <ul>
                  <li>Autoría</li>
                  <li>Fecha</li>
                  <li>Enlaces legales</li>
                  <li>Información adicional</li>
                </ul>

                <div className="callout info">El footer no es "lo de abajo": es información contextual de cierre.</div>
              </div>
            </details>

            <div className="callout tip">
              Piensa el <code>&lt;body&gt;</code> como un documento bien escrito: introducción (<code>&lt;header&gt;</code>),
              desarrollo (<code>&lt;main&gt;</code>), capítulos (<code>&lt;section&gt;</code>), artículos (
              <code>&lt;article&gt;</code>) y notas (<code>&lt;aside&gt;</code>).
            </div>
          </div>
        </details>

        {/* EXTRA: SECTION + ARTICLE (pieza didáctica reforzada) */}
        <details className="dd">
          <summary>📚 &lt;section&gt; y &lt;article&gt;: las dos piezas fundamentales para “reordenar” contenido</summary>
          <div className="dd-body">
            <p>
              Cuando pasamos de “poner cosas en la página” a <strong>organizar contenido como un documento real</strong>, HTML5
              nos da dos herramientas clave: <code>&lt;section&gt;</code> y <code>&lt;article&gt;</code>.
            </p>

            <div className="callout tip">
              <strong><code>&lt;section&gt;</code> = “capítulo / tema”</strong> ·{" "}
              <strong><code>&lt;article&gt;</code> = “pieza con vida propia”</strong>
            </div>

            <details className="dd">
              <summary>1) &lt;section&gt;: bloques temáticos</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;section&gt;</code> sirve para <strong>agrupar contenido relacionado</strong> bajo un mismo tema.
                  Normalmente tiene un encabezado (por ejemplo un <code>&lt;h2&gt;</code>).
                </p>

                <pre>
                  <code>{`<section>
  <h2>Noticias</h2>
  <article>...</article>
  <article>...</article>
</section>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>2) &lt;article&gt;: contenido independiente</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;article&gt;</code> es una unidad autónoma que podría leerse o reutilizarse por separado.
                </p>
                <p>Ejemplos: entrada de blog, noticia, comentario, ficha de producto.</p>
              </div>
            </details>

            <details className="dd">
              <summary>3) &lt;article&gt; como “mini-documento” (header/footer propios)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<article>
  <header>
    <h2>Título del artículo</h2>
    <p>Publicado el 3 de marzo</p>
  </header>

  <p>Contenido principal del artículo...</p>

  <footer>
    <p>Autor · Categoría</p>
  </footer>
</article>`}</code>
                </pre>

                <div className="callout tip">
                  Piensa en <code>&lt;article&gt;</code> como un contenido con identidad propia: podría “vivir” fuera de esta página.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>4) Encabezados y compatibilidad: regla segura</summary>
              <div className="dd-body">
                <p>
                  Para evitar confusiones en accesibilidad/SEO y herramientas, una convención robusta es:
                </p>
                <ul>
                  <li><strong>Un solo</strong> <code>&lt;h1&gt;</code> principal por página.</li>
                  <li><code>&lt;h2&gt;</code> para títulos de secciones y artículos.</li>
                  <li>No saltar niveles (h2 → h4).</li>
                </ul>
                <div className="callout info">
                  No es que los navegadores “prohíban” varios <code>&lt;h1&gt;</code>, es que las interpretaciones no siempre son
                  iguales en árboles de accesibilidad y auditorías. Esta regla es “a prueba de sustos”.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>5) Estructura modelo: capítulos (section) con piezas (article)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<main>
  <h1>Blog de tecnología</h1>

  <section>
    <h2>Últimas publicaciones</h2>

    <article>...</article>
    <article>...</article>
  </section>
</main>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* 3. ENCABEZADOS: JERARQUÍA, SEO Y ACCESIBILIDAD */}
      <section className="doc-section" id="s3">
        <details className="dd" open>
          <summary>3. Encabezados (&lt;h1&gt;–&lt;h6&gt;): jerarquía, SEO y accesibilidad</summary>
          <div className="dd-body">
            <h3>Las etiquetas h1–h6: jerarquía y significado</h3>
            <p>
              Las etiquetas <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> representan los{" "}
              <strong>encabezados de un documento HTML</strong>. No sirven únicamente para cambiar el tamaño del texto: su función
              principal es <strong>definir la estructura y jerarquía del contenido</strong>.
            </p>

            <p>Cada nivel indica la importancia relativa de un título dentro de la página:</p>

            <ul>
              <li><code>&lt;h1&gt;</code> → tema principal del documento</li>
              <li><code>&lt;h2&gt;</code> → secciones principales</li>
              <li><code>&lt;h3&gt;</code> → subsecciones</li>
              <li><code>&lt;h4&gt;–&lt;h6&gt;</code> → niveles más específicos</li>
            </ul>

            <div className="callout tip">Las h no son decoración: son el esqueleto lógico del contenido.</div>
          </div>
        </details>

        <details className="dd">
          <summary>Jerarquía correcta de encabezados</summary>
          <div className="dd-body">
            <p>
              Un documento HTML debe seguir una jerarquía clara y coherente de encabezados, similar al índice de un libro.
            </p>

            <pre>
              <code>{`<h1>Guía de jardinería urbana</h1>

<h2>Plantas de interior</h2>
<h3>Cuidados básicos</h3>
<h3>Riego y luz</h3>

<h2>Plantas de exterior</h2>
<h3>Macetas y suelo</h3>`}</code>
            </pre>

            <p>
              Cada nivel depende del anterior. Saltar niveles sin sentido (<code>&lt;h1&gt;</code> →{" "}
              <code>&lt;h4&gt;</code>) rompe la estructura del documento.
            </p>

            <div className="callout warn">
              Saltar niveles sin sentido (h1 → h4) rompe la estructura y dificulta accesibilidad y lectura. Cambiar tamaño es
              tarea de CSS; dar jerarquía es tarea de HTML. Usar encabezados solo por su tamaño visual es un error conceptual
              grave.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>¿Por qué las etiquetas &lt;h&gt; son tan importantes para el SEO?</summary>
          <div className="dd-body">
            <p>
              Los motores de búsqueda analizan las etiquetas <code>&lt;h&gt;</code> para{" "}
              <strong>entender de qué trata una página</strong> y cómo está organizado su contenido.
            </p>

            <p>En particular:</p>
            <ul>
              <li><code>&lt;h1&gt;</code> indica el tema principal de la página</li>
              <li><code>&lt;h2&gt;</code> y <code>&lt;h3&gt;</code> definen los bloques temáticos</li>
              <li>Ayudan a relacionar palabras clave con secciones concretas</li>
            </ul>

            <p>Un contenido bien estructurado con encabezados claros es más fácil de:</p>
            <ul>
              <li>Indexar por los buscadores</li>
              <li>Entender por los usuarios</li>
              <li>Escanear visualmente</li>
            </ul>

            <div className="callout tip">Un buen SEO empieza por un HTML bien estructurado, no por trucos.</div>
          </div>
        </details>

        <details className="dd">
          <summary>Accesibilidad: encabezados como sistema de navegación</summary>
          <div className="dd-body">
            <p>
              Para usuarios que utilizan lectores de pantalla, las etiquetas <code>&lt;h&gt;</code> funcionan como un{" "}
              <strong>mapa de navegación</strong>.
            </p>

            <p>Estos usuarios pueden:</p>
            <ul>
              <li>Saltar de encabezado en encabezado</li>
              <li>Obtener una visión general del contenido</li>
              <li>Ir directamente a la sección que les interesa</li>
            </ul>

            <p>
              Si los encabezados están mal usados o desordenados, el documento se vuelve confuso o inaccesible.
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>¿Por qué los navegadores no interpretan igual los h1?</summary>
          <div className="dd-body">
            <p>
              Aunque HTML es un estándar, los navegadores <strong>no interpretan todos los elementos exactamente de la misma forma</strong>,
              especialmente cuando entran en juego cuestiones semánticas como los encabezados <code>&lt;h1&gt;</code>.
            </p>

            <p>
              HTML5 permite que cada elemento de tipo <em>sectioning content</em> (<code>&lt;article&gt;</code>,{" "}
              <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;aside&gt;</code>) tenga su{" "}
              <strong>propia jerarquía de encabezados</strong>, incluyendo su propio <code>&lt;h1&gt;</code>.
            </p>

            <p>
              Sin embargo, muchos navegadores —especialmente en sus motores de accesibilidad y en herramientas de análisis—
              <strong>siguen usando un modelo más clásico</strong>, donde el documento se entiende mejor con un único{" "}
              <code>&lt;h1&gt;</code> principal.
            </p>

            <div className="callout warn">
              El estándar permite varias cosas, pero los navegadores no siempre las explotan de la misma manera.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Reglas generales seguras para todos los navegadores</summary>
          <div className="dd-body">
            <p>
              Para evitar problemas de interpretación, accesibilidad y SEO, existen una serie de reglas prácticas que funcionan de
              forma consistente en todos los navegadores:
            </p>

            <ul>
              <li>
                Usar <strong>un solo <code>&lt;h1&gt;</code> principal por página</strong>
              </li>
              <li>
                Utilizar <code>&lt;h2&gt;</code> para títulos de <code>&lt;section&gt;</code> o{" "}
                <code>&lt;article&gt;</code>
              </li>
              <li>No saltar niveles de encabezados</li>
              <li>No usar encabezados solo por tamaño visual</li>
              <li>Mantener una jerarquía clara y predecible</li>
            </ul>

            <div className="callout tip">Estas reglas no limitan HTML5: lo hacen más robusto y compatible.</div>
          </div>
        </details>

        <details className="dd">
          <summary>🧠 Idea clave para trabajar con &lt;h&gt;</summary>
          <div className="dd-body">
            <p>Antes de escribir HTML, pregúntate:</p>
            <ul>
              <li>¿De qué trata esta página?</li>
              <li>¿Cuáles son sus secciones principales?</li>
              <li>¿Qué información depende de cuál?</li>
            </ul>

            <p>Si puedes responder a esas preguntas, la jerarquía de <code>&lt;h&gt;</code> sale prácticamente sola.</p>

            <div className="callout warn">
              Cambiar el tamaño de un texto es tarea de CSS. <br />
              Darle significado y jerarquía es tarea de HTML.
            </div>
          </div>
        </details>

        <div className="callout info">
          Antes de escribir HTML, pregúntate: ¿De qué trata esta página? ¿Cuáles son sus secciones principales? ¿Qué
          información depende de cuál? Si puedes responder a esas preguntas, la jerarquía de h sale prácticamente sola.
        </div>
      </section>

      {/* 4. ENLACES / ANCLAS */}
      <section className="doc-section" id="s4">
        <details className="dd" open>
          <summary>4) Anclas, enlaces y “link”: aclarando conceptos</summary>
          <div className="dd-body">
            <p>
              En HTML es muy común escuchar términos como <em>ancla</em>, <em>enlace</em>, <em>link</em>,{" "}
              <code>&lt;a&gt;</code> o <code>href</code> como si fueran lo mismo. Sin embargo,{" "}
              <strong>no significan exactamente lo mismo</strong>.
            </p>

            <p>Entender bien esta diferencia es clave para escribir HTML correcto, claro y bien estructurado.</p>

            <div className="callout info">
              Pista rápida: <code>&lt;a&gt;</code> = “lo clicable” · <code>href</code> = “a dónde va” · <code>#id</code> = “punto
              dentro de la página” · <code>&lt;link&gt;</code> = “relación de recursos en head”.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🏷️ El elemento &lt;a&gt;: el enlace</summary>
          <div className="dd-body">
            <p>
              El elemento <code>&lt;a&gt;</code> (anchor, ancla) es la <strong>etiqueta HTML que crea un enlace</strong>.
            </p>

            <p>
              Por sí sola, la etiqueta <code>&lt;a&gt;</code> no enlaza a ningún sitio: necesita un atributo que indique el
              destino.
            </p>

            <pre>
              <code>{`<a>Ir a la página</a>`}</code>
            </pre>

            <p>En este estado, el enlace no funciona porque no sabe <em>a dónde</em> debe ir.</p>
          </div>
        </details>

        <details className="dd">
          <summary>📍 El atributo href: el destino del enlace</summary>
          <div className="dd-body">
            <p>
              El atributo <code>href</code> (hypertext reference) indica <strong>la dirección o referencia del enlace</strong>.
            </p>

            <pre>
              <code>{`<a href="contacto.html">Contacto</a>`}</code>
            </pre>

            <p>Aquí ocurre la unión importante:</p>

            <ul>
              <li><code>&lt;a&gt;</code> → el elemento que crea el enlace</li>
              <li><code>href</code> → el lugar al que apunta</li>
            </ul>

            <div className="callout tip">
              Sin <code>href</code>, no hay navegación. <br />
              Sin <code>&lt;a&gt;</code>, no hay enlace clicable.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>⚓ ¿Qué es exactamente un ancla?</summary>
          <div className="dd-body">
            <p>
              El término <strong>ancla</strong> se usa para referirse a un enlace que apunta a un{" "}
              <strong>punto concreto dentro de una página</strong>, no a otra página distinta.
            </p>

            <p>
              Esto se consigue enlazando a un <code>id</code> mediante el símbolo <code>#</code>.
            </p>

            <pre>
              <code>{`<a href="#contacto">Ir a contacto</a>

<section id="contacto">
  <h2>Contacto</h2>
</section>`}</code>
            </pre>

            <p>En este caso:</p>

            <ul>
              <li>El <code>&lt;a&gt;</code> sigue siendo un enlace normal</li>
              <li>El <code>#contacto</code> actúa como ancla dentro del documento</li>
            </ul>

            <div className="callout tip">Todas las anclas son enlaces, pero no todos los enlaces son anclas.</div>
          </div>
        </details>

        <details className="dd">
          <summary>🔗 ¿Y qué significa realmente “link”?</summary>
          <div className="dd-body">
            <p>
              La palabra <em>link</em> es un término genérico que se usa para referirse a cualquier tipo de enlace, pero en HTML
              puede significar dos cosas distintas:
            </p>

            <ul>
              <li>De forma informal: cualquier <code>&lt;a&gt;</code> que navega a otro lugar</li>
              <li>
                De forma técnica: el elemento <code>&lt;link&gt;</code> usado en el <code>&lt;head&gt;</code>
              </li>
            </ul>

            <pre>
              <code>{`<link rel="stylesheet" href="estilos.css">`}</code>
            </pre>

            <p>
              Este <code>&lt;link&gt;</code> <strong>no crea un enlace para el usuario</strong>. Sirve para relacionar el documento
              con recursos externos (CSS, iconos, etc.).
            </p>

            <div className="callout warn">
              No debe confundirse <code>&lt;a&gt;</code> (enlace de navegación) con <code>&lt;link&gt;</code> (relación entre documentos).
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🧠 Resumen mental rápido</summary>
          <div className="dd-body">
            <ul>
              <li><code>&lt;a&gt;</code> → crea un enlace clicable</li>
              <li><code>href</code> → indica el destino</li>
              <li>Ancla → enlace a un punto interno (<code>#id</code>)</li>
              <li><code>&lt;link&gt;</code> → relaciona recursos, no navega</li>
            </ul>

            <p>Entender esta diferencia evita errores muy comunes y mejora la calidad del HTML desde el principio.</p>

            <div className="callout info">Todas las anclas son enlaces, pero no todos los enlaces son anclas.</div>
          </div>
        </details>

        <details className="dd">
          <summary>🔒 target=&quot;_blank&quot;: seguridad recomendada</summary>
          <div className="dd-body">
            <pre>
              <code>{`<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer">
  Abrir en nueva pestaña
</a>`}</code>
            </pre>

            <div className="callout warn">
              Si usas <code>target="_blank"</code>, añade <code>rel="noopener noreferrer"</code> para reducir riesgos (tabnabbing).
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🧠 UX: texto de enlace útil</summary>
          <div className="dd-body">
            <ul>
              <li>❌ “haz clic aquí” (no dice nada)</li>
              <li>✅ “Descargar manual en PDF” (describe destino/acción)</li>
            </ul>
            <div className="callout tip">El enlace debe anticipar a dónde vas o qué ocurre.</div>
          </div>
        </details>
      </section>

      {/* 5. COMENTARIOS EN HTML */}
      <section className="doc-section" id="s5">
        <details className="dd" open>
          <summary>5) Comentarios en HTML: documentar sin afectar al contenido</summary>
          <div className="dd-body">
            <p>
              Los comentarios en HTML permiten <strong>añadir explicaciones directamente dentro del código</strong> sin que estas
              aparezcan en la página web.
            </p>

            <p>
              Son una herramienta fundamental para documentar ejercicios, aclarar decisiones y guiar la lectura del código, tanto
              para quien aprende como para quien lo revisa.
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>¿Cómo se escribe un comentario en HTML?</summary>
          <div className="dd-body">
            <p>
              Un comentario en HTML se escribe entre los símbolos <code>&lt;!--</code> y <code>--&gt;</code>.
            </p>

            <pre>
              <code>{`<!-- Este es un comentario en HTML -->`}</code>
            </pre>

            <p>Todo lo que esté dentro del comentario:</p>
            <ul>
              <li>No se muestra en la página</li>
              <li>No afecta al diseño</li>
              <li>No altera el comportamiento del documento</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Uso de comentarios para explicar ejercicios</summary>
          <div className="dd-body">
            <p>
              En este manual vamos a utilizar los comentarios para <strong>guiar al alumno dentro de los ejercicios</strong>,
              explicando qué debe hacerse en cada parte del código.
            </p>

            <pre>
              <code>{`<!--
  EJERCICIO:
  Añade aquí un título principal usando <h1>
  El texto debe describir el contenido de la página
-->

<h1></h1>`}</code>
            </pre>

            <p>De esta forma, el propio archivo HTML se convierte en un documento autoexplicativo.</p>

            <div className="callout tip">Leer comentarios bien escritos es parte del aprendizaje profesional.</div>
          </div>
        </details>

        <details className="dd">
          <summary>¿Por qué los comentarios son importantes?</summary>
          <div className="dd-body">
            <p>
              Aunque el navegador los ignora, los comentarios son esenciales para las personas que leen el código.
            </p>

            <ul>
              <li>Explican la intención del ejercicio</li>
              <li>Ayudan a entender estructuras complejas</li>
              <li>Facilitan la corrección y revisión</li>
              <li>Mejoran el trabajo en equipo</li>
            </ul>

            <p>Un código sin comentarios puede funcionar, pero es mucho más difícil de entender.</p>
          </div>
        </details>

        <details className="dd">
          <summary>Buenas prácticas al comentar en HTML</summary>
          <div className="dd-body">
            <ul>
              <li>Usa comentarios claros y concretos</li>
              <li>Evita comentarios redundantes o evidentes</li>
              <li>Comenta el <em>por qué</em>, no solo el <em>qué</em></li>
              <li>Mantén un formato coherente en los ejercicios</li>
            </ul>

            <pre>
              <code>{`<!-- Comentario poco útil -->
<!-- Esto es un div -->

<!-- Comentario útil -->
<!-- Contenedor principal del ejercicio -->`}</code>
            </pre>

            <div className="callout warn">Un exceso de comentarios mal usados puede confundir tanto como no comentar nada.</div>
          </div>
        </details>

        <details className="dd">
          <summary>Idea clave para el manual</summary>
          <div className="dd-body">
            <p>En este curso, los comentarios no son decoración: son parte activa del proceso de aprendizaje.</p>
            <p>Aprender a comentar bien el código es un paso imprescindible para escribir HTML profesional.</p>
          </div>
        </details>
      </section>
      {/* 8) ASIDE */}
<section className="doc-section" id="s1-7">
  <details className="dd">
    <summary>8) &lt;aside&gt;: contenido complementario</summary>
    <div className="dd-body">
      <p>
        <code>&lt;aside&gt;</code> contiene información relacionada pero no esencial.
      </p>

      <ul>
        <li>Notas</li>
        <li>Enlaces relacionados</li>
        <li>Publicidad contextual</li>
        <li>Contenido secundario</li>
      </ul>

      <pre>
        <code>{`<aside>
  <h4>?Sabías que...?</h4>
  <p>HTML5 se publicó oficialmente en 2014.</p>
</aside>`}</code>
      </pre>
    </div>
  </details>
</section>

{/* ===================================================== */}
{/* 9) FOOTER */}
<section className="doc-section" id="s1-8">
  <details className="dd">
    <summary>9) &lt;footer&gt;: cierre y contexto</summary>
    <div className="dd-body">
      <p>
        <code>&lt;footer&gt;</code> representa el cierre de una página o sección.
        Puede aparecer al final del documento o dentro de un <code>&lt;article&gt;</code>.
      </p>

      <ul>
        <li>Autoría</li>
        <li>Fecha</li>
        <li>Enlaces legales</li>
        <li>Información adicional</li>
      </ul>

      <div className="callout info">
        El footer no es “lo de abajo”: es información contextual de cierre.
      </div>
    </div>
  </details>
</section>

{/* ===================================================== */}
{/* 10) IDEA FINAL */}
<section className="doc-section" id="s1-9">
  <div className="callout tip">
    Piensa el <code>&lt;body&gt;</code> como un documento bien escrito:
    introducción (<code>&lt;header&gt;</code>), desarrollo (<code>&lt;main&gt;</code>),
    capítulos (<code>&lt;section&gt;</code>), artículos (<code>&lt;article&gt;</code>)
    y notas (<code>&lt;aside&gt;</code>).
  </div>
</section>
<table className="table">
  <thead>
    <tr>
      <th>Categoría</th>
      <th>Etiquetas</th>
      <th>Descripción / Uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Estructura global</td>
      <td>
        <code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>
      </td>
      <td>Define el tipo de documento y la estructura base de la página.</td>
    </tr>
    <tr>
      <td>Metadatos</td>
      <td>
        <code>&lt;meta&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;style&gt;</code>
      </td>
      <td>Información del documento, enlaces a CSS y configuración del navegador.</td>
    </tr>
    <tr>
      <td>Secciones</td>
      <td>
        <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>,
        <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>
      </td>
      <td>Organiza el contenido con significado semántico.</td>
    </tr>
    <tr>
      <td>Texto</td>
      <td>
        <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;pre&gt;</code>
      </td>
      <td>Encabezados, párrafos, citas y texto preformateado.</td>
    </tr>
    <tr>
      <td>Estilo / énfasis</td>
      <td>
        <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;u&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;br&gt;</code>
      </td>
      <td>énfasis semántico y formatos básicos de texto.</td>
    </tr>
    <tr>
      <td>Enlaces</td>
      <td><code>&lt;a&gt;</code></td>
      <td>Navegación entre páginas y recursos.</td>
    </tr>
    <tr>
      <td>Multimedia</td>
      <td>
        <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;source&gt;</code>
      </td>
      <td>Imágenes, audio y vídeo incrustados.</td>
    </tr>
    <tr>
      <td>Listas</td>
      <td>
        <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;dl&gt;</code>
      </td>
      <td>Listas desordenadas, ordenadas y descriptivas.</td>
    </tr>
    <tr>
      <td>Tablas</td>
      <td>
        <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>,
        <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>
      </td>
      <td>Representación de datos tabulares.</td>
    </tr>
    <tr>
      <td>Formularios</td>
      <td>
        <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>,
        <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code>
      </td>
      <td>Captura e interacción con datos del usuario.</td>
    </tr>
  </tbody>
</table>
<table className="table">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
      <th>Ejemplo de uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;header&gt;</code></td>
      <td>Cabecera de un documento o sección. Suele contener título, logo o navegación.</td>
      <td><code>&lt;header&gt;...&lt;/header&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;nav&gt;</code></td>
      <td>Conjunto de enlaces de navegación.</td>
      <td><code>&lt;nav&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/nav&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;main&gt;</code></td>
      <td>Contenido principal y único de la página.</td>
      <td><code>&lt;main&gt;...&lt;/main&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;article&gt;</code></td>
      <td>Contenido independiente y reutilizable (blog, noticia, ficha).</td>
      <td><code>&lt;article&gt;...&lt;/article&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;section&gt;</code></td>
      <td>Sección temática genérica dentro del documento.</td>
      <td><code>&lt;section&gt;...&lt;/section&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;aside&gt;</code></td>
      <td>Contenido complementario o secundario.</td>
      <td><code>&lt;aside&gt;...&lt;/aside&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;footer&gt;</code></td>
      <td>Pie de página de un documento o sección.</td>
      <td><code>&lt;footer&gt;...&lt;/footer&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;div&gt;</code></td>
      <td>Contenedor genérico sin significado semántico.</td>
      <td><code>&lt;div class="cards"&gt;...&lt;/div&gt;</code></td>
    </tr>
  </tbody>
</table>
<table className="table">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
      <th>Ejemplo de uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;p&gt;</code></td>
      <td>Define un párrafo de texto.</td>
      <td><code>&lt;p&gt;Este es un párrafo.&lt;/p&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;h1&gt; – &lt;h6&gt;</code></td>
      <td>Encabezados jerárquicos del documento.</td>
      <td><code>&lt;h2&gt;Sección de Conceptos&lt;/h2&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;a&gt;</code></td>
      <td>Hipervínculo a otras páginas o recursos.</td>
      <td><code>&lt;a href="https://www.ejemplo.com"&gt;Visitar&lt;/a&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;img&gt;</code></td>
      <td>Inserta una imagen (requiere <code>src</code> y <code>alt</code>).</td>
      <td><code>&lt;img src="imagen.jpg" alt="Descripción"&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></td>
      <td>Listas desordenadas, ordenadas y sus elementos.</td>
      <td><code>&lt;ul&gt;&lt;li&gt;ítem&lt;/li&gt;&lt;/ul&gt;</code></td>
    </tr>
    <tr>
      <td><code>&lt;span&gt;</code></td>
      <td>Contenedor en línea genérico para peque?os fragmentos.</td>
      <td><code>&lt;span class="destacado"&gt;Texto&lt;/span&gt;</code></td>
    </tr>
  </tbody>
</table>
<div className="callout tip">
  Regla de oro: usa primero etiquetas semánticas.  
  Solo recurre a <code>&lt;div&gt;</code> y <code>&lt;span&gt;</code> cuando ninguna otra etiqueta describa mejor el contenido.
</div>

    <section className="doc-section" id="s-relaciones">
  <details className="dd" open>
    <summary>Relación entre etiquetas HTML: padre, hijos y hermanos</summary>
    <div className="dd-body">
      <p>
        El HTML no es solo una lista de etiquetas una debajo de otra.
        Es una <strong>estructura jerárquica en forma de árbol</strong>,
        conocida como <strong>DOM (Document Object Model)</strong>.
      </p>

      <p>
        Entender las relaciones entre elementos (<em>padre, hijos y hermanos</em>)
        es fundamental para:
      </p>

      <ul>
        <li>Escribir HTML correcto y semántico</li>
        <li>Aplicar CSS con precisión</li>
        <li>Manipular el DOM con JavaScript</li>
        <li>Evitar errores de estructura y accesibilidad</li>
      </ul>

      <div className="callout tip">
        Si entiendes la relación entre etiquetas, entiendes cómo “piensa” el navegador.
      </div>
    </div>
  </details>

  {/* ========================= */}
  {/* PADRE */}
  <details className="dd">
    <summary>1) Elemento padre (parent)</summary>
    <div className="dd-body">
      <p>
        Un <strong>elemento padre</strong> es aquel que <strong>contiene directamente</strong>
        a otros elementos dentro de sus etiquetas de apertura y cierre.
      </p>

      <pre>
        <code>{`<section>
  <p>Texto del párrafo</p>
</section>`}</code>
      </pre>

      <p>
        En este ejemplo:
      </p>

      <ul>
        <li><code>&lt;section&gt;</code> es el <strong>padre</strong></li>
        <li><code>&lt;p&gt;</code> es el <strong>hijo</strong></li>
      </ul>

      <div className="callout info">
        Un elemento puede ser padre de muchos hijos,
        pero solo tiene <strong>un padre directo</strong>.
      </div>
    </div>
  </details>

  {/* ========================= */}
  {/* HIJOS */}
  <details className="dd">
    <summary>2) Elementos hijos (children)</summary>
    <div className="dd-body">
      <p>
        Los <strong>elementos hijos</strong> son aquellos que están
        <strong>directamente dentro</strong> de otro elemento.
      </p>

      <pre>
        <code>{`<article>
  <h2>Título</h2>
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>
</article>`}</code>
      </pre>

      <p>
        Aquí:
      </p>

      <ul>
        <li><code>&lt;article&gt;</code> es el padre</li>
        <li><code>&lt;h2&gt;</code> y <code>&lt;p&gt;</code> son hijos directos</li>
        <li>Los dos <code>&lt;p&gt;</code> son hijos del mismo padre</li>
      </ul>

      <div className="callout tip">
        “Hijo directo” significa que no hay ninguna etiqueta intermedia entre medias.
      </div>
    </div>
  </details>

  {/* ========================= */}
  {/* HERMANOS */}
  <details className="dd">
    <summary>3) Elementos hermanos (siblings)</summary>
    <div className="dd-body">
      <p>
        Dos o más elementos son <strong>hermanos</strong> cuando:
      </p>

      <ul>
        <li>Tienen el <strong>mismo padre</strong></li>
        <li>Están al <strong>mismo nivel</strong> en la estructura</li>
      </ul>

      <pre>
        <code>{`<ul>
  <li>Inicio</li>
  <li>Servicios</li>
  <li>Contacto</li>
</ul>`}</code>
      </pre>

      <p>
        En este caso:
      </p>

      <ul>
        <li>Los tres <code>&lt;li&gt;</code> son <strong>hermanos</strong></li>
        <li>Todos son hijos de <code>&lt;ul&gt;</code></li>
      </ul>

      <div className="callout info">
        El orden entre hermanos importa, tanto para el dise?o como para la lectura.
      </div>
    </div>
  </details>

  {/* ========================= */}
  {/* ANIDAMIENTO */}
  <details className="dd">
    <summary>4) Anidamiento: relaciones en varios niveles</summary>
    <div className="dd-body">
      <p>
        El HTML permite <strong>anidar</strong> elementos,
        creando relaciones de varios niveles (abuelo, padre, hijo).
      </p>

      <pre>
        <code>{`<main>
  <section>
    <article>
      <header>
        <h2>Título</h2>
      </header>
      <p>Contenido</p>
    </article>
  </section>
</main>`}</code>
      </pre>

      <p>Relaciones en este ejemplo:</p>

      <ul>
        <li><code>&lt;main&gt;</code> es padre de <code>&lt;section&gt;</code></li>
        <li><code>&lt;section&gt;</code> es padre de <code>&lt;article&gt;</code></li>
        <li><code>&lt;article&gt;</code> es padre de <code>&lt;header&gt;</code> y <code>&lt;p&gt;</code></li>
        <li><code>&lt;h2&gt;</code> es hijo de <code>&lt;header&gt;</code></li>
      </ul>

      <div className="callout tip">
        Cuanto más profunda es la jerarquía, más importante es que tenga sentido semántico.
      </div>
    </div>
  </details>

  {/* ========================= */}
  {/* ERRORES */}
  <details className="dd">
    <summary>5) Errores comunes en las relaciones HTML</summary>
    <div className="dd-body">
      <ul>
        <li>
          ? Colocar elementos donde no están permitidos
          (por ejemplo, <code>&lt;div&gt;</code> dentro de <code>&lt;p&gt;</code>).
        </li>
        <li>
          ? Anidar etiquetas sin sentido semántico solo por estilo.
        </li>
        <li>
          ? Usar demasiados niveles de anidamiento innecesarios.
        </li>
      </ul>

      <pre>
        <code>{`<!-- INCORRECTO -->
<p>
  <div>Texto</div>
</p>`}</code>
      </pre>

      <div className="callout warn">
        Si algo “solo funciona” porque el navegador lo corrige,
        probablemente esté mal estructurado.
      </div>
    </div>
  </details>

  {/* ========================= */}
  {/* RELACION CON CSS Y JS */}
  <details className="dd">
    <summary>6) Por qué estas relaciones son clave para CSS y JavaScript</summary>
    <div className="dd-body">
      <p>
        CSS y JavaScript trabajan directamente con estas relaciones:
      </p>

      <ul>
        <li>
          CSS selecciona por jerarquía:
          <code>article p</code>, <code>section &gt; h2</code>
        </li>
        <li>
          JavaScript navega el DOM:
          <code>parentElement</code>, <code>children</code>, <code>nextElementSibling</code>
        </li>
      </ul>

      <div className="callout tip">
        Si el HTML está bien estructurado, CSS y JavaScript se simplifican enormemente.
      </div>
    </div>
  </details>

  {/* ========================= */}
  {/* IDEA FINAL */}
  <div className="callout info">
    Piensa el HTML como un árbol genealógico:
    cada etiqueta sabe quién es su padre, quiénes son sus hijos
    y quiénes son sus hermanos.
  </div>
</section>
<section class="doc-section" id="main">
  <details class="dd" open>
    <summary>?? El elemento &lt;main&gt;: el contenido principal del documento</summary>

    <div class="dd-body">
      <p>
        El elemento <code>&lt;main&gt;</code> representa el <strong>contenido principal y único</strong> de una página web.
        Es la parte que responde directamente al objetivo del documento: lo que el usuario viene a leer, consultar
        o utilizar.
      </p>

      <p>
        En una página bien estructurada, <code>&lt;main&gt;</code> actúa como el <strong>núcleo informativo</strong>,
        diferenciándose claramente de cabeceras, menús, barras laterales o pies de página.
      </p>

      <div class="callout tip">
        Piensa en <code>&lt;main&gt;</code> como el “escenario principal” de la página: todo lo importante ocurre ahí.
      </div>
    </div>
  </details>

  <details class="dd">
    <summary>?? ?Dónde se coloca &lt;main&gt; dentro del documento?</summary>

    <div class="dd-body">
      <p>
        El elemento <code>&lt;main&gt;</code> se coloca <strong>dentro de <code>&lt;body&gt;</code></strong> y
        normalmente aparece:
      </p>

      <ul>
        <li>Después de <code>&lt;header&gt;</code></li>
        <li>Después de <code>&lt;nav&gt;</code> (si existe)</li>
        <li>Antes de <code>&lt;footer&gt;</code></li>
      </ul>

      <pre><code>&lt;body&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;nav&gt;...&lt;/nav&gt;

  &lt;main&gt;
    Contenido principal
  &lt;/main&gt;

  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</code></pre>

      <div class="callout warn">
        Un documento HTML solo puede tener <strong>un único <code>&lt;main&gt;</code></strong>.
        Usar más de uno rompe el significado semántico.
      </div>
    </div>
  </details>

  <details class="dd">
    <summary>?? ?Qué tipo de contenido debe ir dentro de &lt;main&gt;?</summary>

    <div class="dd-body">
      <p>
        Dentro de <code>&lt;main&gt;</code> debe ir todo el contenido que define la página concreta que el usuario está
        visitando.
      </p>

      <ul>
        <li>Encabezados principales (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>…)</li>
        <li>Secciones (<code>&lt;section&gt;</code>)</li>
        <li>Artículos (<code>&lt;article&gt;</code>)</li>
        <li>Párrafos, listas, imágenes, tablas, formularios</li>
      </ul>

      <pre><code>&lt;main&gt;
  &lt;h1&gt;Noticias de tecnología&lt;/h1&gt;

  &lt;section&gt;
    &lt;article&gt;
      &lt;h2&gt;Nueva versión de HTML&lt;/h2&gt;
      &lt;p&gt;Se han introducido mejoras...&lt;/p&gt;
    &lt;/article&gt;
  &lt;/section&gt;
&lt;/main&gt;</code></pre>

      <p>
        Todo lo que cambia de una página a otra es candidato a vivir dentro de <code>&lt;main&gt;</code>.
      </p>
    </div>
  </details>

  <details class="dd">
    <summary>?? ?Qué NO debe ir dentro de &lt;main&gt;?</summary>

    <div class="dd-body">
      <p>
        Hay elementos que <strong>no forman parte del contenido principal</strong> y, por tanto,
        no deben incluirse dentro de <code>&lt;main&gt;</code>.
      </p>

      <ul>
        <li><code>&lt;header&gt;</code> global del sitio</li>
        <li><code>&lt;nav&gt;</code> con menús de navegación</li>
        <li><code>&lt;footer&gt;</code> del sitio</li>
        <li>Barras laterales repetidas (<code>&lt;aside&gt;</code> global)</li>
      </ul>

      <div class="callout warn">
        <code>&lt;main&gt;</code> no es un contenedor genérico: su función es semántica, no decorativa.
      </div>
    </div>
  </details>

  <details class="dd">
    <summary>? ?Por qué &lt;main&gt; es clave para accesibilidad y SEO?</summary>

    <div class="dd-body">
      <p>
        El uso correcto de <code>&lt;main&gt;</code> aporta beneficios reales:
      </p>

      <ul>
        <li>Los lectores de pantalla pueden saltar directamente al contenido principal</li>
        <li>Los motores de búsqueda entienden mejor la estructura del documento</li>
        <li>Mejora la navegación por teclado</li>
      </ul>

      <p>
        Por eso, <code>&lt;main&gt;</code> no es opcional en un HTML bien construido: es una pieza estructural clave.
      </p>
    </div>
  </details>
</section>
      {/* 7. PRE/CODE/DETAILS/SUMMARY */}
      <section className="doc-section" id="s7">
        <details className="dd" open>
          <summary>7) &lt;pre&gt;, &lt;code&gt;, &lt;details&gt; y &lt;summary&gt; (documentación profesional)</summary>
          <div className="dd-body">
            <p>
              Estas etiquetas no se usan para “maquetar”, sino para <strong>explicar, mostrar y organizar información técnica</strong>.
              Son claves en manuales, tutoriales y documentación.
            </p>

            <details className="dd">
              <summary>1) &lt;pre&gt;: texto preformateado</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;pre&gt;</code> respeta espacios, tabulaciones y saltos de línea. Úsalo cuando la forma del texto importa.
                </p>
                <pre>
                  <code>{`<pre>
Texto con     espacios
y saltos
    de línea
</pre>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>2) &lt;code&gt;: fragmentos de código</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;code&gt;</code> marca “esto es código”. Puede ser en línea o en bloque (normalmente dentro de{" "}
                  <code>&lt;pre&gt;</code>).
                </p>

                <pre>
                  <code>{`<p>Usa <code><p></code> para párrafos y <code><h1></code> para títulos.</p>

<pre>
  <code>
    <header>
      <h1>Título</h1>
    </header>
  </code>
</pre>`}</code>
                </pre>

                <div className="callout tip">
                  Regla práctica: <code>&lt;code&gt;</code> = “esto es código” · <code>&lt;pre&gt;</code> = “respeta el formato”.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>3) &lt;details&gt; y &lt;summary&gt;: desplegables sin JS</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;details&gt;</code> crea un bloque desplegable y <code>&lt;summary&gt;</code> es el título clicable. Es
                  nativo y accesible por defecto.
                </p>

                <pre>
                  <code>{`<details>
  <summary>Ver explicación</summary>
  <p>Este texto se muestra al desplegar.</p>
</details>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>4) El atributo open</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<details open>
  <summary>Contenido visible</summary>
  <p>Esto está abierto por defecto.</p>
</details>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>5) Buenas prácticas</summary>
              <div className="dd-body">
                <ul>
                  <li>El <code>&lt;summary&gt;</code> debe describir claramente lo que se va a mostrar.</li>
                  <li>No ocultes información “crítica” sin avisar.</li>
                  <li>Usa <code>&lt;pre&gt;&lt;code&gt;</code> para ejemplos largos.</li>
                  <li>No uses <code>&lt;details&gt;</code> solo por estética: úsalo con intención pedagógica.</li>
                </ul>

                <div className="callout warn">
                  Si todo está oculto, nada destaca. Usa desplegables para organizar, no para esconder.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* 8. ETIQUETAS EXTRA */}
      <section className="doc-section" id="s8">
        <details className="dd" open>
          <summary>8) Etiquetas HTML interesantes (extra)</summary>
          <div className="dd-body">
            <p>
              No son obligatorias para empezar, pero conocerlas te da ventaja: te ayudan a describir mejor el contenido y a escribir
              HTML más profesional.
            </p>

            <details className="dd">
              <summary>1) &lt;figure&gt; y &lt;figcaption&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<figure>
  <img src="grafico.png" alt="Gráfico de ventas">
  <figcaption>Figura 1: Evolución de ventas en 2025</figcaption>
</figure>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>2) &lt;time&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<p>
  Publicado el <time datetime="2026-03-12">12 de marzo de 2026</time>
</p>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>3) &lt;abbr&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<p>
  <abbr title="HyperText Markup Language">HTML</abbr> es un lenguaje de marcado.
</p>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>4) &lt;address&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<address>
  Escrito por Ana López<br>
  <a href="mailto:ana@email.com">ana@email.com</a>
</address>`}</code>
                </pre>

                <div className="callout warn">
                  <code>&lt;address&gt;</code> es para contacto del autor/propietario del contenido, no para “cualquier dirección”.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>5) &lt;data&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<p>
  Precio: <data value="199.99">199,99 €</data>
</p>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd">
              <summary>6) &lt;mark&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<p>
  Resultado para <mark>HTML</mark> encontrado.
</p>`}</code>
                </pre>
                <div className="callout tip">
                  <code>&lt;mark&gt;</code> = relevancia contextual (por ejemplo, un término encontrado), no énfasis emocional.
                </div>
              </div>
            </details>

            <details className="dd">
              <summary>7) &lt;progress&gt; y &lt;meter&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<progress value="70" max="100"></progress>
<meter value="0.6">60%</meter>`}</code>
                </pre>
                <ul>
                  <li><code>&lt;progress&gt;</code>: progreso de una tarea.</li>
                  <li><code>&lt;meter&gt;</code>: nivel/medida dentro de un rango.</li>
                </ul>
              </div>
            </details>

            <details className="dd">
              <summary>8) &lt;dialog&gt;</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<dialog open>
  <p>Este es un mensaje importante</p>
</dialog>`}</code>
                </pre>
                <div className="callout info">Normalmente se controla con JavaScript, pero conviene conocer su existencia.</div>
              </div>
            </details>

            <div className="callout tip">
              Conocer estas etiquetas no es memorizar HTML: es aprender a elegir la etiqueta que mejor describe el contenido.
            </div>
          </div>
        </details>
      </section>

      {/* EJERCICIO */}
      <section className="doc-section" id="ejercicio">
        <details className="dd" open>
          <summary>Ejercicio práctico · Estructura HTML y relaciones entre etiquetas (sin CSS)</summary>
          <div className="dd-body">
            <p>Aplicarás:</p>
            <ul>
              <li>Etiquetas semánticas de HTML5</li>
              <li>Estructura del <code>&lt;body&gt;</code></li>
              <li>Relaciones: padre, hijos y hermanos</li>
            </ul>

            <div className="callout info">❗ Importante: no se permite usar CSS. Se evalúa solo estructura y uso correcto de etiquetas.</div>
          </div>
        </details>

        <details className="dd">
          <summary>📌 Enunciado</summary>
          <div className="dd-body">
            <p>Crea la estructura HTML de una página sencilla para un <strong>blog personal</strong>.</p>
            <ul>
              <li>Cabecera con título del blog y menú de navegación.</li>
              <li>Contenido principal con dos artículos.</li>
              <li>
                Cada artículo debe tener:
                <ul>
                  <li>Un título</li>
                  <li>Uno o dos párrafos</li>
                  <li>Una cita destacada</li>
                  <li>Una nota lateral relacionada</li>
                </ul>
              </li>
              <li>Pie de página con información del autor.</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>📋 Requisitos obligatorios</summary>
          <div className="dd-body">
            <ul>
              <li>Usa <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> y <code>&lt;footer&gt;</code>.</li>
              <li>Usa <code>&lt;nav&gt;</code> con una lista de enlaces.</li>
              <li>Usa <code>&lt;section&gt;</code> para agrupar los artículos.</li>
              <li>Usa <code>&lt;article&gt;</code> para cada entrada.</li>
              <li>
                Dentro de cada artículo: <code>&lt;header&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;blockquote&gt;</code>,{" "}
                <code>&lt;aside&gt;</code>.
              </li>
              <li>No uses <code>&lt;div&gt;</code> salvo que sea estrictamente necesario.</li>
            </ul>

            <div className="callout warn">
              Si dudas entre <code>&lt;section&gt;</code> y <code>&lt;article&gt;</code>, piensa: ¿esto podría existir por sí solo?
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🧠 Pistas</summary>
          <div className="dd-body">
            <ul>
              <li><code>&lt;header&gt;</code> puede ser padre de <code>&lt;nav&gt;</code>.</li>
              <li><code>&lt;main&gt;</code> contiene solo el contenido principal.</li>
              <li>Los dos <code>&lt;article&gt;</code> serán <strong>hermanos</strong>.</li>
              <li>El <code>&lt;aside&gt;</code> de cada artículo es hijo del artículo, no del <code>&lt;main&gt;</code>.</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>🧩 Plantilla base</summary>
          <div className="dd-body">
            <pre>
              <code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi blog personal</title>
</head>
<body>

  <!-- Completa aquí la estructura -->

</body>
</html>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>✅ Solución propuesta (míralo solo si te bloqueas)</summary>
          <div className="dd-body">
            <pre>
              <code>{`<header>
  <h1>Mi blog personal</h1>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Artículos</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <article>
      <header>
        <h2>Primer artículo</h2>
      </header>

      <p>Este es el primer párrafo del artículo.</p>
      <p>Este es el segundo párrafo del artículo.</p>

      <blockquote>
        Una cita relevante relacionada con el contenido.
      </blockquote>

      <aside>
        <p>Nota adicional sobre el artículo.</p>
      </aside>
    </article>

    <article>
      <header>
        <h2>Segundo artículo</h2>
      </header>

      <p>Contenido del segundo artículo.</p>

      <blockquote>
        Otra cita destacada.
      </blockquote>

      <aside>
        <p>Información complementaria.</p>
      </aside>
    </article>
  </section>
</main>

<footer>
  <p>© 2026 · Autor del blog</p>
</footer>`}</code>
            </pre>

            <div className="callout tip">
              Si tu estructura se parece a esta, vas por buen camino, aunque el texto sea distinto.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🔍 Autoevaluación</summary>
          <div className="dd-body">
            <ul>
              <li>¿Puedes identificar el padre de cada <code>&lt;article&gt;</code>?</li>
              <li>¿Qué elementos son hermanos?</li>
              <li>¿Hay algún elemento mal anidado?</li>
              <li>¿Podría un lector entender la página sin verla?</li>
            </ul>
          </div>
        </details>
      </section>

      {/* TABLAS */}
      <section className="doc-section" id="tablas">
        <details className="dd" open>
          <summary>Tablas resumen: categorías y etiquetas clave</summary>
          <div className="dd-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Etiquetas</th>
                  <th>Descripción / Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Estructura global</td>
                  <td>
                    <code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>
                  </td>
                  <td>Define el tipo de documento y la estructura base.</td>
                </tr>
                <tr>
                  <td>Metadatos</td>
                  <td>
                    <code>&lt;meta&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;style&gt;</code>
                  </td>
                  <td>Información del documento, enlaces a CSS y configuración.</td>
                </tr>
                <tr>
                  <td>Secciones</td>
                  <td>
                    <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>,{" "}
                    <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>
                  </td>
                  <td>Organiza el contenido con significado semántico.</td>
                </tr>
                <tr>
                  <td>Texto</td>
                  <td>
                    <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;blockquote&gt;</code>,{" "}
                    <code>&lt;pre&gt;</code>
                  </td>
                  <td>Encabezados, párrafos, citas y texto preformateado.</td>
                </tr>
                <tr>
                  <td>Énfasis</td>
                  <td>
                    <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;u&gt;</code>, <code>&lt;mark&gt;</code>,{" "}
                    <code>&lt;br&gt;</code>
                  </td>
                  <td>Énfasis semántico y formatos básicos.</td>
                </tr>
                <tr>
                  <td>Enlaces</td>
                  <td><code>&lt;a&gt;</code></td>
                  <td>Navegación entre páginas, recursos y anclas internas.</td>
                </tr>
                <tr>
                  <td>Listas</td>
                  <td>
                    <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;dl&gt;</code>
                  </td>
                  <td>Listas desordenadas, ordenadas y descriptivas.</td>
                </tr>
                <tr>
                  <td>Tablas</td>
                  <td>
                    <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>,{" "}
                    <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>
                  </td>
                  <td>Representación de datos tabulares.</td>
                </tr>
                <tr>
                  <td>Formularios</td>
                  <td>
                    <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;textarea&gt;</code>,{" "}
                    <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code>
                  </td>
                  <td>Captura e interacción con datos del usuario.</td>
                </tr>
              </tbody>
            </table>

            <div className="callout tip">
              Regla de oro: usa primero etiquetas semánticas. Solo recurre a <code>&lt;div&gt;</code> y <code>&lt;span&gt;</code>{" "}
              cuando ninguna otra etiqueta describa mejor el contenido.
            </div>
          </div>
        </details>
      </section>
      <div className="doc-next">
  <Link className="btn btn-primary" to="/tema/8">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
    </main>
  );
}
