export type FormNumberInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  min: number,
  max: number;
  value?: number,
  defaultValue?: number,
  isDisabled?: boolean;
  step: number;
  onChange?: (value: number) => void
};
