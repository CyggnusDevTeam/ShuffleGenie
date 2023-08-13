import React, { useContext, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import AppContext from '../../Context/AppContext';
import { backToTopAction } from '../../Utils/useBackToTop';
import populateCollectionData from '../../Utils/populateCollectionData';
import { reloadApp } from '../NavBar/handleSync';
import { API_ISSUE_REPORT } from '../../data/variables';

const SyncPage: React.FC = () => {
  const { t } = useTranslation();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const {
    lastCalledTime,
    setCardsNum,
    setCollection,
    setIsLoading,
    setLCT,
    setNeedSync,
    setUsername,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleChangeUser = async (user: string) => {
    localStorage.setItem('activeUser', user);
    try {
      await populateCollectionData(
        user,
        setCollection,
        setCardsNum,
        setIsLoading,
        lastCalledTime
      );
    } catch (error) {
      setIsLoading(true);
      Swal.fire({
        title: t('misc.apiMsgs.fail.title'),
        icon: 'error',
        text: t('misc.apiMsgs.fail.text'),
        html: t('misc.apiMsgs.fail.html', { issuesLink: API_ISSUE_REPORT }),
        allowOutsideClick: true,
        allowEscapeKey: true,
      }).then((result) => {
        if (result.isDismissed || result.isConfirmed) {
          reloadApp(true, navigate, '/');
        }
      });
      console.error(error);
    }
    setUsername(user);
    setLCT(Date.now());
    setNeedSync(false);
    navigate('/profile');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const userInputElement = event.currentTarget.elements.namedItem(
    'username'
  ) as HTMLInputElement;
  
  let userFromEvent = userInputElement.value;
  if (!userFromEvent) userFromEvent = 'DefaultPool2';

  const formattedUser = userFromEvent.replace(/\s+/g, '-');

  backToTopAction();
  handleChangeUser(formattedUser);
};

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center space-y-10'>
      <div className='flex flex-col w-auto'>
        {isInputFocused && (
          <span className='text-blue-gray-200 text-sm pb-4'>
            {t('misc.syncForm.inputDesc')}
          </span>
        )}
        <Input
          variant='standard'
          label={t('misc.syncForm.label')}
          aria-label={t('misc.syncForm.aria-label')}
          color='white'
          id='username'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      <button className='defaultButton' type='submit'>
        {t('misc.syncForm.syncBtn')}
      </button>
    </form>
  );
};

export default SyncPage;
