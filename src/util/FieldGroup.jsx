import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default function FieldGroup({
  name, label, help, ...props
}) {
  return (
    <FormGroup controlId={name}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl name={name} {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
