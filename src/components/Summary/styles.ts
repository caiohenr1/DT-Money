import styled, { css } from "styled-components";

export const SumarryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SumarryCardProps {
  variant?: string
}

export const SumarryCard = styled.div<SumarryCardProps>`
  border-radius: 6px;
  background: ${props => props.theme["gray-600"]};
  padding: 2rem;

  ${ ({ theme , variant }) => variant === "green" && css`
    background: ${theme["green-700"]};
  ` }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};
  }
  strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
    }


`
