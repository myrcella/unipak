import React from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonBar({ showSendView }) {
  return (
    <div className="buttonBar">
      <Button block bsSize="lg" bsStyle="uniGr" onClick={showSendView}>
        Send something
      </Button>
    </div>
  );
}
