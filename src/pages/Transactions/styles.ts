import styled, { css } from "styled-components";


export const TransactionsContainer = styled.main`
    margin: 4rem auto 0;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 6rem !important;

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-700"]};
    
     &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px ;
     }

     &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px ;
     }
  }

`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  
  ${ ({ variant }) => variant === 'income' &&  css`
    color: ${props => props.theme["green-300"]} ;
  `}

  ${ ({ variant }) => variant === 'outcome' &&  css`
    color: ${props => props.theme["red-300"]} ;
  `}

`


