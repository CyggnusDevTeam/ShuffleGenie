import Swal from 'sweetalert2';
import populateCollectionData from '../../Utils/populateCollectionData';

const reloadApp = (logOut, navigate, route) => {
  if (logOut) localStorage.clear();
  navigate(route);
  window.location.reload();
};

const handleSync = async (
  setBtnDisabled,
  setLCT,
  lastCalledTime,
  setCardsNum,
  setCollection,
  setIsLoading,
  username,
  navigate
) => {
  setBtnDisabled(true);
  try {
    await populateCollectionData(
      username,
      setCollection,
      setCardsNum,
      setIsLoading,
      lastCalledTime
    );
    Swal.fire({
      title: 'Synchronized with success!',
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
  } catch (error) {
    console.error(error);
  }
  setLCT(Date.now());
  setTimeout(() => {
    setBtnDisabled(false);
  }, 30000);
};

const confirmAlert = (navigate) => {
  Swal.fire({
    title: 'LogOut',
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

export { handleSync, confirmAlert };
