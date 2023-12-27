import { Layout } from "../../Components/Layout";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import "../../styles/SignIn.css";

function MyAccount() {
  const [changeForm, setChangeForm] = useState(true);
  const [errorInfo, setErrorInfo] = useState("");
  const accountInfo = JSON.parse(localStorage.getItem("account"));
  const accountListValue = JSON.parse(localStorage.getItem("account-list"));
  const form = useRef(null);

  function changeAccount(event) {
    const formData = new FormData(form.current);
    const newAccount = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      orders: JSON.parse(localStorage.getItem("account"))?.orders,
      id: JSON.parse(localStorage.getItem("account"))?.id,
    };
    const checkDataUsername = accountListValue?.filter(
      (account) => account.username === newAccount.username
    );
    const checkDataEmail = accountListValue?.filter(
      (account) => account.email === newAccount.email
    );

    if (
      checkDataUsername.length > 0 &&
      accountInfo.username !== newAccount.username
    ) {
      event.preventDefault();
      setErrorInfo("Username already in use");
    } else if (
      checkDataEmail.length > 0 &&
      accountInfo.email !== newAccount.email
    ) {
      event.preventDefault();
      setErrorInfo("Email already in use");
    } else {
      accountListValue.splice(accountInfo.id, 1, newAccount);
      localStorage.setItem("account", JSON.stringify(newAccount));
      localStorage.setItem("account-list", JSON.stringify(accountListValue));
    }
  }

  function renderView() {
    if (changeForm) {
      return (
        <div className="justify-center items-center w-full h-full">
          <h2 className="text-3xl text-center mb-20">My Account</h2>
          <div className="flex my-8 justify-between">
            <span className="font-medium text-lg">Username:</span>
            <span className="text-base font-light">
              {JSON.parse(localStorage.getItem("account"))?.username}
            </span>
          </div>
          <div className="flex my-8 justify-between">
            <span className="font-medium text-lg">Password: </span>
            <span className="text-base font-light" type="password">
              •••••••
            </span>
          </div>
          <div className="flex my-8 justify-between">
            <span className="font-medium text-lg">Email: </span>
            <span className="text-base font-light">
              {JSON.parse(localStorage.getItem("account"))?.email}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <NavLink
              to="/"
              onClick={() => {
                localStorage.setItem("sign-out", JSON.stringify(true));
                context.setSignOut(true);
              }}
            >
              <button className="bg-red-600 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-red-600/20 h-12 w-36">
                Sign out
              </button>
            </NavLink>
            <button
              className="bg-blue-400 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20 h-12 w-36"
              onClick={() => {
                setChangeForm(false);
              }}
            >
              Edit account
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center w-full h-full">
          <form ref={form}>
            <h2 className="text-3xl text-center mb-14">Edit account</h2>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="text"
                name="username"
                defaultValue={accountInfo.username}
                className="w-80 h-10 px-1 bg-transparent outline-none"
                required
              />
              <label className="bottom-1/2 absolute left-1 translate-y-1/2 pointer-events-none">
                Username
              </label>
            </div>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="email"
                name="email"
                defaultValue={accountInfo.email}
                className="w-80 h-10 px-1 bg-transparent outline-none"
                required
              />
              <label className="bottom-1/2 absolute left-1 translate-y-1/2 pointer-events-none">
                Email
              </label>
            </div>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="password"
                name="password"
                defaultValue={accountInfo.password}
                className="w-80 h-10 px-1 bg-transparent border-none outline-none"
                required
              />
              <label className="absolute bottom-1/2 left-1 translate-y-1/2 pointer-events-none">
                Password
              </label>
            </div>
            <div className="flex w-full justify-between">
              <button
                className="bg-blue-400 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20 h-12 w-36"
                onClick={() => {
                  setChangeForm(true);
                }}
              >
                Back
              </button>
              <button
                className="bg-green-600 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20 h-12 w-36"
                onClick={(event) => {
                  changeAccount(event);
                }}
                type="submit"
              >
                Accept
              </button>
            </div>
            <div className="text-sm text-center my-4 text-red-600">
              <p>{errorInfo}</p>
            </div>
          </form>
        </div>
      );
    }
  }
  return (
    <Layout>
      <div className="relative w-[400px] h-[500px] shadow-lg shadow-myGray/40 rounded-lg p-10">
        {renderView()}
      </div>
    </Layout>
  );
}

export { MyAccount };
