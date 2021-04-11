import { isEqual } from 'date-fns';
import { Dispatch, FC, Fragment, SetStateAction, useEffect, useState } from 'react';

import { useLaunches } from '../../../hooks/useLaunches';
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

const renderEvents = (launches: Partial<ILaunch[]>, day: Date) => {
  const launchesPerDay = launches
    .filter((launch) => {
      const launchDate = setDateTimeToZero(new Date(launch.net));
      const currentDate = setDateTimeToZero(day);
      return isEqual(launchDate, currentDate);
    })
    .map((launch) => {
      return <Event key={launch.id} launch={launch} />;
    });

  if (launchesPerDay.length > 0) {
    return launchesPerDay;
  } else
    return (
      <div className="flex items-end justify-center w-full h-full">
        <p className="text-sm">There are no scheduled launches for this day</p>
      </div>
    );
};

interface ICalendarProps {
  launches: ILaunch[];
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

const Calendar: FC<ICalendarProps> = ({ launches, selectedDate, setSelectedDate }): JSX.Element => {
  const [calendar, setCalendar] = useState([]);
  const [counter, setCounter] = useState<number>(0);
  const { fetchRemoteLaunches } = useLaunches();

  // create calendar after month is changed
  useEffect(() => {
    setCalendar(createCalendar(selectedDate));
  }, [selectedDate]);

  // fetch launches on 3 month change
  useEffect(() => {
    if (counter === -3 || counter === 3) {
      fetchRemoteLaunches(selectedDate);
      setCounter(0);
    }
  }, [selectedDate]);

  const handleNextMonth = (): void => {
    setSelectedDate(addMonthsToDate(selectedDate, 1));
    setCounter(counter + 1);
  };

  const handlePreviousMonth = (): void => {
    setSelectedDate(subMonthsFromDate(selectedDate, 1));
    setCounter(counter - 1);
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
      <div className={`grid-launches grid grid-cols-7 ${getNumberOfRows()} flex-1`}>
        {calendar.map((week: Date[], index) => (
          <Fragment key={index}>
            {week.map((day) => (
              <Cell key={day.toString()} day={day}>
                {renderEvents(launches, day)}
              </Cell>
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Calendar;
