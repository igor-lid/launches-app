import { format } from 'date-fns';
import { FC } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

interface IHeaderProps {
  handlePreviousMonth: () => void;
  handleNextMonth: () => void;
  selectedDate: Date;
}

const Header: FC<IHeaderProps> = ({ handleNextMonth, handlePreviousMonth, selectedDate }) => {
  const formattedDate = format(selectedDate, 'MMMM, yyyy');

  return (
    <header>
      <div className="flex justify-between p-4">
        <h1 className="font-bold">{formattedDate}</h1>
        <div className="flex items-center justify-center">
          <button onClick={handlePreviousMonth} className="mr-4">
            <ChevronLeftIcon />
          </button>
          <button onClick={handleNextMonth}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="flex text-center mb-2">
        {WEEK_DAYS.map((day) => (
          <p key={day} className="flex-1">
            {day}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Header;
