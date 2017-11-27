import React from 'react';

export default function Banner({ showSendView }) {
  return (
    <div>
      TODO: DeliverView banner<br />
      <input
        type="button"
        value="Send something"
        onClick={showSendView}
      />
    </div>
  );
}
