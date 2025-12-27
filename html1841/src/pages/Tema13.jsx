import { useEffect } from "react";

export default function Tema13BuenasPracticasHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema 13 · Buenas prácticas en HTML";
  }, []);

  return (
    <main className="doc">
      {/* =========================
          TEMA 13 · BUENAS PRÁCTICAS
         ========================= */}
      <section className="estructura-formativa" id="ud02-t7">
        <h2>UD02 · Tema 13 · Buenas prácticas en HTML</h2>

        {/* INTRO */}
        <div className="bloque">
          <p>
            <strong>Objetivo:</strong> aprender a escribir HTML claro, correcto,
            accesible y profesional. No se trata solo de que “funcione”, sino de
            que sea <strong>legible, mantenible y usable</strong>.
          </p>

          <div className="callout tip">
            Un HTML bien escrito se entiende incluso meses después de haberlo creado.
          </div>
        </div>

        {/* 1 */}
        <div className="bloque">
          <h3>1) HTML es contenido, no diseño</h3>

          <p>
            HTML sirve para <strong>estructurar contenido</strong>. El diseño
            (colores, posiciones, tamaños) pertenece a CSS.
          </p>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Incorrecto -->
<p style="color:red; font-size:30px;">Título</p>

<!-- ✅ Correcto -->
<h1>Título</h1>`}</code>
          </pre>

          <div className="callout">
            Si estás usando HTML para “colocar cosas”, probablemente estás haciendo CSS sin saberlo.
          </div>
        </div>

        {/* 2 */}
        <div className="bloque">
          <h3>2) Usa etiquetas semánticas siempre que existan</h3>

          <p>
            Las etiquetas semánticas describen el significado del contenido,
            no su aspecto visual.
          </p>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Todo con div -->
<div>Cabecera</div>
<div>Contenido</div>
<div>Pie</div>

<!-- ✅ HTML semántico -->
<header>Cabecera</header>
<main>Contenido</main>
<footer>Pie</footer>`}</code>
          </pre>

          <div className="callout tip">
            Esto mejora accesibilidad, SEO y comprensión del código.
          </div>
        </div>

        {/* 3 */}
        <div className="bloque">
          <h3>3) La jerarquía de encabezados importa</h3>

          <p>
            Los encabezados (<code>h1</code> a <code>h6</code>) deben seguir un
            orden lógico.
          </p>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Incorrecto -->
<h1>Título</h1>
<h4>Subtema</h4>

<!-- ✅ Correcto -->
<h1>Título</h1>
<h2>Subtema</h2>`}</code>
          </pre>

          <div className="callout warn">
            No elijas un heading por su tamaño visual, sino por su nivel.
          </div>
        </div>

        {/* 4 */}
        <div className="bloque">
          <h3>4) Todas las imágenes deben tener alt</h3>

          <p>
            El atributo <code>alt</code> describe la imagen cuando no se ve
            o cuando se usa un lector de pantalla.
          </p>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Incorrecto -->
<img src="foto.png">

<!-- ✅ Correcto -->
<img src="foto.png" alt="Vista frontal del edificio">`}</code>
          </pre>

          <div className="callout tip">
            Si la imagen es decorativa, el <code>alt</code> debe existir pero estar vacío: <code>alt=""</code>.
          </div>
        </div>

        {/* 5 */}
        <div className="bloque">
          <h3>5) Usa enlaces claros y comprensibles</h3>

          <p>
            El texto de un enlace debe indicar claramente a dónde lleva.
          </p>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Incorrecto -->
<a href="info.html">Haz clic aquí</a>

<!-- ✅ Correcto -->
<a href="info.html">Más información sobre el curso</a>`}</code>
          </pre>

          <div className="callout">
            Los lectores de pantalla leen listas de enlaces sin contexto.
          </div>
        </div>

        {/* 6 */}
        <div className="bloque">
          <h3>6) Formularios accesibles desde el principio</h3>

          <ul>
            <li>Usa siempre <code>&lt;label&gt;</code>.</li>
            <li>Conecta <code>label</code> con <code>id</code>.</li>
            <li>No dependas solo de <code>placeholder</code>.</li>
          </ul>

          <pre className="esquema-textual">
            <code>{`<label for="email">Correo</label>
<input id="email" type="email" required>`}</code>
          </pre>

          <div className="callout warn">
            Un formulario sin labels puede “funcionar”, pero no es profesional.
          </div>
        </div>

        {/* 7 */}
        <div className="bloque">
          <h3>7) No uses tablas para maquetar</h3>

          <p>
            Las tablas son solo para datos tabulares, nunca para diseño.
          </p>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Incorrecto -->
<table>
  <tr>
    <td>Menú</td>
    <td>Contenido</td>
  </tr>
</table>`}</code>
          </pre>

          <div className="callout tip">
            Hoy el diseño se hace con CSS (Flexbox, Grid).
          </div>
        </div>

        {/* 8 */}
        <div className="bloque">
          <h3>8) Indenta y ordena tu código</h3>

          <p>
            El HTML se escribe para personas, no solo para navegadores.
          </p>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Difícil de leer -->
<ul><li>Uno</li><li>Dos</li></ul>

<!-- ✅ Legible -->
<ul>
  <li>Uno</li>
  <li>Dos</li>
</ul>`}</code>
          </pre>
        </div>

        {/* 9 */}
        <div className="bloque">
          <h3>9) Valida siempre tu HTML</h3>

          <p>
            Existen herramientas oficiales para comprobar errores y advertencias
            en tu HTML.
          </p>

          <ul>
            <li>
              ✅ <strong>Validador W3C:</strong>{" "}
              <a
                href="https://validator.w3.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://validator.w3.org/
              </a>
            </li>
            <li>
              ✅ <strong>WAVE (accesibilidad):</strong>{" "}
              <a
                href="https://wave.webaim.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://wave.webaim.org/
              </a>
            </li>
            <li>
              ✅ <strong>Lighthouse (Chrome DevTools):</strong>
              Auditoría de accesibilidad y buenas prácticas
            </li>
          </ul>

          <div className="callout tip">
            Validar no es opcional en proyectos profesionales.
          </div>
        </div>

        {/* 10 */}
        <div className="bloque">
          <h3>10) Checklist final de buen HTML</h3>

          <ul>
            <li>✔️ HTML semántico</li>
            <li>✔️ Encabezados bien jerarquizados</li>
            <li>✔️ Imágenes con alt</li>
            <li>✔️ Formularios accesibles</li>
            <li>✔️ Código limpio y validado</li>
          </ul>

          <div className="callout">
            Si cumples esta lista, tu HTML es correcto y profesional.
          </div>
        </div>

        {/* RESUMEN */}
        <div className="resumen-final">
          <p>
            <strong>Resumen:</strong> escribir buen HTML no es solo saber etiquetas,
            sino aplicar semántica, accesibilidad, orden y validación. Estas buenas
            prácticas son la base de cualquier proyecto web profesional.
          </p>
        </div>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
