export const saveState = (state) => {
  debugger;
  let serializedData = JSON.stringify(state);
  localStorage.setItem('state', serializedData)
}

export const loadState = () => {
  const serializedData = localStorage.getItem('state')
  if (serializedData === null) {
    return undefined;
  }
  return JSON.parse(serializedData);
}
