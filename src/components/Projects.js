import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTab: 0 };
  }

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project #1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://cdn.auth0.com/blog/react-js/react.png) center / cover"
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project #2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://cdn.auth0.com/blog/react-js/react.png) center / cover"
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project #3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://cdn.auth0.com/blog/react-js/react.png) center / cover"
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Vailla Javascript</h1>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Vanilla Javascript</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
