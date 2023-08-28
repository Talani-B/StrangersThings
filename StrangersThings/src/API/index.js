const COHORT_NAME = '2302-ACC-ET-WEB-PT-A'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export const login = async (username, password) => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const registerUser = async (username, password, setToken) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  export const makePost = async (TOKEN_STRING_HERE, title, description, price, willDeliver) => {

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            willDeliver: willDeliver
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  export const updatePost = async (TOKEN_STRING_HERE, title, description, price, willDeliver) => {

    try {
      const response = await fetch(`${BASE_URL}/posts/64e8e010cd91340014229c05`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          post: {
            title: "Golden Scepter" ,
            description: "Scepter is from the Byzantine era with 3 sapphires and 3 ruby stones set in the handle",
            price: "$300",
            willDeliver: "willDeliver"
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
 export const deletePost = async (TOKEN_STRING_HERE, title, description, price, willDeliver) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/64e8e010cd91340014229c05`,{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        }
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

 export const postMessage = async (TOKEN_STRING_HERE, title, description, price, willDeliver) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/Post_ID/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          message: {
            content: "What is the cost for delivery to 11001 zipcode"
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  