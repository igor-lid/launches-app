import classNames from 'classnames';
import { FC } from 'react';

interface ILoaderProps {
  classes?: string;
}

export const Loader: FC<ILoaderProps> = ({ classes }) => {
  return (
    <div
      className={classNames(`border-4 border-blue-500 rounded-full loader`, {
        [classes]: !!classes
      })}
    />
  );
};

export default Loader;
