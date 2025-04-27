import { JSX } from 'react'
import { Button } from 'react-aria-components'
import styles from './FormButton.module.css'
import { FormButtonProps } from './FormButton.types.ts'

function FormButton(props: FormButtonProps): JSX.Element {
  const {
    type,
    size,
    icon,
    iconPosition,
    text,
    ariaLabel,
    onClick,
    disabled,
    slot
  } = props;

  const isIconOnly: boolean = !!icon && !text;

  // Render
  return (
    <Button
      className={`
        ${styles.button}
        ${styles[`button--${size}`]}
        ${styles[`button--${type}`]}
        ${isIconOnly ? styles['button--icon-only'] : ''}
        ${slot ? (slot === 'decrement' ? styles['button--decrement'] : styles['button--increment']) : ""}
      `}
      isDisabled={disabled}
      aria-label={ariaLabel}
      slot={slot}
      onClick={onClick}
    >
      { icon &&
        <span
          className={`
            ${styles.button__icon} 
            ${iconPosition ? styles[`button__icon--${iconPosition}`] : ''}
          `}
        >
          {icon}
        </span>
      }
      { text }
    </Button>
  )
}

export default FormButton
