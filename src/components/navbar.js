import React, { useEffect } from 'react';

const Navbar = ({ setIsCart, setIsList, cartData }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <h1
        onClick={() => {
          setIsList(true);
          setIsCart(false);
        }}
      >
        Shopping cart
      </h1>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXWfz57scy5v60DQ2o3pULuFnNGohkbWaqNsyLfU&s"
          height="32"
          width="32"
          onClick={() => {
            setIsCart(true);
            setIsList(false);
          }}
        />
        <span>{cartData.length}</span>
      </div>
    </div>
  );
};
export default Navbar;
