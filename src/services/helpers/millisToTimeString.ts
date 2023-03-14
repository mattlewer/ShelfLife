export const millisToTimeString = (millis: number) => {
  return new Date(millis).toISOString().slice(14, 19);
};
