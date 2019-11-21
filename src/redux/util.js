export function fetchCatFact() {
  const url = 'https://catfact.ninja/fact'
  return fetch(url).then(
    res => (res)
  )
}

export function fetchRandomFact() {
  const url = 'https://uselessfacts.jsph.pl/random.json'
  return fetch(url).then(
    res => (res)
  )
}

