import moment from 'moment';

const TIME_FORMATS = {
  MONTH_DAY_YEAR_HOUR_MINUTES_AMPM: 'MONTH_DAY_YEAR_HOUR_MINUTES_AMPM',
  WEEKDAY_MONTH_DAY_YEAR: 'WEEKDAY_MONTH_DAY_YEAR',
  WEEKDAY_MONTH_DAY_YEAR_24HOUR_MINUTES: 'WEEKDAY_MONTH_DAY_YEAR_24HOUR_MINUTES',
}

const TIME_STRINGS = {
  [TIME_FORMATS.MONTH_DAY_YEAR_HOUR_MINUTES_AMPM] : {
    moment: 'MMMM Do YYYY, h:mm a'
  }, 
  [TIME_FORMATS.WEEKDAY_MONTH_DAY_YEAR]: {
    moment: 'dddd, MMMM Do YYYY'
  }, 
  [TIME_FORMATS.WEEKDAY_MONTH_DAY_YEAR_24HOUR_MINUTES]: {
    moment: 'ddd, MMM Do YYYY, H:mm'
  }
}

class TimeUtils {
  constructor() {
    this.timeFormats = TIME_FORMATS;
  }
  formatTime(timestamp, format) {
    if (!format) {
      return timestamp;
    }
    try {
      return moment(timestamp).format(TIME_STRINGS[format].moment)
    } catch (e) {
      return timestamp;
    }
  }
}

const TimeUtilsInstance = new TimeUtils();

module.exports = TimeUtilsInstance;