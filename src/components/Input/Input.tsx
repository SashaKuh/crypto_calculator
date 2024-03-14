import {
  InputContainer,
  StyledInput, 
  RadioButtonContainer,
  RadioButtonLabel,
  RadioLabel
} from './Input.styled'

interface InputProps {
  amount: string;
  onAmountChange: (value: string) => void;
  action: 'Buy' | 'Sell';
  onActionChange: (value: 'Buy' | 'Sell') => void;
}


const Input: React.FC<InputProps> = ({
  amount,
  onAmountChange,
  action,
  onActionChange,
}) => {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValid =
      /^([0-9]{0,5})(\.[0-9]{0,2})?$/.test(value) && parseFloat(value) <= 100000;
    if (isValid || value === '') {
      onAmountChange(value);
    } else {
      alert(
        'Amount must be a non-negative number less than or equal to 100000 with up to 2 decimal places'
      );
    }
  };

  return (
    <InputContainer>
      <div>
        <RadioLabel>ETH amount</RadioLabel>
        <StyledInput
          type="text"
          pattern="[0-9]*[.,]?[0-9]*"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <RadioButtonContainer>
        <RadioButtonLabel
          className={action === 'Buy' ? 'active' : ''}
          onClick={() => onActionChange('Buy')}
        >
          Buy
          <StyledInput
            type="radio"
            value="Buy"
            checked={action === 'Buy'}
            onChange={() => onActionChange('Buy')}
          />
        </RadioButtonLabel>
        <RadioButtonLabel
          className={action === 'Sell' ? 'active' : ''}
          onClick={() => onActionChange('Sell')}
        >
          Sell
          <StyledInput
            type="radio"
            value="Sell"
            checked={action === 'Sell'}
            onChange={() => onActionChange('Sell')}
          />
        </RadioButtonLabel>
      </RadioButtonContainer>
    </InputContainer>
  );
};

export default Input;
