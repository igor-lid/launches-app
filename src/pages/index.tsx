import { FC, useEffect, useState } from 'react';

import FullScreenLoader from '../components/FullScreenLoader';
import LaunchesCalendar from '../components/launches/calendar';
import LaunchDetails from '../components/launches/details';
import LeftAside from '../components/LeftAside';
import { useLaunches } from '../hooks/useLaunches';
import { getCurrentDate } from '../utils/date';

const Home: FC = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const { selectedLaunch, setLaunch, launches, status, fetchRemoteLaunches } = useLaunches();

  useEffect(() => {
    fetchRemoteLaunches(getCurrentDate());
  }, []);

  const closeDetailsAside = () => {
    setLaunch(null);
  };

  if (status === 'loading') return <FullScreenLoader />;

  return (
    <main className="h-full flex overflow-hidden">
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
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </section>
    </main>
  );
};

export default Home;
