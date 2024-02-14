import React from "react";
import s from "./Footer.module.css";
import { Link } from "react-router-dom";
import Inst from "../assets/instagram.svg";
import WA from "../assets/whatsapp.svg";

export default function Footer() {
  const icons = [
    {
      id: 1,
      icon: <img src={Inst} alt="Instagram" style={{ width: "50px" }} />,
      link: "https://www.instagram.com/",
    },
    {
      id: 2,
      icon: <img src={WA} alt="WhatsApp" style={{ width: "50px" }} />,
      link: "https://wa.me/1234567890",
    },
  ];

  return (
    <footer className="container">
      <h2>Contact</h2>
      <div className={s.contacts}>
        <div className={s.contact_color}>
          <h2 className={s.title}>Phone</h2>
          <Link className={s.phone} to="tel:+49 999 999 99 99">
            +49 999 999 99 99
          </Link>
        </div>

        <div className={s.contact_color}>
          <h2 className={s.title}>Socials</h2>
          <ul className={s.social_icons}>
            {icons.map((el) => (
              <li className={s.icon} key={el.id}>
                <Link to={el.link}>{el.icon}</Link>
                {el.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={s.contact_color}>
          <h2 className={s.title}>Address</h2>
          <address>
            <a
              href="https://www.google.com/maps?q=Linkstraße+2,+10785+Berlin,+Deutschland"
              className={s.phone}
            >
              <p className={s.phone}>Linkstraße 2, 8 OG, 10785,</p>
              <span className={s.phone}>Berlin, Deutschland</span>
            </a>
          </address>
        </div>

        <div className={s.contact_color}>
          <h2 className={s.title}>Working Hours</h2>
          <p className={s.phone}>24 hours a day</p>
        </div>
      </div>

      <div className={s.map_wrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4102804173835!2d13.372521312304544!3d52.507913737007804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1697622009373!5m2!1sde!2sde"
          className={s.map}
          title="Garden Shop Address"
        ></iframe>
      </div>
    </footer>
  );
}
