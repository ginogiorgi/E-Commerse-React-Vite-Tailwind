import { Layout } from "../../Components/Layout";
import { useState } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [changeForm, setChangeForm] = useState(true);
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  function onSubmit() {
    const accountListValue = JSON.parse(localStorage.getItem("account-list"));

    accountListValue.push({
      username: newUsername,
      email: newEmail,
      password: newPassword,
    });
    localStorage.setItem("account-list", JSON.stringify(accountListValue));
    setChangeForm(true);
  }

  function onLogin() {
    const loginInfo = {
      username: username,
      password: password,
    };
    const accountListValue = JSON.parse(localStorage.getItem("account-list"));
    const checkData = accountListValue?.filter(
      (account) =>
        account.username === loginInfo.username &&
        account.password === loginInfo.password
    );
    if (checkData.length > 0) {
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
          <div>
            <h2 className="text-3xl text-center">Login</h2>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="text"
                onInput={(event) => {
                  setUsername(event.target.value);
                }}
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
                onInput={(event) => {
                  setPassword(event.target.value);
                }}
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
              onClick={() => {
                onLogin();
              }}
            >
              Login
            </button>
            <div className="text-sm text-center my-4">
              <p>
                Don't have an account?
                <a
                  className="text-blue-400 font-medium hover:underline p-1"
                  href="#"
                  onClick={() => {
                    setChangeForm(false);
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center w-full h-full form-wrapper">
          <div>
            <h2 className="text-3xl text-center">Sign Up</h2>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="text"
                onInput={(event) => {
                  setNewUsername(event.target.value);
                }}
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
                onInput={(event) => {
                  setNewEmail(event.target.value);
                }}
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
                onInput={(event) => {
                  setNewPassword(event.target.value);
                }}
                className="w-80 h-10 px-1 bg-transparent border-none outline-none"
                required
              />
              <label className="absolute bottom-1/2 left-1 translate-y-1/2 pointer-events-none">
                Password
              </label>
            </div>
            <button
              className="relative w-full h-10 bg-blue-400 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20"
              onClick={() => {
                onSubmit();
              }}
            >
              Sign Up
            </button>
            <div className="text-sm text-center my-4">
              <p>
                Already have an account?
                <a
                  className="text-blue-400 font-medium hover:underline p-1"
                  href="#"
                  onClick={() => {
                    setChangeForm(true);
                  }}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
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

export { SignIn };
