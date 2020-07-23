// Fake service awaiting implementation of backend
import { getUsers } from "./fakeUserService";

export async function login(phoneNumber, password) {
  //   console.log("received vals: phone: " + phoneNumber + " pass: " + password);
  //Check user/pass against fake user service
  const users = getUsers();
  //   console.log("login - retrieved users: " + JSON.stringify(users));
  let user = users.find((u) => u.phone === phoneNumber);

  if (user === undefined) {
    console.log("User not found");

    return null;
  } else {
    console.log("login- user found: " + JSON.stringify(user));
    if (user.phone === phoneNumber && user.password === password) {
      const token = "abcrandomtoken123";
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("loggedInUser", user._id);
      localStorage.setItem("token", token);

      const returnUser = { ...user };
      returnUser.token = token;
      delete returnUser.password;
      return returnUser;
    } else {
      console.log("wrong credentials submitted");
      return null;
    }
  }
}

export function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("token");
}

// export function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(accessTokenJWT);
//     console.log(`getCurrent USER ID: `, jwtDecode(jwt));
//     return jwtDecode(jwt);
//   } catch (ex) {
//     return null;
//   }
// }

export default {
  login,
  logout,
};
