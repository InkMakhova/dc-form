import styles from './RangeInputSlider.module.css'
import FormNumberInput from "../form-number-input/FormNumberInput.tsx";
import {useEffect, useState} from "react";
import FormSlider from "../form-slider/FormSlider.tsx";

function RangeInputSlider({inputName, inputLabel, sliderAriaLabel, min, max, step, defaultValue}) {
  const [state, setState] = useState(defaultValue);

  const increment = () => { setState(prevState => prevState + step) }
  const decrement = () => { setState(prevState => prevState - step) }
  const handleChange = (value) => { setState(value) }

  // Update state
  useEffect(() => { setState(defaultValue) }, [defaultValue])

  return (
    <div className={styles['range-input-slider']}>
      <FormNumberInput
        name={inputName}
        label={inputLabel}
        min={min}
        max={max}
        step={step}
        value={state}
        onIncrement={increment}
        onDecrement={decrement}
      />
      <div className={styles['range-input-slider__slider']}>
        <FormSlider
          ariaLabel={sliderAriaLabel}
          minValue={min}
          maxValue={max}
          step={step}
          value={state}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default RangeInputSlider;
