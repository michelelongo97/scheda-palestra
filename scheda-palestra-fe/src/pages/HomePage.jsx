import axios from "../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  const [schede, setSchede] = useState([]);

  const fetchSchede = () => {
    axios.get("/schede").then((res) => {
      setSchede(res.data);
    });
  };

  useEffect(fetchSchede, []);

  return (
    <>
      <div className="container">
        <div className="cards-container">
          {schede.map((scheda) => (
            <div className="card" key={scheda.id}>
              <Link to={`/scheda/${scheda.id}`}>
                <img
                  src={`${import.meta.env.VITE_BE_URL}${scheda.image}`}
                  alt={scheda.nome}
                />
                <h3>{scheda.nome}</h3>
                <p>{scheda.livello}</p>
                <p>{scheda.durata}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
