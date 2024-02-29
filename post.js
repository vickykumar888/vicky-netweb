async function fetchData() {
  const data = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    key6: 'value6',
    key7: 'value7',
    key8: 'value8',
    key9: 'value9',
    key10: 'value10'
  };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', requestOptions);
     // const response = await fetch('https://jsonplaceholder.org/comments', requestOptions);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error('Error ' + response.status + ': ' + errorData.message);
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
