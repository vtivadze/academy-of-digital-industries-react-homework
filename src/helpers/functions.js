export const activateClassName = className => `${className}--active`;
export const formatUser = user => {
  return `${user.firstName} ${user.lastName}, ${user.age}`;
};
export const getRandomInteger = () => {
  const min = 20;
  const max = 50;
  return Math.round(Math.random() * (max - min) + min);
};

export const getFormInputClassName = (error, input) => {
  let className = 'input';

  if (error && input) {
    className += ' is-danger';
  } else if (!error && input) {
    className += ' is-success';
  }

  return className;
};

export const generateGetUrl = (url, options) => {
  const queryData = Object.entries(options).reduce((query, [key, value]) => {
    return (query += `&${key}=${value}`);
  }, '');
  return url + queryData;
};
