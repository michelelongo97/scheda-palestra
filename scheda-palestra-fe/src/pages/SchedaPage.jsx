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

  return (
    <>
      <div className="container">
        <div className="scheda-dettaglio">
          <h2>{scheda.nome}</h2>
          {scheda.image && (
            <img
              src={`${import.meta.env.VITE_BE_URL}${scheda.image}`}
              alt={scheda.nome}
              className="scheda-img"
            />
          )}
          <p>{scheda.descrizione}</p>

          <h3>Esercizi</h3>
        </div>
      </div>
    </>
  );
}
