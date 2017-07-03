import { connect } from 'react-redux';
import Next5Page from '../../components/Next5Page';

import {
    getNext5
} from '../../actions';

export default connect(
    state => ({
        // userId: state.getIn(['github', 'userId']),
    }),
    dispatch => ({
        // onChangeUserId: event => (
        //     dispatch(changeUserId(event.target.value))
        // ),
        // onSubmitUserId: userId => () => (
        //     dispatch(getGithub(userId))
        // ),
    }),
    (stateProps, dispatchProps, ownProps) => {
        const { userId } = stateProps;
        const { onSubmitUserId } = dispatchProps;
        return Object.assign({}, stateProps, dispatchProps, ownProps, {
            onSubmitUserId: onSubmitUserId(userId),
        });
    }
)(Next5Page);
