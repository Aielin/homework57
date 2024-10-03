import React from 'react';

interface UserItemProps {
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

const UserItem: React.FC<UserItemProps> = ({ name, email, role, isActive }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">Role: {role}</p>
        <p className="card-text">
          Status: <span className={isActive ? 'text-success' : 'text-danger'}>
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </p>
      </div>
    </div>
  );
};


export default UserItem;
