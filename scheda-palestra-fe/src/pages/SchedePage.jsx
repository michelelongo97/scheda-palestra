import axios from "../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [schede, setSchede] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchSchede = async () => {
    try {
      const res = await axios.get("/schede");
      setSchede(res.data);
    } catch (err) {
      setError("Impossibile caricare le schede");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSchede();
  }, []);

  {
    /* FUNZIONE PER ELIMINARE SCHEDA 
    const handleDelete = async (id) => {
    const conferma = window.confirm(
      "Sei sicuro di voler eliminare questa scheda?"
    );
    if (!conferma) return;

    try {
      await axios.delete(`/schede/${id}`);
      setSchede((prevSchede) =>
        prevSchede.filter((scheda) => scheda.id !== id)
      );
      alert("Scheda eliminata con successo!");
    } catch (error) {
      console.error("Errore durante eliminazione", error);
      alert("Errore durante l'eliminazione della scheda");
    }
  };
    */
  }

  return (
    <div className="container">
      {/* Loading */}
      {loading ? (
        <p>Caricamento...</p>
      ) : error ? (
        // Errore
        <p>{error}</p>
      ) : schede.length === 0 ? (
        // Nessuna scheda
        <div className="card">
          <h3>Nessuna scheda trovata.</h3>
          <button className="btn">
            <Link to="/nuova">Crea la tua prima scheda!</Link>
          </button>
        </div>
      ) : (
        // Lista schede
        <div className="cards-container">
          {schede.map((scheda) => (
            <div className="card" key={scheda.id}>
              <Link to={`/scheda/${scheda.id}`}>
                <img
                  src={
                    scheda.image
                      ? `${import.meta.env.VITE_BE_URL}${scheda.image}`
                      : "images/default.jpg"
                  }
                  alt={scheda.nome}
                  className="card-img"
                />

                <h3>{scheda.nome}</h3>
                <p>{scheda.livello || "Livello non specificato"}</p>
                <p>{scheda.durata || "Durata non disponibile"}</p>
              </Link>

              <button
                onClick={() => navigate(`/scheda/${scheda.id}`)}
                className="btn"
              >
                Guarda Scheda
              </button>
              {/*
              BOTTONE PER ELIMINARE SCHEDA COLLEGATO ALLA FUNZIONE
              <button
                className="btn-danger"
                onClick={() => handleDelete(scheda.id)}
              >
                Elimina scheda
              </button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
