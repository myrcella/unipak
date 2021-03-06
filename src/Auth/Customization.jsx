import React from 'react';
import { FormGroup, Button, Radio } from 'react-bootstrap';
import TopBanner from '../util/TopBanner';

function ImgRadio({
  name, value, testValue, onChange, alt, src,
}) {
  return (
    <Radio name={name} value={value} checked={value === testValue} onChange={onChange} inline>
      <img alt={alt} src={src} />
    </Radio>
  );
}

export default class Customization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'standard', // Set a default value to make UI more obvious
    };
  }

  handleChange = (event) => {
    const input = event.target;
    const key = input.name;

    this.setState({
      [key]: input.value,
    });
  }

  handleSubmit = (event) => {
    // TODO Validation
    // State object should match what setCustomization expects
    this.props.setCustomization(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <TopBanner text="Almost ready" />
        <form onSubmit={this.handleSubmit}>
          <h2>Customize your profile</h2>
          <FormGroup className="imgRadioGroup">
            <ImgRadio
              name="avatar"
              value="standard"
              testValue={this.state.avatar}
              onChange={this.handleChange}
              alt="Standard"
              src="./img/logo.png"
            />
            <ImgRadio
              name="avatar"
              value="pink"
              testValue={this.state.avatar}
              onChange={this.handleChange}
              alt="Pink"
              src="./img/logopnk.png"
            />
            <ImgRadio
              name="avatar"
              value="metal"
              testValue={this.state.avatar}
              onChange={this.handleChange}
              alt="Metal"
              src="./img/logometal.png"
            />
          </FormGroup>
          <Button block bsSize="lg" bsStyle="uniGr" type="submit">Next</Button>
        </form>
      </div>
    );
  }
}
