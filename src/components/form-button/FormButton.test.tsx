import { fireEvent, render, screen } from '@testing-library/react'
import {  expect, vitest} from 'vitest'
import '@testing-library/jest-dom'
import DeleteIcon from '../../assets/delete.svg?react'
import { ButtonSize, ButtonVariant } from './FormButton.types.ts'
import FormButton from './FormButton'

test('Button renders with text', () => {
  render(
    <FormButton
      type="button"
      text="Submit"
      size={ButtonSize.Medium}
      variant={ButtonVariant.PrimaryContained}
      ariaLabel="Submit"
    />
  )

  expect(screen.getByText("Submit")).toBeInTheDocument();
});

test('Button renders with icon only', () => {
  render(
      <FormButton
        type="button"
        icon={<DeleteIcon />}
        ariaLabel="Delete"
        size={ButtonSize.Small}
        variant={ButtonVariant.PrimaryOutlined}
      />
  )
  expect(screen.getByLabelText("Delete")).toBeInTheDocument();
});

test('Button applies correct classes for size and variant', () => {
  render(
    <FormButton
      type="button"
      text="Test"
      size={ButtonSize.Medium}
      variant={ButtonVariant.PrimaryContained}
      ariaLabel="Test"
    />);

  const button = screen.getByTestId('form-button');
  expect(button.className).toMatch(/button--medium/);
  expect(button.className).toMatch(/button--primary-contained/);
});

test('Button applies icon-only class if no text is provided', () => {
  render(
    <FormButton
      type="button"
      icon={<DeleteIcon />}
      ariaLabel="Delete"
      size={ButtonSize.Small}
      variant={ButtonVariant.PrimaryOutlined}
    />
  );
  const button = screen.getByTestId('form-button');
  expect(button.className).toMatch(/button--icon-only/);
});

test('Button calls onPress when clicked', () => {
  const handlePress = vitest.fn();
  render(
    <FormButton
      type="button"
      text="Click"
      onPress={handlePress}
      size={ButtonSize.Medium}
      variant={ButtonVariant.PrimaryContained}
      ariaLabel="Click"
    />
  );
  fireEvent.click(screen.getByTestId('form-button'));
  expect(handlePress).toHaveBeenCalledTimes(1);
});

test('Button does not call onPress when disabled', () => {
  const handlePress = vitest.fn();
  render(
    <FormButton
      type="button"
      text="Click"
      onPress={handlePress}
      disabled
      size={ButtonSize.Medium}
      variant={ButtonVariant.PrimaryContained}
      ariaLabel="Click"
    />);
  fireEvent.click(screen.getByTestId('form-button'));
  expect(handlePress).not.toHaveBeenCalled();
});
