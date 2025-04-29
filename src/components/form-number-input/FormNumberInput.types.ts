export type FormNumberInputProps = {
  label: string;
  placeholder?: string;
  min: number,
  max: number;
  name: string;
  value: number,
  disabled?: boolean;
  step: number;
  onDecrement: () => void
  onIncrement: () => void;
};
