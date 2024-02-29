const postId = 1;
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch ');
    }
    return response.json();
  })
  .then(comments => {
    console.log('Comments for post', postId, ':', comments);
  })
  .catch(error => {
    console.error('Error fetching comments:', error);
  });

  