import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';

function SyncPage() {
  const { setUsername, setCollection } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChangeUser = (event) => {
    event.preventDefault();
    setCollection([]);
    const user = event.target.elements.username.value;
    localStorage.setItem('username', user);
    setUsername(user);
    navigate('/');
  };

  return (
    <form onSubmit={handleChangeUser}>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" id="username" min="2"/>
      </label>
      <button className="m-5" type="submit">
        Change user
      </button>
    </form>
  );
}

export default SyncPage;
