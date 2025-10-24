"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  return (
    <header
      className="w-full p-8 flex justify-between 
        lg:justify-around shadow-lg bg-gray-50"
    >
      {user?.firstName ? (
        <h1 className="text-md lg:text-2xl font-extrabold font-nunito italic">
          {user?.firstName}
          {`'s`} WorkSpace
        </h1>
      ) : (
        <h2 className="text-xl lg:text-2xl font-nunito font-light underline">
          haven{`'t`} signedin yet! {`->`}
        </h2>
      )}

      <div></div>

      {/* Signin | user's profile */}
      <div>
        <SignedOut>
          <span
            className="text-2xl border p-2 px-4 hover:cursor-pointer hover:bg-gray-100 
            transition-opacity rounded-full"
          >
            <SignInButton />
          </span>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
