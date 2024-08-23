const formatTimeUnit = (unit) => unit.toString().padStart(2, "0");

const convertHour = (hours) => hours % 12 || 12;

const date = new Date();

const hours = formatTimeUnit(convertHour(date.getHours()));
const minutes = formatTimeUnit(date.getMinutes());
const year = date.getFullYear();
const month = formatTimeUnit(date.getMonth() + 1);
const day = formatTimeUnit(date.getDate());

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
