export const getCounter = () => {
  let i = 1;

  return function () {
    return i++;
  };
};

export const getId = () => {
  return Math.random() * 10;
};
