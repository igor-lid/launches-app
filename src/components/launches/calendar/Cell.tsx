import classNames from 'classnames';
import { format, isBefore, isToday } from 'date-fns';
import { FC, ReactNode } from 'react';

import { getCurrentDate, setDateTimeToZero } from '../../../utils/date';

interface ICellProps {
  children?: ReactNode;
  day: Date;
}

const Cell: FC<ICellProps> = ({ children, day }): JSX.Element => {
  const formattedDay = format(day, 'd');
  return (
    <div
      className={classNames('col-span-1 flex flex-col border border-gray-100 p-2', {
        'bg-gray-50': isBefore(day, setDateTimeToZero(getCurrentDate()))
      })}>
      <div
        className={classNames('mb-2', {
          'rounded-full p-2 h-7 w-7 bg-blue-600 text-white flex items-center justify-center': isToday(
            day
          )
        })}>
        <span>{formattedDay}</span>
      </div>
      {children}
    </div>
  );
};

export default Cell;
