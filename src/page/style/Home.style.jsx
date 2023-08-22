import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled(NavLink)`
  position: relative;
`

export const CardText = styled.h2`
  position: absolute;
  bottom: 2rem;
  left: .6rem;
  font-size: 1.4rem;
  color: white;
`

export const AddFavoriteBtn = styled.button`
  position: absolute;
  top: .5rem;
  right: .5rem;
  color: white;
`
