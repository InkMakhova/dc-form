export type FormSliderProps = {
  label?: string;
  minValue: number;
  maxValue: number;
  value: number;
  onChange: (value: number) => void;
};
