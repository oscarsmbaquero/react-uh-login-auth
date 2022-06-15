//const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';
const ROOT_URL = 'http://localhost:5000/users';
//const ROOT_URL = 'https://motogp-oscar.herokuapp.com/users';
 
export async function loginUser(dispatch, loginPayload) {
  console.log(loginPayload,123);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
    
  };
  
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    let data = await response.json();
    console.log(data,'responsessssadasdasdasd');
 
    if (data) {
      console.log(data,'data')
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data
    }
 
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function register(dispatch, loginPayload) {
  console.log(loginPayload,123);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
    
  };
  
  try {
    dispatch({ type: 'REQUEST_REGISTER' });
    let response = await fetch(`${ROOT_URL}`, requestOptions);
    let data = await response.json();
    console.log(data,'responsessssadasdasdasd');
 
    if (data) {
      console.log(data,'data')
      dispatch({ type: 'REGISTER_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data
    }
 
    dispatch({ type: 'REGISTER_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'REGISTER_ERROR', error: error });
  }
}
 
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}