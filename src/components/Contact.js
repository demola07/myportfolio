import React, { Component } from "react";
import {
  Grid,
  Cell,
  ListItemContent,
  ListItem,
  List,
  Textfield,
  Button
} from "react-mdl";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: {
        name: "",
        email: "",
        message: ""
      },
      status: {
        success: false,
        fail: false
      },
      responseMessage: ""
    };
    this.baseState = this.state;
    // this.baseState1 = this.state.msg;
  }
  handleChange = event => {
    let msgs = this.state.msg;
    msgs[event.target.id] = event.target.value;

    this.setState({
      msg: msgs
    });
    console.log(this.state);
    console.log(this.state.msg);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Contact me: </h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Lato,'Open sans'",
                      fontWeight: "bold"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    08069459084
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Lato,'Open sans'",
                      fontWeight: "bold"
                    }}
                  >
                    <i className="fas fa-envelope" aria-hidden="true" />
                    demolasobaki@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Lato,'Open sans'",
                      fontWeight: "bold"
                    }}
                  >
                    <i className="fab fa-skype" aria-hidden="true" />
                    demola07
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Lato,'Open sans'",
                      fontWeight: "bold"
                    }}
                  >
                    <i className="fas fa-address-card" aria-hidden="true" />
                    Lagos, Nigeria
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <Cell col={6}>
            <h2>Send me a message: </h2>
            <hr />
            <form>
              <Textfield
                onChange={this.handleChange}
                value={this.state.msg.name}
                label="Name"
                floatingLabel
                style={{ width: "400px" }}
              />
              <br />
              <Textfield
                onChange={this.handleChange}
                value={this.state.msg.email}
                label="Email"
                floatingLabel
                style={{ width: "400px" }}
              />
              <br />
              <Textfield
                onChange={this.handleChange}
                value={this.state.msg.message}
                label="Message"
                rows={3}
                style={{ width: "400px" }}
              />
              <br />
              <Button type="submit" raised ripple>
                Send
              </Button>
            </form>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
