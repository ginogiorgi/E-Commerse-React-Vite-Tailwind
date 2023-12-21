import { Layout } from "../../Components/Layout";
import { NavLink } from "react-router-dom";

function MyAccount() {
  return (
    <Layout>
      <div className="relative w-[400px] h-[500px] shadow-lg shadow-myGray/40 rounded-lg p-10">
        <div className="flex justify-center items-center w-full h-full">
          <div>
            <h2 className="text-3xl text-center">My Account</h2>
            <div className="items-center w-96">
              <p className="flex justify-between items-center gap-2 mt-1">
                <span className="font-light">Username:</span>
                <span className="font-light">
                  {JSON.parse(localStorage.getItem("account"))?.username}
                </span>
              </p>
              <p className="flex justify-between items-center gap-2 mt-1">
                <span className="font-light">Password: </span>
                <span className="font-light" type="password">
                  ••••••••••
                </span>
              </p>
              <p className="flex justify-between items-center mt-1 gap-2">
                <span className="font-light">Email: </span>
                <span className="font-light">
                  {JSON.parse(localStorage.getItem("account"))?.email}
                </span>
              </p>
            </div>
            <div className="-mt-1 mb-4 ml-1"></div>
            <NavLink
              to="/sign-in"
              onClick={() => {
                localStorage.setItem("sign-out", JSON.stringify(true));
                context.setSignOut(true);
              }}
            >
              <button className="relative w-full h-10 bg-blue-400 text-black font-medium cursor-pointer rounded-lg shadow-lg shadow-blue-400/20">
                Sign out
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { MyAccount };
