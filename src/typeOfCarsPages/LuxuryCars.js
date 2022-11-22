import React from 'react';
import TypeOfCarsContent from '../components/TypeOfCarsContent/TypeOfCarsContent';
import TypeOfCarsShowcase from '../components/TypeOfCarsShowCase/TypeOfCarsShowcase';
import TypeOfCarsText from '../components/TypeOfCarsText/TypeOfCarsText';

const LuxuryCars = () => {
  return (
    <>
      <TypeOfCarsShowcase/>
      <TypeOfCarsContent/>
      <TypeOfCarsText/>
    </>
  );
}

export default LuxuryCars;
