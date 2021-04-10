import { isEqual } from 'date-fns';
import { Dispatch, FC, Fragment, SetStateAction, useEffect, useState } from 'react';

import { ILaunch } from '../../../types';
import {
  addMonthsToDate,
  createCalendar,
  setDateTimeToZero,
  subMonthsFromDate
} from '../../../utils/date';
import Event from '../Event';
import Cell from './Cell';
import Header from './Header';

const renderEvents = (
  launches: Partial<ILaunch[]>,
  day: Date,
  setSelectedLaunch: Dispatch<SetStateAction<ILaunch>>
) => {
  const l = launches
    .filter((launch) => {
      const launchDate = setDateTimeToZero(new Date(launch.net));
      const currentDate = setDateTimeToZero(day);
      return isEqual(launchDate, currentDate);
    })
    .map((launch) => {
      return <Event key={launch.id} launch={launch} setSelectedLaunch={setSelectedLaunch} />;
    });

  if (l.length > 0) {
    return l;
  } else
    return (
      <div className="flex items-end justify-center w-full h-full">
        <p>There is no scheduled launches for this day</p>
      </div>
    );
};

interface ICalendarProps {
  launches: ILaunch[];
  setSelectedLaunch: Dispatch<SetStateAction<ILaunch>>;
}

const Calendar: FC<ICalendarProps> = ({ launches, setSelectedLaunch }): JSX.Element => {
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
                {renderEvents(launches, day, setSelectedLaunch)}
              </Cell>
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Calendar;
