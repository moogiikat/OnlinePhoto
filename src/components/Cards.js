import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Гэрэл зурагууд</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Солонгос улс'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Япон улс хоккайдо муж нинжагийн тосгон'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Бүргэд'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='хөл бөмөгийн талбай'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Талын агуй сүхбаатар аймаг'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
