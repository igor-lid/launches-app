import { FC } from 'react';

import { RocketIcon } from './icons';
import Loader from './Loader';

export const FullScreenLoader: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center opacity-90 absolute inset-0 border">
      <span className="w-32 h-32 mb-8 text-blue-500">
        <RocketIcon />
      </span>
      <h3 className="text-center text-xl mb-8">Please wait...</h3>
      <Loader classes="w-12 h-12" />
    </div>
  );
};

export default FullScreenLoader;
