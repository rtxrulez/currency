import { InputNumber } from 'antd'
import { formatterNumber } from 'services'
import { Flags } from 'components/Flags/Flags'
import './styles.scss'

export const CurrencyInput = ({ currencyInput, changeInputCurrency }) => {
  const { code, value } = currencyInput

  const handleChangeValue = (value) => {
    changeInputCurrency(value, code)
  }
  const handleFocus = (event) => event.target.select()

  return (
    <div className='line'>
      <InputNumber
        {...{
          className: 'currencyInput',
          type: 'tel',
          value: value.toFixed(2),
          formatter: (value) => formatterNumber(value),
          addonBefore: <Flags {...{name: code}} />,
          name: code,
          placeholder: value.toFixed(2),
          min: 0,
          onChange: (value) => handleChangeValue(value),
          onPressEnter: (e) => handleChangeValue(e.target.value),
          onFocus: handleFocus,
        }}
      />
    </div>
  )
}