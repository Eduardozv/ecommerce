const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
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
    "Diciembre",
  ];
  const month = monthNames[date.getMonth()]; // Obtener el nombre del mes
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const utils = {
    formatDate
  // Add other constants here
}

export default utils;