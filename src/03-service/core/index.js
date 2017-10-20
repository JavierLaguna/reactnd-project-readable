const URL_PATH = 'http://localhost:3001';
const HEADERS = {'Authorization': 'JavierLaguna'};

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
      headers: HEADERS,
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
