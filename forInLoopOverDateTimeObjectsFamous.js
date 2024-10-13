//Add a for-in loop to display each person born before Sonia Sotomayor and the rounded number of days difference in birth

const notablePeople = {
  'Elvis Presley': new Date(1935, 0, 8),
  'Sonia Sotomayor': new Date(1954, 5, 25),
  'Franklin D. Roosevelt': new Date(1882, 0, 30),
  'Elon Musk': new Date(1971, 5, 28),
  'Roger Staubach': new Date(1942, 1, 5),
  'Steve Jobs': new Date(1955, 1, 24),
  'Albert Einstein': new Date(1879, 2, 14),
  'Isaac Asimov': new Date(1919, 9, 4),
  'Jada Pinkett Smith': new Date(1971, 8, 18),
  'Grace Hopper': new Date(1906, 11, 9)
};

function getDifferenceInDays(timeDifferenceMilliseconds) {
  timeDifferenceMilliseconds = Math.abs(timeDifferenceMilliseconds);
  let daysDifference = timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
  return Math.round(daysDifference);
}

// Ex) Elvis Presley was born 7108 days before Sonia Sotomayor

for (let guy in notablePeople) {
  const soniaMillisec = notablePeople['Sonia Sotomayor'].getTime();
  const bdayMillisec = notablePeople[guy].getTime();
  if (soniaMillisec > bdayMillisec) {
    console.log(
      `${guy} was born ${getDifferenceInDays(
        soniaMillisec - bdayMillisec
      )} days before Sonia Sotomayor`
    );
  }
}
