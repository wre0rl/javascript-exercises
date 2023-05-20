const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(people) {
  const year = new Date().getFullYear();
  const ages = [];

  people.forEach(el => {
    let age = 0;
    if (el.yearOfDeath) {
      age = el.yearOfDeath - el.yearOfBirth;
    } else {
      age = year - el.yearOfBirth;
    }

    ages.push({name: el.name, age: age});
  });

  const sort = ages.sort((a, b) => b.age - a.age);
  return sort[0];
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
