import { JSX, useEffect, useState } from 'react'
import styles from './RangeInputSlider.module.css'
import { RangeInputSliderTypesProps } from './RangeInputSlider.types.ts'
import FormNumberInput from '../form-number-input/FormNumberInput.tsx'
import FormSlider from '../form-slider/FormSlider.tsx'

function RangeInputSlider(props: RangeInputSliderTypesProps): JSX.Element {
  const {
    inputName,
    inputLabel,
    sliderAriaLabel,
    min,
    max,
    step,
    defaultValue
  } = props;

  // State
  const [state, setState] = useState(defaultValue);

  // Handlers
  const handleChange = (value: number) => { setState(value) }

  // Update state
  useEffect(() => { setState(defaultValue) }, [defaultValue])

  // Render
  return (
    <div className={styles['container']}>
      {/* Input control */}
      <FormNumberInput
        name={inputName}
        label={inputLabel}
        min={min}
        max={max}
        step={step}
        value={state}
        onChange={handleChange}
      />

      {/* Slider */}
      <div className={styles['slider']}>
        <FormSlider
          ariaLabel={sliderAriaLabel}
          min={min}
          max={max}
          step={step}
          value={state}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default RangeInputSlider;
