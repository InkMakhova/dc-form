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
    isDisabled,
    isPending,
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
      `}
      isDisabled={isDisabled || isPending === true}
      aria-label={ariaLabel}
      slot={slot}
      onPress={onPress}
      data-testid='form-button'
    >
      { icon &&
        <span className={`
            ${styles['icon']} 
            ${iconPosition ? styles[`icon--${iconPosition}`] : ''}
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
