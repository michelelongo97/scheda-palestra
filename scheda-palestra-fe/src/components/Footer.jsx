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
          <div className="col">
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
            <ul>
              <li>Sponsor 1</li>
              <li>Sponsor 2</li>
              <li>Sponsor 3</li>
              <li>Sponsor 4</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
