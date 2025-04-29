// import * as React from 'react'
import { JSX } from 'react'
import { Input, Label, TextField } from 'react-aria-components'
import styles from './FormInput.module.css'
import { FormInputProps } from './FormInput.types.ts'

function FormInput({label, placeholder, size, name, /* value, onChange,*/ disabled}: FormInputProps): JSX.Element {
  return (
    <TextField className={styles['input__container']} isDisabled={disabled}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        name={name}
        // value={value}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>): void => { onChange(e.target.value) }}
        disabled={disabled}
        className={`${styles['input__field']} ${styles[`input__field--${size}`]}`}
      />
    </TextField>
  )
}

export default FormInput;
