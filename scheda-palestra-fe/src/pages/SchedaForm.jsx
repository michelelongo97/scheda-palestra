import { useState } from "react";
import axios from "axios";

const initialFormData = {
  nome: "",
  image: "",
  livello: "",
  durata: "",
  esercizi: [
    {
      nome: "",
      serie: 0,
      ripetizioni: 0,
      peso: 0,
    },
  ],
};

export default function SchedaForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: fieldValue,
    }));
  };

  const handleFieldEx = (index, fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      const updatedEx = [...currentFormData.esercizi];
      updatedEx[index][fieldName] = fieldValue;
      return { ...currentFormData, esercizi: updatedEx };
    });
  };

  const addEsercizio = (e) => {
    e.preventDefault();
    setFormData((currentFormData) => ({
      ...currentFormData,
      esercizi: [
        ...currentFormData.esercizi,
        { nome: "", serie: 0, ripetizioni: 0, peso: 0 },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creiamo una copia pulita del form
    const schedaDaSalvare = { ...formData };

    // Se l'immagine è vuota, non inviarla
    if (!schedaDaSalvare.image.trim()) {
      delete schedaDaSalvare.image;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BE_URL}/schede`,
        schedaDaSalvare
      );
      console.log("Scheda salvata:", response.data);
      setFormData(initialFormData);
      alert("Scheda creata con successo!");
    } catch (error) {
      console.error("Errore durante il salvataggio della scheda", error);
      alert("Errore nel salvataggio della scheda");
    }
  };

  return (
    <div className="container">
      <h1>Nuova scheda</h1>
      <form className="form-scheda" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Inserisci nome scheda"
          value={formData.nome}
          onChange={(e) => handleField("nome", e.target.value)}
          required
        />

        <label htmlFor="image">Immagine</label>
        <input
          type="text"
          name="image"
          placeholder="Inserisci URL immagine (opzionale)"
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
          placeholder="Inserisci durata"
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
              placeholder="Inserisci nome esercizio"
              value={ex.nome}
              onChange={(e) => handleFieldEx(index, "nome", e.target.value)}
              required
            />

            <label>Numero di serie</label>
            <input
              type="number"
              placeholder="Inserisci numero di serie"
              value={ex.serie}
              onChange={(e) => handleFieldEx(index, "serie", e.target.value)}
              required
            />

            <label>Numero di ripetizioni</label>
            <input
              type="number"
              placeholder="Inserisci numero ripetizioni"
              value={ex.ripetizioni}
              onChange={(e) =>
                handleFieldEx(index, "ripetizioni", e.target.value)
              }
              required
            />

            <label>Peso</label>
            <input
              type="number"
              placeholder="Inserisci peso"
              value={ex.peso}
              onChange={(e) => handleFieldEx(index, "peso", e.target.value)}
            />
          </div>
        ))}

        <button className="btn" onClick={addEsercizio}>
          Aggiungi esercizio
        </button>
        <button className="btn" type="submit">
          Salva scheda
        </button>
      </form>
    </div>
  );
}
