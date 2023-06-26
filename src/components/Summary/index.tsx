import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react"
import { SumarryCard, SumarryContainer } from "./styles"
import { CurrencyDollar } from "phosphor-react"

export const Summary = () => {
  return (
    <SumarryContainer className="container">
      <SumarryCard>
        <header>
          <span>Entradas</span>
          { <ArrowCircleUp size={32} color="#00b37e" /> }
        </header>
        <strong>R$ 17.400,00</strong>
      </SumarryCard>
      <SumarryCard>
        <header>
          <span>Saídas</span>
          { <ArrowCircleDown size={32} color="#f75a68" /> }
        </header>
        <strong>R$ 17.400,00</strong>
      </SumarryCard>
      <SumarryCard variant="green">
        <header>
          <span>Total</span>
          { <CurrencyDollar size={32} color="#fff" /> }
        </header>
        <strong>R$ 17.400,00</strong>
      </SumarryCard>
    </SumarryContainer>
  )
}