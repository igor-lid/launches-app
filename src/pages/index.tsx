import { FC } from 'react';

import LaunchesCalendar from '../components/launches/calendar';

const Home: FC = (): JSX.Element => {
  return (
    <main className="h-screen max-h-screen flex overflow-hidden">
      {/* Launches Calendar */}
      <section className="flex flex-col h-full flex-1 overflow-y-auto">
        <LaunchesCalendar />
      </section>
    </main>
  );
};

export default Home;
