import React, { useState } from "react";
import { useRBAC } from "./context.jsx";

function UserManagement() {
  const { users, roles, addUser, updateUser, deleteUser } = useRBAC();
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

  const handleAddUser = () => {
    addUser({ ...newUser, id: Date.now() });
    setNewUser({ name: "", role: "", status: "Active" });
  };


  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <div className="action-btn">
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => updateUser(user.id)}>Update</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add New User</h3>
      <div className="adduser">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
}

export default UserManagement;
