export const activateClassName = (className) => `${className}--active`;
export const formatUser = user => {
  return `${user.firstName} ${user.lastName}, ${user.age}`;
};
export const getRandomInteger = () => {
  const min = 20;
  const max = 50;
  return Math.round(Math.random() * (max - min) + min);
};