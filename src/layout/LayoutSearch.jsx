import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import queryString from 'query-string'
import { BgBody, Divisor, Header, Input, Logo, VHScreen } from './LayoutSearch.styled'
import { Container } from '../common/style/Container.style'
import { Star } from '../icons/Star'
import MarvelLogo from '../assets/marveñ.jpg'

// eslint-disable-next-line react/prop-types
export const LayoutSearch = ({ handleSearch }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const Form = new FormData(e.target)
    const search = Form.get('search')

    const queryParams = queryString.stringify({ comic: search })
    navigate(`/?${queryParams}`)
    handleSearch(search)
  }

  return (
    <VHScreen>
      <Container>
        <Header>
          <Divisor>
            <Logo src={MarvelLogo} alt='Marvel Studio' />
            <form onSubmit={handleSubmit}>
              <Input name='search' type='text' placeholder='Buscar...' />
            </form>
          </Divisor>
          <Star />
        </Header>
      </Container>
      <BgBody>
        <Outlet />
      </BgBody>
    </VHScreen>
  )
}
