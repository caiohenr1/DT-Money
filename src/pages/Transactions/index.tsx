import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles"

export const Transactions = () => {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer className="container">
        <TransactionsTable >
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td ><PriceHighLight variant="income">R$ 12.000.00</PriceHighLight></td>
              <td >Venda</td>
              <td >13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Ifood com mozão</td>
              <td ><PriceHighLight variant="outcome">- R$ 59,90</PriceHighLight></td>
              <td >Alimentação</td>
              <td >12/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

     
    </>
  )
}