const URL_PATH = 'http://localhost:3001';
const HEADERS = {'Authorization': 'JavierLaguna', 'Accept': 'application/json'};

export function executeServiceCall(URL, callback = () => {}, errorCallback = () => {}, method = 'GET') {
  fetch(`${URL_PATH}${URL}`,
    {
      method: method,
      headers: HEADERS
    })
    .then(response => response.json())
    .then((data) => {
      callback(data)
    })
    .catch((error) => {
      errorCallback(error)
    });
}

export function executeServiceCallWithData(URL, data, callback = () => {}, errorCallback = () => {}, method = 'POST') {
  fetch(`${URL_PATH}${URL}`,
    {
      method: method,
      headers: {...HEADERS, 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
      callback(data)
    })
    .catch((error) => {
      errorCallback(error)
    });
}
