import { FC } from 'react';
import { Structure } from './Structure';

import './style.css';
import { useStructure } from './Context/StructureProvider';


export const App: FC = () => {

  const {files} = useStructure()
  return (
    <div>
      <Structure files={files} />
    </div>
  );
};
