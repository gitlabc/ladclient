import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
    render() {
        return (
            <label style={{display: 'block'}} htmlFor={htmlFor}>
                {label} { required && <span style={{color:'red'}}> *</span>}
            </label>
        );
    }
}

ProgressBar.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
};

ProgressBar.defaultProps = {
};

export default ProgressBar;