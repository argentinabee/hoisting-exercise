/* Task 1: Declare a Destination Variable */
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
const travelDate = "2024-03-15";

// travelDate = "2025-01-01"; // Uncommenting this line will cause an error

/*
 * Observations:
 * A const variable cannot be reassigned after it is declared.
 * If you try to assign a new value to travelDate,
 * JavaScript throws a TypeError: Assignment to constant variable.
 */

/* Task 4: Experiment with Variable Hoisting */
console.log(timeMachineModel);

var timeMachineModel = "T-800";

console.log(timeMachineModel);

/*
 * Observations:
 * The first console.log prints undefined because variables declared
 * with var are hoisted to the top of their scope.
 * Only the declaration is hoisted, not the assignment.
 * After the assignment, the second console.log prints "T-800".
 */
