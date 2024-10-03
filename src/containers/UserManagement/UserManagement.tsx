import UserForm from '../../components/UserForm/UserForm.tsx';
import UserList from '../../components/Users/UserList.tsx';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

const UserManagementContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUserHandler = (user: { name: string; email: string; role: string; isActive: boolean }) => {
    const newUser = { ...user, id: users.length + 1 };
    setUsers([...users, newUser]);
    console.log('Updated Users:', users);
  };

  return (
      <>
        <main className="container mt-4">
          <h1>User Management</h1>
          <div className="row">
            <div className="col-md-4">
              <UserForm onAddUser={addUserHandler} />
            </div>
            <div className="col-md-8">
              <h2>User List</h2>
              <UserList users={users} />
            </div>
          </div>
        </main>
      </>
    );
};

export default UserManagementContainer;
