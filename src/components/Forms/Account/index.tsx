'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/_ui/Button';
import { TextField } from '@/components/_ui/TextField';

interface AccountFormProps {
  signInForm?: boolean;
  signUpForm?: boolean;
}

const AccountForm: FC<AccountFormProps> = ({ signInForm, signUpForm }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
        fullWidth
        margin="normal"
        required
      />
      {signUpForm && (
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm your password"
          type="password"
          fullWidth
          margin="normal"
          required
        />
      )}
      <Button
        ariaLabel={signInForm ? "Sign In" : "Sign Up"}
        className="submit-button"
        defaultDisabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Loading...' : (signInForm ? 'Sign In' : 'Sign Up')}
      </Button>
    </form>
  );
}

export default AccountForm;