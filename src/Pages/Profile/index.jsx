import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import Spinner from '../../Components/Spinner';
import Footer from '../../Components/Footer';

function clearStorage(navigate) {
  localStorage.clear();
  navigate('/');
  window.location.reload();
}

function confirmAlert(navigate) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your collection has been deleted.',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(() => {
        clearStorage(navigate);
      });
    }
  });
}

function Profile() {
  const { cardsNum, collection, isLoading, username } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <section className='bg-gray-2'>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {collection && (
              <div className='h-96 flex items-start justify-center'>
                <p className='text-gray-text'>{`${username}, thats your collection, you have ${cardsNum} cards!`}</p>
                <button
                  type='button'
                  onClick={() => {
                    confirmAlert(navigate);
                  }}
                  className='defaultButton'
                >
                  Clear you storage
                </button>
              </div>
            )}
            <div className='flex flex-wrap justify-center mx-auto px-20'>
              {collection &&
                collection.map((card) => (
                  <Card
                    key={card.name}
                    cardName={card.name}
                    cardImg={card.imgUrl}
                  />
                ))}
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Profile;
