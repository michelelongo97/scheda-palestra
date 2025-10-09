import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <h5>Scheda Palestra</h5>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      <Link to="/nuova">
        <button className="btn">Aggiungi Scheda</button>
      </Link>
    </header>
  );
}
