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
          <div>
            Choose an identification service:<br />
            <Button bsStyle="uniGr" onClick={this.props.start}>DummyBank</Button><br />
            <Button bsStyle="uniGr" disabled>Aktia</Button><br />
            <Button bsStyle="uniGr" disabled>Danske Bank</Button><br />
            <Button bsStyle="uniGr" disabled>Nordea</Button><br />
            <Button bsStyle="uniGr" disabled>S-Pankki</Button><br />
          </div>
          <div>
            If you don&apos;t plan to deliver packages or want to do this later:<br />
            <Button block bsSize="lg" bsStyle="uniOr" onClick={this.props.skip}>Skip for now</Button>
          </div>
        </form>
      </div>
    );
  }
}
