// show good date format of birthdays of Date() object

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

for (let person in notablePeople) {
  const curBirth = notablePeople[person];
  console.log(
    `${person}: ${
      curBirth.getMonth() + 1
    }/${curBirth.getDate()}/${curBirth.getFullYear()}`
  );
}
