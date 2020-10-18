import React from 'react';
import { observer } from 'mobx-react';

export const WeekDay = (weekday) => (
  <span className="weekday" key={`day-${weekday}`}>
    {weekday}
  </span>
);

export const EmptyDay = (emptyDay) => (
  <span key={`day-empty-${emptyDay}`} className="empty"></span>
);

export const Day = observer(({ day, selectedDate }) => {
  const classes = selectedDate.includes(day) ? 'day selected' : 'day';

  return (
    <span key={`day-${day}`} className={classes}>
      {day}
    </span>
  );
});

export const MiniCalendar = observer(
  ({
    chosenMonth: {
      actualDates,
      date,
      monthName,
      weekdaysMin,
      monthDays,
      emptyCalendarDays,
    },
  }) => {
    return (
      <section key={`min-cal-${date}`} className="calendar">
        <div className="monthName">{monthName}</div>
        {weekdaysMin.map(WeekDay)}
        {emptyCalendarDays.map(EmptyDay)}
        {monthDays.map((day) => (
          <Day key={`day--${day}`} day={day} selectedDate={actualDates} />
        ))}
      </section>
    );
  }
);
