import React from 'react';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = () => {
    this.props.setUser({}); // TODO: some data in this object
  }

  render() {
    return (
      <div>
        TODO: Auth<br />
        <input
          type="button"
          value="Login"
          onClick={this.login}
        />
      </div>);
  }
}
