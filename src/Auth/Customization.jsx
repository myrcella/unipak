import React from 'react';
import { Button } from 'react-bootstrap';
import TopBanner from '../util/TopBanner';

export default class Customization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (event) => {
    // TODO Validation
    // State object should match what setCustomization expects
    this.props.setCustomization(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TopBanner text="Almost ready" />
        TODO: Auth: customization<br />
        <Button type="submit">Next</Button>
      </form>
    );
  }
}
