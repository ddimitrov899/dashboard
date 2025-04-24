const base = 'https://jsonplaceholder.typicode.com'
// Api fetch data on base href
const api = async (path, parameters) => {
  return await fetch(`${base}${path}`, {...parameters, headers: {contentType: 'application-json'}})
  .then(res => res.json())
}

export default api