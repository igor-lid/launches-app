import axios from 'axios';
import { add, sub } from 'date-fns';

import { launches as launchesData } from '../data/mock/launches';
import { ILaunch } from '../types';
import { getEndOfTheWeekForMonth, getStartOfTheWeekForMonth } from '../utils/date';

export const getLaunchesFromAPIMock = (): Promise<ILaunch[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(launchesData.results);
    }, 4000);
  });
};

export interface ILaunchResponse {
  data: {
    results: ILaunch[];
  };
}

export const getLaunchesFromAPIInterval = async (date: Date): Promise<ILaunchResponse> => {
  console.log(getStartOfTheWeekForMonth(sub(date, { months: 2 })));
  console.log(getEndOfTheWeekForMonth(add(date, { months: 2 })));

  return axios.get(`https://lldev.thespacedevs.com/2.2.0/launch/`, {
    params: {
      net__gte: getStartOfTheWeekForMonth(sub(date, { months: 2 })),
      net__lte: getEndOfTheWeekForMonth(add(date, { months: 2 })),
      limit: 100
    }
  });
};
