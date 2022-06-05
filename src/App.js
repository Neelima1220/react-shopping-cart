import React, { useState } from 'react';
import './style.css';
import Navbar from './components/navbar';
import List from './components/list';
import Cart from './components/cart';

export default function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'My First Book of Pencil Control',
      author: 'by Wonder House Books | 25 April 2018',
      price: 5,
      img: 'https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg',
      amount: 1,
    },
    {
      id: 2,
      title: '108 Panchatantra Stories',
      author: 'by Maple Press  | 1 September 2020',
      price: 10,
      img: 'https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg',
      amount: 1,
    },
    {
      id: 3,
      title: 'Amazing Questions & Answers Science',
      author: 'by Om Books Editorial Team  | 25 November 2018',
      price: 15,
      img: 'https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg',
      amount: 1,
    },
    {
      id: 4,
      title: 'My First Book of Pencil Control',
      author: 'by Wonder House Books | 25 April 2018',
      price: 20,
      img: 'https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg',
      amount: 1,
    },
    {
      id: 5,
      title: 'My First 1000 Words',
      author: 'by Wonder House Books  | 1 January 2018',
      price: 25,
      img: 'https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg',
      amount: 1,
    },
  ]);
  const [cartData, setCartData] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const [isList, setIsList] = useState(true);
  const handleAdditem = (item) => {
    setCartData([...cartData, item]);
  };
  const handleRemove = (i) => {
    const tempData = cartData.filter((_, index) => index !== i);
    setCartData(tempData);
  };
  return (
    <>
      <Navbar setIsCart={setIsCart} setIsList={setIsList} cartData={cartData} />
      {isList && <List list={list} handleAdditem={handleAdditem} />}
      {isCart && <Cart cartData={cartData} handleRemove={handleRemove} />}
    </>
  );
}
