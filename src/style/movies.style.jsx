import styled from 'styled-components'

export const Titulo = styled.h2`
  color: red;
  font-size: 2rem;
  text-align: center;
`

export const Result = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) ;
  gap: 2rem;
  padding: 5rem 3rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
