import React from 'react';
import { Button } from 'react-bootstrap';

export default class StrongAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        TODO: Auth: strong auth<br />
        <Button onClick={this.props.start}>Authenticate with DummyBank</Button>
        <Button onClick={this.props.skip}>Skip for now</Button>
      </form>
    );
  }
}
