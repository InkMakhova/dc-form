import { render, screen } from '@testing-library/react';
import { expect } from 'vitest'
import FormNumberInput from './FormNumberInput.tsx';

test('renders input with label', () => {
  render(
    <FormNumberInput
      name='size'
      label='Size'
      value={5}
      min={1}
      max={10}
      step={1}
    />
  )
  expect(screen.getByText('Size')).toBeInTheDocument()
})

test('decrement button is disabled at min value', () => {
  render(
    <FormNumberInput
      name='size'
      label='Size'
      value={1}
      min={1}
      max={10}
      step={1}
    />
  )
  const decrementButton = screen.getByLabelText('Decrease size')
  expect(decrementButton).toBeDisabled()
})

test('increment button is disabled at max value', () => {
  render(
    <FormNumberInput
      name='size'
      label='Size'
      value={10}
      min={1}
      max={10}
      step={1}
    />
  )
  const incrementButton = screen.getByLabelText('Increase size')
  expect(incrementButton).toBeDisabled()
})

test('matches snapshot', () => {
  const { container } = render(
    <FormNumberInput
      name='size'
      label='Size'
      placeholder='Size'
      value={10}
      min={1}
      max={10}
      step={1}
    />
  )
  expect(container).toMatchSnapshot();
});
