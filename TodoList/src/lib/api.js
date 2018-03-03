
export const items = (method, body) => {
  const headers = new Headers()
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  return fetch("http://localhost:3000/items.json", {
    method: method,
    headers,
    body: JSON.stringify(body)
  })
  .then(response => response.json())
}
