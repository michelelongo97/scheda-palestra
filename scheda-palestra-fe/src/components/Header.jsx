import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <h5>FisioFitness</h5>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/schede">
              <span>Schede</span>
            </Link>
          </li>
          <li>
            <Link to="/nuova">
              <span>Aggiungi Scheda</span>
            </Link>
          </li>
          <li>
            <Link to={import.meta.env.VITE_MEET_URL}>
              <span>Prenota un appuntamento</span>
            </Link>
          </li>
          <li>
            <Link to="/chisiamo">
              <span>Chi Siamo</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
