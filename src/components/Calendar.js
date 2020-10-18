import React from 'react';
import dayjs from 'dayjs';

import { Month } from '/components/Month';
import { observer } from 'mobx-react';
import { groupBy } from '/utils/groupBy';
import { MiniCalendar } from './MiniCalendar';

export const Calendar = observer(({ programDates = {} }) => {
  const scheduledDates = programDates.map((currentDate) => {
    const chosenMonth = new Month(currentDate);

    return {
      actualMonth: chosenMonth.monthName,
      actualDates: chosenMonth.actualDate,
      chosenMonth,
    };
  });

  const uniqueMonths = groupBy(scheduledDates, 'actualMonth');

  const gatherDates = Object.entries(uniqueMonths).map(([month, datesList]) => {
    uniqueMonths[month][0].chosenMonth.actualDates = datesList.map(
      ({ actualDates }) => actualDates
    );
    return {
      chosenMonth: uniqueMonths[month][0].chosenMonth,
    };
  });

  return (
    <section className="calendars">
      {gatherDates.map(({ chosenMonth }, i) => {
        return <MiniCalendar key={`cal--${i}`} chosenMonth={chosenMonth} />;
      })}
    </section>
  );
});
