/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
/**
 * const getRandomValue = require('./getRandomValue');
 */

const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
let count = 0;
const flag = true;
print('What do you want to say to Grandma!!');
let message = prompt('send your message');
while (flag === true) {
  if (isUppercase(message)) {
    if (message === 'BYE') {
      count += 1;
      if (count > 2) {
        break;
      }
    }
    print('NO, NOT SINCE 1930');
    /**
     * print('NO, NOT SINCE '.concat(getRandomValue(1932, 1950)));
     */
  } else {
    count = 0;
    print('HUH?! SPEAK UP, SONNY!');
  }
  message = prompt('send your message');
}
