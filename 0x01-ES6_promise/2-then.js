export default function handleResponseFromAPI(promise) {
  // Add a handler for the promise resolving
  promise.then((response) => {
    // Log the fact that the response was received
    console.log('Got a response from the API');

    // Return an object with the status and body of the response
    return {
      status: 200,
      body: response,
    };
  });

  // Add a handler for the promise rejecting
  promise.catch((error) => {
    // Log the error
    console.log(error);

    // Return an empty Error object
    return {};
  });

  // Return the promise
  return promise;
}
