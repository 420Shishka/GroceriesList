import React, { ChangeEvent, KeyboardEvent, useId, useState } from 'react';
import { nanoid } from 'nanoid';
import { SlTrash } from 'react-icons/sl';

import './GroceriesList.css';
import { IGroceryItem } from '../grocery-item/model';
import { GroceryItem } from '../grocery-item/GroceryItem';

const GroceriesList = () => {
  const inputId = useId();
  const [data, setData] = useState<IGroceryItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addItem = () => {
    const text = inputValue.trim();
    if (!text) return;

    const id = nanoid();

    data.push({ id, text });

    console.log(data);
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
              value={inputValue}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setInputValue(event.target.value);
              }}
              onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key !== 'Enter') return;

                addItem();
                setInputValue('');
              }}
            />
          </div>
        </div>

        {data.length ? (
          <ul className='groceries__list'>
            {data.map(item => (
              <GroceryItem label={item.text} />
            ))}
          </ul>
        ) : (
          <div className='groceries__list-empty'>No items</div>
        )}


      </div>
    </div >
  );
}

export { GroceriesList };