export default function handleResponseFromAPI(promise) {
  // Add a handler to the promise that logs the success message
  promise.then(() => {
    console.log('Got a response from the API');
  });

  // Add a handler to the promise that returns an object with the following attributes
  promise.then((response) => {
    return {
      status: 200,
      body: response,
    };
  });
