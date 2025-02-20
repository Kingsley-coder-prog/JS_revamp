Promise.resolve("asyncfail")
  .then((response) => {
    throw new Error("#1 fail");
    return response;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("error", err.message);
  });
