import React from 'react';

export default class Marker extends React.Component {
  showPopup = () => {
    this.props.showPopup(this.props.delivery);
  }

  render() {
    return (
      <div>
        <svg
          onClick={this.showPopup}
          className="mapMarkerStar"
          style={{
            // Size should be set by setting height at half the desired size of the star;
            // this will be the distance from origin to first child.
            // Transform will then center the star at origin and correct the size
            display: 'block',
            transform: 'translate(-50%,-50%) scale(2)',
          }}
          viewBox="0 0 2000 2000"
        >
          <path d="M0,691 L1902,691 L363,1809 L951,0 L1539,1809" />
        </svg>
        {this.props.children}
      </div>
    );
  }
}
