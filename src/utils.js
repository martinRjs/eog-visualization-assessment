export const Metrics = {
  TUBING_PRESSURE: 'tubingPressure',
  FLARE_TEMP: 'flareTemp',
  INJ_VALVE_OPEN: 'injValveOpen',
  OIL_TEMP: 'oilTemp',
  CASING_PRESSURE: 'casingPressure',
  WATER_TEMP: 'waterTemp'
}

export const dateFormatter = (t) => {
  const [h, m, rest] = new Date(t).toLocaleTimeString().split(':');
  const sufix = rest.split(' ')[1];
  return `${h}:${m} ${sufix.toLowerCase()}`;
}

export function getTimestamp() {
  let currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() - 10);
  return currentDate.getTime();
}

export const colors = [
  '#16a085',
  '#e67e22',
  '#2980b9',
  '#8e44ad',
  '#34495e',
  '#c0392b'
];