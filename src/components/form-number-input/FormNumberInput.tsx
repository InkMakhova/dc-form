// import * as React from 'react'
import { JSX } from 'react'
import { Group, Input, Label, NumberField } from 'react-aria-components'
import PlusIcon from '../../assets/plus.svg?react'
import MinusIcon from '../../assets/minus.svg?react'
import inputStyles from '../form-input/FormInput.module.css'
import inputNumberStyles from './FormNumberInput.module.css'
import { ButtonSize, ButtonVariant } from '../form-button/FormButton.types.ts'
import { FormNumberInputProps } from './FormNumberInput.types.ts'
import { InputSize } from '../form-input/FormInput.types.ts'
import FormButton from '../form-button/FormButton.tsx'

function FormNumberInput(props: FormNumberInputProps): JSX.Element {
  const {
    name,
    label,
    placeholder,
    min,
    max,
    step,
    value,
    disabled,
    onIncrement,
    onDecrement
  } = props;

  return (
    <NumberField
      minValue={min}
      maxValue={max}
      step={step}
      value={value}
      className={inputStyles['input__container']}
      isReadOnly
    >
      <Label>{label}</Label>
      <Group className={inputNumberStyles['input-number__group-container']}>
        {/* Decrement Button */}
        <FormButton
          type="button"
          variant={ButtonVariant.SecondaryContained}
          size={ButtonSize.Small}
          icon={<MinusIcon />}
          ariaLabel="Decrease size"
          slot="decrement"
          disabled={disabled || Number(value) <= min}
          onPress={onDecrement}
        />
        {/* Number Input */}
        <Input
          name={name}
          placeholder={placeholder}
          className={`
            ${inputStyles['input__field']} 
            ${inputStyles[`input__field--${InputSize.Small}`]}
            ${inputNumberStyles['input-number']}
          `}
          disabled={disabled}
        />
        {/* Increment Button */}
        <FormButton
          type="button"
          variant={ButtonVariant.SecondaryContained}
          size={ButtonSize.Small}
          icon={<PlusIcon />}
          ariaLabel="Increase size"
          slot="increment"
          disabled={disabled || Number(value) >= max}
          onPress={onIncrement}
        />
      </Group>
    </NumberField>
  )
}

export default FormNumberInput;
