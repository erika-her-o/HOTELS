export const dates = (availabilityFrom) => {
  const daysArray = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ];
  const monthsArray = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  const fechaConvertir = new Date(availabilityFrom);
  const dateNumber = fechaConvertir.getDate();
  const dateDay = daysArray[fechaConvertir.getDay()];
  const dateMonth = monthsArray[fechaConvertir.getMonth()];
  const dateYear = fechaConvertir.getFullYear();
  const dateConverted =
    "el " +
    dateDay +
    ", " +
    dateNumber +
    " de " +
    dateMonth +
    " de " +
    dateYear;
  return dateConverted;
};
