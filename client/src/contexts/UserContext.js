import { createContext, useState } from "react";
import { apiUrl } from "./constants";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // State
  const [editUser, setEditUser] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  // logic
  const updateUser = async (updatedUser) => {
    console.log(updatedUser);
    try {
      const response = await axios.put(`${apiUrl}/user/update`, updatedUser);
      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "server error" };
    }
  };

  // User provider data
  const userContextData = {
    editUser,
    setEditUser,
    editAccount,
    setEditAccount,
    updateUser,
  };
  // Provider
  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
