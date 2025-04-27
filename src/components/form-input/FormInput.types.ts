export enum InputSize {
  Small = 'small',
  Medium = 'medium'
}

export type FormInputOnChange = (value: string) => void;

export type FormInputProps = {
  label: string;
  placeholder?: string;
  size: InputSize,
  value: string,
  onChange: FormInputOnChange,
  disabled?: boolean;
};
