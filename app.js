import { filterAnimals, countPeopleAndAnimals } from "./utils.js";

// Command line interface management
const args = process.argv.slice(2);
if (args[0].startsWith("--filter=")) {
  const pattern = args[0].split("=")[1];
  console.log(JSON.stringify(filterAnimals(pattern), null, 2));
} else if (args[0] === "--count") {
  console.log(JSON.stringify(countPeopleAndAnimals(), null, 2));
} else {
  console.log("Usage: node app.js --filter=<pattern> or --count");
}
