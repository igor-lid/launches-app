import { FC, useEffect, useState } from 'react';

import { ILaunch } from '../../../types';
import Loader from '../../Loader';
import Timer from './Timer';
import { format } from 'date-fns';

interface ILaunchDetailsProps {
  selectedLaunch: ILaunch;
}

const Details: FC<ILaunchDetailsProps> = ({ selectedLaunch }) => {
  const { name, net, image, pad } = selectedLaunch;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [selectedLaunch]);

  const formatedDate = format(new Date(net), 'dd/MM/yyyy');

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Loader classes="w-12 h-12" />
      </div>
    );

  return (
    <div>
      <h1 className="font-bold text-xl mb-4">{name}</h1>
      <div className="mb-8">
        <p>
          <span>Pad - </span>
          {pad.name}
        </p>
        <p>
          <span>Location - </span>
          {pad.location.name}
        </p>
      </div>
      <div className="mb-8">
        <Timer endDate={new Date(net)} />
        <p className="text-center">{formatedDate}</p>
      </div>
      <img className="rounded-2xl w-full object-contain" src={image} alt={name} />
    </div>
  );
};

export default Details;
