import React from 'react';

const List = ({ list, handleAdditem }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%',
        margiTop: '1rem',
      }}
    >
      {list.map((item) => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                border: '1px solid red',
                padding: '1rem',
                flexDirection: 'column',
                marginBottom: '1rem',
              }}
            >
              <p> {item.title}</p>
              <p>{item.price}</p>
              <button
                onClick={() => {
                  handleAdditem(item);
                }}
              >
                Add to cart
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default List;
