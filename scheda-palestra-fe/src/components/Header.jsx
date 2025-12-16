import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="header-top">
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img className="logo" src="/images/logo.png" alt="logo" />
        </div>
        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            <span>Home</span>
          </li>
          <li
            onClick={() => {
              navigate("/schede");
              setMenuOpen(false);
            }}
          >
            <span>Schede</span>
          </li>
          {/*
          <li
            onClick={() => {
              navigate("/nuova");
              setMenuOpen(false);
            }}
          >
            <span>Aggiungi Scheda</span>
          </li>
        */}
          <li>
            <a
              href={import.meta.env.VITE_MEET_URL}
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prenota un appuntamento
            </a>
          </li>
          <li
            onClick={() => {
              navigate("/chisiamo");
              setMenuOpen(false);
            }}
          >
            <span>Chi Siamo</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
