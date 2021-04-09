import {
  add,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  isBefore,
  set,
  startOfMonth,
  startOfWeek,
  sub
} from 'date-fns';

// week starts on monday
const WEEK_STARTS_ON = 1;

export const getCurrentDate = (): Date => new Date();

export const getStartOfTheWeekForMonth = (date: Date): Date => {
  return startOfWeek(startOfMonth(date), {
    weekStartsOn: WEEK_STARTS_ON
  });
};

export const getEndOfTheWeekForMonth = (date: Date): Date => {
  return endOfWeek(endOfMonth(date), {
    weekStartsOn: WEEK_STARTS_ON
  });
};

export const setDateTimeToZero = (date: Date): Date => {
  return set(date, {
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0
  });
};

export const addMonthsToDate = (date: Date, months: number): Date => {
  return add(date, {
    months
  });
};

export const subMonthsFromDate = (date: Date, months: number): Date => {
  return sub(date, {
    months
  });
};

export const createCalendar = (date: Date): Date[][] => {
  const startDay = getStartOfTheWeekForMonth(date);
  const endDay = getEndOfTheWeekForMonth(date);
  const diffInDays = differenceInDays(endDay, startDay);

  let day = sub(startDay, {
    days: 1
  });

  const calendar: Date[][] = [];

  while (isBefore(day, endDay) && calendar.flat().length < diffInDays) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => (day = add(day, { days: 1 })))
    );
  }

  return calendar;
};
