import classNames from 'classnames';
import { Dispatch, FC, SetStateAction } from 'react';

import { ILaunch } from '../../types';
import { RocketIcon } from '../icons';

interface ILaunchProps {
  launch: ILaunch;
  setSelectedLaunch: Dispatch<SetStateAction<ILaunch>>;
  selectedLaunch: ILaunch | null;
}

export const Event: FC<ILaunchProps> = ({ launch, setSelectedLaunch, selectedLaunch }) => {
  const { name, status } = launch;
  console.log(selectedLaunch);

  return (
    <button
      onClick={() => setSelectedLaunch(launch)}
      className={classNames(
        'text-left cursor-pointer rounded-xl w-full px-2 py-2 text-sm mb-1 flex items-baseline focus:outline-none',
        {
          'border-blue-500 border-2': !!selectedLaunch && launch.id === selectedLaunch.id,
          'border-gray-400 border': !selectedLaunch || launch.id !== selectedLaunch.id
        }
      )}>
      <span className="w-4 h-4 mr-2">
        <RocketIcon />
      </span>
      <div className="text-xs">
        <span>{name}</span>
        <span> - {status.name}</span>
      </div>
    </button>
  );
};

export default Event;
