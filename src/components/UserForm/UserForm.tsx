import React, { useState } from 'react';

interface UserFormProps {
  onAddUser: (user: { name: string; email: string; role: string; isActive: boolean }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { name, email, role, isActive };
    onAddUser(newUser);
    setName('');
    setEmail('');
    setRole('user');
    setIsActive(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group mb-2'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='form-control'
          placeholder='Enter name'
          required
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control'
          placeholder='Enter email'
          required
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='role'>Role:</label>
        <select
          id='role'
          name='role'
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className='form-control'
        >
          <option value='user'>User</option>
          <option value='editor'>Editor</option>
          <option value='admin'>Admin</option>
        </select>
      </div>

      <div className='form-check mb-2'>
        <input
          type='checkbox'
          id='isActive'
          name='isActive'
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className='form-check-input'
        />
        <label htmlFor='isActive' className='form-check-label'>
          Active
        </label>
      </div>

      <button type='submit' className='btn btn-primary'>
        Add User
      </button>
    </form>
  );
};

export default UserForm;
