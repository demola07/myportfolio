import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "40px"
              }}
              to="/"
            >
              Ademola Sobaki
            </Link>
          }
          scroll
        >
          <Navigation>
            <NavLink
              to="/aboutme"
              activeStyle={{ color: "black", fontSize: "20px" }}
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              activeStyle={{ color: "black", fontSize: "20px" }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={{ color: "black", fontSize: "20px" }}
            >
              Contact
            </NavLink>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "gray" }} to="/">
              Ademola Sobaki
            </Link>
          }
        >
          <Navigation>
            <NavLink
              to="/aboutme"
              activeStyle={{ color: "black", fontSize: "20px" }}
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              activeStyle={{ color: "black", fontSize: "20px" }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={{ color: "black", fontSize: "20px" }}
            >
              Contact
            </NavLink>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
