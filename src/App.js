import React, { useState } from "react";
import Header from "./components/Header/Header";
import Filters from "./components/Filter/Filters";
import HotelCard from "./components/HotelCard/HotelCard";
import { hotelsData } from "./data/data";
import { initialStates } from "./resources/initialStates";
import filterHotels from "./resources/filterHotels";
import "./styles.css";

function App() {
  const [stateValue, updateState] = useState(initialStates);
  let filteredHotels = filterHotels(hotelsData, stateValue);
  return (
    <div className="App">
      <Header stateValue={stateValue} initialValues={initialStates} />
      <Filters
        stateValue={stateValue}
        updateState={updateState}
        initialValues={initialStates}
      />
      {filteredHotels.length > 0 ? (
        <div className="cards-container">
          {filteredHotels.map((hotel, i) => {
            return (
              <HotelCard
                key={i}
                slug={hotel.slug}
                name={hotel.name}
                photo={hotel.photo}
                description={hotel.description}
                availabilityFrom={hotel.availabilityFrom}
                availabilityTo={hotel.availabilityTo}
                rooms={hotel.rooms}
                city={hotel.city}
                country={hotel.country}
                price={hotel.price}
              />
            );
          })}
        </div>
      ) : (
        <div className="error">
          <img className="error-icon" src="/icon/error-icon.svg" alt="error" />
          <h2>Lo siento, no se encuentra ningún hotel disponible.</h2>
        </div>
      )}
    </div>
  );
}

export default App;
