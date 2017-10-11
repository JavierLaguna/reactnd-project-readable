export function getAllCategories(callback = ()=>{}, error = ()=>{}) {
  fetch(`http://localhost:3001/categories`,
    {
      method: "GET",
      headers: {'Authorization': 'JavierLaguna'}
    })
    .then(response => response.json())
    .then((data) => {
      callback(data)
    })
    .catch((error) => {
      debugger
    });
}
