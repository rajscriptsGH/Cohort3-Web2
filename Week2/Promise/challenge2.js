/*
💻 Challenge 2: Register → Login → Fetch Profile
🎯 Scenario:
You're simulating a mini app flow:

A user registers ✅

Then logs in ✅

If successful, fetches their profile info 📄
*/

const user = {
  name: "Razz",
  email: "razz@code.com",
};

let isRegistered = false;
let isLogged = false;

function registerUser() {
  return new Promise((res) => {
    setTimeout(() => {
      isRegistered = true;
      res("Registration successful");
    }, 1500);
  });
}

function loginUser() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isRegistered) {
        isLogged = true;
        res("Login successful");
      } else {
        rej("Not registered");
      }
    }, 1000);
  });
}

function getProfile() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isLogged) {
        res(user);
      } else {
        rej("Not registered");
      }
    }, 1000);
  });
}

registerUser()
  .then((msg) => {
    console.log(msg);
    return loginUser();
  })
  .then((msg) => {
    console.log(msg);
    return getProfile();
  })
  .then((profile) => {
    console.log("User profile:", profile);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
