import "./Filters.css";

const Filters = ({ stateValue, updateState, initialValues }) => {
  const changeValue = (e) => {
    updateState({
      ...stateValue,
      [e.target.name]: e.target.value
    });
  };

  const cleanFilters = () => {
    updateState(initialValues);
  };

  return (
    <div className="filters">
      <form className="form-filters">
        <input
          value={stateValue.startDate}
          type="date"
          onChange={changeValue}
          name="startDate"
          placeholder="Cualquier fecha"
        />

        <input
          value={stateValue.endDate}
          type="date"
          onChange={changeValue}
          name="endDate"
          placeholder="Cualquier fecha"
        />

        <select
          value={stateValue.country}
          onChange={changeValue}
          name="country"
        >
          <option value="Todos los paises">Todos los países</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>

        <select value={stateValue.price} onChange={changeValue} name="price">
          <option value="Cualquier precio">Cualquier precio</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>

        <select value={stateValue.rooms} onChange={changeValue} name="rooms">
          <option value="Cualquier tamaño">Cualquier tamaño</option>
          <option value="pequeño">Hotel pequeño</option>
          <option value="mediano">Hotel mediano</option>
          <option value="grande">Hotel grande</option>
        </select>

        <button className="btn" onClick={cleanFilters}>
          <div className="tooltip">
            <img className="trash" src="/icon/trash.svg" alt="trash" />
            <span className="tooltiptext">Limpiar</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Filters;
