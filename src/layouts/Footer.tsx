import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import "./layouts.css";

function Footer () {
  const socials = [
    {
      id: 1,
      link: "https://linkedin.com/in/jorgeluiscameo",
      alias: "linkedin",
    },
    {
      id: 2,
      link: "https://medium.com/jorgeluiscameo",
      alias: "medium",
    },
    {
      id: 3,
      link: "https://github.com/jorgel6m02",
      alias: "github",
    },
  ];

  function renderSocialIcon (alias: string) {
    const socialIcons = {
      "github": <FaGithub size="2.5em"/>,
      "medium": <FaMediumM size="2.5em"/>,
      "linkedin": <FaLinkedin size="2.5em"/>,
    };

    return socialIcons?.[alias];
  }

  return (
    <footer>
      <div className="footer__container">
        {socials.map((social) => (
          <div className="footer__container__col" key={social.id}>
            <a className="footer__col__link" href={social.link}>
              {renderSocialIcon(social.alias)}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
