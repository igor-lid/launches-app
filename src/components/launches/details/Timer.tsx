import { intervalToDuration, isPast } from 'date-fns';
import { FC, useEffect, useState } from 'react';

import { getCurrentDate } from '../../../utils/date';

const calculateTimeLeft = (startDate: Date, endDate: Date) => {
  return intervalToDuration({
    start: startDate,
    end: endDate
  });
};

const formatTime = (time: number) => {
  if (time < 10) {
    return `0${time}`;
  } else return time;
};

interface ITimeProps {
  time: number;
  label: string;
}

const Time: FC<ITimeProps> = ({ time, label }): JSX.Element => {
  return (
    <div className="flex flex-col text-center">
      <span className="font-bold text-2xl">{formatTime(time)}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
};

const Divider: FC = (): JSX.Element => {
  return <span className="font-bold text-2xl hidden 2xl:block">:</span>;
};

interface ITimerProps {
  endDate: Date;
}

const Timer: FC<ITimerProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(new Date(), endDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(getCurrentDate(), endDate));
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col 2xl:flex-row mb-4 justify-between">
      <span className="font-bold text-2xl text-center">T{isPast(endDate) ? '+' : '-'}</span>
      <Time time={timeLeft.years} label="Years" />
      <Divider />
      <Time time={timeLeft.months} label="Months" />
      <Divider />
      <Time time={timeLeft.days} label="Days" />
      <Divider />
      <Time time={timeLeft.hours} label="Hours" />
      <Divider />
      <Time time={timeLeft.minutes} label="Minutes" />
      <Divider />
      <Time time={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Timer;
