import { format } from 'date-fns';
import { FC } from 'react';

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
        <div>
          <button onClick={handlePreviousMonth} className="mr-4">
            Previous month
          </button>
          <button onClick={handleNextMonth}>Next month</button>
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
