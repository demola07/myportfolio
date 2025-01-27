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
import Axios from "axios";

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
    msgs[event.target.name] = event.target.value;

    this.setState({
      msg: msgs
    });
    // console.log(this.state);
    console.log(this.state.msg);
  };

  handleSubmit = event => {
    event.preventDefault();
    Axios.post("http://localhost:6060/api/form", this.state.msg)
      .then(res => {
        const data = res.data;
        console.log(data);

        if (data.status) {
          this.setState({
            status: {
              success: true
            }
          });
        } else if (!data.status) {
          this.setState({
            status: {
              fail: true
            },
            responseMessage: data.error
          });
        } else {
          alert("Error");
        }
        setTimeout(() => {
          this.setState({
            msg: {
              name: "",
              email: "",
              message: ""
            },
            status: {
              success: false,
              fail: false
            }
          });
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
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
            <form onSubmit={this.handleSubmit}>
              <Textfield
                onChange={this.handleChange}
                value={this.state.msg.name}
                name="name"
                label="Name"
                floatingLabel
                style={{ width: "400px" }}
              />
              <br />
              <Textfield
                onChange={this.handleChange}
                value={this.state.msg.email}
                name="email"
                label="Email"
                floatingLabel
                style={{ width: "400px" }}
              />
              <br />
              <Textfield
                onChange={this.handleChange}
                value={this.state.msg.message}
                name="message"
                label="Message"
                rows={3}
                style={{ width: "400px" }}
              />
              <br />
              <Button type="submit" raised ripple>
                Send
              </Button>
            </form>
            {this.state.status.success && (
              <div className="contact-render1">
                <p>Thank you!!! I will get back to you soon.</p>.
              </div>
            )}
            {this.state.status.fail && (
              <div className="contact-render2">
                <p>Oops!!!....{this.state.responseMessage} </p>.
              </div>
            )}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
