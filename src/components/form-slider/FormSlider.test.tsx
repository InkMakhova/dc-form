import { expect, vitest } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import styles from '../form-slider/FormSlider.module.css'
import FormSlider from './FormSlider.tsx'

test('renders with label', () => {
  render(
    <FormSlider
      label='Size'
      min={0}
      max={100}
      value={50}
      step={10}
      onChange={() => {}}
    />
  )
  expect(screen.getByText('Size')).toBeInTheDocument()
})

test('applies aria-label if no label is given', () => {
  render(
    <FormSlider
      ariaLabel='Slider without visible label'
      min={0}
      max={100}
      value={50}
      step={10}
      onChange={() => {}}
    />
  )
  const slider = screen.getByRole('group');
  expect(slider).toHaveAttribute('aria-label', 'Slider without visible label');
})

test('calls onChange when slider is changed', () => {
  const handleChange = vitest.fn()
  render(
    <FormSlider
      label='Brightness'
      min={0}
      max={100}
      value={50}
      step={10}
      onChange={handleChange}
    />
  )
  const slider = screen.getByRole('slider')
  fireEvent.keyDown(slider, { key: 'ArrowRight' })
  expect(handleChange).toHaveBeenCalled()
})

test('progress bar width matches value percentage', () => {
  render(
    <FormSlider
      label='Zoom'
      min={0}
      max={100}
      value={75}
      step={5}
      onChange={() => {}}
    />
  )
  const progress = document.querySelector(`.${styles['progress']}`) as HTMLDivElement;
  expect(progress?.style.width).toBe('75%');
})

test('slider thumb is rendered and focusable', () => {
  render(
    <FormSlider
      label='Opacity'
      min={0}
      max={100}
      value={30}
      step={5}
      onChange={() => {}}
    />
  )
  const thumb = screen.getByRole('slider');
  expect(thumb).toBeInTheDocument();
  expect(thumb).toHaveAttribute('tabindex', '0');
})

test('matches snapshot', () => {
  const { container } = render(
    <FormSlider
      label='Opacity'
      min={0}
      max={100}
      value={30}
      step={5}
      onChange={() => {}}
    />
  )
  expect(container).toMatchSnapshot();
});
