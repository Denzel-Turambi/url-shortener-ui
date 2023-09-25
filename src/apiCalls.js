export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

// export const postUrls = (newUrl) => {
//   return fetch('http://localhost:3001/api/v1/urls', {
//     method: 'POST',
//     body: JSON.stringify(newUrl),
//     headers: {
//       'Content-Type': "application/json"
//     }
//   }).then(res => res.json())
//   .then(data => console.log('post data', data))
// }

export const postUrls = async (newUrl) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      body: JSON.stringify(newUrl),
      headers: {
        'Content-Type': "application/json"
      }
    })
    return await response.json();
  } catch (error) {
    throw new Error(`There appears to be an error ${error.statusText}`);
  }
}