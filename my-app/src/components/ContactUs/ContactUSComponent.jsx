import { Component } from "react";

class ContactUSComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
      city: "Mumbai",
    };
  }

  changeState = () => this.setState({ name: "Ali" });

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
              <h2 style={{ color: "red" }} onClick={this.changeState}>
                {this.state.name}
              </h2>
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



State Object in React.Component
React Components can be broadly classified into Functional and Class Components. 
Functional Components are faster and much simpler than Class Components. 
The primary difference between the two is the availability of State.
What is the State?
The state is an instance of React Component Class that can be defined as an object of a set of observable properties that control the behaviour of the component. 
The State of a component is an object that holds some information that may change over the lifetime of the component. 
For example, let us think of the clock that we created, we were calling the render() method every second explicitly, but React provides a better way to achieve the same result and that is by using State, storing the value of time as a member of the component’s state. 

The difference between Props and State.
The Props is also an object that holds information to control the behaviour of that particular component.

Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behaviour after each change.
States can only be used in Class Components while Props don’t have this limitation.
While Props are set by the parent component, State is generally updated by event handlers. 
Conventions of Using State in React:
State of a component should prevail throughout the lifetime, thus we must first have some initial state, to do so we should define the State in the constructor of the component’s class. To define a state of any Class we can use the sample format below.
Class MyClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { attribute : "value" };
    }
}

The state should never be updated explicitly. React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.
     this.state.attribute = "new-value";

Thus, React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page. Hence the correct method of updating the value of a state will be similar to the code below.
this.setState({attribute: "new-value"});
The only time we are allowed to define the state explicitly is in the constructor to provide the initial state.
React is highly efficient and thus uses asynchronous state updates i.e. React may update multiple setState() updates in a single go. Thus using the value of the current state may not always generate the desired result. For example, let us take a case where we must keep a count (Likes of a Post). Many developers may miswrite the code as below.

     this.setState({counter: this.state.count + this.props.diff});

Now due to asynchronous processing, this.state.count may produce an undesirable result. A more appropriate approach would be to use the following.
this.setState((prevState, props) => ({
       counter: prevState.count + props.diff
     }));


IN the above code we are using the ES6 thick arrow function format to take the previous state and props of the component as a parameter and are updating the counter. The same can be written using the default functional way as follows.
this.setState(function(prevState, props){
       return {counter: prevState.count + props.diff};
   });


*/
