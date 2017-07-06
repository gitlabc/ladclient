import React from 'react';
import PropTypes from 'prop-types';
// import styles from './CompetitorListItem.css';

const CompetitorListItem = ({ competitor, now }) => (
  <li >
    {competitor.name} {competitor.saddle_number} R{competitor.barrier} {competitor.eliminated} {competitor.apn} {competitor.fixed_win_price} {competitor.fixed_place_price}
  </li>
)

CompetitorListItem.propTypes = {
  competitor: PropTypes.object.isRequired,
  now: PropTypes.number.isRequired,
};

export default CompetitorListItem;
