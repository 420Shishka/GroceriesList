import React, { useState } from 'react';

type GroceryItemProps = {
  label: string;
};

const GroceryItem = ({ label }: GroceryItemProps) => {
  const [isDone, setDone] = useState<boolean>(false);

  return (
    <li
      className={isDone ? 'done' : ''}
      onClick={() => setDone(!isDone)}
    >
      {label}
    </li>
  );
}

export { GroceryItem };