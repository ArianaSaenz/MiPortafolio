import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1 - Social Media */}
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a
  href="https://www.instagram.com/aari_hope?igsh=Y2F2cHk3ZTl3a210"
  target="_blank"
  rel="noopener noreferrer"
  className="social-insta flex items-center gap-2 hover:underline"
>
  <FaInstagram />
  <span>Instagram</span>
</a>

<a
  href="https://www.linkedin.com/in/ariana-saenz-84b131368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  className="social-linkedin flex items-center gap-2 hover:underline"
>
  <FaLinkedin />
  <span>LinkedIn</span>
</a>

<a
  href="https://github.com/ArianaSaenz"
  target="_blank"
  rel="noopener noreferrer"
  className="social-gitHub flex items-center gap-2 hover:underline"
>
  <FaGithub />
  <span>GitHub</span>
</a>

            
          </div>
        </div>

        {/* Columna 2 - About */}
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            A passionate web designer and developer focused on creativity and clean design
          </p>
        </div>

        {/* Columna 3 - CV */}
        <div className="footer-section">
          <h3>CV</h3>
          <a href="https://www.canva.com/design/DAGuIwGI_tk/5KJePmsbU16aJJtj1IA9fA/view?utm_content=DAGuIwGI_tk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hddd9580089" className="cv-link">
            Check my CV
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p>© 2025 Ariana Sáenz | All rights reserved 🌿</p>
      </div>
    </footer>
  );
}
