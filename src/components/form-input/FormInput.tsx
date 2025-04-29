import { JSX } from 'react'
import { Input, Label, TextField } from 'react-aria-components'
import styles from './FormInput.module.css'
import { FormInputProps } from './FormInput.types.ts'

function FormInput({label, placeholder, size, name, disabled}: FormInputProps): JSX.Element {
  return (
    <TextField className={styles['input__container']} isDisabled={disabled}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        className={`${styles['input__field']} ${styles[`input__field--${size}`]}`}
      />
    </TextField>
  )
}

export default FormInput;
