import AccountForm from "@/components/Forms/Account";
import { AccountLinks } from "@/components/Navigation/AccountLinks";

const AuthSignUpPage = () => {
  return (
    <>
      <div className="form-container">
        <h1>Sign Up</h1>
        <AccountForm signUpForm />
      </div>
      <AccountLinks showSignInLink />
    </>
  );
}

export default AuthSignUpPage;