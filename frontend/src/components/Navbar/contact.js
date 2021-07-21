import React from "react";
import "./style.css";
import mypic from "./mypic.png";

const Contact = () => {
  return (
    <div class="container">
      <aside class="profile-card">
        <header>
          <a target="_blank" href="#">
            <img src={mypic} class="hoverZoomLink" />
          </a>

          <h1>Mahesh Abeykoon</h1>
        </header>

        <div class="profile-bio">
          <p>
            Hei You're always welcome to MAHESH blog article web Application.
            This is something very new experience for you to wirte an aricle or
            collect some essential knowlage about some feild{" "}
          </p>
        </div>
      </aside>
      <div class="card">
        <div class="content">
          <h2>GitHub</h2>

          <p>
            Github is a web-based platform used for version control. Git
            simplifies the process of working with other people and makes it
            easy to collaborate on projects.
          </p>
          <a href="https://github.com/Mah-eshh"> Connect</a>
        </div>
      </div>

      <div class="card"></div>

      <div class="card">
        <div class="content">
          <h2>Facebook</h2>

          <p>
            Facebook is a social networking site that makes it easy for you to
            connect with me.
          </p>
          <a href="https://www.facebook.com/Mahesh0Abeykoon"> Connect</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
