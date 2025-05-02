import { JSX } from 'react'
import { Input, Label, TextField } from 'react-aria-components'
import styles from './FormInput.module.css'
import { FormInputProps } from './FormInput.types.ts'

function FormInput({label, placeholder, size, name, isDisabled, isRequired}: FormInputProps): JSX.Element {
  return (
    <TextField
      className={styles['input__container']}
      isDisabled={isDisabled}
      isRequired={isRequired}
    >
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        name={name}
        disabled={isDisabled}
        className={`${styles['input__field']} ${styles[`input__field--${size}`]}`}
      />
    </TextField>
  )
}

export default FormInput;
