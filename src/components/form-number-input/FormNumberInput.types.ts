export type FormNumberInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  min: number,
  max: number;
  value: number,
  isDisabled?: boolean;
  step: number;
  onDecrement: () => void
  onIncrement: () => void;
};
