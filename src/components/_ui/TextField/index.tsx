import { TextField as TextFieldUI } from "@mui/material";

interface TextFieldProps {
  label: string;
  name: string;
  defaultDisabled?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
  required?: boolean;
  value?: string;
  variant?: "outlined" | "filled" | "standard";
  rows?: number;
  multiline?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = (props: TextFieldProps) => {
  return <TextFieldUI {...props} />;
};
