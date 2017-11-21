import React from 'react';

export default class SendView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        TODO: SendView<br />
        <input
          type="button"
          value="Back"
          onClick={this.props.hideSendView}
        />
      </div>);
  }
}
