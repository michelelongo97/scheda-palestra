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
      <h1>Home</h1>
      <div className="container">
        {schede.map((scheda) => (
          <div key={scheda.id}>
            <Link to={`/scheda/${scheda.id}`}>{scheda.nome}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
