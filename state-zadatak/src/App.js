import React, { Component } from "react";
import { Komponenta1, Komponenta2, Komponenta3, Button } from "./components";

export default class App extends Component {
  state = {
    users: [
      { name: "Boris", age: 28 },
      { name: "Ana", age: 35 },
      { name: "Bob", age: 55 },
    ],
    randomText: "Ovo je nasumični tekst.",
  };

  hendleClick = () => {
    let newUsers = this.state.users;
    newUsers[0].age = newUsers[0].age + 1;
    this.setState({
      users: newUsers,
    });
  };
  render() {
    return (
      <div>
        <Komponenta1
          name={this.state.users[0].name}
          age={this.state.users[0].age}
        />

        <Button text="Dodaj godine" hendleClick={this.hendleClick} />
        <Komponenta2
          name={this.state.users[1].name}
          age={this.state.users[1].age}
        />
        <Komponenta3
          name={this.state.users[2].name}
          age={this.state.users[2].age}
        >
          <p>{this.state.randomText}</p>
        </Komponenta3>
      </div>
    );
  }
}
