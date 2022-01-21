import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Leonardo' },
    };

    dispatch(action);

    const lastSearch = localStorage.getItem('lastSearch');
    const lastPath = localStorage.getItem('lastPath') || lastSearch;

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className='container m-5'>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
