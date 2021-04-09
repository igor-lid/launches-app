import { FC } from 'react';

const Home: FC = (): JSX.Element => {
  return (
    <main className="h-full flex overflow-hidden">
      {/* Launches Calendar */}
      <section className="flex flex-col h-full flex-1 overflow-y-auto">Calendar</section>
    </main>
  );
};

export default Home;
