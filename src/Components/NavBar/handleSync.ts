import { SetStateAction, Dispatch } from 'react';
import Swal from 'sweetalert2';
import { TFunction } from 'i18next';
import populateCollectionData from '../../Utils/populateCollectionData';
import { API_ISSUE_REPORT } from '../../data/variables';

const reloadApp = (
  logOut: boolean,
  navigate: (path: string) => void,
  route: string
) => {
  if (logOut) {
    localStorage.removeItem('activeUser');
    localStorage.removeItem('collection');
  }
  navigate(route);
  window.location.reload();
};

const handleSync = async (
  setBtnDisabled: Dispatch<SetStateAction<boolean>>,
  setLCT: Dispatch<SetStateAction<number>>,
  lastCalledTime: number,
  setCardsNum: Dispatch<SetStateAction<number>>,
  setCollection: Dispatch<SetStateAction<any[]>>, // Replace 'any[]' with the actual type of 'setCollection' state
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  username: string,
  navigate: (path: string) => void,
  t: TFunction
) => {
  setBtnDisabled(true);
  try {
    await populateCollectionData(
      username,
      setCollection,
      setCardsNum,
      setIsLoading,
      lastCalledTime
    ).then(() => {
      Swal.fire({
        title: t('misc.apiMsgs.success.title'),
        icon: 'success',
        allowOutsideClick: true,
        allowEscapeKey: true,
        timer: 2000,
      }).then((result) => {
        if (result.isDismissed) {
          reloadApp(false, navigate, '/profile');
        }
        if (result.isConfirmed) {
          reloadApp(false, navigate, '/profile');
        }
      });
    });
  } catch (error) {
    Swal.fire({
      title: t('misc.apiMsgs.fail.title'),
      icon: 'error',
      text: t('misc.apiMsgs.fail.text'),
      html: t('misc.apiMsgs.fail.html', { issuesLink: API_ISSUE_REPORT }),
      allowOutsideClick: true,
      allowEscapeKey: true,
    });
    console.error(error);
  }
  setLCT(Date.now());
  setTimeout(() => {
    setBtnDisabled(false);
  }, 30000);
};

const confirmAlert = (navigate: (path: string) => void, t: TFunction) => {
  Swal.fire({
    title: t('nav.btnTitle.logout'),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    allowOutsideClick: true,
    allowEscapeKey: true,
  }).then((result) => {
    if (result.isConfirmed) {
      reloadApp(true, navigate, '/');
    }
  });
};

export { confirmAlert, handleSync, reloadApp };
