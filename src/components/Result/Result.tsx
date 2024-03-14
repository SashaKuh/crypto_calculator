import { useEffect, useState } from 'react';

import {
  ResultContainer,
  DisabledInput,
  ResultLable,
  MiniContainer
} from './Result.styled'

interface ResultProps {
  amount: number;
  action: 'Buy' | 'Sell';
}

const Result: React.FC<ResultProps> = ({ amount, action }) => {
  const [askPrice, setAskPrice] = useState<number | null>(null);
  const [bidPrice, setBidPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api4.binance.com/api/v3/ticker/bookTicker');
        const data = await response.json();
        const usdtEthPair = data.find((pair: any) => pair.symbol === 'ETHUSDT');
        if (usdtEthPair) {
          setAskPrice(parseFloat(usdtEthPair.askPrice));
          setBidPrice(parseFloat(usdtEthPair.bidPrice));
        }
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    fetchPrice();
  }, []);

  return (
    <ResultContainer>
      <ResultLable>{action === 'Buy' ? 'You will pay' : 'You will receive'}</ResultLable>
      <MiniContainer>
      <DisabledInput readOnly type="text" value={action === 'Buy' ? (askPrice !== null ? (amount * askPrice): 'Calculating...') : (bidPrice !== null ? (amount * bidPrice).toFixed(2) : 'Calculating...')} />
</MiniContainer>
    </ResultContainer>
  );
};

export default Result;
