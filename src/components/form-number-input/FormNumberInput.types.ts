import { FormInputOnChange } from '../form-input/FormInput.types.ts';

export type FormNumberInputProps = {
  label: string;
  placeholder?: string;
  min: number,
  max: number;
  value: number,
  disabled?: boolean;
  onChange: FormInputOnChange;
  onDecrement: () => void
  onIncrement: () => void;
};
