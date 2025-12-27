import { useEffect } from "react";

export default function Tema9TablasHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema 9 · Tablas en HTML";
  }, []);

  return (
    <main className="doc">
      {/* =========================
          TEMA 9 · TABLAS EN HTML
         ========================= */}
      <section className="estructura-formativa" id="ud02-t3">
        <h2>UD02 · Tema 9 · Tablas en HTML</h2>

        {/* INTRO */}
        <div className="bloque" id="intro-ud02-t3">
          <p>
            <strong>Objetivo:</strong> aprender a crear tablas HTML correctas,
            semánticas y accesibles, entendiendo cuándo deben usarse y cuándo no.
          </p>

          <div className="card-grid" role="list" aria-label="Puntos clave">
            <article className="card" role="listitem">
              <h4>¿Para qué sirven?</h4>
              <p>Mostrar datos estructurados en filas y columnas.</p>
            </article>
            <article className="card" role="listitem">
              <h4>Semántica</h4>
              <p>
                Uso correcto de <code>caption</code>, <code>thead</code>,{" "}
                <code>tbody</code>, <code>tfoot</code>, <code>th</code>.
              </p>
            </article>
            <article className="card" role="listitem">
              <h4>Accesibilidad</h4>
              <p>
                Encabezados claros con <code>scope</code> para asociar datos.
              </p>
            </article>
            <article className="card" role="listitem">
              <h4>Buenas prácticas</h4>
              <p>Nunca usar tablas para maquetar una web.</p>
            </article>
          </div>
        </div>

        {/* 1 */}
        <div className="bloque">
          <h3>1) ¿Qué es una tabla en HTML?</h3>
          <p>
            Una <strong>tabla</strong> es una estructura pensada para mostrar{" "}
            <strong>datos relacionados</strong> organizados en filas y columnas.
          </p>

          <p>Ejemplos de uso correcto:</p>
          <ul>
            <li>Horarios</li>
            <li>Listados de precios</li>
            <li>Resultados académicos</li>
            <li>Comparativas de características</li>
          </ul>

          <div className="callout">
            Si la información se entiende mejor como tarjetas, listas o texto,
            probablemente <strong>NO necesita una tabla</strong>.
          </div>
        </div>

        {/* 2 */}
        <div className="bloque">
          <h3>2) Estructura básica de una tabla</h3>

          <pre className="esquema-textual">
            <code>{`<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
</table>`}</code>
          </pre>

          <ul>
            <li>
              <code>&lt;table&gt;</code>: contenedor de la tabla
            </li>
            <li>
              <code>&lt;tr&gt;</code>: fila
            </li>
            <li>
              <code>&lt;th&gt;</code>: celda de encabezado
            </li>
            <li>
              <code>&lt;td&gt;</code>: celda de datos
            </li>
          </ul>

          <div className="callout tip">
            Visualmente puede verse “igual”, pero semánticamente <code>&lt;th&gt;</code>{" "}
            no es lo mismo que <code>&lt;td&gt;</code>.
          </div>
        </div>

        {/* 3 */}
        <div className="bloque">
          <h3>3) Partes semánticas: thead, tbody y tfoot</h3>

          <p>Para tablas reales, separa la información por bloques:</p>

          <pre className="esquema-textual">
            <code>{`<table>
  <thead>...</thead>
  <tbody>...</tbody>
  <tfoot>...</tfoot>
</table>`}</code>
          </pre>

          <ul>
            <li>
              <code>thead</code>: encabezados
            </li>
            <li>
              <code>tbody</code>: datos principales
            </li>
            <li>
              <code>tfoot</code>: totales o resúmenes
            </li>
          </ul>

          <div className="callout">
            Esto mejora accesibilidad, mantenimiento y lectura por lectores de pantalla.
          </div>
        </div>

        {/* 4 */}
        <div className="bloque">
          <h3>4) El título de la tabla: &lt;caption&gt;</h3>

          <p>
            <code>&lt;caption&gt;</code> describe el contenido de la tabla y es
            especialmente importante para accesibilidad.
          </p>

          <pre className="esquema-textual">
            <code>{`<table>
  <caption>Notas finales del curso</caption>
  ...
</table>`}</code>
          </pre>

          <div className="callout tip">
            El <code>caption</code> se lee antes que la tabla por los lectores de pantalla.
          </div>
        </div>

        {/* 5 */}
        <div className="bloque">
          <h3>5) Accesibilidad: th y scope</h3>

          <p>
            Para que una tabla sea accesible, cada celda de datos debe poder asociarse
            a su encabezado (columna y/o fila).
          </p>

          <pre className="esquema-textual">
            <code>{`<th scope="col">Alumno</th>
<th scope="col">Nota</th>

<th scope="row">Lucía</th>`}</code>
          </pre>

          <ul>
            <li>
              <code>scope="col"</code>: encabezado de columna
            </li>
            <li>
              <code>scope="row"</code>: encabezado de fila
            </li>
          </ul>

          <div className="callout warn">
            En tablas complejas (múltiples niveles de encabezado) se puede necesitar{" "}
            <code>headers</code> + <code>id</code>. Para este nivel, domina bien <code>scope</code>.
          </div>
        </div>

        {/* 6 */}
        <div className="bloque">
          <h3>6) Errores comunes con tablas</h3>

          <ul>
            <li>❌ Usar tablas para maquetar la web</li>
            <li>❌ No usar <code>th</code> (todo en <code>td</code>)</li>
            <li>❌ Tablas sin <code>caption</code></li>
            <li>❌ Tablas enormes sin <code>thead/tbody</code> (peor lectura)</li>
          </ul>

          <pre className="esquema-textual">
            <code>{`<!-- ❌ Incorrecto: tabla usada para layout -->
<table>
  <tr>
    <td>Menú</td>
    <td>Contenido</td>
  </tr>
</table>`}</code>
          </pre>

          <div className="callout">
            Hoy el diseño se hace con CSS (Flexbox / Grid), no con tablas.
          </div>
        </div>

        {/* 7 */}
        <div className="bloque">
          <h3>7) Cuándo SÍ y cuándo NO usar tablas</h3>

          {/* ✅ wrapper accesible para scroll en móvil */}
          <div className="table-wrap" role="region" aria-label="Cuándo usar tablas" tabIndex={0}>
            <table className="table table-uf">
              <caption>Decisión rápida: ¿tabla o no?</caption>
              <thead>
                <tr>
                  <th scope="col">Situación</th>
                  <th scope="col">¿Tabla?</th>
                  <th scope="col">Por qué</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Horarios</td>
                  <td>✅ Sí</td>
                  <td>Datos cruzados (hora × día)</td>
                </tr>
                <tr>
                  <td>Formulario</td>
                  <td>❌ No</td>
                  <td>Es interacción, no datos tabulares</td>
                </tr>
                <tr>
                  <td>Tarjetas de productos</td>
                  <td>❌ No</td>
                  <td>Son bloques independientes (mejor Grid)</td>
                </tr>
                <tr>
                  <td>Comparativa técnica</td>
                  <td>✅ Sí</td>
                  <td>Comparación por columnas muy clara</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 8 */}
        <div className="bloque">
          <h3>8) Ejemplo completo: tabla de horario</h3>

          <p>
            Un uso habitual de las tablas es representar <strong>horarios</strong>, ya que
            los datos se organizan claramente en filas (horas) y columnas (días).
          </p>

          <div className="callout tip">
            Ejemplo de <strong>uso correcto</strong>: incluye <code>caption</code> y encabezados con <code>scope</code>.
          </div>

          <div className="table-wrap" role="region" aria-label="Horario semanal" tabIndex={0}>
            <table className="table table-uf table-zebra">
              <caption>Horario semanal del curso UF1841</caption>

              <thead>
                <tr>
                  <th scope="col">Hora</th>
                  <th scope="col">Lunes</th>
                  <th scope="col">Martes</th>
                  <th scope="col">Miércoles</th>
                  <th scope="col">Jueves</th>
                  <th scope="col">Viernes</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">08:00 – 09:00</th>
                  <td>HTML</td>
                  <td>HTML</td>
                  <td>CSS</td>
                  <td>CSS</td>
                  <td>Repaso</td>
                </tr>

                <tr>
                  <th scope="row">09:00 – 10:00</th>
                  <td>HTML</td>
                  <td>Formularios</td>
                  <td>CSS</td>
                  <td>Maquetación</td>
                  <td>Ejercicios</td>
                </tr>

                <tr>
                  <th scope="row">10:00 – 11:00</th>
                  <td>Tablas</td>
                  <td>Formularios</td>
                  <td>Responsive</td>
                  <td>Grid</td>
                  <td>Proyecto</td>
                </tr>

                <tr>
                  <th scope="row">11:00 – 11:30</th>
                  <td colSpan={5} className="cell-break">
                    ☕ Descanso
                  </td>
                </tr>

                <tr>
                  <th scope="row">11:30 – 12:30</th>
                  <td>Práctica</td>
                  <td>Práctica</td>
                  <td>Práctica</td>
                  <td>Práctica</td>
                  <td>Evaluación</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan={6} className="muted">
                    * Ejemplo didáctico para practicar caption, scope y colSpan.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <details className="dd" style={{ marginTop: "1rem" }}>
            <summary>Ver el código del horario (tal cual se usaría)</summary>
            <div className="dd-body">
              <pre className="esquema-textual">
                <code>{`<div class="table-wrap" role="region" aria-label="Horario semanal" tabindex="0">
  <table class="table table-uf table-zebra">
    <caption>Horario semanal del curso UF1841</caption>
    <thead>
      <tr>
        <th scope="col">Hora</th>
        <th scope="col">Lunes</th>
        <th scope="col">Martes</th>
        <th scope="col">Miércoles</th>
        <th scope="col">Jueves</th>
        <th scope="col">Viernes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">08:00 – 09:00</th>
        <td>HTML</td>
        <td>HTML</td>
        <td>CSS</td>
        <td>CSS</td>
        <td>Repaso</td>
      </tr>
      <tr>
        <th scope="row">11:00 – 11:30</th>
        <td colspan="5">☕ Descanso</td>
      </tr>
    </tbody>
  </table>
</div>`}</code>
              </pre>
            </div>
          </details>

          <div className="callout">
            Observa:
            <ul>
              <li>La tabla tiene <strong>caption</strong> descriptivo.</li>
              <li>Los días usan <code>th scope="col"</code>.</li>
              <li>Las horas usan <code>th scope="row"</code>.</li>
              <li>El descanso se indica con <code>colSpan</code>.</li>
              <li>En móvil, <code>.table-wrap</code> permite scroll horizontal sin romper el layout.</li>
            </ul>
          </div>
        </div>

        {/* RESUMEN */}
        <div className="resumen-final">
          <p>
            <strong>Resumen:</strong> Las tablas HTML se usan para mostrar datos estructurados.
            Deben construirse con semántica correcta (<code>caption</code>, <code>thead</code>,{" "}
            <code>tbody</code>, <code>th</code>) y nunca emplearse para maquetar páginas.
          </p>
        </div>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
