import { FC, Fragment, useEffect, useState } from 'react';

import { addMonthsToDate, createCalendar, subMonthsFromDate } from '../../../utils/date';
import Cell from './Cell';
import Header from './Header';

const Calendar: FC = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendar, setCalendar] = useState([]);

  // create calendar after month is changed
  useEffect(() => {
    setCalendar(createCalendar(selectedDate));
  }, [selectedDate]);

  const handleNextMonth = (): void => {
    setSelectedDate(addMonthsToDate(selectedDate, 1));
  };

  const handlePreviousMonth = (): void => {
    setSelectedDate(subMonthsFromDate(selectedDate, 1));
  };

  const getNumberOfRows = (): string => `grid-rows-${calendar.flat().length / 7}`;

  return (
    <>
      <Header
        handlePreviousMonth={handlePreviousMonth}
        handleNextMonth={handleNextMonth}
        selectedDate={selectedDate}
      />
      {/* GRID */}
      <div className={`grid grid-cols-7 ${getNumberOfRows()} flex-1`}>
        {calendar.map((week: Date[], index) => (
          <Fragment key={index}>
            {week.map((day) => (
              <Cell key={day.toString()} day={day}>
                Event
              </Cell>
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Calendar;
