import * as helpers from '../helpers';

describe("Test helpers", () => {
  it("TimeConverter MUST return string in format 0h 0m", () => {
    const result = helpers.timeConverter(175);

    expect(result).toBe('2h 55m');
  })
  
  it("budgetRevenueConverter MUST return string in format 0M", () => {
    const result = helpers.budgetRevenueConverter(6000000);

    expect(result).toBe('6M');
  })
  
  it("getYearOfDate MUST return number in format 0000", () => {
    const result = helpers.getYearOfDate('1972-03-14');

    expect(result).toEqual(1972);
  })
  
  it("getYearOfDate MUST throw an error", () => {
    const result = helpers.getYearOfDate('We will break it');

    expect(result).toBeNaN();
  })
})