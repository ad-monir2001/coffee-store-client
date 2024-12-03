import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const coffeeData = useLoaderData();

  const [coffees, setCoffees] = useState(coffeeData);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar></Navbar>
      <h1 className="text-center font-bold text-3xl text-[#331A15]">
        Our popular coffees: {coffeeData.length}
      </h1>
      
      <div>
        {coffeeData.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
