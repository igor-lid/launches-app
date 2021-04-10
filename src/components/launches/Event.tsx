import { Dispatch, FC, SetStateAction } from 'react';

import { ILaunch } from '../../types';
import { RocketIcon } from '../icons';

interface ILaunchProps {
  launch: ILaunch;
  setSelectedLaunch: Dispatch<SetStateAction<ILaunch>>;
}

export const Event: FC<ILaunchProps> = ({ launch, setSelectedLaunch }) => {
  const { name, status } = launch;

  return (
    <button
      onClick={() => setSelectedLaunch(launch)}
      className="border border-gray-400 text-left cursor-pointer rounded-xl w-full px-2 py-2 text-sm mb-1 flex items-baseline">
      <span className="w-4 h-4 mr-2">
        <RocketIcon />
      </span>
      <div>
        <span>{name}</span>
        <span> - {status.name}</span>
      </div>
    </button>
  );
};

export default Event;
