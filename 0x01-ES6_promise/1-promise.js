export default function getFullResponseFromAPI(success) {
  // Create a promise
  const promise = new Promise((resolve, reject) => {
    // If success is true, resolve the promise with an object with 2 attributes: status: 200, body: 'Success'
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If success is false, reject the promise with an error object with the message The fake API is not working currently
      reject({
        message: 'The fake API is not working currently'
      });
    }
  });

  // Return the promise
  return promise;
}
