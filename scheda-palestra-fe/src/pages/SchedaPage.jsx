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
      <h1>Scheda: {scheda.nome}</h1>
    </>
  );
}
