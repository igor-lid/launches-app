import { FC } from 'react';

import Loader from './Loader';

export const FullScreenLoader: FC = () => {
  return (
    <div className="flex items-center justify-center opacity-90 absolute inset-0">
      <Loader classes="w-12 h-12" />
    </div>
  );
};

export default FullScreenLoader;
