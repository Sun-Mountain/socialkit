'use client';

import { ChangeEvent, useState } from "react";
import { TextField as TextFieldUI } from "@mui/material";

interface TextFieldProps {
  label: string;
  name: string;
  defaultDisabled?: boolean;
  defaultValue?: string;
  helperText?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
  required?: boolean;
  value?: string;
  variant?: "outlined" | "filled" | "standard";
  rows?: number;
  multiline?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = (props: TextFieldProps) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange?.(event);
  };

  return <TextFieldUI  {...props} value={value} onChange={handleChange} />;
};
