import api from "./api.js";

/**
 * Get request to fetch all users
 */
const getUsersData = async () => {

    return await api('/users')
    .catch(err => {
      throw new Error('Failed to fetch users');
    });
}

/**
 * Get request to fetch current user Information
 */
const getUserById = async (userId) => {
  return await api(`/posts?userId=${userId}`, {})
  .catch(err => {
    throw new Error('Failed to fetch user');
  });
}

export default {
  getUsersData,
  getUserById
}