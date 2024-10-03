import React from 'react';

interface UserItemProps {
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

const UserItem: React.FC<UserItemProps> = ({ name, email, role, isActive }) => {
  return (
    <div className="border p-2 mb-2">
      <h5>{name}</h5>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default UserItem;
