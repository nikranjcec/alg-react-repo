import React, { Component } from 'react';

export default class Komponenta1 extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <p>
        Pozdrav, zovem se {name} i imam {age} godina.
      </p>
    );
  }
}
