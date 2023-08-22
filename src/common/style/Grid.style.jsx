import styled from "styled-components";

export const Grid = styled.div`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, minmax(200px, 1fr))`};
  gap: 2rem;
`