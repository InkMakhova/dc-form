import { JSX } from 'react'
import { Label, Slider, SliderThumb, SliderTrack } from 'react-aria-components'
import styles from './FormSlider.module.css'
import { FormSliderProps } from './FormSlider.types.ts'

function FormSlider({label, ariaLabel, min, max, value, step, onChange}: FormSliderProps): JSX.Element {
  return (
    <Slider
      minValue={min}
      maxValue={max}
      value={value}
      onChange={onChange}
      className={styles['slider']}
      aria-label={!label ? ariaLabel : ''}
      step={step}
    >
      { label && <Label>{label}</Label> }
      <SliderTrack className={styles['track']}>
        <div
          className={styles['progress']}
          style={{ width: ((value - min) / (max - min)) * 100 + '%' }}
        />
        <SliderThumb className={styles['thumb']}/>
      </SliderTrack>
    </Slider>
  )
}

export default FormSlider;
