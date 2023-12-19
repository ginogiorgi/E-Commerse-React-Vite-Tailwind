import { Layout } from "../../Components/Layout";
import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [changeForm, setChangeForm] = useState(true);

  function renderView() {
    if (changeForm) {
      return (
        <div className="flex justify-center items-center w-full h-full form-wrapper">
          <form action="">
            <h2 className="text-3xl text-center">Login</h2>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="text"
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
              type="submit"
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
          </form>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center w-full h-full form-wrapper">
          <form action="">
            <h2 className="text-3xl text-center">Sign Up</h2>
            <div className="relative my-8 border-b-2 input-group">
              <input
                type="text"
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
                className="w-80 h-10 px-1 bg-transparent border-none outline-none"
                required
              />
              <label className="absolute bottom-1/2 left-1 translate-y-1/2 pointer-events-none">
                Password
              </label>
            </div>
            <button
              className="relative w-full h-10 bg-blue-400 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20"
              type="submit"
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

export { SignIn };
