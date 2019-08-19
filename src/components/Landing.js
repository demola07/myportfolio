import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import demola from "../images/demola.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT | NODEJS | EXPRESS |
                MONGODB | MYSQL | GIT
              </p>
              <div className="social-links">
                {/* Github */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github-square" />
                </a>
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/* twitter */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
