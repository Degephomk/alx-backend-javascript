function getFullResponseFromAPI(success) {
  // Check the argument
  if (typeof success !== 'boolean') {
    throw new Error('The argument must be a boolean');
  }

  // Create the promise
  const promise = new Promise((resolve, reject) => {
    if (success) {
      // Resolve the promise with the success object
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Reject the promise with the error object
      reject({
        message: 'The fake API is not working currently',
      });
    }
  });

  // Return the promise
  return promise;
}
