import { FC, useEffect, useState } from 'react';

import FullScreenLoader from '../components/FullScreenLoader';
import LaunchesCalendar from '../components/launches/calendar';
import LaunchDetails from '../components/launches/details';
import LeftAside from '../components/LeftAside';
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

  const closeDetailsAside = () => {
    setSelectedLaunch(null);
  };

  if (loading) return <FullScreenLoader />;

  return (
    <main className="h-screen flex overflow-hidden">
      {/* Launch details */}
      {selectedLaunch && (
        <LeftAside onClose={closeDetailsAside}>
          <LaunchDetails selectedLaunch={selectedLaunch} />
        </LeftAside>
      )}

      {/* Launches Calendar */}
      <section className="flex flex-col h-full flex-1 overflow-y-auto">
        <LaunchesCalendar
          launches={launches}
          setSelectedLaunch={setSelectedLaunch}
          selectedLaunch={selectedLaunch}
        />
      </section>
    </main>
  );
};

export default Home;
