import React from 'react';

export default function ButtonBar({ showSendView }) {
  return (
    <div>
      TODO: DeliverView ButtonBar<br />
      <input
        type="button"
        value="Send something"
        onClick={showSendView}
      />
    </div>
  );
}
