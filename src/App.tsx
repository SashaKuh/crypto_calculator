import { useState } from 'react';

import Input from './components/Input/Input';
import Result from './components/Result/Result';

import { AppContainer, Container, Title }  from './App.styled'

const App: React.FC = () => {
  const [amount, setAmount] = useState<string>('0');
  const [action, setAction] = useState<'Buy' | 'Sell'>('Buy');

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const handleActionChange = (value: 'Buy' | 'Sell') => {
    setAction(value);
  };

  return (
    <AppContainer>
      <Title>CRYPTO CALCULATOR</Title>
      <Container>
        
      <Input
        amount={amount}
        onAmountChange={handleAmountChange}
        action={action}
        onActionChange={handleActionChange}
      />
        <Result amount={parseFloat(amount)} action={action} />
        </Container>
    </AppContainer>
  );
};

export default App;
