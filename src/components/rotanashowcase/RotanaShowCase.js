import React from 'react';
import './rotanashowcase.css'
import {GiPayMoney} from 'react-icons/gi'
import{AiFillStar} from 'react-icons/ai'
import {AiFillCar} from 'react-icons/ai'
import {MdAttachMoney} from 'react-icons/md'
const RotanaShowCase = () => {
  return (
    <>
      <div className="rotana-show-case">
        <div className="left-showcase">
          <div className="left-showcase-top">
            <AiFillCar/>
            <h1>SPORT AND LUXURY CARS</h1>
            <p>Rent the most exciting Dubai luxury and sports cars at Rotana Star. All our cars are less than three years old, have low mileage, and are purchased directly from the authorized dealers like Rolls Royce and Lamborghini. When you rent a car from Rotana Star you can be sure of the high-end maintenance guarantee for your driving pleasure.</p>
          </div>
          <div className="left-showcase-bottom">
          <MdAttachMoney/>
            <h1>NO EXTRA FEES</h1>
            <p>You can trust our team of professionals. We guarantee no hidden costs will be charged after you sign your contract. All contract clauses and fees are clearly explained beforehand: Salik (Toll Gate), Kilometers included, Deposit, Additional driver, Collision damage waiver, Fuel. Nothing extra will be added to your total bill.</p>
          </div>
        
        </div>
        <div className="middle-showcase">
        <img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/web-2.png" alt="" />
        </div>
        <div className="right-showcase">
          <div className="right-showcase-top">
          <GiPayMoney/>
        <h1>AFFORDABLE LUXURY</h1>
        <p>What’s our secret for having the best car rental prices in the UAE? We want to make you happy. For an unforgettable driving experience in Dubai, we provide the most luxurious cars at the best rental price, because we can. Our mission is to keep our margins low and standards high. With extensive number of cars in our fleet, the choice of picking the best one is in your hands.</p>
          </div>
          <div className="right-showcase-bottom">
          <AiFillStar/>
        <h1>EXPERIENCE THE JET-SET LIFE</h1>
        <p>WWhile visiting Dubai, you want the best of everything. The lifestyle of the rich and famous means you will require a lavish car as your means of transportation. That is why we offer you the best luxury car rental service, while standing by our high commitment to excellence and honesty. Our car rental service is the most trusted on the market, and has earned us our reputation as the best luxury car rental company in Dubai. Don’t waste your time looking anywhere else, Rotana Star has exactly what you need from the world’s best exotic and luxury vehicles.</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default RotanaShowCase;
