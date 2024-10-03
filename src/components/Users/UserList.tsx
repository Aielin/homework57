import React from 'react';
import UserItem from './UserItem';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          email={user.email}
          role={user.role}
          isActive={user.isActive}
        />
      ))}
    </div>
  );
};

export default UserList;
