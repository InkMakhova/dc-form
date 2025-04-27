import * as React from 'react'
import { JSX } from 'react'
import { Input, Label, TextField } from 'react-aria-components'
import styles from './FormInput.module.css'
import { FormInputProps } from './FormInput.types.ts'

function FormInput(props: FormInputProps): JSX.Element {
  const {
    label,
    placeholder,
    size,
    value,
    onChange,
    disabled,
  } = props;

  return (
    <TextField className={styles.input__container} isDisabled={disabled}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => { onChange(e.target.value) }}
        disabled={disabled}
        className={`${styles['input__field']} ${styles[`input__field--${size}`]}`}
      />
    </TextField>
  )
}

export default FormInput;
