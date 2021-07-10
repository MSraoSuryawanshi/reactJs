import { Component } from "react";

class ContactUSComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
      city: "Mumbai",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3>
                <i className="mdi-content-send brown-text"></i>
              </h3>
              <h1>hey {this.props.name}, Contact Us</h1>
              <h2 style={{ color: "red" }}>{this.state.name}</h2>
              <p className="left-align light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque id nunc nec volutpat. Etiam pellentesque tristique
                arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
                Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
                eros. Morbi sem neque, posuere et pretium eget, bibendum
                sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu
                mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi
                massa odio, condimentum sed ipsum ac, gravida ultrices erat.
                Nullam eget dignissim mauris, non tristique erat. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUSComponent;

/*
ReactJS - State: stateful component
The state is an updatable structure that is used to contain data or 
information about the component. The state in a component can change over time. 
The change in state over time can happen as a response to user action or system events. 
A component with the state is known as stateful components. It is the heart of the react 
component which determines the behavior of the component and how it will render. 
They are also responsible for making a component dynamic and interactive. 
State is the place where the data comes from. We should always try to make our state as 
simple as possible and minimize the number of stateful components. If we have, for example, 
ten components that need data from the state, we should create one container component that 
will keep the state for all of them.


Using State
The following sample code shows how to create a stateful 
component using EcmaScript2016 syntax.

*/
