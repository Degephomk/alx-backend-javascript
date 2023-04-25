/**
 * Create a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {Number} length - The length of the array.
 * @param {Number} position - The position of the value.
 * @param {Number} value - The value to set at the specified position.
 * @throws {Error} If the arguments are invalid or if the value cannot be added at the specified position.
 * @returns {Int8Array} - The TypedArray.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);
  if (position > length - 1) throw Error('Position outside range');
  view.setInt8(position, value);
  return view;
}
