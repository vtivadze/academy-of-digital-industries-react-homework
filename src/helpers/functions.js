export const activateClassName = (className) => `${className}--active`;
export const formatUser = user => {
  return `${user.firstName} ${user.lastName}, ${user.age}`;
}