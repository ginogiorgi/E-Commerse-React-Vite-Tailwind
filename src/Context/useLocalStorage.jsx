import React from "react";

function useLocalStorage() {
  React.useEffect(() => {
    try {
      const localStorageAccount = localStorage.getItem("account");
      const localStorageSignOut = localStorage.getItem("sign-out");
      let parsedAccount;
      let parsedSignOut;

      if (!localStorageAccount) {
        localStorage.setItem("account", JSON.stringify([]));
        parsedAccount = {};
      } else {
        parsedAccount = JSON.parse(localStorageAccount);
      }
      if (!localStorageSignOut) {
        localStorage.setItem("sign-out", JSON.stringify(true));
        parsedSignOut = {};
      } else {
        parsedSignOut = JSON.parse(localStorageSignOut);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
}

export { useLocalStorage };
