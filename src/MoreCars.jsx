import { useState } from 'react';

function MoreCars() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
  }
  function handleRemoveCar(index) {}
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
          <ul>
              {cars.map((car, index) => <li key={index}>{car.year} {car.make} {car.model }</li>)}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Enter year..."
      />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter make..."
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter model..."
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MoreCars;
