import { dates } from "../../resources/functionDate";
import "./Header.css";

function Header({ stateValue, initialValues }) {
  const priceHotel = () => {
    if (stateValue.price === "1") {
      return "económico";
    } else if (stateValue.price === "2") {
      return "confort";
    } else if (stateValue.price === "3") {
      return "lujos";
    } else {
      return "magnífico";
    }
  };

  const timeZero = (dateHotel) => {
    const dateHeader = dateHotel.split("-");
    const dateSet = new Date(
      dateHeader[0],
      dateHeader[1] - 1,
      dateHeader[2]
    ).setHours(0, 0, 0, 0);
    return dateSet.valueOf();
  };
  return (
    <div className="header">
      <h1>Hoteles</h1>
      <h2>
        {stateValue.startDate !== initialValues.startDate &&
        stateValue.endDate !== initialValues.endDate
          ? "Desde " +
            dates(timeZero(stateValue.startDate)) +
            " hasta " +
            dates(timeZero(stateValue.endDate))
          : "En cualquier fecha"}
      </h2>
      <h2>
        En {""}
        {stateValue.country !== initialValues.country
          ? stateValue.country
          : "cualquier país"}
      </h2>
      <h2>
        De {""}
        {stateValue.price !== initialValues.price
          ? "precio " + priceHotel()
          : "cualquier precio"}
      </h2>
      <h2>
        De {""}
        {stateValue.rooms !== initialValues.rooms
          ? "tamaño " + stateValue.rooms
          : "cualquier tamaño"}
      </h2>
    </div>
  );
}

export default Header;
