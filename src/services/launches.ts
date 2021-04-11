import axios from 'axios';
import { add, sub } from 'date-fns';

import { ILaunch } from '../types';
import { getEndOfTheWeekForMonth, getStartOfTheWeekForMonth } from '../utils/date';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface ILaunchResponse {
  data: {
    results: ILaunch[];
  };
}

export const getLaunchesFromAPIInterval = async (date: Date): Promise<ILaunchResponse> => {
  return axios.get(`${BASE_URL}/launch/`, {
    params: {
      net__gte: getStartOfTheWeekForMonth(sub(date, { months: 2 })),
      net__lte: getEndOfTheWeekForMonth(add(date, { months: 2 })),
      limit: 100
    }
  });
};
