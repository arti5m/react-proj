export function fetchCatFact() {
  const url = 'https://catfact.ninja/fact'
  return fetch(url).then(
    res => (res)
  )
}
export function fetchDogFact() {
  const url = 'http://dog-api.kinduff.com/api/facts'
  return fetch(url).then(
    res => (res)
  )
}