import allUsers from "../data/AppUsers";

// Add new user
export function addUser(user) {
  allUsers.push(user);
  return allUsers;
}

// Get user by username & password
export function getUserByUsernameAndPassword(username, password) {
  return allUsers.find(
    (u) => u.username === username && u.password === password
  );
}

// Get all users
export function getAllUsers() {
  return allUsers;
}
