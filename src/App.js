import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './compmnent/Menu';
import { DISHES } from './shered/dishes';
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>
              Gaurav Singh Bhandari
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = { this.state.dishes } />
        
      </div>
    )
  }
}
// hello(
//   if(TextInput)
// )

export default App;
