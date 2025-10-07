import AccountForm from "@/components/Forms/Account";
import { AccountLinks } from "@/components/Navigation/AccountLinks";

const AuthSignInPage = () => {
  return (
    <>
      <div className="form-container">
        <h1>Sign In</h1>
        <AccountForm signInForm />
      </div>
      <AccountLinks showSignUpLink />
    </>
  );
}

export default AuthSignInPage;