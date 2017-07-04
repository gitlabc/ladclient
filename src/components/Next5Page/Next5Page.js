import React from 'react';
import PropTypes from 'prop-types';

import RaceTypesBox from '../../components/RaceTypesBox';
// import RaceList from '../../components/RaceList';

const Next5Page = props => (
    <div>
        <RaceTypesBox data={props.data} userId={props.location.query.userId} />
        {/*<RaceList />*/}
    </div>
);

Next5Page.propTypes = {
    data: PropTypes.object,
};

export default Next5Page;
