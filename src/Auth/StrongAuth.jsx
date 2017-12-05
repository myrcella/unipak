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
      <div>
        <TopBanner text="Verify identity" />
        <form>
          <h2>Before you can deliver packages, we need to confirm your identity</h2>
          <p>Choose an identification service:</p>
          <Button block bsStyle="uniGr" onClick={this.props.start}>DummyBank</Button>
          <Button block bsStyle="uniGr" disabled>Aktia</Button>
          <Button block bsStyle="uniGr" disabled>Danske Bank</Button>
          <Button block bsStyle="uniGr" disabled>Nordea</Button>
          <Button block bsStyle="uniGr" disabled>S-Pankki</Button>
          <p>If you don&apos;t plan to deliver packages or want to do this later:</p>
          <Button block bsSize="lg" bsStyle="uniOr" onClick={this.props.skip}>Skip for now</Button>
        </form>
      </div>
    );
  }
}
