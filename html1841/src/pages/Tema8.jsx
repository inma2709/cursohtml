import { useEffect } from "react";

export default function Tema8MapasDeImagenes() {
  useEffect(() => {
    document.title = "UF1841 · Tema 8 · Mapas de imágenes";

    // ✅ Activar el ejemplo práctico (alertas en las áreas)
    const areas = document.querySelectorAll('map[name="mapaPaisaje"] area');

    const onAreaClick = (e) => {
      e.preventDefault(); // evita que navegue al "#"
      const label = e.currentTarget.dataset.alert || e.currentTarget.alt || "Zona";
      alert(label);
    };

    areas.forEach((a) => a.addEventListener("click", onAreaClick));

    // Limpieza
    return () => {
      areas.forEach((a) => a.removeEventListener("click", onAreaClick));
    };
  }, []);

  return (
    <main className="doc">
      {/* =========================
          TEMA 8 · MAPAS DE IMÁGENES
         ========================= */}
      <section className="estructura-formativa" id="ud02-t2">
        <h2>UD02 · Tema 8 · Mapas de imágenes</h2>

        {/* INTRODUCCIÓN */}
        <div className="bloque" id="intro-ud02-t2">
          <p>
            <strong>Objetivo:</strong> comprender qué son los mapas de imágenes,
            cómo se crean paso a paso en HTML, cómo hacerlos accesibles y
            qué alternativas existen en diseños responsive modernos.
          </p>

          <div className="card-grid" role="list" aria-label="Puntos clave">
            <article className="card" role="listitem">
              <h4>¿Qué es?</h4>
              <p>
                Una imagen con <strong>zonas clicables</strong> que enlazan a distintos destinos.
              </p>
            </article>
            <article className="card" role="listitem">
              <h4>Cómo se crea</h4>
              <p>
                Con <code>&lt;img usemap&gt;</code>, <code>&lt;map&gt;</code> y varias{" "}
                <code>&lt;area&gt;</code>.
              </p>
            </article>
            <article className="card" role="listitem">
              <h4>Accesibilidad</h4>
              <p>
                Cada zona debe tener <code>alt</code> y enlaces equivalentes.
              </p>
            </article>
            <article className="card" role="listitem">
              <h4>Responsive</h4>
              <p>
                Requiere ajustes extra o el uso de <strong>SVG</strong>.
              </p>
            </article>
          </div>
        </div>

        <div className="imagen centrado">
          {/* ✅ En React NO uses ../public. Si el archivo está en /public/img/faro.png, la ruta es /img/faro.png */}
          <img src="/img/faro.png" alt="Ejemplo de mapa de imágenes HTML" />
        </div>

        {/* 1 */}
        <div className="bloque">
          <h3>1) ¿Qué es un mapa de imágenes?</h3>
          <p>
            Un <strong>mapa de imágenes</strong> permite definir distintas
            <strong> zonas clicables dentro de una misma imagen</strong>.
            Cada zona actúa como un enlace independiente.
          </p>

          <p>Es útil en casos como:</p>
          <ul>
            <li>Planos (edificios, museos, instalaciones).</li>
            <li>Infografías interactivas.</li>
            <li>Esquemas educativos.</li>
            <li>Diagramas con partes diferenciadas.</li>
          </ul>

          <div className="callout">
            Un mapa de imágenes no “divide” la imagen visualmente, sino que define{" "}
            <strong>coordenadas internas</strong> donde el usuario puede hacer clic.
          </div>
        </div>

        {/* 2 */}
        <div className="bloque">
          <h3>2) Anatomía de un mapa de imagen</h3>

          <p>Un mapa de imágenes se construye con <strong>tres piezas</strong>:</p>

          <ol>
            <li>
              Una imagen con <code>usemap</code>.
            </li>
            <li>
              Un elemento <code>&lt;map&gt;</code>.
            </li>
            <li>
              Varias áreas <code>&lt;area&gt;</code>.
            </li>
          </ol>

          <pre className="esquema-textual">
            <code>{`<img 
  src="img/faro-plano.png" 
  alt="Plano del faro con sus partes"
  width="300" height="220"
  usemap="#mapaFaro">

<map name="mapaFaro">
  <area shape="rect"   coords="20,60,120,140" href="cabina.html" alt="Ir a la cabina">
  <area shape="circle" coords="160,50,25"     href="foco.html"   alt="Ver el foco">
  <area shape="poly"   coords="60,150,180,150,170,220,70,220"
                       href="base.html"       alt="Explorar la base">
</map>`}</code>
          </pre>

          <ul>
            <li>
              <code>usemap</code> enlaza la imagen con el mapa.
            </li>
            <li>
              El <code>name</code> del mapa coincide con el <code>usemap</code> (sin #).
            </li>
            <li>
              Cada <code>&lt;area&gt;</code> define una zona clicable.
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div className="bloque">
          <h3>3) Formas y coordenadas</h3>

          <p>
            Las zonas clicables se definen mediante{" "}
            <strong>coordenadas en píxeles</strong> del archivo original de la imagen.
          </p>

          <ul>
            <li>
              <strong>rect</strong> → rectángulo (<code>x1,y1,x2,y2</code>)
            </li>
            <li>
              <strong>circle</strong> → círculo (<code>cx,cy,radio</code>)
            </li>
            <li>
              <strong>poly</strong> → polígono (lista de pares <code>x,y</code>)
            </li>
          </ul>

          <pre className="esquema-textual">
            <code>{`<area shape="rect"   coords="20,60,120,140" alt="Cabina">
<area shape="circle" coords="160,50,25"     alt="Foco">
<area shape="poly"   coords="60,150,180,150,170,220,70,220" alt="Base">`}</code>
          </pre>

          <div className="callout warn">
            Las coordenadas <strong>no dependen del CSS</strong>, se calculan sobre el
            tamaño real del archivo de imagen. Si escalas la imagen con CSS, las zonas pueden
            desajustarse.
          </div>
        </div>

        {/* 4 */}
        <div className="bloque">
          <h3>4) Accesibilidad y experiencia de usuario</h3>

          <ul>
            <li>
              Cada <code>&lt;area&gt;</code> debe tener <strong><code>alt</code> descriptivo</strong>.
            </li>
            <li>
              El texto debe indicar <strong>qué ocurre al hacer clic</strong>.
            </li>
            <li>
              Las áreas con <code>href</code> reciben foco por teclado.
            </li>
            <li>
              Si se abre en nueva pestaña, usar <code>rel="noopener noreferrer"</code>.
            </li>
          </ul>

          <div className="callout">
            El usuario no “ve” las áreas: el <code>alt</code> es su pista más clara sobre
            la acción de cada zona.
          </div>
        </div>

        {/* 5 */}
        <div className="bloque">
          <h3>5) Enlaces equivalentes (clave de accesibilidad)</h3>

          <p>
            Un mapa de imágenes <strong>nunca debe ser la única forma de navegación</strong>.
            Siempre hay que ofrecer enlaces de texto equivalentes.
          </p>

          <ul>
            <li>Personas con lector de pantalla.</li>
            <li>Navegadores con imágenes desactivadas.</li>
            <li>Mejor comprensión e indexación (SEO).</li>
          </ul>

          <p>
            <strong>Ejemplo recomendado:</strong>
          </p>

          <pre className="esquema-textual">
            <code>{`<ul>
  <li><a href="cabina.html">Cabina del faro</a></li>
  <li><a href="foco.html">Foco</a></li>
  <li><a href="base.html">Base</a></li>
</ul>`}</code>
          </pre>
        </div>

        {/* 6 */}
        <div className="bloque">
          <h3>6) Mapas de imágenes y diseño responsive</h3>

          <p>
            Los mapas de imágenes tradicionales <strong>no escalan bien</strong>. Hay tres
            estrategias posibles:
          </p>

          <ol>
            <li>No escalar la imagen (mantener tamaño intrínseco).</li>
            <li>Recalcular coordenadas con JavaScript.</li>
            <li>
              Usar <strong>SVG</strong> como alternativa moderna (escalado perfecto).
            </li>
          </ol>

          <div className="callout tip">
            En proyectos actuales, <strong>SVG con enlaces</strong> suele ser la mejor opción:
            escalable, accesible y sin cálculos manuales.
          </div>
        </div>

        {/* RESUMEN */}
        <div className="resumen-final">
          <p>
            <strong>Resumen:</strong> Los mapas de imágenes permiten crear zonas clicables dentro
            de una imagen mediante <code>&lt;img usemap&gt;</code>, <code>&lt;map&gt;</code> y{" "}
            <code>&lt;area&gt;</code>. Requieren atención especial a accesibilidad, enlaces
            equivalentes y responsive. Si necesitas escalado perfecto, SVG es la alternativa recomendada.
          </p>
        </div>

        <hr className="separador-verde" />

        {/* ==================================================
            EJEMPLO FINAL IMPLEMENTADO (PAISAJE + 3 ALERTAS)
           ================================================== */}
        <section className="bloque" id="ejemplo-mapa-paisaje">
          <h3>Ejemplo práctico implementado: paisaje (Montaña · Río · Cielo)</h3>

          <p>
            En este ejemplo, la imagen <strong>paisaje</strong> tiene tres zonas clicables.
            Al hacer clic, se abre una alerta indicando la zona pulsada.
          </p>

          <div className="callout tip">
            <strong>Cómo funciona:</strong> cada <code>&lt;area&gt;</code> tiene <code>data-alert</code>.
            En React, capturamos el clic con <code>useEffect</code> y mostramos{" "}
            <code>alert(data-alert)</code>.
          </div>

          <div className="imagen centrado">
            {/* ✅ Si el archivo está en /public/img/paisaje.png, la ruta es /img/paisaje.png */}
            <img
              src="../public/img/paisaje.png"
              alt="Paisaje con tres zonas: montaña, río y cielo"
              width="800"
              height="500"
              useMap="#mapaPaisaje"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* MAPA */}
          <map name="mapaPaisaje">
            {/* Montaña (rectángulo) */}
            <area
              shape="rect"
              coords="60,180,360,350"
              href="#"
              alt="Montaña"
              data-alert="Montaña"
            />

            {/* Río (polígono aproximado) */}
            <area
              shape="poly"
              coords="220,360,320,340,450,365,520,420,410,470,280,450"
              href="#"
              alt="Río"
              data-alert="Río"
            />

            {/* Cielo (círculo) */}
            <area
              shape="circle"
              coords="650,120,95"
              href="#"
              alt="Cielo"
              data-alert="Cielo"
            />
          </map>

          <div className="callout warn">
            Estas coordenadas están pensadas para una imagen de <strong>800×500</strong>. Si tu
            <code>paisaje.png</code> tiene otro tamaño o la escalas en CSS, las zonas pueden no
            coincidir. En ese caso, hay que recalcular coords (JS) o usar SVG.
          </div>

         
        </section>
      </section>
    </main>
  );
}
