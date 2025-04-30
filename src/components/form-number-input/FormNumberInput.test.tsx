import { fireEvent, render, screen } from '@testing-library/react';
import { expect, vitest} from 'vitest'
import FormNumberInput from './FormNumberInput.tsx';

test('renders input with label', () => {
  render(
    <FormNumberInput
      name="size"
      label="Size"
      value={5}
      min={1}
      max={10}
      step={1}
      onDecrement={() => {}}
      onIncrement={() => {}}
    />
  )
  expect(screen.getByText('Size')).toBeInTheDocument()
})

test('calls onIncrement when increment button is clicked', () => {
  const handleIncrement = vitest.fn()
  const handleDecrement = vitest.fn()
  render(
    <FormNumberInput
      name="size"
      label="Size"
      value={5}
      min={1}
      max={10}
      step={1}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
  const incrementButton = screen.getByLabelText('Increase size')
  fireEvent.click(incrementButton)
  expect(handleIncrement).toHaveBeenCalled()
})

test('calls onDecrement when decrement button is clicked', () => {
  const handleDecrement = vitest.fn()
  const handleIncrement = vitest.fn()
  render(
    <FormNumberInput
      name="size"
      label="Size"
      value={5}
      min={1}
      max={10}
      step={1}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
  const decrementButton = screen.getByLabelText('Decrease size')
  fireEvent.click(decrementButton)
  expect(handleDecrement).toHaveBeenCalled()
})

test('decrement button is disabled at min value', () => {
  const handleDecrement = vitest.fn()
  const handleIncrement = vitest.fn()

  render(
    <FormNumberInput
      name="size"
      label="Size"
      value={1}
      min={1}
      max={10}
      step={1}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
  const decrementButton = screen.getByLabelText('Decrease size')
  expect(decrementButton).toBeDisabled()
})

test('increment button is disabled at max value', () => {
  const handleDecrement = vitest.fn()
  const handleIncrement = vitest.fn()
  render(
    <FormNumberInput
      name="size"
      label="Size"
      value={10}
      min={1}
      max={10}
      step={1}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
  const incrementButton = screen.getByLabelText('Increase size')
  expect(incrementButton).toBeDisabled()
})

test('matches snapshot', () => {
  const handleDecrement = vitest.fn()
  const handleIncrement = vitest.fn()
  const { container } = render(
    <FormNumberInput
      name="size"
      label="Size"
      placeholder="Size"
      value={10}
      min={1}
      max={10}
      step={1}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
  expect(container).toMatchSnapshot();
});
