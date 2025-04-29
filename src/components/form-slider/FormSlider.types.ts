export type FormSliderProps = (
  | { label: string; ariaLabel?: string; }
  | { ariaLabel: string; label?: string; }
  ) & {
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (value: number) => void;
};
