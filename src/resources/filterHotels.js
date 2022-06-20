function filterHotels(hotelsData, stateValue) {
  const newList = hotelsData

    .filter((hotel) => {
      if (stateValue.startDate !== "" && stateValue.endDate !== "") {
        return (
          hotel.availabilityFrom >= new Date(stateValue.startDate).getTime() &&
          hotel.availabilityTo <= new Date(stateValue.endDate).getTime()
        );
      }
      return hotel;
    })

    .filter((hotel) => {
      if (stateValue.country !== "Todos los paises") {
        return hotel.country === stateValue.country;
      }
      return hotel;
    })

    .filter((hotel) => {
      if (stateValue.price !== "Cualquier precio") {
        return hotel.price.toString() === stateValue.price;
      }
      return hotel;
    })

    .filter((hotel) => {
      if (stateValue.rooms !== "Cualquier tamaño") {
        if (stateValue.rooms === "pequeño") {
          return hotel.rooms <= 10;
        } else if (stateValue.rooms === "mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else {
          return hotel.rooms > 20;
        }
      }
      return hotel;
    });
  return newList;
}

export default filterHotels;
