
import { gql } from 'apollo-server-express';

// TODO, build typeDef dynamically from TimeUtils.timeFormats
const typeDef = gql`
  enum TimeFormat {
    MONTH_DAY_YEAR_HOUR_MINUTES_AMPM
    WEEKDAY_MONTH_DAY_YEAR
    WEEKDAY_MONTH_DAY_YEAR_24HOUR_MINUTES
  }
`;

module.exports = {
  typeDef,
}