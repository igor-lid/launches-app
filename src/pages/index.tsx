import { FC, useEffect, useState } from 'react';

import FullScreenLoader from '../components/FullScreenLoader';
import LaunchesCalendar from '../components/launches/calendar';
import { launches as launchesData } from '../data/mock/launches';
import { ILaunch } from '../types';

const getLaunchesFromAPIMock = (): Promise<ILaunch[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(launchesData.results);
    }, 4000);
  });
};

const Home: FC = (): JSX.Element => {
  const [launches, setLaunches] = useState<ILaunch[]>([]);
  const [selectedLaunch, setSelectedLaunch] = useState<ILaunch>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLaunchesFromAPIMock().then((result) => {
      setLaunches(result);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <main className="h-screen flex overflow-hidden">
          {/* Launches Calendar */}
          <section className="flex flex-col h-full flex-1 overflow-y-auto">
            <LaunchesCalendar launches={launches} setSelectedLaunch={setSelectedLaunch} />
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
