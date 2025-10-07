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
        <div className="card">
          {schede.map((scheda) => (
            <div key={scheda.id}>
              <Link to={`/scheda/${scheda.id}`}>
                <h3>{scheda.nome}</h3>
                <img
                  src={`${import.meta.env.VITE_BE_URL}${scheda.image}`}
                  alt={scheda.nome}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
