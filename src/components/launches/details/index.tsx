import { FC, useEffect, useState } from 'react';

import { ILaunch } from '../../../types';
import Loader from '../../Loader';
import Timer from './Timer';

interface ILaunchDetailsProps {
  selectedLaunch: ILaunch;
}

const Details: FC<ILaunchDetailsProps> = ({ selectedLaunch }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [selectedLaunch]);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Loader classes="w-12 h-12" />
      </div>
    );

  return (
    <div>
      <h1 className="font-bold text-xl mb-4">{selectedLaunch.name}</h1>
      <img
        className="rounded-2xl w-full object-contain"
        src={selectedLaunch.image}
        alt={selectedLaunch.name}
      />
      <Timer endDate={new Date(selectedLaunch.net)} />
    </div>
  );
};

export default Details;
