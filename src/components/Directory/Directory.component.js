import React, { useContext } from 'react';
import { DirectoryContext } from '../../contexts/Directory-context/directory-context';
import { MenuItem } from '../Menu-Item/MenuItem.component';
import './Directory.styles.scss';
export const Directory = () => {
  const { landingPageSections } = useContext(DirectoryContext);
  return (
    <div className='directory-menu'>
      {landingPageSections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};
