import React from 'react';
import { Button } from 'react-bootstrap';
import TopBanner from '../util/TopBanner';

export default class StrongAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <TopBanner text="Verify identity" />
        TODO: Auth: strong auth<br />
        <Button onClick={this.props.start}>Authenticate with DummyBank</Button>
        <Button onClick={this.props.skip}>Skip for now</Button>
      </form>
    );
  }
}
