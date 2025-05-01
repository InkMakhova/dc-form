import { JSX } from 'react'
import { Button } from 'react-aria-components'
import styles from './FormButton.module.css'
import { FormButtonProps } from './FormButton.types.ts'

function FormButton(props: FormButtonProps): JSX.Element {
  const {
    type,
    variant,
    size,
    icon,
    iconPosition,
    text,
    ariaLabel,
    onPress,
    disabled,
    pending,
    slot
  } = props;

  const isIconOnly: boolean = !!icon && !text;

  // Render
  return (
    <Button
      type={type}
      className={`
        ${styles['button']}
        ${styles[`button--${size}`]}
        ${styles[`button--${variant}`]}
        ${isIconOnly ? styles['button--icon-only'] : ''}
        ${slot ? (slot === 'decrement' ? styles['button--decrement'] : styles['button--increment']) : ''}
      `}
      isDisabled={disabled || pending === true}
      aria-label={ariaLabel}
      slot={slot}
      onPress={onPress}
      data-testid='form-button'
    >
      { icon &&
        <span
          className={`
            ${styles['button__icon']} 
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
