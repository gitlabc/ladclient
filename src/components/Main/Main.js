import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'react-toolbox/lib/app_bar';

const Main = (props) => (
    <div>
        <AppBar
            title="NEXT 5 RACES"
        />
        <div>
            {props.children}
        </div>
    </div>
);

Main.propTypes = {
    children: PropTypes.object,
};

export default Main;