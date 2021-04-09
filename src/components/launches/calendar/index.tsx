import { add, sub } from 'date-fns';
import { FC, useState } from 'react';

import Header from './Header';

const Calendar: FC = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNextMonth = () => {
    setSelectedDate(
      add(selectedDate, {
        months: 1
      })
    );
  };

  const handlePreviousMonth = () => {
    setSelectedDate(
      sub(selectedDate, {
        months: 1
      })
    );
  };

  return (
    <Header
      handlePreviousMonth={handlePreviousMonth}
      handleNextMonth={handleNextMonth}
      selectedDate={selectedDate}
    />
  );
};

export default Calendar;
