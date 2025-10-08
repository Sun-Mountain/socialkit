import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import { TextField } from "@/components/_ui/TextField";
import { Button } from "@/components/_ui/Button";

export const ProfileForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: {
    preventDefault: () => void; currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    console.log('Submitting profile form...');
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        placeholder="Enter your first name"
        type="text"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="lastName"
        placeholder="Enter your last name"
        type="text"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Username"
        name="username"
        placeholder="Enter your username"
        type="text"
        fullWidth
        margin="normal"
      />
      <TextField
        label="About Me"
        name="bio"
        placeholder="Tell us about yourself"
        type="text"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" defaultDisabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Profile'}
      </Button>
    </form>
  );
}