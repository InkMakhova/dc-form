import { JSX, useState } from 'react'
import AddIcon from '../../assets/plus.svg?react'
import styles from './UIComponents.module.css'
import { ButtonSize, ButtonVariant, IconPosition } from '../form-button/FormButton.types.ts'
import { InputSize } from '../form-input/FormInput.types.ts'
import FormSlider from '../form-slider/FormSlider.tsx'
import FormButton from '../form-button/FormButton.tsx'
import FormInput from '../form-input/FormInput.tsx'
import FormNumberInput from '../form-number-input/FormNumberInput.tsx'

function UIComponents(): JSX.Element {
  const [inputValue, setInputValue] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <>
      {/* Buttons */}
      <section>
        <h3>Button</h3>
        <div className={styles['ui-component__container']}>
          {/* Small Primary Contained */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Small}
            text="Button"
            ariaLabel="Do something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained Icon Left */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained Icon Right*/}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained Disabled */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained Icon Left */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained Icon Right*/}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained Disabled */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />

          {/* Medium Primary Outlined */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Outlined Icon Left */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Outlined Icon Right*/}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Outlined Disabled */}
          <FormButton
            type="button"
            variant={ButtonVariant.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />

          {/* Medium Secondary Contained */}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Contained Icon Left */}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Contained Icon Right*/}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Contained Disabled */}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Outlined */}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Outlined Icon Left */}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Outlined Icon Right*/}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Outlined Disabled */}
          <FormButton
            type="button"
            variant={ButtonVariant.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />
        </div>
      </section>

      {/* Input */}
      <section>
        <h3>Input</h3>
        <div className={styles['ui-component__container']}>
          {/* Form Input Medium */}
          <FormInput
            name="medium-input"
            label="Label"
            placeholder="enter text"
            size={InputSize.Medium}
          />
          {/* Form Input Medium Disabled */}
          <FormInput
            name="disabled-input"
            label="Label"
            placeholder="enter text"
            size={InputSize.Medium}
            disabled
          />
        </div>
      </section>

      {/* Number input */}
      <section>
        <h3>Number Input</h3>
        <div className={styles['ui-component__container']}>
          <FormNumberInput
            name="number-input"
            label="Size (GB)"
            placeholder="Input size"
            min={0}
            max={10}
            step={1}
            value={inputValue}
            onDecrement={(): void => { setInputValue(prevState => prevState - 1) }}
            onIncrement={(): void => { setInputValue(prevState => prevState + 1) }}
          />
        </div>
      </section>

      {/* Slider */}
      <section>
        <h3>Slider</h3>
        <div className={`${styles['ui-component__container']} ${styles['ui-component__slider']}`}>
          <FormSlider
            ariaLabel='Slider'
            min={0}
            max={10}
            step={1}
            value={sliderValue}
            onChange={(value) => { setSliderValue(value) }}
          />
        </div>
      </section>
    </>
  )
}

export default UIComponents;
