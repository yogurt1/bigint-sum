/**
 * @param aArg
 * @param bArg
 * @return min/max
 */
export function minMax(
  aArg: string,
  bArg: string
): {
  min: string;
  max: string;
} {
  if (aArg.length > bArg.length) {
    return {
      min: bArg,
      max: aArg,
    };
  }

  return {
    min: aArg,
    max: bArg,
  };
}

/**
 * Parse big int string as int array
 * @param bigIntString BigInt string
 * @return int array
 */
export function makeIntArrayFromString(bigIntString: string): Uint8Array {
  const charArray = bigIntString.split('');
  const count = charArray.length;
  const intArray = new Uint8Array(count);

  for (let i = 0; i < count; i += 1) {
    const char = charArray[i];
    const int = parseInt(char, 10);
    intArray[i] = int;
  }

  return intArray;
}

/**
 * Print integer's array as string
 * @param intArray
 * @return bigint string
 */
export function printIntArray(intArray: Uint8Array): string {
  if (intArray.length === 0) {
    return '0';
  }

  const asString = intArray.join('');
  return asString;
}

/**
 * Push int to array
 * @param intArray
 * @param int
 * @return new int array
 */
export function appendIntArray(intArray: Uint8Array, int: number): Uint8Array {
  const newLength = intArray.length + 1;
  const newIntArray = new Uint8Array(newLength);

  newIntArray.set(intArray);
  const lastIndex = newLength - 1;
  newIntArray[lastIndex] = int;

  return newIntArray;
}
