import { useEffect, useState } from 'react'
import { getCharacterMovie, getComicMovie } from '../api/get'
import { getIssue } from '../helper/getIssue'

export const useSearch = () => {
  const [movies, setMovies] = useState([])

  const getRandomMovies = async () => {
    const getRandomNumber = () => {
      return Math.floor(Math.random() * (10 - 0) + 0)
    }

    const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=1&offset=${getRandomNumber()}&apikey=91c4e42e95f2ecd9a9b79af46d9338f5`
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.data.results)
  }

  const handleSearch = async (search) => {
    if (search === '') {
      return getRandomMovies()
    }

    const text = getIssue(search)
    const data = !isNaN(parseInt(text)) ? await getComicMovie(text) : await getCharacterMovie(text)
    setMovies(data)
  }

  useEffect(() => {
    return () => getRandomMovies()
  }, [])

  return {
    movies,
    handleSearch
  }
}
