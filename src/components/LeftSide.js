import React from "react";
import "./LeftSide.css";
import foto from "../img/3.jpg";
import phone from "../img/phone-30-32.png";
import email from "../img/email-32.png";
import telega from "../img/telegram-3-32.png";
import git from "../img/github-9-32.png";
function LeftSide() {
  return (
    <div className="LeftSide">
      <img src={foto} className="foto" />
      <div className="contacts">
        <div className="contact">
          <img src={phone} className="icon" />
          <p className="contact_text">+7 995 330 10 09</p>
        </div>
        <div className="contact">
          <img src={email} className="icon" />
          <p className="contact_text">kiraanikeev@mail.ru</p>
        </div>
        <div className="contact">
          <img src={telega} className="icon" />
          <a href="https://t.me/kiraanikeev" className="contact_text">
            @kiraanikeev
          </a>
        </div>
        <div className="contact">
          <img src={git} className="icon" />
          <a href="https://github.com/kiraanikeev" className="contact_text">
            kiraanikeev
          </a>
        </div>
      </div>
      <div className="line_contacts"></div>
      <div>
        <h3 className="skills_title">Portfolio</h3>
        <div className="portfolio">
          <a
            href="https://portfolio-anikeev-kirill.herokuapp.com/"
            className="contact_portfolio"
          >
            portfolio-anikeev-kirill.herokuapp.com
          </a>
        </div>
      </div>

      <div className="line_contacts"></div>
      <div>
        <h3 className="skills_title">Skills</h3>
        <ul className="skills">
          <li className="skill">HTML / CSS / Responsive design</li>
          <li className="skill">JavaScript / ES6+</li>
          <li className="skill">React(Hooks, HOC, CSS-modules)</li>
          <li className="skill">Redux, Redux-Saga</li>
          <li className="skill">TypeScript</li>
          <li className="skill">Git</li>
          <li className="skill">MongoDB</li>
          <li className="skill">Ajax</li>
          <li className="skill">Webpack</li>
        </ul>
      </div>
      <div className="line_contacts"></div>
      <div className="languages">
        <h3 className="skills_title">Languages</h3>
        <p className="text_p">Russian — Native</p>
        <p className="text_p">English — B2 — Upper Intermediate</p>
      </div>
      <div className="line_contacts"></div>
      <h3 className="skills_title">About me</h3>
      <p className="about">
        I've always had a craving for programming. I studied Business
        Informatics at the university, during my education, I gained basic
        knowledge of C++, C#, SQL, algorithmization.
      </p>
      <p className="about">
        Then I started my own business and our ways with IT temporarily
        diverged. In 2020, the agency had to be closed.
      </p>
      <p className="about">
        It was a huge experience for me. I&nbsp;learned to take responsibility
        for my actions, to constantly learn and develop, to organize the
        workflow, to work in conditions of uncertainty and stress.
      </p>
      <p className="about">
        I gradually began to learn web development on my own, however,
        I&nbsp;lacked structure, so I went to study at Yandex Practicum. During
        10 months, I've obtained extensive knowledge and realized that this
        occupation is really suitable for me. I enjoy creating code in React.js
        and observing how the project "comes to life".
      </p>

    </div>
  );
}

export default LeftSide;
