import React from 'react';

const Cart = ({ cartData, handleRemove }) => {
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
      {cartData.length &&
        cartData.map((item, index) => {
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
                <span>+</span>
                <p>{item.amount}</p>
                <span>-</span>
                <p> {item.title}</p>
                <p>{item.price}</p>
                <button
                  onClick={() => {
                    handleRemove(index);
                  }}
                >
                  Remove Item
                </button>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Cart;
