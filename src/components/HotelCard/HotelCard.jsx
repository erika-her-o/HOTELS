import { dates } from "../../resources/functionDate";
import "./HotelCard.css";

function HotelCard(props) {
  const changeIcon = () => {
    const classArray = [];
    for (let i = 1; i < 5; i++) {
      classArray.push(
        <i
          className={
            i <= props.price
              ? "fas fa-dollar-sign"
              : "fas fa-dollar-sign paint-price"
          }
          key={i}
        ></i>
      );
    }
    return classArray;
  };
  const arrayClassIcon = changeIcon();
  return (
    <div className="hotel-card">
      <img className="hotel-img" src={props.photo} alt={props.name} />

      <div className="hotel-info">
        <div className="hotel-description">
          <h2>{props.name}</h2>
          <h3 className="date">Desde {dates(props.availabilityFrom)}</h3>
          <h3 className="date">Hasta {dates(props.availabilityTo)}</h3>
          <p className="text">{props.description}</p>
        </div>

        <div className="availability">
          <div className="location">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <span className="availability-details">
              {props.city}, {props.country}
            </span>
          </div>

          <div className="beds">
            <div className="icon">
              <i className="fas fa-bed"></i>
            </div>
            <span className="availability-details">
              {props.rooms} Habitaciones
            </span>
          </div>

          <div className="icon-price">{arrayClassIcon}</div>
        </div>
      </div>

      <div className="btn-reverse">
        <button className="reserve">Reservar</button>
      </div>
    </div>
  );
}

export default HotelCard;
