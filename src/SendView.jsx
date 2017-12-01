import React from 'react';
import TopBanner from './util/TopBanner';

export default class SendView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopBanner text="Send something" />
        TODO: SendView<br />
        <input
          type="button"
          value="Back"
          onClick={this.props.hideSendView}
        />
      </div>);
  }
}
