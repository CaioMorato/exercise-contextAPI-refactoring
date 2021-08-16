// src/Cars.js
import React, {useContext} from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import myContext from './providers/myContext'

function Cars() {
  const {globalState, changePosition} = useContext(myContext)
  return (
    <div>
      <div>
        <img
          className={globalState.redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => changePosition('redCar')}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={globalState.blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => changePosition('blueCar')}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={globalState.yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => changePosition('yellowCar')}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

export default Cars;
