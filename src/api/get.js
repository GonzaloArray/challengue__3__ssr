export const getCharacterMovie = async (search) => {
  try {
    const path = 'https://gateway.marvel.com:443/v1/public/'
    const key = '91c4e42e95f2ecd9a9b79af46d9338f5'
    const limit = 8
    const url = `${path}characters?nameStartsWith=${search}&limit=${limit}&apikey=${key}`

    const res = await fetch(url)
    const data = await res.json()

    return data.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getComicMovie = async (search) => {
  try {
    const path = 'https://gateway.marvel.com:443/v1/public/'
    const key = '91c4e42e95f2ecd9a9b79af46d9338f5'
    const url = `${path}comics/${search}?apikey=${key}`
    const res = await fetch(url)
    const data = await res.json()

    return data.data.results
  } catch (error) {
    console.log(error)
  }
}
