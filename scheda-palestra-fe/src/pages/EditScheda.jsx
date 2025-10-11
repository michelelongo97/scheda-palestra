import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

export default function EditScheda() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    image: "",
    livello: "",
    durata: "",
    esercizi: [],
  });

  //Recupera i dati esistenti
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BE_URL}/schede/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.error("Errore nel recupero scheda:", err);
        alert("Scheda non trovata");
        navigate("/");
      });
  }, [id, navigate]);

  //Gestione campi generali
  const handleField = (fieldName, fieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  //Gestione campi esercizi
  const handleFieldEx = (index, fieldName, fieldValue) => {
    setFormData((prev) => {
      const updatedEx = [...prev.esercizi];
      updatedEx[index][fieldName] = fieldValue;
      return { ...prev, esercizi: updatedEx };
    });
  };

  //Aggiungi un esercizio
  const addEsercizio = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      esercizi: [
        ...prev.esercizi,
        { nome: "", serie: 0, ripetizioni: 0, peso: 0 },
      ],
    }));
  };

  //Salva modifiche
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const schedaDaSalvare = {
        ...formData,
        image:
          formData.image.trim() === "" ? "/images/default.jpg" : formData.image,
      };

      await axios.put(
        `${import.meta.env.VITE_BE_URL}/schede/${id}`,
        schedaDaSalvare
      );

      alert("Scheda modificata con successo!");
      navigate(`/scheda/${id}`);
    } catch (error) {
      console.error("Errore durante la modifica:", error);
      alert("Errore nel salvataggio delle modifiche");
    }
  };

  //Rendering
  return (
    <div className="container">
      <h2>Modifica scheda</h2>
      <form className="form-scheda" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={(e) => handleField("nome", e.target.value)}
          required
        />

        <label htmlFor="image">Immagine</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={(e) => handleField("image", e.target.value)}
        />

        <label htmlFor="livello">Livello</label>
        <select
          name="livello"
          value={formData.livello}
          onChange={(e) => handleField("livello", e.target.value)}
          required
        >
          <option value="">Seleziona livello</option>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzato">Avanzato</option>
        </select>

        <label htmlFor="durata">Durata</label>
        <input
          type="text"
          name="durata"
          value={formData.durata}
          onChange={(e) => handleField("durata", e.target.value)}
          required
        />

        <h3>Esercizi</h3>
        {formData.esercizi.map((ex, index) => (
          <div key={index} className="esercizio">
            <label>Nome esercizio</label>
            <input
              type="text"
              value={ex.nome}
              onChange={(e) => handleFieldEx(index, "nome", e.target.value)}
              required
            />

            <label>Serie</label>
            <input
              type="number"
              value={ex.serie}
              onChange={(e) => handleFieldEx(index, "serie", e.target.value)}
              required
            />

            <label>Ripetizioni</label>
            <input
              type="number"
              value={ex.ripetizioni}
              onChange={(e) =>
                handleFieldEx(index, "ripetizioni", e.target.value)
              }
              required
            />

            <label>Peso</label>
            <input
              type="number"
              value={ex.peso}
              onChange={(e) => handleFieldEx(index, "peso", e.target.value)}
            />
          </div>
        ))}

        <button className="btn" onClick={addEsercizio}>
          Aggiungi esercizio
        </button>
        <button className="btn" type="submit">
          Salva modifiche
        </button>
      </form>
    </div>
  );
}
