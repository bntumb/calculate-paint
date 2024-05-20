// Import the function to be tested
const { calculateArea } = require('./calculateArea');

// Test cases for the calculateArea function
describe('calculateArea', () => {
  test('should calculate area for triangle', () => {
    const area = calculateArea('triangle', 4, 5, 0);
    expect(area).toBe(10); // Area of a triangle with width=4 and height=5 is 1/2 * 4 * 5 = 10
  });

  test('should calculate area for rectangle', () => {
    const area = calculateArea('rectangle', 4, 5, 0);
    expect(area).toBe(20); // Area of a rectangle with width=4 and height=5 is 4 * 5 = 20
  });

  test('should calculate area for rectangle with excluded area', () => {
    const area = calculateArea('rectangle', 4, 5, 10);
    expect(area).toBe(10); // Area of a rectangle with width=4 and height=5 is 4 * 5 = 20, excluding 10 gives 10
  });

  test('should calculate area for triangle with excluded area', () => {
    const area = calculateArea('triangle', 4, 5, 5);
    expect(area).toBe(5); // Area of a triangle with width=4 and height=5 is 1/2 * 4 * 5 = 10, excluding 5 gives 5
  });

  test('should calculate area for invalid shape', () => {
    const area = calculateArea('circle', 4, 5, 0);
    expect(area).toBeNaN(); // Area of an invalid shape should be NaN
  });
});
