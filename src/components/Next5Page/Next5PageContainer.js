import { connect } from 'react-redux';
import Next5Page from './Next5Page';

import {
    getNext5Races
} from '../../redux/actions';

const mapStateToProps = (state) => ({
    userId: state.getIn(['github', 'userId']),
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitUserId: (userId) => () => (
        dispatch(getNext5Races())
    ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { userId } = stateProps;
    const { onSubmitUserId } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
        onSubmitUserId: onSubmitUserId(userId),
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Next5Page);
