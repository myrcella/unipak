/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React from 'react';

// Simple components can be defined as functions
export function HelloF(props) {
  return <p>Hello, {props.name}</p>;
}

// You can also use modern javascript features like arrow functions and destructuring
export const HelloF2 = ({ name }) => <p>Hello, {name}</p>;

// If you need more complex React features, use a class instead
export class HelloC extends React.Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}
