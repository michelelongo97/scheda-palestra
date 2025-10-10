import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function SchedaPage() {
  const [scheda, setScheda] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchScheda = () => {
    axios
      .get(`/schede/${id}`)
      .then((res) => {
        setScheda(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchScheda, [id, navigate]);

  const handleDelete = async () => {
    const conferma = window.confirm(
      "Sei sicuro di voler eliminare questa scheda?"
    );
    if (!conferma) return;

    try {
      await axios.delete(`/schede/${id}`);
      alert("Scheda eliminata con successo!");
      navigate("/");
    } catch (error) {
      console.error("Errore durante eliminazione", error);
      alert("Errore durante l'eliminazione della scheda");
    }
  };

  return (
    <div className="container">
      <div className="scheda-wrapper">
        <div className="scheda-image">
          <img
            src={`${import.meta.env.VITE_BE_URL}${scheda.image}`}
            alt={scheda.nome}
            className="scheda-img"
          />
        </div>
        <div className="scheda-info">
          <h2>{scheda.nome}</h2>
          <p className="scheda-desc">{scheda.descrizione}</p>
          <div className="scheda-meta">
            <span>Durata: {scheda.durata}</span>
            <span>Livello: {scheda.livello}</span>
          </div>
          <h3>Esercizi</h3>
          <ul>
            {scheda.esercizi?.map((es, index) => (
              <li key={index}>
                {es.nome} - {es.serie} x {es.ripetizioni}
              </li>
            ))}
          </ul>
          <button className="btn" onClick={() => navigate("/")}>
            Torna alla Home
          </button>
          <button
            className="btn"
            onClick={() => navigate(`/scheda/${scheda.id}/edit`)}
          >
            Modifica scheda
          </button>

          <button className="btn-danger" onClick={handleDelete}>
            Elimina scheda
          </button>
        </div>
      </div>
    </div>
  );
}
