import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="menu">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🏠</span>
        <span className="label">Inicio</span>
      </NavLink>

      <NavLink
        to="/tema/0"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🧑‍💻</span>
        <span className="label">Tema 0 · Entorno</span>
      </NavLink>

      <NavLink
        to="/tema/1"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🎯</span>
        <span className="label">Tema 1 · Diseño Web</span>
      </NavLink>

      <NavLink
        to="/tema/2"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🧩</span>
        <span className="label">Tema 2 · Prototipo</span>
      </NavLink>

      <NavLink
        to="/tema/3"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🏷️</span>
        <span className="label">Tema 3 · Lenguajes marcado</span>
      </NavLink>

      <NavLink
        to="/tema/4"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">📄</span>
        <span className="label">Tema 4 · Introduccion HTML</span>
      </NavLink>

      <NavLink
        to="/tema/5"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🔤</span>
        <span className="label">Tema 5 · Etiquetas</span>
      </NavLink>

      <NavLink
        to="/tema/6"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🧾</span>
        <span className="label">Tema 6 · Cabecera</span>
      </NavLink>

      <NavLink
        to="/tema/7"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🧱</span>
        <span className="label">Tema 7 · Cuerpo</span>
      </NavLink>

      <NavLink
        to="/tema/8"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🗺️</span>
        <span className="label">Tema 8 · Mapa de imagenes</span>
      </NavLink>

      <NavLink
        to="/tema/9"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">📊</span>
        <span className="label">Tema 9 · Tablas</span>
      </NavLink>

      <NavLink
        to="/tema/10"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">📝</span>
        <span className="label">Tema 10 · Formularios</span>
      </NavLink>

      <NavLink
        to="/tema/11"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">📎</span>
        <span className="label">Tema 11 · Footer</span>
      </NavLink>

      <NavLink
        to="/tema/12"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🖼️</span>
        <span className="label">Tema 12 · Insertar Imagenes</span>
      </NavLink>

      <NavLink
        to="/tema/13"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">📋</span>
        <span className="label">Tema 13 · Buenas practicas</span>
      </NavLink>

      <NavLink
        to="/tema/14"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <span aria-hidden="true">🧪</span>
        <span className="label">Tema 14 · Test de repaso HTML</span>
      </NavLink>
    </nav>
  );
}
