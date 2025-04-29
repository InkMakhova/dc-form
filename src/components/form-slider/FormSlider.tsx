import { Label, Slider, SliderThumb, SliderTrack } from 'react-aria-components'
import styles from './FormSlider.module.css'
import { FormSliderProps } from './FormSlider.types.ts'

function FormSlider({label, ariaLabel, minValue, maxValue, value, step, onChange}: FormSliderProps) {
  return (
    <Slider
      minValue={minValue}
      maxValue={maxValue}
      value={value}
      onChange={onChange}
      className={styles['slider']}
      aria-label={!label ? ariaLabel : ''}
      step={step}
    >
      { label && <Label>{label}</Label> }
      <SliderTrack className={styles['slider__track']}>
        <div className={styles['slider__progress']} style={{ width: ((value - minValue) / (maxValue - minValue)) * 100 + "%" }}/>
        <SliderThumb className={styles['slider__thumb']}/>
      </SliderTrack>
    </Slider>
  )
}

export default FormSlider;
