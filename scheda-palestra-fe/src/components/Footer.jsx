import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* COLONNA SOCIAL */}
          <div className="col footer-social">
            <h4>Seguimi sui social</h4>
            <ul>
              <li>
                <a
                  href={import.meta.env.VITE_SOCIAL_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    style={{ color: "75dac7" }}
                  />
                </a>
              </li>

              <li>
                <a
                  href={import.meta.env.VITE_SOCIAL_FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="xl"
                    style={{ color: "75dac7" }}
                  />
                </a>
              </li>

              <li>
                <a
                  href={import.meta.env.VITE_SOCIAL_YOUTUBE}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="xl"
                    style={{ color: "75dac7" }}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* COLONNA SPONSOR */}
          <div className="col">
            <h4>Sponsor</h4>
            <ul>
              <li>Sponsor 1</li>
              <li>Sponsor 2</li>
              <li>Sponsor 3</li>
              <li>Sponsor 4</li>
            </ul>
          </div>
          {/* COLONNA INFO LEGALI */}
          <div className="col footer-info">
            <h4>Informazioni</h4>
            <p>FisioFitness Dr. Costantino Picciallo</p>
            <p>P.IVA 00000000000</p>
            <p>Email: email@email.it</p>
            <p>Sede: Gravina in Puglia (BA), Italia</p>
          </div>
        </div>
        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Fisiofitness – Tutti i diritti
            riservati
          </p>
        </div>
      </div>
    </footer>
  );
}
