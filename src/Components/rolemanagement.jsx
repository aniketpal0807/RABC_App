import React, { useState } from "react";
import { useRBAC } from "./context.jsx";

function RoleManagement() {
  const { roles, permissions, addRole, deleteRole } = useRBAC();
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const handleAddRole = () => {
    addRole({ ...newRole, id: Date.now() });
    setNewRole({ name: "", permissions: [] });
  };

  const togglePermission = (permission) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission],
    }));
  };

  return (
    <div>
        <div className="sep"></div>
      <h2>Role Management</h2>
      <ul>
        {roles.map((role) => (
        <div className="addrole">
          <li  key={role.id}>
            {role.name} - {role.permissions.join(", ")}
          </li>
          <li>
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
          </div>
        ))}
      </ul>
      <div>
        <h3>Add New Role</h3>
        <div className="addnewrole">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <div className="permission">
            <h4>Permission :  </h4>
          {permissions.map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                checked={newRole.permissions.includes(permission)}
                onChange={() => togglePermission(permission)}
              />
              {permission}
            </label>
          ))}
        </div>
          <button onClick={handleAddRole}>Add Role</button>
        </div>
        
      </div>
    </div>
  );
}

export default RoleManagement;
