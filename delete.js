async function deletePost() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'; 
  
    try {
      const response = await fetch(url, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
  
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }
  
  deletePost();