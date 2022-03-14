export const increment = (nr) => {
  return {
    type: "INCREMENT", // checks with our counter defined in /reducers/counter.js
    data: nr, // or payload
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT", // checks with our counter defined in /reducers/counter.js
  };
};
