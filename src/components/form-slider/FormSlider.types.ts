export type FormSliderProps = (
  | { label: string; ariaLabel?: string; }
  | { ariaLabel: string; label?: string; }
  ) & {
  minValue: number;
  maxValue: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
};
