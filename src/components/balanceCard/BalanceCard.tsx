import {
  BalanceCardContainer,
  BalanceTitle,
  Balance,
  TextContainer,
} from "./balanceCarde.styles";

const BalanceCard = ({ balance }: { balance: number | null }) => {
  return (
    <BalanceCardContainer>
      <TextContainer>
        <BalanceTitle>
          Your <br />
          Balance:
        </BalanceTitle>
        <Balance>{balance}€</Balance>
      </TextContainer>
    </BalanceCardContainer>
  );
};

export default BalanceCard;
