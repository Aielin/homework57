import UserForm from '../../components/UserForm/UserForm.tsx';


const UserManagementContainer: React.FC = () => {
    return (
      <div className='container mt-4'>
        <h1>User Management</h1>
        <div className='row'>
          <div className='col-md-4'>
            <UserForm />
          </div>
          <div className='col-md-8'>
            <h2>User List</h2>
            {/* Здесь будет список пользователей */}
          </div>
        </div>
      </div>
    );
};

export default UserManagementContainer;
