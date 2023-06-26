import { HeaderContainer, HeaderContent, TransactionButton } from "./styles"

import DtMoneyImg from '../../assets/dt-money.svg'  

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
          <img src={DtMoneyImg} alt="" />
          <TransactionButton>Nova transação</TransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}