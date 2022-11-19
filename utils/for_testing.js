/**
 * - Individual test cases are defined with the test function 
 * - The first parameter of the function is the test description as a string 
 * - The second parameter is a function, that defines the functionality for the test case
 * 
 * - First we execute the code to be tested, meaning that we generate a reverse for the
 *   string react. Next we verify the results with the expect function 
 * - Expect wraps the resulting value into an object that offers a collection of matcher
 *   functions, that can be used for verifying the correctness of the result 
 * - Since in this test case we are comparing two strings, we can use the toBe matcher
 * - Notice is that we wrote the tests in quite a compact way, without assigning the 
 *   output of the function being tested to a variable
 * - Describe blocks can be used for grouping tests into logical collections
 * - describe blocks are necessary when we want to run some shared setup or teardown 
 *   operations for a group of tests
 * - To rum:
 *   All tests --> npm run test
 *   One file  --> npm run test reverse.test.js
 *   Two files --> npm run test reverse.test.js average.test.js
 * 
 */

//~
export const reverse = string => {
    return string
        .split('')
        .reverse()
        .join('')
}
  
export const average = array => {
    const reducer = ( sum, item ) => {
        return sum + item
    }

    return array.length === 0  
        ? 0
        : array.reduce( reducer, 0 ) / array.length
}

