import { FC, MouseEventHandler, ReactNode } from 'react';

import { XIcon } from './icons';

interface IHeaderProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const Header: FC<IHeaderProps> = ({ onClose }): JSX.Element => {
  return (
    <header className="flex justify-end mb-12">
      <button onClick={onClose}>
        <XIcon />
      </button>
    </header>
  );
};

interface ILeftAsideProps {
  children: ReactNode;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const LeftAside: FC<ILeftAsideProps> = ({ children, onClose }): JSX.Element => {
  return (
    <aside className="w-1/4 overflow-y-auto p-4 border border-r-1">
      <Header onClose={onClose} />
      {children}
    </aside>
  );
};

export default LeftAside;
