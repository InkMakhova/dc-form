import { ReactNode } from 'react';

export enum ButtonVariant {
  PrimaryContained = 'primary-contained',
  PrimaryOutlined = 'primary-outlined',
  SecondaryContained = 'secondary-contained',
  SecondaryOutlined = 'secondary-outlined',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium'
}

export enum IconPosition {
  Left = 'left',
  Right = 'right',
}

export type FormButtonProps = (
  | { icon: ReactNode; text?: string; iconPosition?: IconPosition; }
  | { text: string; icon?: ReactNode; iconPosition?: IconPosition; }
  ) & {
  type: 'button' | 'submit' | 'reset';
  variant: ButtonVariant;
  size: ButtonSize;
  ariaLabel: string;
  onPress?: () => void;
  disabled?: boolean;
  slot?: string;
};
