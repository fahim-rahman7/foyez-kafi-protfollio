import React from "react";
import {
  faBehance,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/foyez.kafi/" },
  { icon: faGithub, link: "https://github.com/foyezkafi" },
  { icon: faInstagram, link: "https://www.instagram.com/foyez_kafi/" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/foyezkafi/" },
  // { icon: faBehance, link: "https://behance.net" },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-3">
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="text-picto-primary hover:bg-picto-primary p-2 hover:text-white rounded-md transition duration-300"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-xl w-5 h-5"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;