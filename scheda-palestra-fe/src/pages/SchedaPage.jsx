import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function SchedaPage() {
  const [scheda, setScheda] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchScheda = async () => {
    try {
      const res = await axios.get(`/schede/${id}`);
      setScheda(res.data);
    } catch (err) {
      if (err.response?.status === 404) {
        navigate("/404");
      } else {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchScheda();
  }, [id, navigate]);

  {
    /* FUNZIONE PER ELIMINARE LA SCHEDA
    const handleDelete = async () => {
    const conferma = window.confirm("Vuoi davvero eliminare questa scheda?");
    if (!conferma) return;

    try {
      await axios.delete(`/schede/${id}`);
      alert("Scheda eliminata con successo!");
      navigate("/");
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
      alert("Errore durante l'eliminazione della scheda");
    }
  };
*/
  }
  if (!scheda) return <p>Caricamento...</p>;

  return (
    <div className="container">
      <div className="scheda-wrapper">
        <div className="scheda-image">
          <img
            src={
              scheda.image
                ? `${import.meta.env.VITE_BE_URL}${scheda.image}`
                : "/default.jpg"
            }
            alt={scheda.nome}
            className="scheda-img"
          />
        </div>
        <div className="scheda-info">
          <h2>{scheda.nome}</h2>
          <p className="scheda-desc">
            {scheda.descrizione || "Nessuna descrizione"}
          </p>
          <div className="scheda-meta">
            <span>Durata: {scheda.durata || "Non specificata"}</span>
            <span>Livello: {scheda.livello || "Non indicato"}</span>
          </div>

          <h3>Esercizi</h3>
          <ul>
            {scheda.esercizi?.length > 0 ? (
              scheda.esercizi.map((es, index) => (
                <li key={index}>
                  {es.nome} - {es.serie} x {es.ripetizioni}
                </li>
              ))
            ) : (
              <p>Nessun esercizio inserito</p>
            )}
          </ul>

          <button className="btn" onClick={() => navigate("/schede")}>
            Torna alle schede
          </button>
          <button className="btn" onClick={() => navigate("/")}>
            Torna alla Home
          </button>
          {/* BOTTONE ELIMINA SCHEDA COLLEGATO ALLA FUNZIONE
          <button className="btn-danger" onClick={handleDelete}>
            Elimina scheda
          </button>*/}
        </div>
      </div>
    </div>
  );
}
