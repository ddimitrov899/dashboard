// Import user Api
import usersApi from "./services/user-api.js";

// Definite elements by Id
const userList = document.getElementById('userList');
const currentUserName = document.getElementById('userName');
const currentUser = document.getElementById('currentUser');
const loadingPosts = document.getElementById('loadingPosts');
const errorPosts = document.getElementById('errorPosts');

let users = [];

// Fetch users from API
async function getUsers() {
  try {
    users = await usersApi.getUsersData()
    displayUsers(users);
  } catch (error) {    
    userList.innerHTML = `<li class="error">${error.message.toString()}</li>`;
  }
}

// Display users in the list
function displayUsers(users) {
  userList.innerHTML = users.map(user => `
    <li data-id="${user.id}">
      <strong data-name="${user.name}">${user.name}</strong><br>
      <small>${user.email}</small>
    </li>
  `).join('');
}

// Fetch posts for a user
async function getCurrentUser(userId, userName) {
  loadingPosts.classList.remove('hidden');
  errorPosts.classList.add('hidden');
  currentUser.innerHTML = '';

  try {
    const currentUserData = await usersApi.getUserById(userId);
    
    if (currentUser.length === 0) {
      currentUser.innerHTML = '<li>No posts found.</li>';
    } else {
      currentUserName.textContent = userName
      currentUser.innerHTML = currentUserData.map(user => `<li><h3>${user.title}</h1><p>${user.body}</p></li>`).join('<br />');
    }
  } catch (error) {
    errorPosts.textContent = error.message.toString();
    errorPosts.classList.remove('hidden');
  } finally {
    loadingPosts.classList.add('hidden');
  }
}

const filterUsersByName = (searchTerm) => {
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
  displayUsers(filteredUsers);
}

// Export functions to get, filter and get current data of user
export default {getUsers, getCurrentUser, filterUsersByName};