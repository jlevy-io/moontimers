function getRandomIntInclusive(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

export function getTimeDiff(start_date, end_date) {
  // get total seconds between the times
  let delta = Math.abs(end_date - start_date) / 1000;

  // calculate (and subtract) whole days
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  const seconds = Math.round(delta % 60); // in theory the modulus is not required
  return { days, hours, minutes, seconds };
}

export const inclusiveRange = (start, end, step) => {
  return Array.from(
    Array.from(Array(Math.ceil((end - start + 1) / step)).keys()),
    (x) => start + x * step
  );
};

export const months = [
  {
    value: 1,
    displayValue: "Jan",
    days: 31,
  },
  {
    value: 2,
    displayValue: "Feb",
    days: 28,
  },
  {
    value: 3,
    displayValue: "Mar",
    days: 31,
  },
  {
    value: 4,
    displayValue: "Apr",
    days: 30,
  },
  {
    value: 5,
    displayValue: "May",
    days: 31,
  },
  {
    value: 6,
    displayValue: "Jun",
    days: 30,
  },
  {
    value: 7,
    displayValue: "Jul",
    days: 31,
  },
  {
    value: 8,
    displayValue: "Aug",
    days: 31,
  },
  {
    value: 9,
    displayValue: "Sep",
    days: 30,
  },
  {
    value: 10,
    displayValue: "Oct",
    days: 31,
  },
  {
    value: 11,
    displayValue: "Nov",
    days: 30,
  },
  {
    value: 12,
    displayValue: "Dec",
    days: 31,
  },
];

export function componentLoader(lazyComponent, attemptsLeft) {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(
            resolve,
            reject
          );
        }, 1000);
      });
  });
}

export default getRandomIntInclusive;
