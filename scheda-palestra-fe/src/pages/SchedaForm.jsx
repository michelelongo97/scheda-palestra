import { useState } from "react";

const initialFormData = {
  nome: "",
  image: "",
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
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
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
    console.log(formData.esercizi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
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

        <label htmlFor="nome">Immagine</label>
        <input
          type="text"
          name="image"
          placeholder="Inserisci url immagine"
          value={formData.image}
          onChange={(e) => handleField("image", e.target.value)}
        />

        <h3>Esercizi</h3>

        {formData.esercizi.map((ex, index) => (
          <div key={index} className="esercizio">
            <label htmlFor="esercizio">Nome esercizio</label>
            <input
              type="text"
              placeholder="Inserisci nome esercizio"
              value={ex.nome}
              onChange={(e) => handleFieldEx(index, "nome", e.target.value)}
              required
            />

            <label htmlFor="serie">Numero di serie</label>
            <input
              type="number"
              placeholder="Inserisci numero di serie"
              value={ex.serie}
              onChange={(e) => handleFieldEx(index, "serie", e.target.value)}
              required
            />

            <label htmlFor="ripetizioni">Numero di ripetizioni</label>
            <input
              type="number"
              placeholder="Inserisci numero ripetizioni"
              value={ex.ripetizioni}
              onChange={(e) =>
                handleFieldEx(index, "ripetizioni", e.target.value)
              }
              required
            />

            <label htmlFor="peso">Peso</label>
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
