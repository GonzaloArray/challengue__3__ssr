import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 0rem;
  width: 1400px;
`
export const Input = styled.input`
  background-color: white;
  padding: 1rem;
  border-radius: .5rem;
  outline: none;
  border: none;
  width: 550px;
`

export const Divisor = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const VHScreen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const BgBody = styled.main`
  background-color: #bdbcbc2d;
  flex: 1;
`
export const Logo = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;
`
