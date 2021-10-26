import { useState } from 'react';
import ItemDescription from '../ItemDescription';

export const Staff = () => {
  const defaultTitle = 'Staff';
  const [title, setTitle] = useState(defaultTitle);

  const changeTitle = () => {
    const prefixes = ['My', 'Your', 'His', 'Her'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    setTitle(`${prefix} ${defaultTitle}`);
  };

  console.log('Title rerendering');

  return (
    <>
      <h1 className="title mb-1">{title}</h1>
      <ItemDescription />
      <div className="buttons mt-6">
        <button className="button" onClick={changeTitle}>
          Change Title
        </button>
      </div>
    </>
  );
};
