export enum InputSize {
  Small = 'small',
  Medium = 'medium'
}

export type FormInputProps = {
  name: string,
  label: string;
  placeholder?: string;
  size: InputSize,
  isDisabled?: boolean;
  isRequired?: boolean;
};
