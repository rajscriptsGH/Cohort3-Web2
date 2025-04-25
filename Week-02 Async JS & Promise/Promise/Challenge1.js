/*

💻 Challenge: Login → Fetch Dashboard → Show Data
🎯 Goal:
Simulate a login system that:

Checks if the user is logged in ✅

If logged in, fetches dashboard data 📊

Displays it OR handles any error properly ❌

*/

function userDashboard() {
  const user = {
    name: "Razz",
    handle: "rajscripts100x",
    isLogged: true,
  };
  return user;
}

let user = userDashboard();
// console.log(user.name);

function isUserLoggedIn() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (user.isLogged == true) {
        res(user);
      } else {
        rej("not logged");
      }
    }, 1200);
  });
}

let promise = isUserLoggedIn();
console.log(promise);

promise
  .then((data) => {
    console.log(data.user);
  })
  .catch((err) => {
    console.log(err);
  });
