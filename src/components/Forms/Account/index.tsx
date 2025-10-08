'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

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

    let response;

    if (signInForm) {
      response = await signIn("credentials", {
        email: values.email as string,
        password: values.password as string,
        callbackUrl: `${window.location.origin}/dashboard`
      });

      if (response?.error) {
        console.log("Failed to sign in:", response.error);
      }
    }

    if (signUpForm) {
      if (values.password !== values.confirmPassword) {
        console.log("Passwords do not match");
        setIsLoading(false);
        return;
      }
      response = await fetch ('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // setError(errorData.message || 'An error occurred. Please try again.');
        console.log('Error:', errorData);
        // console.log({error})
        setIsLoading(false);
        return;
      } else {
        router.push('/sign-in');
      }
    }
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