import * as React from 'react'
import { JSX } from 'react'
import { Group, Input, Label, NumberField } from 'react-aria-components'
import PlusIcon from '../../assets/plus.svg?react'
import MinusIcon from '../../assets/minus.svg?react'
import inputStyles from '../form-input/FormInput.module.css'
import inputNumberStyles from './FormNumberInput.module.css'
import { ButtonSize, ButtonType } from '../form-button/FormButton.types.ts'
import { FormNumberInputProps } from './FormNumberInput.types.ts'
import { InputSize } from '../form-input/FormInput.types.ts'
import FormButton from '../form-button/FormButton.tsx'

function FormNumberInput(props: FormNumberInputProps): JSX.Element {
  const {
    label,
    placeholder,
    min,
    max,
    value,
    disabled,
    onChange,
    onDecrement,
    onIncrement,
  } = props;

  return (
    <NumberField minValue={min} maxValue={max} className={inputStyles['input__container']}>
      <Label>{label}</Label>
      <Group className={inputNumberStyles['inputNumber__group-container']}>
        {/* Decrement Button */}
        <FormButton
          type={ButtonType.SecondaryContained}
          size={ButtonSize.Small}
          icon={<MinusIcon />}
          ariaLabel="Decrease volume"
          slot="decrement"
          disabled={disabled || Number(value) <= min}
          onClick={onDecrement}
        />
        {/* Number Input */}
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChange(e.target.value) }}
          className={`
            ${inputStyles.input__field} 
            ${inputStyles[`input__field--${InputSize.Small}`]}
            ${inputNumberStyles.inputNumber}
          `}
          disabled={disabled}
        />
        {/* Increment Button */}
        <FormButton
          type={ButtonType.SecondaryContained}
          size={ButtonSize.Small}
          icon={<PlusIcon />}
          ariaLabel="Increase volume"
          slot="increment"
          disabled={disabled || Number(value) >= max}
          onClick={onIncrement}
        />
      </Group>
    </NumberField>
  )
}

export default FormNumberInput;
