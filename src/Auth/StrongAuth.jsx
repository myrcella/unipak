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
        <h2>Before you can deliver packages, we need to confirm your identity</h2>
        <div>
          Choose an identification service:<br />
          <Button bsClass="btn btnUni btnGr" onClick={this.props.start}>DummyBank</Button><br />
          <Button bsClass="btn btnUni btnGr" disabled>Aktia</Button><br />
          <Button bsClass="btn btnUni btnGr" disabled>Danske Bank</Button><br />
          <Button bsClass="btn btnUni btnGr" disabled>Nordea</Button><br />
          <Button bsClass="btn btnUni btnGr" disabled>S-Pankki</Button><br />
        </div>
        <div>
          If you don&apos;t plan to deliver packages or want to do this later:<br />
          <Button block bsClass="btn btn-lg btnUni btnOr" onClick={this.props.skip}>Skip for now</Button>
        </div>
      </form>
    );
  }
}
