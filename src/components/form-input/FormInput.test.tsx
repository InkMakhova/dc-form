import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { InputSize } from './FormInput.types.ts'
import FormInput from './FormInput.tsx'

test('has correct name attribute', () => {
  render(
    <FormInput
      name="custom-name"
      label="Name Field"
      placeholder="Name"
      size={InputSize.Medium}
    />
  )
  const input = screen.getByLabelText('Name Field');
  expect(input).toHaveAttribute('name');
});

test('renders with label', () => {
  render(
    <FormInput
      name="medium-input"
      label="Label"
      placeholder="enter text"
      size={InputSize.Medium}
    />
  )
  expect(screen.getByLabelText("Label")).toBeInTheDocument();
});

test('applies correct classes for size', () => {
  render(
    <FormInput
      name="medium-input"
      label="Label"
      placeholder="enter text"
      size={InputSize.Medium}
    />
  )
  const input = screen.getByLabelText('Label');
  expect(input.className).toMatch(/input__field--medium/);
});

test('displays correct placeholder', () => {
  render(
    <FormInput
      name="medium-input"
      label="Label"
      placeholder="enter text"
      size={InputSize.Medium}
    />
  )
  expect(screen.getByPlaceholderText('enter text')).toBeInTheDocument();
});

test('is disabled when disabled prop is true', () => {
  render(
    <FormInput
      name="disabled-input"
      label="Disabled"
      placeholder="cannot type"
      size={InputSize.Small}
      disabled
    />
  )
  const input = screen.getByLabelText('Disabled');
  expect(input).toBeDisabled();
});

test('matches snapshot', () => {
  const { container } = render(
    <FormInput
      name='snapshot'
      label='Label'
      placeholder='Text'
      size={InputSize.Medium}
    />
  )
  expect(container).toMatchSnapshot();
});
