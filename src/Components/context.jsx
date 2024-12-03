import React, { createContext, useState, useContext } from "react";

const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Aniket Pal", role: "Admin", status: "Active" },
  ]);
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  ]);

  const [permissions] = useState(["Read", "Write", "Delete"]);

  const addUser = (user) => setUsers((prev) => [...prev, user]);
  const updateUser = (updatedUser) =>
    setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  const deleteUser = (userId) =>
    setUsers((prev) => prev.filter((user) => user.id !== userId));

  const addRole = (role) => setRoles((prev) => [...prev, role]);
  const deleteRole = (roleId) =>
    setRoles((prev) => prev.filter((role) => role.id !== roleId));

  return (
    <RBACContext.Provider
      value={{
        users,
        roles,
        permissions,
        addUser,
        updateUser,
        deleteUser,
        addRole,
        deleteRole,
      }}
    >
      {children}
    </RBACContext.Provider>
  );
};

export const useRBAC = () => useContext(RBACContext);
