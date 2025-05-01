import { fireEvent, render, screen } from '@testing-library/react'
import RangeInputSlider from './RangeInputSlider.tsx'
import { expect } from 'vitest';

test('input has default value', () => {
  const { container } = render(
    <RangeInputSlider
      inputName='size'
      inputLabel='Size'
      sliderAriaLabel='Size Slider'
      min={0}
      max={100}
      step={5}
      defaultValue={30}
    />
  );

  const input = container.querySelector('input');
  expect(input).toHaveValue('30');

  const slider = screen.getByLabelText('Size Slider')
  expect(slider).toBeInTheDocument()
});

test('updates value when increment button is clicked', () => {
  const { container } = render(
    <RangeInputSlider
      inputName='size'
      inputLabel='Size'
      sliderAriaLabel='Size Slider'
      min={0}
      max={100}
      step={10}
      defaultValue={30}
    />
  );

  const input = container.querySelector('input');
  const incrementButton = screen.getByLabelText('Increase size')

  fireEvent.click(incrementButton)
  expect(input).toHaveValue('40');
})

test('updates value when decrement button is clicked', () => {
  const { container } = render(
    <RangeInputSlider
      inputName='size'
      inputLabel='Size'
      sliderAriaLabel='Size Slider'
      min={0}
      max={100}
      step={10}
      defaultValue={30}
    />
  );

  const input = container.querySelector('input');
  const decrementButton = screen.getByLabelText('Decrease size')

  fireEvent.click(decrementButton)
  expect(input).toHaveValue('20');
})

test('matches snapshot', () => {
  const { container } = render(
    <RangeInputSlider
      inputName='size'
      inputLabel='Size'
      sliderAriaLabel='Size Slider'
      min={0}
      max={100}
      step={10}
      defaultValue={30}
    />
  )
  expect(container).toMatchSnapshot();
});

