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
    navigate('/deckPage');
  };

  return (
    <form onSubmit={handleChangeUser} className="flex flex-col items-center">
      <label htmlFor="username" className="mb-2 text-gray-text">
        Username:
        <input type="text" name="username" id="username" min="2" className="border border-gray-300 px-2 py-1 rounded-md"/>
      </label>
      <button className="px-10 py-3 text-md font-medium max-w-screen w-1/2 text-white bg-violet-1 rounded-3xl hover:bg-violet-2" type="submit" >
        Change user
      </button>
    </form>
  );
}

export default SyncPage;
