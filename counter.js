import React from 'react';

const Counter = ({ value, onIncrease }) => {
    return (
        <>
          {value} <br />
          <button onClick={onIncrease}>+1</button>
        </>
    );
    }



export const addToDo = (data) => {
    return {
        types: "ADD_TODO",
        data
    };
}