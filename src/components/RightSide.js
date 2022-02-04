import React from "react";
import "./RightSide.css";

function RightSide() {
  return (
    <div className="RightSide">
      <div className="projects">
        <h3 className="h3_title">Projects</h3>

        <h4 className="h4_title">Portfolio</h4>
        <div className="div_project">
          <h5 className="heading">github link:</h5>
          <a
            href="https://github.com/kiraanikeev/Portfolio"
            className="h5_title"
          >
            https://github.com/kiraanikeev/Portfolio
          </a>
        </div>
        <div className="div_project">
          <h5 className="heading">description:</h5>
          <p className="h5_title">
            It is an app with convenient navigation of accomplished projects
            using a slider. Contains functions for switching to different themes
            and languages
          </p>
        </div>
        <div className="div_project">
          <h5 className="heading">technology:</h5>
          <p className="h5_title">
            React(useState, useEffect, Suspense),
            Ajax(fetch(GET,PUT,POST,DELETE)), localStorage, setInterval,
            i18next, CSS(FLEX, GRID, Responsive design){" "}
          </p>
        </div>

        <h4 className="h4_title">MESTO (React, version with authorization)</h4>
        <div className="div_project">
          <h5 className="heading">github link:</h5>
          <a
            href="https://github.com/kiraanikeev/mesto-with-authorization"
            className="h5_title"
          >
            https://github.com/kiraanikeev/mesto-with-authorization
          </a>
        </div>
        <div className="div_project">
          <h5 className="heading">description:</h5>
          <p className="h5_title">
            The project was carried out in the process of studying at
            Yandex.Practicum. It is an interactive page for posting photos with
            the opportunity to edit a profile, delete publication, like and view
            the pictures, opportunity to sign up and log in users
          </p>
        </div>
        <div className="div_project">
          <h5 className="heading">technology:</h5>
          <p className="h5_title">
            React(useState, useEffect, useContext, useHistory, HOC, router),
            Ajax(fetch(GET,PUT,POST,DELETE)), localStorage, CSS(FLEX, GRID,
            Responsive design)
          </p>
        </div>

        <h4 className="h4_title">Table with back-end</h4>
        <div className="div_project">
          <h5 className="heading">github link:</h5>
          <a href="https://github.com/kiraanikeev/Table-with-back-end" className="h5_title">
          https://github.com/kiraanikeev/Table-with-back-end
          </a>
        </div>
        <div className="div_project">
          <h5 className="heading">description:</h5>
          <p className="h5_title">
          The app receives the database from the created server and provides the search result using three-level filtering
          </p>
        </div>
        <div className="div_project">
          <h5 className="heading">technology:</h5>
          <p className="h5_title">
          FRONT: React(useState, useEffect, pagination, validation), Axios, CSS(FLEX, Responsive design). BACK: MongoDB, Express js
          </p>
        </div>

        <h4 className="h4_title">Kirill's Pizza</h4>
        <div className="div_project">
          <h5 className="heading">github link:</h5>
          <a
            href="https://github.com/kiraanikeev/Kirill-s-Pizza"
            className="h5_title"
          >
            https://github.com/kiraanikeev/Kirill-s-Pizza
          </a>
        </div>
        <div className="div_project">
          <h5 className="heading">description:</h5>
          <p className="h5_title">
            Kirill's Pizza is a SPA simulating a pizza ordering site with the
            opportunity to add an order to the basket
          </p>
        </div>
        <div className="div_project">
          <h5 className="heading">technology:</h5>
          <p className="h5_title">
            React(useState, useEffect, useContext, router), CSS(FLEX, GRID,
            Responsive design), localStorage
          </p>
        </div>

        <h4 className="h4_title">Todo-app</h4>
        <div className="div_project">
          <h5 className="heading">github link:</h5>
          <a
            href="https://github.com/kiraanikeev/Todo-app"
            className="h5_title"
          >
            https://github.com/kiraanikeev/Todo-app
          </a>
        </div>
        <div className="div_project">
          <h5 className="heading">description:</h5>
          <p className="h5_title">
            It is an application for writing tasks with the opportunity to mark
            completed, delete and edit labels
          </p>
        </div>
        <div className="div_project">
          <h5 className="heading">technology:</h5>
          <p className="h5_title">
            React(useState, useEffect), CSS(FLEX, Responsive design),
            localStorage
          </p>
        </div>

        <h4 className="h4_title">Integration of WebSocket with Redux Saga</h4>
        <div className="div_project">
          <h5 className="heading">github link:</h5>
          <a
            href="https://github.com/kiraanikeev/Integration-of-WS-with-Redux-Saga"
            className="h5_title"
          >
            https://github.com/kiraanikeev/Integration-of-WS-with-Redux-Saga
          </a>
        </div>
        <div className="div_project">
          <h5 className="heading">description:</h5>
          <p className="h5_title">
          An event channel is created on Redux-Saga and with each response from WS, information from the server is conveyed to the user
          </p>
        </div>
        <div className="div_project">
          <h5 className="heading">technology:</h5>
          <p className="h5_title">React(react-window), Redux(useSelector, useDispatch, reselect), Redux-Saga(eventChannel) localStorage, WebSocket</p>
        </div>
      </div>

      <div className="div_project">
        <h5 className="heading strong">Note:</h5>
        <p className="h5_title strong">
          The entire list of projects can be found on github
        </p>
      </div>

      <h3 className="h3_title">Experience</h3>

      <div className="div_project">
        <h5 className="time">March 2021 — december 2021</h5>
        <p className="h5_title">
          <strong>Yandex Practicum</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">
          <strong>Front-end developer (training)</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title  NoStrong">
          Training and development of websites using a different stack of
          technologies ( HTML, CSS, JavaScript, ReactJS)
        </p>
      </div>

      <div className="div_project">
        <h5 className="time">August 2013 — december 2020</h5>
        <p className="h5_title">
          <strong>Travel agency "RossTur" (own branch)</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">
          <strong>Working with clients and documentation</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <ul className="h5_title">
          <li className="li">consulting and communication with clients</li>
          <li className="li">searching and booking of tours</li>
          <li className="li  NoStrong">conclusion of contracts</li>
        </ul>
      </div>

      <div className="div_project">
        <h5 className="time">August 2011 — july 2012</h5>
        <p className="h5_title">
          <strong className="strong">GE Money Bank</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">
          <strong>Underwriter</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <ul className="h5_title">
          <li className="li">
            online review of customer profiles for granting a loan
          </li>
          <li className="li">
            checking information about the borrower: analyzing personal data and
            provided documents, making phone calls
          </li>
          <li className="li">making decisions about potential borrowers</li>
        </ul>
      </div>

      <h3 className="h3_title">Education</h3>

      <div className="div_project">
        <h5 className="time">2013</h5>
        <p className="h5_title">
          <strong>Kazan Federal University</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">
          Economic Department, Business Informatics, master of business
          informatics
        </p>
      </div>

      <div className="div_project">
        <h5 className="time">2011</h5>
        <p className="h5_title">
          <strong>Kazan Federal University</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">
          Economic Department, Business Informatics, bachelor of busines
          informatics
        </p>
      </div>

      <h3 className="h3_title">Professional development, courses</h3>

      <div className="div_project">
        <h5 className="time">2021</h5>
        <p className="h5_title">
          <strong>Go! English</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">English Language Courses</p>
      </div>

      <div className="div_project">
        <h5 className="time">2021</h5>
        <p className="h5_title">
          <strong>ItGid</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">
          ReactJS and Redux (Redux Toolkit) study course
        </p>
      </div>

      <div className="div_project">
        <h5 className="time">2020</h5>
        <p className="h5_title">
          <strong>LF School</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">English Language Courses</p>
      </div>

      <div className="div_project">
        <h5 className="time">2007</h5>
        <p className="h5_title">
          <strong>MOK MYK No. 1, Surgut city</strong>
        </p>
      </div>
      <div className="div_project">
        <h5 className="time"></h5>
        <p className="h5_title">Basics of information technology</p>
      </div>
    </div>
  );
}

export default RightSide;
