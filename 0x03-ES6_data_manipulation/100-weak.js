/**
 * Query an API endpoint.
 *
 * @param {Object} endpoint - The endpoint object.
 * @throws {Error} If the endpoint is already in the weakMap and the count is greater than or equal to 5.
 */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const nQuery = weakMap.get(endpoint);
    if (nQuery >= 4) throw Error('Endpoint load is high');
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else { weakMap.set(endpoint, 1); }
}
