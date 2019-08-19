import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class Aboutme extends Component {
  render() {
    return (
      <div className="aboutme-page">
        <Grid className="aboutme">
          <Cell col={12}>
            <h2>Ademola Sobaki</h2>
            <img
              src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "50%", margin: "auto", paddingTop: ".5em" }}>
              I am a Full Stack Web Developer conversant with technologies such
              as MongoDB, Express, React, Node.js (MERN), and GIT.
            </p>
            <p style={{ width: "50%", margin: "auto", paddingTop: ".5em" }}>
              I have Experienced in building CRUD applications, RESTful APIs
              using Node.js and express, user auth.
            </p>{" "}
            <p style={{ width: "50%", margin: "auto", paddingTop: ".5em" }}>
              Common libraries of use: Axios, Redux, Mongoose, Express,
              Body-parser, React-router, Redux-thunk.
            </p>{" "}
            <p style={{ width: "50%", margin: "auto", paddingTop: ".5em" }}>
              Common use of UI libraries: Bootstrap 4, React-Bootstrap,
              Material-UI.
            </p>
            <p style={{ width: "50%", margin: "auto", paddingTop: ".5em" }}>
              I currently work as an Instructor, with the Nigerian Army School
              of Signals.
            </p>
            <a href="#">
              <p style={{ width: "50%", margin: "auto", paddingTop: ".5em" }}>
                View My RESUME
              </p>
            </a>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
