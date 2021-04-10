import { useAppDispatch, useAppSelector } from '../store';
import { fetchLaunches, launchesSelector, setSelectedLaunch } from '../store/slices/launchesSlice';
import { ILaunch } from '../types';

export const useLaunches = () => {
  const dispatch = useAppDispatch();
  const { selectedLaunch, launches, status } = useAppSelector(launchesSelector);

  const setLaunch = (launch: ILaunch | null) => {
    dispatch(setSelectedLaunch(launch));
  };

  const fetchRemoteLaunches = (date: Date) => {
    dispatch(fetchLaunches(date));
  };

  return {
    launches,
    status,
    setLaunch,
    selectedLaunch,
    fetchRemoteLaunches
  };
};
