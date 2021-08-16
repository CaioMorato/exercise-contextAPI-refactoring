import React, { useState } from 'react';
import myContext from './myContext';

function GlobalProvider({ children }) {
  const [redCar, redCarChange] = useState(false);
  const [blueCar, blueCarChange] = useState(false);
  const [yellowCar, yellowCarChange] = useState(false);
  const globalState = {
    redCar,
    redCarChange,
    blueCar,
    blueCarChange,
    yellowCar,
    yellowCarChange,
  };
  const changePosition = (car) => {
    const genFun = car + 'Change';
    if (globalState[car] === true) {
      globalState[genFun](false);
    } else {
      globalState[genFun](true);
    }
  };
  return <myContext.Provider value={{ globalState, changePosition }}>{children}</myContext.Provider>;
}

export default GlobalProvider;
