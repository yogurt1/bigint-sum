// import assert from 'assert';
import {
  makeIntArrayFromString,
  minMax,
  printIntArray,
  appendIntArray,
} from './utils';

/**
 * Sum two numbers
 * @param arg1 first number
 * @param arg2 second number
 * @return {string}
 */
export function sum(arg1: string, arg2: string) {
  // assert(typeof arg1 === 'string', 'first arg should be a string');
  // assert(typeof arg2 === 'string', 'second arg should be a string');

  const { min: minString, max: maxString } = minMax(arg1, arg2);
  const minNumber = makeIntArrayFromString(minString).reverse();
  const maxNumber = makeIntArrayFromString(maxString).reverse();

  let sum = new Uint8Array();
  let remain = 0;

  for (let i = 0; i < maxNumber.length; i++) {
    const minInt = minNumber[i];
    const maxInt = maxNumber[i];
    const minIntOrZero = i < minNumber.length ? minInt : 0;
    const intsSumWithRemain = minIntOrZero + maxInt + remain;
    const mod = intsSumWithRemain % 10;

    sum = appendIntArray(sum, mod);
    remain = intsSumWithRemain < 10 ? 0 : Math.floor(intsSumWithRemain / 10);
  }

  if (remain > 0) {
    sum = appendIntArray(sum, 0);
  }

  let resultSum = sum.reverse();

  while (resultSum[0] === 0) {
    resultSum = resultSum.slice(1);
  }

  const sumString = printIntArray(sum);
  return sumString;
}
