import React from "react";
import { RBACProvider } from "./Components/context.jsx";
import UserManagement from "./Components/usermanagement.jsx";
import RoleManagement from "./Components/rolemanagement.jsx";

function App() {
  return (
    <RBACProvider>
      <div className="App">
        <h1>RBAC Admin Dashboard</h1>
        <UserManagement />
        <RoleManagement />
      </div>
    </RBACProvider>
  );
}

export default App;
