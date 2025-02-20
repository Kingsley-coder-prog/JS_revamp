// Promise.resolve("asyncfail")
//   .then((response) => {
//     throw new Error("#1 fail");
//     return response;
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
// });

(async function () {
  try {
    await Promise.reject("oopsie");
  } catch (err) {
    console.log(err);
  }
  console.log("This is still good!");
})();
