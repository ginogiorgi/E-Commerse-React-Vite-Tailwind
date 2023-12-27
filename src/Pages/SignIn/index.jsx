import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useState, useContext, useRef } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "../../styles/SignIn.css";

function SignIn() {
  const [changeForm, setChangeForm] = useState(true);
  const [errorInfo, setErrorInfo] = useState("");
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const form = useRef(null);
  const accountListValue = JSON.parse(localStorage.getItem("account-list"));

  function onSubmit(event) {
    const formData = new FormData(form.current);
    const newAccount = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      orders: [],
      id: accountListValue ? accountListValue.length : 0,
    };
    const checkDataUsername = accountListValue?.filter(
      (account) => account.username === newAccount.username
    );
    const checkDataEmail = accountListValue?.filter(
      (account) => account.email === newAccount.email
    );

    if (checkDataUsername.length > 0) {
      event.preventDefault();
      setErrorInfo("Username already in use");
    } else if (checkDataEmail.length > 0) {
      event.preventDefault();
      setErrorInfo("Email already in use");
    } else {
      setErrorInfo("");
      accountListValue.push(newAccount);
      localStorage.setItem("account-list", JSON.stringify(accountListValue));
      setChangeForm(true);
    }
  }

  function onLogin(event) {
    const formData = new FormData(form.current);
    const loginInfo = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    const checkData = accountListValue?.filter(
      (account) => account.username === loginInfo.username
    );
    if (checkData.length === 0) {
      event.preventDefault();
      setErrorInfo("Username don't exist");
    } else if (checkData[0].password !== loginInfo.password) {
      event.preventDefault();
      setErrorInfo("Wrong password");
    } else {
      localStorage.setItem("sign-out", JSON.stringify(false));
      localStorage.setItem("account", JSON.stringify(checkData[0]));
      context.setSignOut(false);
      navigate("/");
    }
  }

  function renderView() {
    if (changeForm) {
      return (
        <div className="flex justify-center items-center w-full h-full form-wrapper">
          <form ref={form}>
            <h2 className="text-3xl text-center">Login</h2>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="text"
                name="username"
                className="w-80 h-10 px-1 bg-transparent outline-none"
                required
              />
              <label className="bottom-1/2 absolute left-1 translate-y-1/2 pointer-events-none">
                Username
              </label>
            </div>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="password"
                name="password"
                className="w-80 h-10 px-1 bg-transparent border-none outline-none"
                required
              />
              <label className="absolute bottom-1/2 left-1 translate-y-1/2 pointer-events-none">
                Password
              </label>
            </div>
            <div className="-mt-1 mb-4 ml-1"></div>
            <button
              className="relative w-full h-10 bg-blue-400 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20"
              onClick={(event) => {
                onLogin(event);
              }}
              type="submit"
            >
              Login
            </button>
            <div className="text-sm text-center my-4">
              <p>
                Don't have an account?
                <a
                  className="text-blue-400 font-medium hover:underline p-1"
                  onClick={() => {
                    setChangeForm(false);
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="text-sm text-center my-4 text-red-600">
              <p>{errorInfo}</p>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center w-full h-full form-wrapper">
          <form ref={form}>
            <h2 className="text-3xl text-center">Sign Up</h2>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="text"
                name="username"
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
                className="w-80 h-10 px-1 bg-transparent border-none outline-none"
                required
              />
              <label className="absolute bottom-1/2 left-1 translate-y-1/2 pointer-events-none">
                Password
              </label>
            </div>
            <button
              className="relative w-full h-10 bg-blue-400 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20"
              onClick={(event) => {
                onSubmit(event);
              }}
            >
              Sign Up
            </button>
            <div className="text-sm text-center my-4">
              <p>
                Already have an account?
                <a
                  className="text-blue-400 font-medium hover:underline p-1"
                  onClick={() => {
                    setChangeForm(true);
                  }}
                >
                  Sign In
                </a>
              </p>
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
    <div className="h-full w-full flex items-center min-h-[100vh] justify-between">
      <div className="font-semibold text-6xl text-blue-400 ml-44 text-center bg-white rounded-full h-[400px] w-[400px] shadow-myGray/40 shadow-2xl">
        <ShoppingBagIcon className="h-[218px] text-blue-400 block mr-auto ml-auto mt-10 w-[200]" />
        <p>Shopify</p>
      </div>
      <div className="relative w-[400px] h-[500px] shadow-lg shadow-myGray/40 rounded-lg p-10 mr-44">
        {renderView()}
      </div>
    </div>
  );
}

export { SignIn };
