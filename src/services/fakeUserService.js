const users = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    phone: "123456",
    firstName: "Birger",
    lastName: "Thieren",
    addressLine1: "Street 123",
    addressLine2: "Building 4 appartment 23",
    city: "Test City",
    province: "Test Province",
    zip: "200000",
    password: "123456",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    phone: "+33333444555",
    firstName: "Testuser",
    lastName: "TestLastName",
    addressLine1: "Rue 123",
    addressLine2: "Building 1 appartment 15",
    city: "Paris",
    province: "Île-de-France",
    zip: "75000",
    password: "123456",
  },
];

export function getUsers() {
  return users;
}

export function getUser(id) {
  const user = users.find((u) => u._id === id);
  const returnUser = { ...user };
  delete returnUser.password;
  return returnUser;
}

export function saveUser(user) {
  let userInDb = users.find((u) => u._id === user._id) || {};
  userInDb.phone = user.phone;
  userInDb.firstName = user.firstName;
  userInDb.lastName = user.lastName;
  userInDb.addressLine1 = user.addressLine1;
  userInDb.addressLine2 = user.addressLine2;
  userInDb.city = user.city;
  userInDb.province = user.province;
  userInDb.zip = user.zip;
  userInDb.password = user.password;

  if (!userInDb._id) {
    userInDb._id = Date.now().toString();
    users.push(userInDb);
  }

  console.log("fake service logging: " + JSON.stringify(users));

  return userInDb;
}

export function deleteUser(id) {
  let userInDb = users.find((u) => u._id === id);
  users.splice(users.indexOf(userInDb), 1);
  return userInDb;
}
