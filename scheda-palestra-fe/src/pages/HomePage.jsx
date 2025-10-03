import axios from "../api/axios";
import { useEffect } from "react";

export default function HomePage() {
  const fetchSchede = () => {
    axios.get("/schede").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(fetchSchede, []);

  return <h1>Home</h1>;
}
