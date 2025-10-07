const schede = [
  {
    id: 1,
    nome: "Forza - Parte Superiore",
    image: "/images/1petto.jpg",
    esercizi: [
      { id: 1, nome: "Panca piana", serie: 5, ripetizioni: 5, peso: 60 },
      {
        id: 2,
        nome: "Trazioni alla sbarra",
        serie: 4,
        ripetizioni: 8,
        peso: null,
      },
      { id: 3, nome: "Military press", serie: 4, ripetizioni: 6, peso: 35 },
    ],
  },
  {
    id: 2,
    nome: "Forza - Parte Inferiore",
    image: "/images/2gambe.jpg",
    esercizi: [
      { id: 1, nome: "Squat", serie: 5, ripetizioni: 5, peso: 80 },
      { id: 2, nome: "Stacco da terra", serie: 4, ripetizioni: 5, peso: 100 },
      { id: 3, nome: "Affondi", serie: 3, ripetizioni: 10, peso: 20 },
    ],
  },
  {
    id: 3,
    nome: "Ipertrofia Petto e Tricipiti",
    image: "/images/3petto.jpg",

    esercizi: [
      { id: 1, nome: "Panca inclinata", serie: 4, ripetizioni: 10, peso: 40 },
      { id: 2, nome: "Croci con manubri", serie: 3, ripetizioni: 12, peso: 10 },
      { id: 3, nome: "French press", serie: 3, ripetizioni: 12, peso: 15 },
    ],
  },
  {
    id: 4,
    nome: "Ipertrofia Schiena e Bicipiti",
    image: "/images/4schiena.jpg",

    esercizi: [
      {
        id: 1,
        nome: "Rematore con bilanciere",
        serie: 4,
        ripetizioni: 10,
        peso: 45,
      },
      { id: 2, nome: "Lat machine", serie: 4, ripetizioni: 12, peso: 55 },
      { id: 3, nome: "Curl con manubri", serie: 3, ripetizioni: 12, peso: 12 },
    ],
  },
  {
    id: 5,
    nome: "Spalle e Core",
    image: "/images/5spalle.jpg",
    esercizi: [
      { id: 1, nome: "Alzate laterali", serie: 4, ripetizioni: 12, peso: 8 },
      { id: 2, nome: "Arnold press", serie: 3, ripetizioni: 10, peso: 15 },
      { id: 3, nome: "Plank", serie: 3, ripetizioni: 60, peso: null }, // secondi
    ],
  },
  {
    id: 6,
    nome: "Gambe Completo",
    image: "/images/6gambe.jpg",
    esercizi: [
      { id: 1, nome: "Leg press", serie: 4, ripetizioni: 12, peso: 100 },
      { id: 2, nome: "Leg curl", serie: 3, ripetizioni: 15, peso: 40 },
      { id: 3, nome: "Polpacci in piedi", serie: 4, ripetizioni: 20, peso: 30 },
    ],
  },
  {
    id: 7,
    nome: "Circuito Brucia Grassi",
    image: "/images/7grassi.jpg",

    esercizi: [
      { id: 1, nome: "Burpees", serie: 4, ripetizioni: 15, peso: null },
      {
        id: 2,
        nome: "Mountain climbers",
        serie: 4,
        ripetizioni: 30,
        peso: null,
      },
      { id: 3, nome: "Jump squat", serie: 4, ripetizioni: 20, peso: null },
    ],
  },
  {
    id: 8,
    nome: "Allenamento Funzionale",
    image: "/images/8funzionale.jpg",

    esercizi: [
      { id: 1, nome: "Kettlebell swing", serie: 4, ripetizioni: 15, peso: 20 },
      { id: 2, nome: "Trazioni prone", serie: 3, ripetizioni: 10, peso: null },
      { id: 3, nome: "Push-up", serie: 4, ripetizioni: 20, peso: null },
    ],
  },
  {
    id: 9,
    nome: "Cardio + Core",
    image: "/images/9cardio.jpg",

    esercizi: [
      {
        id: 1,
        nome: "Corsa su tapis roulant",
        serie: 1,
        ripetizioni: 20,
        peso: null,
      }, // minuti
      {
        id: 2,
        nome: "Addominali crunch",
        serie: 3,
        ripetizioni: 25,
        peso: null,
      },
      { id: 3, nome: "Russian twist", serie: 3, ripetizioni: 30, peso: 5 },
    ],
  },
  {
    id: 10,
    nome: "Full Body Principianti",
    image: "/images/10full.jpg",

    esercizi: [
      { id: 1, nome: "Panca piana", serie: 3, ripetizioni: 12, peso: 30 },
      { id: 2, nome: "Leg press", serie: 3, ripetizioni: 12, peso: 60 },
      { id: 3, nome: "Lat machine", serie: 3, ripetizioni: 12, peso: 40 },
    ],
  },
];

module.exports = schede;
