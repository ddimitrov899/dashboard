import users from "./user.js";
// Main functionality
(({getUsers, getCurrentUser, filterUsersByName}) => {
  
  const searchInput = document.getElementById('searchInput');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');


  // Filter users by name
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterUsersByName(searchTerm)
  });

  // Handle user click to fetch posts
  userList.addEventListener('click', async (e) => {
    const li = e.target.closest('li');
    const strong = li.children[0]
    
    if (!li || !strong) return;
    const userId = li.getAttribute('data-id');
    const userName = strong.getAttribute('data-name')
    
    openModal();
    await getCurrentUser(userId, userName);
  });

  // Open and close modal
  function openModal() {
    modal.classList.remove('hidden');
  }

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  getUsers();

})(users)
