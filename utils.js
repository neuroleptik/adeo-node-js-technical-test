import { data } from "./data.js";

/**
 * Filters animals across all countries and people based on a search pattern
 * @param {string} pattern - The search string to filter animal names
 * @returns {Array} Filtered array of countries containing only people with matching animals
 */
export const filterAnimals = (pattern) => {
  // Option to render non case sensitive filtering
  const lowerCasePattern = pattern.toLowerCase();

  return data
    .map((country) => {
      const filteredPeople = country.people
        .map((person) => {
          const filteredAnimals = person.animals.filter((animal) =>
            animal.name.toLowerCase().includes(lowerCasePattern)
          );
          return { ...person, animals: filteredAnimals };
        })
        .filter((person) => person.animals.length > 0);

      return { ...country, people: filteredPeople };
    })
    .filter((country) => country.people.length > 0);
};

/**
 * Counts animals for each person and people for each country,
 * appending the counts in square brackets to the names
 * @returns {Array} Modified array of countries with count information added to names
 */
export const countPeopleAndAnimals = () => {
  return data.map((country) => {
    const countedPeople = country.people.map((person) => {
      const animalCount = person.animals.length;
      return { ...person, name: `${person.name} [${animalCount}]` };
    });
    const peopleCount = countedPeople.length;
    return {
      ...country,
      people: countedPeople,
      name: `${country.name} [${peopleCount}]`,
    };
  });
};
