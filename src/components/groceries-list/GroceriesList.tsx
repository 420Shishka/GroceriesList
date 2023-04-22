import React, { KeyboardEvent, useId, useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { SlTrash } from 'react-icons/sl';

import './GroceriesList.css';
import { IGroceryItem } from '../grocery-item/model';
import { GroceryItem } from '../grocery-item/GroceryItem';

const GroceriesList = () => {
  const inputId = useId();
  const inputElement = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<IGroceryItem[]>([]);

  const addItem = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    const input = inputElement.current;
    if (!input) return;

    const text = input.value.trim();
    if (!text) return;

    setData([...data, { id: nanoid(), text }]);
    input.value = '';
  }

  return (
    <div className='groceries-container'>
      <div className='groceries'>
        <h1 className='groceries__title'>
          Groceries list
        </h1>

        <div className='groceries__control-container'>
          <div className='groceries__btn'>
            <button
              type='button'
              onClick={() => setData([])}
            >
              <SlTrash />
            </button>
          </div>

          <div className='groceries__input'>
            <label htmlFor={inputId}>Add grocery</label>
            <input
              id={inputId}
              type='text'
              ref={inputElement}
              onKeyDown={addItem}
            />
          </div>
        </div>

        {data.length ? (
          <ul className='groceries__list'>
            {data.map(item => (
              <GroceryItem key={item.id} label={item.text} />
            ))}
          </ul>
        ) : (
          <div className='groceries__list-empty'>- No items -</div>
        )}


      </div>
    </div >
  );
}

export { GroceriesList };