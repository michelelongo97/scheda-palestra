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
            <h4>Seguimi</h4>
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
          <div className="col footer-sponsor">
            <h4>I Nostri Partner</h4>
            <ul>
              <li>
                <a
                  href={import.meta.env.VITE_SPONSOR_MATERA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/matera-logo.png" alt="matera-logo" />
                </a>
              </li>
              <li>
                <a
                  href={import.meta.env.VITE_SPONSOR_GIANNELLI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/giannelli-logo.png" alt="giannelli-logo" />
                </a>
              </li>
              <li>
                <a
                  href={import.meta.env.VITE_SPONSOR_GALLERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/gallery-logo.png" alt="gallery-logo" />
                </a>
              </li>

              <li>
                <a
                  href={import.meta.env.VITE_SPONSOR_INTERNO34_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/interno34-logo.png" alt="interno34-logo" />
                </a>
              </li>
            </ul>
          </div>
          {/* COLONNA INFO LEGALI */}
          <div className="col footer-info">
            <h4>Informazioni</h4>
            <p>
              FisioFitness<br></br>Dr. Costantino Picciallo
            </p>
            <p>P.IVA: 08494380721</p>
            <p>email</p>
            <p>
              Via Palermo, 26<br></br> Gravina in Puglia (BA)
            </p>
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
