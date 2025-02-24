import { data } from "../data.js";
import { filterTest1, filterTest2, countTest } from "./mock.js";
import { filterAnimals, countPeopleAndAnimals } from "../utils.js";

describe("filterAnimals function", () => {
  describe("input validation", () => {
    test.each([
      ["null", null],
      ["undefined", undefined],
      ["number", 42],
      ["object", {}],
    ])("should throw an error when data is %s", (_, invalidInput) => {
      expect(() => filterAnimals(invalidInput)).toThrow();
    });

    test.each([["empty string", ""]])(
      "should return original data when filter is %s",
      (_, filterValue) => {
        expect(filterAnimals(filterValue)).toEqual(data);
      }
    );
  });

  describe("filtering behavior", () => {
    test.each([
      ["exact match", "Narwhal", filterTest1],
      ["partial match", "be", filterTest2],
      ["non-existent animal", "JB the Cat", []],
    ])("should filter correctly with %s", (_, searchTerm, expected) => {
      expect(filterAnimals(searchTerm)).toEqual(expected);
    });
  });
});

describe("countPeopleAndAnimals function", () => {
  describe("counting behavior", () => {
    let withCount;

    beforeEach(() => {
      withCount = countPeopleAndAnimals(data);
    });

    test("should match expected structure", () => {
      expect(withCount).toEqual(countTest);
    });
  });
});
