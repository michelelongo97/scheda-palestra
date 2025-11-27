import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="header-top">
        <img className="logo" src="/images/logo.png" alt="logo" />

        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/schede" onClick={() => setMenuOpen(false)}>
              <span>Schede</span>
            </Link>
          </li>
          <li>
            <Link to="/nuova" onClick={() => setMenuOpen(false)}>
              <span>Aggiungi Scheda</span>
            </Link>
          </li>
          <li>
            <Link
              to={import.meta.env.VITE_MEET_URL}
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Prenota un appuntamento</span>
            </Link>
          </li>
          <li>
            <Link to="/chisiamo" onClick={() => setMenuOpen(false)}>
              <span>Chi Siamo</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
