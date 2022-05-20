import tw, { css } from 'twin.macro'

export const CalendarStyles = css`
  .react-calendar {
    max-width: 400px;
    width: 100%;
    background-color: #fff;
    color: #222;
    font-family: Open Sans;
    font-weight: 600;
    line-height: 1.125em;
  }

  button {
    font-family: Open Sans;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #1a1a1a;
  }
  .react-calendar__navigation {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .react-calendar__navigation button {
    color: #de8e0e;
    min-width: 44px;
    background: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays {
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #767676;
    text-align: center;
    margin-bottom: 0.8rem;
  }

  /* .react-calendar__month-view__days__day--weekend {
color: #d10000;
} */

  .react-calendar__month-view__days {
    column-gap: 16px;
    justify-content: space-between;
    padding: 0 8px;
  }

  .react-calendar__tile {
    width: 24px !important;
    height: 24px !important;
    border-radius: 50%;
    flex: unset !important;
    // margin: 0 4px;
    margin-bottom: 12px;
    color: #1a1a1a;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #de8e0e;
    border-radius: 50%;
  }
  .react-calendar__tile--now {
    background: #de8e0e33;
    border-radius: 50%;
    color: #de8e0e;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #de8e0e33;
    border-radius: 50%;
    color: #de8e0e;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #de8e0e;
    border-radius: 50%;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #de8e0e;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #de8e0e;
  }
  .react-calendar__tile--rangeStart {
    background: #de8e0e;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    background: #de8e0e;
    color: white;
  }
`
