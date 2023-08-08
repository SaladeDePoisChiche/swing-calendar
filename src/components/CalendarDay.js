import dayjs from "dayjs";
import React from "react";

const CalendarDay = (props) => {
  const calendarDay = props.date;
  const events = props.events;
  return (
    <div>
      <div> {dayjs(calendarDay).format("dddd DD")} </div>
      <div>
        {events.map((event) => {
          return dayjs(event.date).isSame(dayjs(calendarDay)) ? (
            <div key={"event_" + event.key}> {event.eventName}</div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default CalendarDay;
