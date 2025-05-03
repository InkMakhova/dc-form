// import * as React from 'react'
import { JSX } from 'react'
import { Group, Input, Label, NumberField } from 'react-aria-components'
import PlusIcon from '../../assets/plus.svg?react'
import MinusIcon from '../../assets/minus.svg?react'
import inputStyles from '../form-input/FormInput.module.css'
import styles from './FormNumberInput.module.css'
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
    defaultValue,
    isDisabled,
    onChange
  } = props;

  return (
    <NumberField
      minValue={min}
      maxValue={max}
      step={step}
      value={value}
      defaultValue={defaultValue}
      className={inputStyles['container']}
      onChange={onChange}
    >
      <Label>{label}</Label>
      <Group className={styles['container']}>
        {/* Decrement Button */}
        <FormButton
          type="button"
          variant={ButtonVariant.SecondaryContained}
          size={ButtonSize.Small}
          icon={<MinusIcon />}
          ariaLabel="Decrease size"
          slot="decrement"
          isDisabled={isDisabled || Number(value) <= min}
        />
        {/* Number Input */}
        <Input
          name={name}
          placeholder={placeholder}
          className={`${inputStyles['input']} ${inputStyles[`input--${InputSize.Small}`]}`}
          disabled={isDisabled}
        />
        {/* Increment Button */}
        <FormButton
          type="button"
          variant={ButtonVariant.SecondaryContained}
          size={ButtonSize.Small}
          icon={<PlusIcon />}
          ariaLabel="Increase size"
          slot="increment"
          isDisabled={isDisabled || Number(value) >= max}
        />
      </Group>
    </NumberField>
  )
}

export default FormNumberInput;
