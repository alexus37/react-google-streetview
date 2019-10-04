import React from 'react';
import PropTypes from 'prop-types';
import asyncLoading from 'react-async-loader';

class GoogleStreetview extends React.Component {
  constructor() {
    super();
    this.streetView = null;
  }

  componentDidMount() {
    this.initialize(this.node);
  }

  componentDidUpdate() {
    this.initialize(this.node);
  }

  componentWillUnmount() {
    if (this.streetView) {
      this.props.googleMaps.event.clearInstanceListeners(this.streetView);
    }
  }

  initialize(canvas) {
    if (this.props.googleMaps && this.streetView == null) {
      this.streetView = new this.props.googleMaps.StreetViewPanorama(
        canvas,
        this.props.streetViewPanoramaOptions,
      );

      this.streetView.addListener('position_changed', () => {
        if (this.props.onPositionChanged) {
          this.props.onPositionChanged(this.streetView.getPosition());
        }
      });

      this.streetView.addListener('pov_changed', () => {
        if (this.props.onPovChanged) {
          this.props.onPovChanged(this.streetView.getPov());
        }
      });
    }
  }

  render() {
    return <div style={{ height: '100%' }} ref={node => this.node = node} />;
  }
}

GoogleStreetview.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  apiKey: PropTypes.string.isRequired,
  streetViewPanoramaOptions: PropTypes.object,
  onPositionChanged: PropTypes.func,
  onPovChanged: PropTypes.func,
  googleMaps: PropTypes.object,
};

GoogleStreetview.defaultProps = {
  streetViewPanoramaOptions: {
    position: { lat: 46.9171876, lng: 17.8951832 },
    pov: { heading: 0, pitch: 0 },
    zoom: 1,
  },
  googleMaps: {},
  onPositionChanged: () => {},
  onPovChanged: () => {},
};

function mapScriptsToProps(props) {
  const googleMapsApiKey = props.apiKey;
  return {
    googleMaps: {
      globalPath: 'google.maps',
      url: `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`,
      jsonp: true,
    },
  };
}

export default asyncLoading(mapScriptsToProps)(GoogleStreetview);