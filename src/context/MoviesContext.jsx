import React, { createContext, useContext, useState } from 'react'

const UploadContext = createContext()

export const MoviesContext = ({ children }) => {
  const [movie, setMovie] = useState([])

  const handleAddMovie = (id) => {
    const findID = movie.includes(id)

    if (findID) {
      const filterMovie = movie.filter(mv => mv !== id)

      setMovie(filterMovie)
      return
    }

    setMovie((data) => [...data, id])
  }


  return (
    <UploadContext.Provider
      value={{movie, handleAddMovie}}
    >
      {children}
    </UploadContext.Provider>
  )
}

export const useUploadContext = () => useContext(UploadContext)

export function movieAppState () {
  const context = useContext(UploadContext)
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider')
  }
  return context
}
